"use client";

import { Btn, Corners, Reveal, SectionHead, SideLabel } from "@/components/ui/design";

/* ── ステップデータ ───────────────────────────── */
const steps = [
  { num: "01", title: "無料相談",     body: "現状のお悩みをヒアリングします。AIが必要かどうかも一緒に考えます。" },
  { num: "02", title: "業務分析",     body: "現在の業務を整理し、AI化できる部分を分析。削減時間や導入イメージをご提案します。" },
  { num: "03", title: "ご提案",       body: "御社専用のAIプランをご提案。必要なものだけ導入します。" },
  { num: "04", title: "開発・導入",   body: "AI制作・設定・各種連携まで対応します。" },
  { num: "05", title: "運用サポート", body: "導入して終わりではありません。社員の方が使いこなせるまで伴走します。" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden nx-sec-line">
      <SideLabel text="SEC.06 — PROCESS" />
      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">
        <SectionHead
          num="06"
          label="HOW IT WORKS"
          title="AI導入の流れ"
          desc={<>はじめてでも迷わない。<br className="hidden md:inline" />S3DOTが全工程をサポートします。</>}
        />

        {/* ── ステップ: PC は横並び + 光が走る線 / SP は縦のタイムライン ── */}
        <div className="relative">
          <i
            className="absolute md:left-8 md:right-[180px] md:top-8 md:h-px md:w-auto left-[25px] top-5 bottom-[60px] w-px"
            style={{ background: "var(--nx-accent-line)" }}
            aria-hidden="true"
          >
            <b className="hidden md:block nx-travel" />
            <b className="md:hidden nx-travely" />
          </i>

          <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-7 md:gap-0">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.num}
                delay={i * 0.08}
                className="flex md:flex-col gap-[18px] md:pr-7"
              >
                <span
                  className="w-[50px] h-[50px] md:w-16 md:h-16 shrink-0 flex items-center justify-center rounded-md nx-tech text-lg md:text-2xl font-semibold bg-s3-bg"
                  style={{
                    color: "var(--nx-accent)",
                    border: `1px solid ${i === 0 ? "var(--nx-accent)" : "var(--nx-accent-line)"}`,
                    boxShadow: i === 0 ? "0 0 24px var(--nx-accent-glow)" : undefined,
                  }}
                >
                  {step.num}
                </span>
                <div className="flex flex-col gap-1.5 md:gap-[18px] pt-1 md:pt-0">
                  <h3 className="text-lg md:text-[22px] font-black text-s3-text">{step.title}</h3>
                  <p className="text-[13px] md:text-sm leading-[1.95] text-s3-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ── 締めのメッセージ ── */}
        <Reveal
          delay={0.15}
          className="relative mt-10 md:mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-12 p-6 md:px-10 md:py-8 rounded-md"
          style={{ border: "1px solid var(--nx-accent-line)", background: "var(--nx-accent-soft)" }}
        >
          <Corners />
          <p className="text-xl md:text-[28px] font-black tracking-[-0.02em] text-s3-text lg:whitespace-nowrap">「小さく始めて、大きく育てる。」</p>
          <p className="text-[13px] md:text-sm leading-[1.9]" style={{ color: "var(--nx-soft)" }}>
            AI導入は、一気に変える必要はありません。まずは一つの業務から。効果を確認しながら、御社に合わせて広げていきます。
          </p>
          <div className="shrink-0 w-full lg:w-60">
            <Btn href="/price" className="!h-[52px] md:!h-14 !text-[15px]">料金の目安を見る</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
