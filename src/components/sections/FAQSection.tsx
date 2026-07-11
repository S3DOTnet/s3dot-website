"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ── FAQ データ ─────────────────────────────── */
const faqs = [
  {
    q: "AIに詳しくなくても相談できますか？",
    a: [
      "もちろんです。",
      "ご相談いただく企業様の多くは、AIを初めて導入される方です。",
      "専門用語をできるだけ使わず、分かりやすく丁寧にご説明します。",
      "「何ができるの？」という段階からでも、お気軽にご相談ください。",
    ],
  },
  {
    q: "相談だけでも大丈夫ですか？",
    a: [
      "もちろんです。",
      "無理な営業は一切行っておりません。",
      "「AIで何ができるのか知りたい」というご相談だけでも大歓迎です。",
    ],
  },
  {
    q: "AI導入って高くありませんか？",
    a: [
      "AIは、一部の大企業だけのものではありません。",
      "今では、小さく始めて大きく育てる時代です。",
      "S3DOTでは、高額なシステムを無理におすすめすることはありません。",
      "必要なものだけをご提案するため、無駄なコストを抑えながらAIを導入できます。",
      "「AIは高い」ではなく、「使わない方が高くつく時代」だと私たちは考えています。",
    ],
  },
  {
    q: "なぜS3DOTは低コストでAIを提供できるのですか？",
    a: [
      "私たちは、高額なシステムを販売する会社ではありません。",
      "AIをもっと身近にすることを目的としています。",
      "そのため、既存の優れたAIサービスを活用しながら、お客様に本当に必要なものだけをご提案しています。",
      "無駄な開発や不要な機能を省くことで、高品質なAI活用を、できるだけ導入しやすい価格でご提供しています。",
      "「無駄なく、賢く始める。」それがS3DOTの考え方です。",
    ],
  },
  {
    q: "どんなことをAI化できますか？",
    a: [
      "業種を問わず幅広く対応しています。「これもAIでできますか？」というご相談も大歓迎です。",
    ],
    tags: [
      "AI事務員", "ホームページ制作", "LINE連携", "業務自動化",
      "動画制作", "画像制作", "SNS運用", "見積書作成",
      "チャットボット", "社内AI", "資料作成", "顧客対応",
    ],
  },
  {
    q: "ChatGPTだけあれば十分ではありませんか？",
    a: [
      "ChatGPTは非常に優れたAIです。",
      "しかし、AIを導入することと、AIを会社で活用できることは別です。",
      "S3DOTでは、会社ごとの業務に合わせて、業務改善・自動化・LINE連携・社内AI・システム連携など、「実際に仕事で成果につながるAI」をご提案します。",
    ],
  },
];

/* ── アコーディオン 1行 ───────────────────────── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen
          ? "rgba(0,200,255,0.04)"
          : "rgba(15,21,25,0.5)",
        border: isOpen
          ? "1px solid rgba(0,200,255,0.22)"
          : "1px solid rgba(30,45,61,0.8)",
        boxShadow: isOpen
          ? "0 0 28px rgba(0,200,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "none",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5 text-left group"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span
            className="shrink-0 text-xs font-mono font-bold tracking-widest mt-0.5"
            style={{ color: "#00C8FF" }}
          >
            Q.
          </span>
          <span
            className="text-[0.92rem] font-semibold leading-snug transition-colors duration-200"
            style={{ color: isOpen ? "#E8EDF2" : "rgba(232,237,242,0.85)" }}
          >
            {faq.q}
          </span>
        </div>

        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? "rgba(0,200,255,0.15)" : "rgba(30,45,61,0.9)",
            border: isOpen
              ? "1px solid rgba(0,200,255,0.35)"
              : "1px solid rgba(30,45,61,0.8)",
          }}
        >
          {isOpen
            ? <Minus size={12} style={{ color: "#00C8FF" }} />
            : <Plus  size={12} className="text-s3-muted group-hover:text-s3-blue transition-colors" />
          }
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4 md:px-6 md:pb-6">
              <div
                className="mb-5 h-px"
                style={{
                  background: "linear-gradient(90deg, rgba(0,200,255,0.3), transparent)",
                }}
              />

              {/* タグ（Q5のみ） */}
              {faq.tags && (
                <div className="flex flex-wrap gap-2 mb-5 ml-5 md:ml-6">
                  {faq.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                      style={{
                        color: "#00C8FF",
                        background: "rgba(0,200,255,0.10)",
                        border: "1px solid rgba(0,200,255,0.22)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="ml-5 md:ml-6 space-y-3">
                {faq.a.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm leading-[1.9]"
                    style={{ color: "rgba(143,164,184,0.95)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main ─────────────────────────────────────── */
export default function FAQSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-16 md:py-28 bg-s3-surface overflow-hidden section-grid noise-overlay"
    >
      {/* 上部アクセントライン */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,200,255,0.20),transparent)",
        }}
      />

      {/* BG glow */}
      <div style={{ position:"absolute", right:"-5%", top:"25%", width:500, height:500, background:"radial-gradient(ellipse, rgba(123,94,255,0.055) 0%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:"-5%", bottom:"20%", width:400, height:400, background:"radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />

      <div className="relative max-w-[760px] mx-auto px-6">

        {/* ── Heading ── */}
        <div ref={ref} className="mb-10 md:mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            <span className="text-white">よくある</span>
            <span className="gradient-text">ご質問</span>
          </motion.h2>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── Brand closing message ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div
            className="mx-auto mb-8 h-px max-w-xs"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,200,255,0.25), transparent)",
            }}
          />
          <p className="text-xs text-s3-muted leading-[2.2] tracking-wide">
            AIは難しいものではありません。<br />
            まずは相談することから。
          </p>
          <p className="mt-3 text-sm font-semibold" style={{ color: "#00C8FF" }}>
            AIを、もっと身近に。
          </p>
          <p className="mt-1 text-xs text-s3-dim tracking-wide">
            それがS3DOTの想いです。
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-lg text-sm font-semibold text-s3-blue border border-s3-blue/35 hover:border-s3-blue/65 hover:bg-s3-blue/5 transition-all duration-200 tracking-wide"
          >
            お問い合わせはこちら →
          </a>
        </motion.div>
      </div>

      <div className="section-divider mt-14 md:mt-28" />
    </section>
  );
}
