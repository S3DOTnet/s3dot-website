"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Btn, Reveal, SectionTag, SideLabel, TextLink } from "@/components/ui/design";

/* ── FAQ データ ─────────────────────────────── */
const faqs = [
  {
    q: "AIに詳しくなくても相談できますか？",
    a: [
      "もちろんです。",
      "AIを初めて触れる方にも分かりやすいよう、専門用語をできるだけ使わずご説明します。",
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
  const shouldReduceMotion = useReducedMotion();
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <Reveal as="li" delay={index * 0.06} className="nx-panel overflow-hidden list-none">
      {isOpen && (
        <span className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: "var(--nx-accent)", boxShadow: "0 0 14px var(--nx-accent-glow)" }} aria-hidden="true" />
      )}

      {/* Question */}
      <button
        id={questionId}
        onClick={onToggle}
        className="w-full min-h-16 md:min-h-[72px] px-4 py-3.5 md:px-6 md:py-4 flex items-center gap-3.5 md:gap-[18px] text-left transition-colors duration-200 hover:bg-[rgba(0,200,255,0.05)]"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="shrink-0 nx-tech text-[15px] font-semibold" style={{ color: "var(--nx-accent)" }}>
          Q.{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-[15px] md:text-lg font-bold leading-[1.5] text-s3-text">{faq.q}</span>
        <span
          className="shrink-0 w-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-300"
          style={{ border: "1px solid var(--nx-line)", color: isOpen ? "var(--nx-accent)" : "#E8EDF2" }}
        >
          {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex gap-3.5 md:gap-[18px] px-4 pb-4 md:px-6 md:pb-6">
              <span className="shrink-0 w-[38px] nx-tech text-[15px] font-semibold" style={{ color: "var(--nx-ok)" }}>A.</span>
              <div className="min-w-0 flex-1">
                {faq.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {faq.tags.map((tag) => (
                      <span key={tag} className="nx-chip" style={{ color: "var(--nx-accent)", borderColor: "var(--nx-accent-line)", background: "var(--nx-accent-soft)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {faq.a.map((line, i) => (
                  <p key={i} className="text-[13px] md:text-[15px] leading-[2]" style={{ color: "var(--nx-soft)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

/* ── Main ─────────────────────────────────────── */
export default function FAQSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden nx-sec-line">
      {!hideHeading && <SideLabel text="SEC.07 — FAQ" />}
      <div className={`relative mx-auto px-5 md:px-6 xl:px-12 ${hideHeading ? "max-w-[900px]" : "max-w-[1248px] grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-6 items-start"}`}>

        {/* ── 左: 見出し ── */}
        {!hideHeading && (
          <div className="lg:col-span-4 flex flex-col gap-5 md:gap-7">
            <SectionTag num="07" label="FAQ" />
            <h2 className="font-black leading-[1.18] tracking-[-0.04em] text-s3-text" style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.75rem)" }}>
              よくある<br className="hidden lg:inline" />ご質問
            </h2>
            <p className="text-sm md:text-base leading-[2] text-s3-muted">
              AIは難しいものではありません。<br />まずは相談することから。
            </p>
            <p className="text-sm md:text-base leading-[2] text-s3-muted">
              <strong className="text-s3-text font-bold">AIを、もっと身近に。</strong><br />それがS3DOTの想いです。
            </p>
            <div className="flex flex-col gap-2 w-full lg:max-w-[320px] mt-1">
              <Btn href="/contact#contact-form">無料相談はこちら</Btn>
              <TextLink href="/faq">よくある質問をすべて見る</TextLink>
            </div>
          </div>
        )}

        {/* ── 右: アコーディオン ── */}
        <ul className={`flex flex-col gap-2.5 ${hideHeading ? "" : "lg:col-start-6 lg:col-span-7"}`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </ul>

        {/* 下層ページ（/faq）用の締め */}
        {hideHeading && (
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-sm md:text-base leading-[2] text-s3-muted">
              AIは難しいものではありません。まずは相談することから。<br />
              <strong className="text-s3-text font-bold">AIを、もっと身近に。</strong>それがS3DOTの想いです。
            </p>
            <div className="w-full sm:w-[320px]">
              <Btn href="/contact#contact-form">無料相談はこちら</Btn>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
