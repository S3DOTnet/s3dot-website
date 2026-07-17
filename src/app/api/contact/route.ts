import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const SITE_URL = "https://s3dot.com";
const CONTACT_URL = `${SITE_URL}/contact`;
const MAX_REQUEST_BYTES = 32 * 1024;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 3;

const INDUSTRIES = [
  "建設業",
  "製造業",
  "サービス業",
  "不動産業",
  "小売業",
  "飲食業",
  "医療・介護",
  "IT・Web",
  "その他",
] as const;

const CONSULTATION_TOPICS = [
  "AI導入について",
  "AI事務員について",
  "ホームページ制作について",
  "LINE連携について",
  "業務効率化について",
  "自動化システムについて",
  "その他",
] as const;

/* Vercel WAF導入までの補助的な制限。サーバーレス全体では共有されない。 */
const rateLimitEntries = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  for (const [key, entry] of rateLimitEntries) {
    if (now > entry.resetAt) rateLimitEntries.delete(key);
  }

  const entry = rateLimitEntries.get(ip);
  if (!entry) {
    rateLimitEntries.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

const requiredText = (label: string, max: number) =>
  z.string().trim().min(1, `${label}を入力してください`).max(max);

const optionalText = (max: number) => z.string().trim().max(max).optional();

const contactSchema = z
  .object({
    submissionId: z.string().uuid("送信情報を更新してから再試行してください"),
    name: requiredText("お名前", 100),
    company: optionalText(200),
    email: z
      .string()
      .trim()
      .min(1, "メールアドレスを入力してください")
      .max(200)
      .email("正しいメールアドレスを入力してください")
      .transform((value) => value.toLowerCase()),
    phone: optionalText(50),
    industry: z.enum(INDUSTRIES, { error: "業種を選択してください" }),
    consultationTopics: z
      .array(z.enum(CONSULTATION_TOPICS))
      .min(1, "ご相談内容を1つ以上選択してください")
      .max(CONSULTATION_TOPICS.length, "ご相談内容の選択数が多すぎます"),
    currentIssues: requiredText("現在お困りのこと", 3000),
    requests: optionalText(3000),
    consent: z.literal(true, { error: "個人情報の取り扱いに同意してください" }),
    honeypot: z.string().max(0).optional(),
  })
  .strict();

type ContactData = z.infer<typeof contactSchema>;

type ContactEnv = {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

function getContactEnv(): ContactEnv | null {
  const result = z
    .object({
      apiKey: z.string().trim().min(1),
      toEmail: z.string().trim().email(),
      fromEmail: z.string().trim().email(),
    })
    .safeParse({
      apiKey: process.env.RESEND_API_KEY,
      toEmail: process.env.CONTACT_TO_EMAIL ?? "contact@s3dot.net",
      fromEmail: process.env.CONTACT_FROM_EMAIL,
    });

  return result.success ? result.data : null;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailRow(label: string, value: string): string {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value || "—");

  return `<tr><td style="padding:10px 16px;background:#f7fafc;border-bottom:1px solid #e2e8f0;font-weight:600;white-space:nowrap;width:32%;font-size:14px;color:#4a5568">${safeLabel}</td><td style="padding:10px 16px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#2d3748;white-space:pre-wrap;word-break:break-word">${safeValue}</td></tr>`;
}

function adminHtml(data: ContactData, submittedAt: string): string {
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Hiragino Kaku Gothic ProN',Arial,sans-serif;background:#f0f4f8">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)">
  <div style="background:linear-gradient(135deg,#00C8FF,#7B5EFF);padding:28px 32px">
    <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">【S3DOT】無料相談フォームからのお問い合わせ</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:13px">${escapeHtml(submittedAt)}</p>
  </div>
  <table style="width:100%;border-collapse:collapse">
    ${emailRow("お名前", data.name)}
    ${emailRow("会社名・屋号", data.company ?? "")}
    ${emailRow("メールアドレス", data.email)}
    ${emailRow("電話番号", data.phone ?? "")}
    ${emailRow("業種", data.industry)}
    ${emailRow("ご相談内容", data.consultationTopics.join("、"))}
    ${emailRow("現在お困りのこと", data.currentIssues)}
    ${emailRow("ご希望・ご質問", data.requests ?? "")}
    ${emailRow("送信日時", submittedAt)}
    ${emailRow("送信元", CONTACT_URL)}
  </table>
  <div style="padding:16px 32px;background:#f7fafc;font-size:12px;color:#a0aec0;text-align:right">S3DOT 問い合わせフォーム自動通知</div>
</div></body></html>`;
}

function adminText(data: ContactData, submittedAt: string): string {
  return `【S3DOT】無料相談フォームからのお問い合わせ

お名前: ${data.name}
会社名・屋号: ${data.company || "—"}
メールアドレス: ${data.email}
電話番号: ${data.phone || "—"}
業種: ${data.industry}
ご相談内容: ${data.consultationTopics.join("、")}

現在お困りのこと:
${data.currentIssues}

ご希望・ご質問:
${data.requests || "—"}

送信日時: ${submittedAt}
送信元: ${CONTACT_URL}
`;
}

function replyHtml(data: ContactData): string {
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Hiragino Kaku Gothic ProN',Arial,sans-serif;background:#f0f4f8">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)">
  <div style="background:linear-gradient(135deg,#00C8FF,#7B5EFF);padding:28px 32px">
    <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">お問い合わせありがとうございます</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:13px">S3DOT | AIを、もっと身近にする会社</p>
  </div>
  <div style="padding:28px 32px">
    <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#2d3748">${escapeHtml(data.name)} 様</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#2d3748">この度はS3DOTへお問い合わせいただき、ありがとうございます。<br>以下の内容で無料相談を受け付けました。</p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#2d3748">内容を確認後、<strong>原則2営業日以内</strong>に担当者よりご連絡いたします。</p>
    <h2 style="font-size:13px;font-weight:700;color:#4a5568;margin:0 0 10px;text-transform:uppercase;letter-spacing:.06em">受付内容</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
      ${emailRow("お名前", data.name)}
      ${emailRow("会社名・屋号", data.company ?? "")}
      ${emailRow("業種", data.industry)}
      ${emailRow("ご相談内容", data.consultationTopics.join("、"))}
      ${emailRow("現在お困りのこと", data.currentIssues)}
      ${data.requests ? emailRow("ご希望・ご質問", data.requests) : ""}
    </table>
    <div style="background:#f0f9ff;border-left:4px solid #00C8FF;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:8px">
      <p style="margin:0;font-size:14px;line-height:1.7;color:#2d3748">お急ぎの場合は、公式LINEからもお気軽にお問い合わせください。<br>
      <a href="${SITE_URL}" style="color:#00C8FF;font-weight:600;text-decoration:none">${SITE_URL}</a></p>
    </div>
  </div>
  <div style="padding:18px 32px;background:#f7fafc;text-align:center">
    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#2d3748">S3DOT</p>
    <p style="margin:0 0 4px;font-size:12px;color:#a0aec0">AIを、もっと身近にする会社です。</p>
    <a href="${SITE_URL}" style="font-size:12px;color:#00C8FF;text-decoration:none">${SITE_URL}</a>
  </div>
</div></body></html>`;
}

function replyText(data: ContactData): string {
  return `${data.name} 様

この度はS3DOTへお問い合わせいただき、ありがとうございます。
以下の内容で無料相談を受け付けました。

─────────────────────────
受付内容
─────────────────────────
お名前: ${data.name}
会社名・屋号: ${data.company || "—"}
業種: ${data.industry}
ご相談内容: ${data.consultationTopics.join("、")}

現在お困りのこと:
${data.currentIssues}
${data.requests ? `\nご希望・ご質問:\n${data.requests}` : ""}
─────────────────────────

内容を確認後、原則2営業日以内に担当者よりご連絡いたします。

お急ぎの場合は、公式LINEからもお気軽にお問い合わせください。

S3DOT
AIを、もっと身近にする会社です。
${SITE_URL}
`;
}

function jsonError(error: string, code: string, status: number, headers?: HeadersInit) {
  return Response.json({ success: false, error, code }, { status, headers });
}

function isAllowedOrigin(origin: string | null): boolean {
  if (origin === SITE_URL) return true;
  if (process.env.NODE_ENV === "production") return false;
  if (!origin) return true;

  try {
    const url = new URL(origin);
    return (
      url.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
    );
  } catch {
    return false;
  }
}

function getClientIp(request: NextRequest): string {
  const forwardedFor =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for");

  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function logContactError(type: string, submissionId: string): void {
  console.error("[contact]", { type, submissionId });
}

function logContactWarning(type: string, submissionId: string): void {
  console.warn("[contact]", { type, submissionId });
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request.headers.get("origin"))) {
    return jsonError(
      "このページから送信してください。問題が続く場合は、ページを再読み込みしてください。",
      "ORIGIN_NOT_ALLOWED",
      403
    );
  }

  const contentType = request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if (contentType !== "application/json") {
    return jsonError(
      "送信形式を確認できませんでした。ページを再読み込みしてお試しください。",
      "UNSUPPORTED_MEDIA_TYPE",
      415
    );
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return jsonError(
      "入力内容が長すぎます。内容を短くしてからお試しください。",
      "PAYLOAD_TOO_LARGE",
      413
    );
  }

  if (!checkRateLimit(getClientIp(request))) {
    return jsonError(
      "短時間に複数回の送信がありました。1分ほど待ってからお試しください。",
      "RATE_LIMIT",
      429,
      { "Retry-After": "60" }
    );
  }

  let bodyText: string;
  try {
    bodyText = await request.text();
  } catch {
    return jsonError(
      "送信内容を読み取れませんでした。ページを再読み込みしてお試しください。",
      "BAD_REQUEST",
      400
    );
  }

  if (new TextEncoder().encode(bodyText).byteLength > MAX_REQUEST_BYTES) {
    return jsonError(
      "入力内容が長すぎます。内容を短くしてからお試しください。",
      "PAYLOAD_TOO_LARGE",
      413
    );
  }

  let raw: unknown;
  try {
    raw = JSON.parse(bodyText);
  } catch {
    return jsonError(
      "送信内容を確認できませんでした。ページを再読み込みしてお試しください。",
      "BAD_REQUEST",
      400
    );
  }

  if (
    typeof raw === "object" &&
    raw !== null &&
    !Array.isArray(raw) &&
    typeof Reflect.get(raw, "honeypot") === "string" &&
    Reflect.get(raw, "honeypot").trim().length > 0
  ) {
    return Response.json({ success: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return Response.json(
      {
        success: false,
        error: "入力内容を確認してください。",
        code: "VALIDATION_ERROR",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const env = getContactEnv();
  if (!env) {
    logContactError("configuration_error", data.submissionId);
    return jsonError(
      "現在お問い合わせを送信できません。時間をおいて再試行するか、メールでご連絡ください。",
      "SERVICE_UNAVAILABLE",
      503
    );
  }

  const submittedAt = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const resend = new Resend(env.apiKey);

  try {
    const adminResult = await resend.emails.send(
      {
        from: `S3DOT お問い合わせ <${env.fromEmail}>`,
        to: [env.toEmail],
        replyTo: data.email,
        subject: "【S3DOT】無料相談フォームからのお問い合わせ",
        html: adminHtml(data, submittedAt),
        text: adminText(data, submittedAt),
      },
      { idempotencyKey: `contact-admin/${data.submissionId}` }
    );

    if (adminResult.error) {
      logContactError("admin_email_failed", data.submissionId);
      return jsonError(
        "お問い合わせを送信できませんでした。時間をおいて再試行してください。",
        "SEND_FAILED",
        502
      );
    }
  } catch {
    logContactError("admin_email_failed", data.submissionId);
    return jsonError(
      "お問い合わせを送信できませんでした。時間をおいて再試行してください。",
      "SEND_FAILED",
      502
    );
  }

  try {
    const replyResult = await resend.emails.send(
      {
        from: `S3DOT <${env.fromEmail}>`,
        to: [data.email],
        subject: "【S3DOT】お問い合わせありがとうございます",
        html: replyHtml(data),
        text: replyText(data),
      },
      { idempotencyKey: `contact-reply/${data.submissionId}` }
    );

    if (replyResult.error) {
      logContactWarning("reply_email_failed", data.submissionId);
      return Response.json({
        success: true,
        code: "ACCEPTED_REPLY_FAILED",
        autoReplySent: false,
      });
    }
  } catch {
    logContactWarning("reply_email_failed", data.submissionId);
    return Response.json({
      success: true,
      code: "ACCEPTED_REPLY_FAILED",
      autoReplySent: false,
    });
  }

  return Response.json({ success: true, code: "ACCEPTED", autoReplySent: true });
}
