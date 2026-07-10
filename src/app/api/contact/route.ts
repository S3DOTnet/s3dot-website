import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

/* ── Rate limiting (in-memory, best-effort on serverless) ── */
const rl = new Map<string, { count: number; resetAt: number }>();
function checkRate(ip: string): boolean {
  const now = Date.now();
  const win = 60_000; // 1 minute window
  const max = 3;      // 3 requests per window
  const e = rl.get(ip);
  if (!e || now > e.resetAt) { rl.set(ip, { count: 1, resetAt: now + win }); return true; }
  if (e.count >= max) return false;
  e.count++;
  return true;
}

/* ── Zod schema ── */
const INDUSTRIES = ["建設業", "製造業", "サービス業", "不動産業", "小売業", "飲食業", "医療・介護", "IT・Web", "その他"] as const;

const schema = z.object({
  name:               z.string().min(1, "お名前を入力してください").max(100),
  company:            z.string().max(200).optional(),
  email:              z.string().min(1, "メールアドレスを入力してください").email("正しいメールアドレスを入力してください").max(200),
  phone:              z.string().max(50).optional(),
  industry:           z.enum(INDUSTRIES),
  consultationTopics: z.array(z.string().min(1)).min(1, "ご相談内容を1つ以上選択してください"),
  currentIssues:      z.string().min(1, "現在お困りのことを入力してください").max(3000),
  requests:           z.string().max(3000).optional(),
  consent:            z.literal(true),
  honeypot:           z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

/* ── 環境変数チェック ── */
function checkEnv(): { ok: true; apiKey: string; toEmail: string; fromEmail: string } | { ok: false; message: string; missing: string[] } {
  const missing: string[] = [];
  const apiKey    = process.env.RESEND_API_KEY;
  const toEmail   = process.env.CONTACT_TO_EMAIL   ?? "contact@s3dot.net";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey)    missing.push("RESEND_API_KEY");
  if (!fromEmail) missing.push("CONTACT_FROM_EMAIL");

  if (missing.length > 0) {
    console.error("[contact] Missing environment variables:", missing.join(", "));
    return {
      ok: false,
      message: `サーバーの設定が未完了です。以下の環境変数が設定されていません: ${missing.join(", ")}。Vercelの環境変数設定を確認してください。`,
      missing,
    };
  }

  return { ok: true, apiKey: apiKey!, toEmail, fromEmail: fromEmail! };
}

/* ── HTML email builders ── */
const row = (label: string, value: string) =>
  `<tr><td style="padding:10px 16px;background:#f7fafc;border-bottom:1px solid #e2e8f0;font-weight:600;white-space:nowrap;width:32%;font-size:14px;color:#4a5568">${label}</td><td style="padding:10px 16px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#2d3748;white-space:pre-wrap;word-break:break-word">${value || "—"}</td></tr>`;

function adminHtml(d: FormData, submittedAt: string, sourceUrl: string): string {
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Hiragino Kaku Gothic ProN',Arial,sans-serif;background:#f0f4f8">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)">
  <div style="background:linear-gradient(135deg,#00C8FF,#7B5EFF);padding:28px 32px">
    <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">【S3DOT】無料相談フォームからのお問い合わせ</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:13px">${submittedAt}</p>
  </div>
  <table style="width:100%;border-collapse:collapse">
    ${row("お名前", d.name)}
    ${row("会社名・屋号", d.company ?? "")}
    ${row("メールアドレス", `<a href="mailto:${d.email}" style="color:#00C8FF">${d.email}</a>`)}
    ${row("電話番号", d.phone ?? "")}
    ${row("業種", d.industry)}
    ${row("ご相談内容", d.consultationTopics.join("、"))}
    ${row("現在お困りのこと", d.currentIssues)}
    ${row("ご希望・ご質問", d.requests ?? "")}
    ${row("送信日時", submittedAt)}
    ${row("送信元URL", `<a href="${sourceUrl}" style="color:#00C8FF">${sourceUrl}</a>`)}
  </table>
  <div style="padding:16px 32px;background:#f7fafc;font-size:12px;color:#a0aec0;text-align:right">S3DOT 問い合わせフォーム自動通知</div>
</div></body></html>`;
}

function adminText(d: FormData, submittedAt: string, sourceUrl: string): string {
  return `【S3DOT】無料相談フォームからのお問い合わせ

お名前: ${d.name}
会社名・屋号: ${d.company || "—"}
メールアドレス: ${d.email}
電話番号: ${d.phone || "—"}
業種: ${d.industry}
ご相談内容: ${d.consultationTopics.join("、")}

現在お困りのこと:
${d.currentIssues}

ご希望・ご質問:
${d.requests || "—"}

送信日時: ${submittedAt}
送信元URL: ${sourceUrl}
`;
}

function replyHtml(d: FormData): string {
  const r = (label: string, value: string) =>
    `<tr><td style="padding:8px 14px;background:#f7fafc;border-bottom:1px solid #e2e8f0;font-weight:600;font-size:13px;color:#4a5568;white-space:nowrap;width:35%">${label}</td><td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;font-size:13px;color:#2d3748;white-space:pre-wrap;word-break:break-word">${value || "—"}</td></tr>`;
  return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:'Hiragino Kaku Gothic ProN',Arial,sans-serif;background:#f0f4f8">
<div style="max-width:640px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)">
  <div style="background:linear-gradient(135deg,#00C8FF,#7B5EFF);padding:28px 32px">
    <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">お問い合わせありがとうございます</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:13px">S3DOT | AIを、もっと身近にする会社</p>
  </div>
  <div style="padding:28px 32px">
    <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#2d3748">${d.name} 様</p>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.8;color:#2d3748">この度はS3DOTへお問い合わせいただき、ありがとうございます。<br>以下の内容で無料相談を受け付けました。</p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#2d3748">内容を確認後、<strong>通常1営業日以内</strong>に担当者よりご連絡いたします。</p>
    <h2 style="font-size:13px;font-weight:700;color:#4a5568;margin:0 0 10px;text-transform:uppercase;letter-spacing:.06em">受付内容</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
      ${r("お名前", d.name)}
      ${r("会社名・屋号", d.company ?? "")}
      ${r("業種", d.industry)}
      ${r("ご相談内容", d.consultationTopics.join("、"))}
      ${r("現在お困りのこと", d.currentIssues)}
      ${d.requests ? r("ご希望・ご質問", d.requests) : ""}
    </table>
    <div style="background:#f0f9ff;border-left:4px solid #00C8FF;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:8px">
      <p style="margin:0;font-size:14px;line-height:1.7;color:#2d3748">お急ぎの場合は、公式LINEからもお気軽にお問い合わせください。<br>
      <a href="https://www.s3dot.com" style="color:#00C8FF;font-weight:600;text-decoration:none">https://www.s3dot.com</a></p>
    </div>
  </div>
  <div style="padding:18px 32px;background:#f7fafc;text-align:center">
    <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#2d3748">S3DOT</p>
    <p style="margin:0 0 4px;font-size:12px;color:#a0aec0">AIを、もっと身近にする会社です。</p>
    <a href="https://www.s3dot.com" style="font-size:12px;color:#00C8FF;text-decoration:none">https://www.s3dot.com</a>
  </div>
</div></body></html>`;
}

function replyText(d: FormData): string {
  return `${d.name} 様

この度はS3DOTへお問い合わせいただき、ありがとうございます。
以下の内容で無料相談を受け付けました。

─────────────────────────
受付内容
─────────────────────────
お名前: ${d.name}
会社名・屋号: ${d.company || "—"}
業種: ${d.industry}
ご相談内容: ${d.consultationTopics.join("、")}

現在お困りのこと:
${d.currentIssues}
${d.requests ? `\nご希望・ご質問:\n${d.requests}` : ""}
─────────────────────────

内容を確認後、通常1営業日以内に担当者よりご連絡いたします。

お急ぎの場合は、公式LINEからもお気軽にお問い合わせください。

S3DOT
AIを、もっと身近にする会社です。
https://www.s3dot.com
`;
}

/* ── Route Handler ── */
export async function POST(request: NextRequest) {
  // ① 環境変数チェック（最優先 — Resend インスタンス生成前に行う）
  const env = checkEnv();
  if (!env.ok) {
    return Response.json({ error: env.message, code: "ENV_MISSING" }, { status: 503 });
  }

  // ② レートリミット
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRate(ip)) {
    return Response.json(
      { error: "リクエストが多すぎます。しばらくしてから再試行してください。", code: "RATE_LIMIT" },
      { status: 429 }
    );
  }

  // ③ リクエストボディ取得
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "リクエストの形式が不正です。", code: "BAD_REQUEST" }, { status: 400 });
  }

  // ④ Zod バリデーション
  const result = schema.safeParse(raw);
  if (!result.success) {
    return Response.json(
      { error: "入力内容を確認してください。", fieldErrors: result.error.flatten().fieldErrors, code: "VALIDATION_ERROR" },
      { status: 422 }
    );
  }

  const data = result.data;

  // ⑤ ハニーポット：ボットは黙って成功扱い
  if (data.honeypot && data.honeypot.length > 0) {
    return Response.json({ success: true });
  }

  // ⑥ Resend でメール送信（Resend インスタンスは try の中で生成）
  const submittedAt = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const sourceUrl   = request.headers.get("origin") ?? "https://www.s3dot.com";

  try {
    const resend = new Resend(env.apiKey);

    const [adminResult, replyResult] = await Promise.all([
      resend.emails.send({
        from:    `S3DOT お問い合わせ <${env.fromEmail}>`,
        to:      [env.toEmail],
        replyTo: data.email,
        subject: "【S3DOT】無料相談フォームからのお問い合わせ",
        html:    adminHtml(data, submittedAt, sourceUrl),
        text:    adminText(data, submittedAt, sourceUrl),
      }),
      resend.emails.send({
        from:    `S3DOT <${env.fromEmail}>`,
        to:      [data.email],
        subject: "【S3DOT】お問い合わせありがとうございます",
        html:    replyHtml(data),
        text:    replyText(data),
      }),
    ]);

    // Resend がエラーオブジェクトを返す場合（throwではなく返り値エラー）
    const adminErr = adminResult.error;
    const replyErr = replyResult.error;

    if (adminErr) {
      console.error("[contact] Resend admin email error:", adminErr);
      // 送信元ドメイン未認証など設定起因エラーを判定
      const isConfig = "statusCode" in adminErr && (adminErr as { statusCode?: number }).statusCode === 403;
      return Response.json(
        {
          error: isConfig
            ? `メール送信の設定が未完了です。Resendでドメイン「${env.fromEmail.split("@")[1]}」を認証してください。`
            : "管理者へのメール送信に失敗しました。設定を確認してください。",
          code: "RESEND_ADMIN_ERROR",
          detail: adminErr.message,
        },
        { status: 500 }
      );
    }

    if (replyErr) {
      // 自動返信の失敗は管理者には届いているので警告のみ
      console.warn("[contact] Resend reply email error:", replyErr);
    }

    return Response.json({ success: true });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact] Unexpected error:", message);

    // Resend API キーが無効な場合のメッセージ
    const isAuthError = message.toLowerCase().includes("api key") || message.toLowerCase().includes("unauthorized");
    return Response.json(
      {
        error: isAuthError
          ? "Resend APIキーが無効です。Vercelの環境変数 RESEND_API_KEY を確認してください。"
          : "メールの送信に失敗しました。時間をおいてもう一度お試しいただくか、contact@s3dot.net まで直接ご連絡ください。",
        code: isAuthError ? "INVALID_API_KEY" : "SEND_ERROR",
      },
      { status: 500 }
    );
  }
}
