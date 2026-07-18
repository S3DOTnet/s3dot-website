"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

/* ── 定数 ── */
const INDUSTRIES = ["建設業", "製造業", "サービス業", "不動産業", "小売業", "飲食業", "医療・介護", "IT・Web", "その他"] as const;

const TOPICS = [
  "AI導入について",
  "AI事務員について",
  "ホームページ制作について",
  "LINE連携について",
  "業務効率化について",
  "自動化システムについて",
  "その他",
] as const;

/* ── 型 ── */
type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  consultationTopics: string[];
  currentIssues: string;
  requests: string;
  consent: boolean;
  honeypot: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

type ApiResponse = {
  success?: boolean;
  code?: string;
  autoReplySent?: boolean;
  fieldErrors?: Record<string, string[] | undefined>;
};

const FORM_FIELD_KEYS: Array<keyof FormState> = [
  "name",
  "company",
  "email",
  "phone",
  "industry",
  "consultationTopics",
  "currentIssues",
  "requests",
  "consent",
  "honeypot",
];

const FORM_FIELD_ORDER: Array<Exclude<keyof FormState, "honeypot">> = [
  "name",
  "company",
  "email",
  "phone",
  "industry",
  "consultationTopics",
  "currentIssues",
  "requests",
  "consent",
];

const ERROR_IDS: Partial<Record<keyof FormState, string>> = {
  name: "cf-name-error",
  company: "cf-company-error",
  email: "cf-email-error",
  phone: "cf-phone-error",
  industry: "cf-industry-error",
  consultationTopics: "cf-topics-error",
  currentIssues: "cf-issues-error",
  requests: "cf-requests-error",
  consent: "cf-consent-error",
};

const API_ERROR_MESSAGES: Record<string, string> = {
  ORIGIN_NOT_ALLOWED: "このページから送信してください。ページを再読み込みしてお試しください。",
  UNSUPPORTED_MEDIA_TYPE: "送信形式を確認できませんでした。ページを再読み込みしてお試しください。",
  PAYLOAD_TOO_LARGE: "入力内容が長すぎます。内容を短くしてからお試しください。",
  RATE_LIMIT: "短時間に複数回の送信がありました。1分ほど待ってからお試しください。",
  BAD_REQUEST: "送信内容を確認できませんでした。ページを再読み込みしてお試しください。",
  VALIDATION_ERROR: "入力内容を確認してください。",
  SERVICE_UNAVAILABLE: "現在お問い合わせを送信できません。時間をおいて再試行してください。",
  SEND_FAILED: "お問い合わせを送信できませんでした。時間をおいて再試行してください。",
};

/* ── 共通 CSS 変数 ── */
const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(15, 21, 25, 0.9)",
  border: "1px solid rgba(30, 45, 61, 0.9)",
  borderRadius: "0.75rem",
  color: "#E8EDF2",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const errorStyle: React.CSSProperties = {
  borderColor: "rgba(239, 68, 68, 0.7)",
  boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.08)",
};

/* ── 送信成功ビュー ── */
function SuccessView({ autoReplySent }: { autoReplySent: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-6"
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{
          background: "radial-gradient(circle, rgba(0,229,160,0.18) 0%, rgba(0,229,160,0.06) 100%)",
          border: "1px solid rgba(0,229,160,0.35)",
          boxShadow: "0 0 32px rgba(0,229,160,0.2)",
        }}
      >
        <CheckCircle2 size={36} style={{ color: "#00E5A0" }} />
      </div>
      <h3
        className="font-bold mb-4"
        style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", color: "#E8EDF2" }}
      >
        ありがとうございます。
      </h3>
      <p className="text-s3-muted leading-[1.9] mb-2" style={{ fontSize: "0.95rem" }}>
        無料相談のお申し込みを受け付けました。
      </p>
      <p className="text-s3-muted leading-[1.9] mb-2" style={{ fontSize: "0.95rem" }}>
        {autoReplySent
          ? "受付内容の確認メールをお送りしました。"
          : "確認メールが届かない場合がありますが、受付は完了しています。再送は不要です。"}
      </p>
      <p className="text-s3-muted leading-[1.9] mb-6" style={{ fontSize: "0.95rem" }}>
        内容を確認後、<strong className="text-s3-text">原則2営業日以内</strong>に担当者よりご連絡いたします。
      </p>
      <a
        href="https://line.me/R/ti/p/@377ryvgd"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-3 rounded-xl text-sm transition-colors duration-200"
        style={{
          color: "#06C755",
          background: "rgba(6,199,85,0.06)",
          border: "1px solid rgba(6,199,85,0.22)",
        }}
      >
        お急ぎの場合は、公式LINEからもお気軽にお問い合わせください →
      </a>
    </motion.div>
  );
}

/* ── ラベル ── */
function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold mb-1.5"
      style={{ color: "rgba(232,237,242,0.9)" }}
    >
      {children}
      {required && (
        <span className="ml-1.5 text-xs font-bold" style={{ color: "#F87171" }}>必須</span>
      )}
    </label>
  );
}

/* ── エラーメッセージ ── */
function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 mt-1.5 text-xs"
          style={{ color: "#F87171" }}
          aria-live="polite"
        >
          <AlertCircle size={12} />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

/* ── フォーカス管理ユーティリティ ── */
function focusStyle(isFocused: boolean, hasError: boolean): React.CSSProperties {
  if (hasError) return errorStyle;
  if (isFocused) return {
    borderColor: "rgba(0,200,255,0.55)",
    boxShadow: "0 0 0 3px rgba(0,200,255,0.10)",
  };
  return {};
}

/* ── Main Component ── */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "", phone: "",
    industry: "", consultationTopics: [],
    currentIssues: "", requests: "",
    consent: false, honeypot: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [focused, setFocused] = useState<string>("");
  const [autoReplySent, setAutoReplySent] = useState(true);
  const submissionIdRef = useRef<string | null>(null);
  const fieldRefs = useRef<Partial<Record<keyof FormState, HTMLElement | null>>>({});
  const serverErrorRef = useRef<HTMLDivElement>(null);

  const focusAfterRender = (target: () => HTMLElement | null | undefined) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => target()?.focus());
    });
  };

  const focusFirstError = (nextErrors: Errors) => {
    const firstErrorKey = FORM_FIELD_ORDER.find((key) => nextErrors[key]);
    if (firstErrorKey) {
      focusAfterRender(() => fieldRefs.current[firstErrorKey]);
      return;
    }
    focusAfterRender(() => serverErrorRef.current);
  };

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }));
    if (status === "error") {
      submissionIdRef.current = null;
      setStatus("idle");
      setServerError("");
    }
  };

  const toggleTopic = (topic: string) => {
    const next = form.consultationTopics.includes(topic)
      ? form.consultationTopics.filter(t => t !== topic)
      : [...form.consultationTopics, topic];
    set("consultationTopics", next);
  };

  /* クライアント側バリデーション */
  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim())   e.name  = "お名前を入力してください";
    if (!form.email.trim())  e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.industry)                      e.industry           = "業種を選択してください";
    if (form.consultationTopics.length === 0) e.consultationTopics = "ご相談内容を1つ以上選択してください";
    if (!form.currentIssues.trim())          e.currentIssues      = "現在お困りのことを入力してください";
    if (!form.consent)                       e.consent            = "個人情報の取り扱いに同意してください";
    setErrors(e);
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }

    const submissionId = submissionIdRef.current ?? crypto.randomUUID();
    submissionIdRef.current = submissionId;
    setStatus("submitting");
    setServerError("");

    let res: Response;
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submissionId }),
      });
    } catch {
      // fetch 自体が失敗（オフライン・DNSエラー等）
      setServerError("インターネット接続を確認してから再試行してください。");
      setStatus("error");
      focusFirstError({});
      return;
    }

    // JSON パースを fetch とは別に try-catch（サーバーが HTML を返す場合に対応）
    let json: ApiResponse;
    try {
      json = await res.json() as typeof json;
    } catch {
      // サーバーが JSON ではないレスポンスを返した（設定エラー等）
      setServerError("送信結果を確認できませんでした。時間をおいて再試行してください。");
      setStatus("error");
      focusFirstError({});
      return;
    }

    if (!res.ok || !json.success) {
      const nextErrors: Errors = {};
      if (json.code === "VALIDATION_ERROR" && json.fieldErrors) {
        for (const key of FORM_FIELD_KEYS) {
          const message = json.fieldErrors[key]?.[0];
          if (message) nextErrors[key] = message;
        }
        setErrors(nextErrors);
      }
      setServerError(
        (json.code && API_ERROR_MESSAGES[json.code]) ??
        "送信に失敗しました。時間をおいて再試行してください。"
      );
      setStatus("error");
      focusFirstError(nextErrors);
      return;
    }

    setAutoReplySent(json.autoReplySent !== false);
    setStatus("success");
  };

  if (status === "success") return <SuccessView autoReplySent={autoReplySent} />;

  const inputClass = "px-4 py-3";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="無料相談フォーム"
    >
      {/* ── ハニーポット（ボット対策・非表示） ── */}
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={e => set("honeypot", e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
        autoComplete="off"
      />

      <div className="space-y-6">

        {/* ── お名前 / 会社名 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="cf-name" required>お名前</Label>
            <input
              ref={(element) => { fieldRefs.current.name = element; }}
              id="cf-name"
              type="text"
              value={form.name}
              onChange={e => set("name", e.target.value)}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              placeholder="山田 太郎"
              maxLength={100}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? ERROR_IDS.name : undefined}
              style={{
                ...inputBase,
                ...focusStyle(focused === "name", !!errors.name),
                padding: "0.75rem 1rem",
              }}
            />
            <FieldError id={ERROR_IDS.name!} message={errors.name} />
          </div>

          <div>
            <Label htmlFor="cf-company">会社名・屋号</Label>
            <input
              ref={(element) => { fieldRefs.current.company = element; }}
              id="cf-company"
              type="text"
              value={form.company}
              onChange={e => set("company", e.target.value)}
              onFocus={() => setFocused("company")}
              onBlur={() => setFocused("")}
              placeholder="株式会社サンプル"
              maxLength={200}
              autoComplete="organization"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? ERROR_IDS.company : undefined}
              style={{
                ...inputBase,
                ...focusStyle(focused === "company", !!errors.company),
                padding: "0.75rem 1rem",
              }}
            />
            <FieldError id={ERROR_IDS.company!} message={errors.company} />
          </div>
        </div>

        {/* ── メールアドレス / 電話番号 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="cf-email" required>メールアドレス</Label>
            <input
              ref={(element) => { fieldRefs.current.email = element; }}
              id="cf-email"
              type="email"
              value={form.email}
              onChange={e => set("email", e.target.value)}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              placeholder="example@company.com"
              maxLength={200}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? ERROR_IDS.email : undefined}
              style={{
                ...inputBase,
                ...focusStyle(focused === "email", !!errors.email),
                padding: "0.75rem 1rem",
              }}
            />
            <FieldError id={ERROR_IDS.email!} message={errors.email} />
          </div>

          <div>
            <Label htmlFor="cf-phone">電話番号</Label>
            <input
              ref={(element) => { fieldRefs.current.phone = element; }}
              id="cf-phone"
              type="tel"
              value={form.phone}
              onChange={e => set("phone", e.target.value)}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused("")}
              placeholder="090-0000-0000"
              maxLength={50}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? ERROR_IDS.phone : undefined}
              style={{
                ...inputBase,
                ...focusStyle(focused === "phone", !!errors.phone),
                padding: "0.75rem 1rem",
              }}
            />
            <FieldError id={ERROR_IDS.phone!} message={errors.phone} />
          </div>
        </div>

        {/* ── 業種 ── */}
        <div>
          <Label htmlFor="cf-industry" required>業種</Label>
          <div className="relative">
            <select
              ref={(element) => { fieldRefs.current.industry = element; }}
              id="cf-industry"
              value={form.industry}
              onChange={e => set("industry", e.target.value)}
              onFocus={() => setFocused("industry")}
              onBlur={() => setFocused("")}
              aria-invalid={!!errors.industry}
              aria-describedby={errors.industry ? ERROR_IDS.industry : undefined}
              style={{
                ...inputBase,
                ...focusStyle(focused === "industry", !!errors.industry),
                padding: "0.75rem 1rem",
                paddingRight: "2.5rem",
                appearance: "none",
                WebkitAppearance: "none",
                cursor: "pointer",
                color: form.industry ? "#E8EDF2" : "#8FA4B8",
              }}
            >
              <option value="" disabled style={{ color: "#8FA4B8", background: "#0F1519" }}>選択してください</option>
              {INDUSTRIES.map(ind => (
                <option key={ind} value={ind} style={{ color: "#E8EDF2", background: "#0F1519" }}>{ind}</option>
              ))}
            </select>
            {/* chevron */}
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#8FA4B8" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
          <FieldError id={ERROR_IDS.industry!} message={errors.industry} />
        </div>

        {/* ── ご相談内容（チェックボックス） ── */}
        <fieldset
          className="min-w-0 border-0 p-0 m-0"
          aria-describedby={`cf-topics-help${errors.consultationTopics ? ` ${ERROR_IDS.consultationTopics!}` : ""}`}
        >
          <legend
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "rgba(232,237,242,0.9)" }}
          >
            ご相談内容
            <span className="ml-1.5 text-xs font-bold" style={{ color: "#F87171" }}>必須</span>
          </legend>
          <p id="cf-topics-help" className="text-xs text-s3-dim mb-3">複数選択できます</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TOPICS.map((topic, index) => {
              const checked = form.consultationTopics.includes(topic);
              return (
                <label
                  key={topic}
                  className="flex items-center gap-3 cursor-pointer rounded-xl px-4 py-3 transition-all duration-200"
                  style={{
                    background: checked ? "rgba(0,200,255,0.08)" : "rgba(15,21,25,0.7)",
                    border: checked ? "1px solid rgba(0,200,255,0.35)" : "1px solid rgba(30,45,61,0.9)",
                    boxShadow: checked ? "0 0 12px rgba(0,200,255,0.08)" : "none",
                  }}
                >
                  <input
                    ref={(element) => {
                      if (index === 0) fieldRefs.current.consultationTopics = element;
                    }}
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTopic(topic)}
                    className="peer sr-only"
                    aria-invalid={!!errors.consultationTopics}
                    aria-describedby={errors.consultationTopics ? ERROR_IDS.consultationTopics : undefined}
                  />
                  {/* custom checkbox */}
                  <span
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-s3-blue/70 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-s3-bg"
                    style={{
                      background: checked ? "rgba(0,200,255,0.2)" : "transparent",
                      border: checked ? "2px solid #00C8FF" : "2px solid rgba(30,45,61,0.9)",
                    }}
                  >
                    {checked && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4L4 7L10 1" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm" style={{ color: checked ? "#E8EDF2" : "#8FA4B8" }}>{topic}</span>
                </label>
              );
            })}
          </div>
          <FieldError id={ERROR_IDS.consultationTopics!} message={errors.consultationTopics} />
        </fieldset>

        {/* ── 現在お困りのこと ── */}
        <div>
          <Label htmlFor="cf-issues" required>現在お困りのこと</Label>
          <textarea
            ref={(element) => { fieldRefs.current.currentIssues = element; }}
            id="cf-issues"
            value={form.currentIssues}
            onChange={e => set("currentIssues", e.target.value)}
            onFocus={() => setFocused("issues")}
            onBlur={() => setFocused("")}
            placeholder="例）見積書作成に時間がかかる、問い合わせ対応を自動化したい、社内業務を効率化したい など"
            rows={4}
            maxLength={3000}
            aria-invalid={!!errors.currentIssues}
            aria-describedby={errors.currentIssues ? ERROR_IDS.currentIssues : undefined}
            style={{
              ...inputBase,
              ...focusStyle(focused === "issues", !!errors.currentIssues),
              padding: "0.75rem 1rem",
              resize: "vertical",
              minHeight: "100px",
              lineHeight: "1.7",
            }}
          />
          <div className="flex justify-between items-center mt-1">
            <FieldError id={ERROR_IDS.currentIssues!} message={errors.currentIssues} />
            <span className="text-xs text-s3-dim ml-auto">{form.currentIssues.length}/3000</span>
          </div>
        </div>

        {/* ── ご希望・ご質問 ── */}
        <div>
          <Label htmlFor="cf-requests">ご希望・ご質問</Label>
          <textarea
            ref={(element) => { fieldRefs.current.requests = element; }}
            id="cf-requests"
            value={form.requests}
            onChange={e => set("requests", e.target.value)}
            onFocus={() => setFocused("requests")}
            onBlur={() => setFocused("")}
            placeholder="例）まずは相談したい、費用を知りたい、導入までお願いしたい など"
            rows={3}
            maxLength={3000}
            aria-invalid={!!errors.requests}
            aria-describedby={errors.requests ? ERROR_IDS.requests : undefined}
            style={{
              ...inputBase,
              ...focusStyle(focused === "requests", !!errors.requests),
              padding: "0.75rem 1rem",
              resize: "vertical",
              minHeight: "80px",
              lineHeight: "1.7",
            }}
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-s3-dim">{form.requests.length}/3000</span>
          </div>
          <FieldError id={ERROR_IDS.requests!} message={errors.requests} />
        </div>

        {/* ── 個人情報同意 ── */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              ref={(element) => { fieldRefs.current.consent = element; }}
              type="checkbox"
              checked={form.consent}
              onChange={e => set("consent", e.target.checked)}
              className="peer sr-only"
              aria-required="true"
              aria-invalid={!!errors.consent}
              aria-describedby={`cf-consent-description${errors.consent ? ` ${ERROR_IDS.consent!}` : ""}`}
            />
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-s3-blue/70 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-s3-bg"
              style={{
                background: form.consent ? "rgba(0,200,255,0.2)" : "transparent",
                border: errors.consent
                  ? "2px solid rgba(239,68,68,0.7)"
                  : form.consent ? "2px solid #00C8FF" : "2px solid rgba(30,45,61,0.9)",
              }}
            >
              {form.consent && (
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7L10 1" stroke="#00C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "rgba(232,237,242,0.8)" }}>
              <span className="mr-1.5 text-xs font-bold" style={{ color: "#F87171" }}>必須</span>
              個人情報の取り扱いに同意します
            </span>
          </label>
          <FieldError id={ERROR_IDS.consent!} message={errors.consent} />
          <p id="cf-consent-description" className="text-xs text-s3-dim mt-2 ml-8 leading-relaxed">
            ご入力いただいた個人情報は、S3DOTからのご連絡および無料相談の対応にのみ使用し、第三者への提供は行いません。
          </p>
        </div>

        {/* ── サーバーエラー ── */}
        <AnimatePresence>
          {status === "error" && serverError && (
            <motion.div
              ref={serverErrorRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-start gap-3 rounded-xl px-5 py-4"
              style={{
                background: "rgba(239,68,68,0.07)",
                border: "1px solid rgba(239,68,68,0.3)",
              }}
              role="alert"
              tabIndex={-1}
            >
              <AlertCircle size={18} style={{ color: "#F87171", flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#F87171" }}>送信に失敗しました</p>
                <p className="text-sm" style={{ color: "rgba(239,68,68,0.85)" }}>{serverError}</p>
                <p className="text-xs mt-1.5" style={{ color: "#8FA4B8" }}>
                  解決しない場合は
                  <a href="mailto:contact@s3dot.net" style={{ color: "#00C8FF" }} className="ml-1">contact@s3dot.net</a>
                  まで直接ご連絡ください。
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 送信ボタン ── */}
        <div className="pt-2 text-center">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 rounded-xl font-bold text-white transition-all duration-300"
            style={{
              padding: "1.1rem 3.5rem",
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              letterSpacing: "0.03em",
              background: status === "submitting"
                ? "rgba(0,200,255,0.4)"
                : "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 100%)",
              boxShadow: status === "submitting"
                ? "none"
                : "0 0 28px rgba(0,200,255,0.4), 0 0 70px rgba(0,200,255,0.15), 0 8px 28px rgba(0,0,0,0.4)",
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              opacity: status === "submitting" ? 0.7 : 1,
            }}
            aria-busy={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                送信中…
              </>
            ) : (
              <>
                <Send size={18} />
                無料相談を申し込む
              </>
            )}
          </button>
          <p className="mt-3 text-xs text-s3-dim">
            送信後、確認メールをお送りします。原則2営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </form>
  );
}
