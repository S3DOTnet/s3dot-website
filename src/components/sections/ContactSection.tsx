"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

const LineIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
  </svg>
);

const MAIL_HREF = `mailto:contact@s3dot.net?subject=${encodeURIComponent("【S3DOT】無料相談・お問い合わせ")}&body=${encodeURIComponent("お名前：\n会社名・屋号：\n\nご相談内容：\nAI導入・業務改善・ホームページ制作・LINE連携・その他\n\n現在お困りのこと：\n\nご希望の内容：\n相談したい・費用を知りたい・導入を検討している\n\nご希望の連絡方法：\nメール・電話・LINE\n\nその他：")}`;

const options = [
  {
    icon: MessageSquare,
    label: "無料相談（フォーム）",
    desc: "まずはお気軽にどうぞ。",
    cta: "相談フォームへ",
    color: "#00C8FF",
    isLine: false,
    href: "#contact-form",
  },
  {
    icon: Mail,
    label: "メールで問い合わせ",
    desc: "具体的なご要望があればメールでお送りください。",
    cta: "メールを送る",
    color: "#7B5EFF",
    isLine: false,
    href: MAIL_HREF,
  },
  {
    icon: null,
    label: "公式LINEで相談",
    desc: "LINEで気軽にご相談ください。スマホからでも簡単です。",
    cta: "LINEで相談する",
    color: "#06C755",
    isLine: true,
    href: "https://line.me/R/ti/p/@377ryvgd",
  },
];

export default function ContactSection({ hideIntro = false }: { hideIntro?: boolean }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-16 md:py-28 bg-s3-bg overflow-hidden section-grid noise-overlay">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block" style={{ position:"absolute", width:"80vw", height:"70vh", top:"-20%", left:"10%", background:"radial-gradient(ellipse at center, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.022) 45%, transparent 70%)", filter:"blur(60px)", animation:"aurora-drift 22s ease-in-out infinite" }} />
        <div className="hidden sm:block" style={{ position:"absolute", width:"60vw", height:"50vh", bottom:"-10%", right:"5%", background:"radial-gradient(ellipse at center, rgba(123,94,255,0.06) 0%, transparent 70%)", filter:"blur(80px)", animation:"aurora-drift 28s ease-in-out infinite reverse", animationDelay:"-10s" }} />
      </div>
      <div className="absolute inset-0 hero-grid" style={{ opacity: 0.2 }} />

      <div className="relative max-w-[1200px] mx-auto px-6">

        {/* ── ① 見出し ── */}
        {!hideIntro && (
          <div ref={ref} className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-7 flex justify-center"
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.22em] font-medium text-s3-blue uppercase"
                style={{ background: "rgba(0,200,255,0.07)", border: "1px solid rgba(0,200,255,0.18)" }}
              >
                Contact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black tracking-[-0.025em] leading-[1.2] mb-6"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.8rem)", fontFeatureSettings: '"palt"' }}
            >
              <span className="text-white">「これもAIでできますか？」</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 max-w-lg mx-auto"
            >
              <p
                className="font-medium mb-3"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.1rem)", color: "rgba(232,237,242,0.75)" }}
              >
                その一言から始まるご相談が、一番多いです。
              </p>
              <p
                style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", color: "rgba(143,164,184,0.9)", lineHeight: "1.85" }}
              >
                AIに詳しくなくても大丈夫。<br />まずはお気軽にご相談ください。
              </p>
            </motion.div>

            {/* ── ② CTAボタン ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary → フォームへスクロール */}
              <a
                href="#contact-form"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:brightness-115 w-full sm:w-auto py-3 sm:py-[1.1rem] px-7 sm:px-12"
                style={{
                  fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                  letterSpacing: "0.03em",
                  background: "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 100%)",
                  boxShadow:
                    "0 0 28px rgba(0,200,255,0.50)," +
                    "0 0 70px rgba(0,200,255,0.20)," +
                    "0 0 140px rgba(123,94,255,0.15)," +
                    "0 8px 28px rgba(0,0,0,0.40)",
                }}
              >
                <span className="relative z-10">まずは無料で相談する</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Secondary — LINE */}
              <a
                href="https://line.me/R/ti/p/@377ryvgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] w-full sm:w-auto py-3 sm:py-[1rem] px-6 sm:px-9"
                style={{
                  fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(90deg, #06C755 0%, #00E5A0 100%)",
                  boxShadow: "0 0 20px rgba(6,199,85,0.30), 0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <LineIcon />
                公式LINEで相談する
              </a>
            </motion.div>

            <p className="mt-5 text-xs text-s3-dim tracking-wide">
              相談は無料です。
            </p>
          </div>
        )}

        {/* ── ③ Contactカード ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              /* native <a> でリンクを保証 */
              <a
                key={opt.label}
                href={opt.href}
                className="group block"
                {...(opt.isLine ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <motion.div
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="card-luxury card-shine rounded-xl flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:-translate-y-1 h-full p-5 md:p-7"
                  style={{
                    borderColor: i === 0 ? `${opt.color}28` : undefined,
                    boxShadow: i === 0
                      ? `0 0 28px ${opt.color}10, inset 0 1px 0 rgba(255,255,255,0.07)`
                      : undefined,
                  }}
                >
                  {/* アイコン */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `radial-gradient(circle, ${opt.color}22 0%, ${opt.color}08 100%)`,
                      border: `1px solid ${opt.color}30`,
                      boxShadow: `0 0 16px ${opt.color}1C, inset 0 1px 0 rgba(255,255,255,0.07)`,
                    }}
                  >
                    {opt.isLine
                      ? <span style={{ color: opt.color }}><LineIcon /></span>
                      : Icon && <Icon size={20} style={{ color: opt.color, filter: `drop-shadow(0 0 5px ${opt.color}cc)` }} />
                    }
                  </div>

                  {/* テキスト */}
                  <div className="flex-1">
                    <p
                      className="font-bold text-white mb-2 leading-snug"
                      style={{ fontSize: "0.95rem", letterSpacing: "0.01em" }}
                    >
                      {opt.label}
                    </p>
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.9)" }}
                    >
                      {opt.desc}
                    </p>
                  </div>

                  {/* CTA テキスト */}
                  <span
                    className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    style={{ color: opt.color }}
                  >
                    {opt.cta}
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </motion.div>
              </a>
            );
          })}
        </div>

        {/* ── ④ 無料相談フォーム ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto"
        >
          {/* セクションヘッダー */}
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.22em] font-medium text-s3-blue uppercase mb-5"
              style={{ background: "rgba(0,200,255,0.07)", border: "1px solid rgba(0,200,255,0.18)" }}
            >
              Free Consultation
            </div>
            <h3
              className="font-bold text-white mb-3"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
            >
              無料相談フォーム
            </h3>
            <p className="text-s3-muted text-sm leading-relaxed">
              内容を確認後、通常1営業日以内にご連絡いたします。
            </p>
          </div>

          {/* フォーム本体 */}
          <div
            className="rounded-2xl"
            style={{
              background: "rgba(15,21,25,0.6)",
              border: "1px solid rgba(30,45,61,0.8)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(0,200,255,0.04), 0 24px 80px rgba(0,0,0,0.4), 0 0 60px rgba(0,200,255,0.04)",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <ContactForm />
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-14 md:mt-28" />
    </section>
  );
}
