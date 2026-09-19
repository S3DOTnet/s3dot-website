"use client";

import { Aurora, Corners, Neural, Reveal, SectionTag, SideLabel } from "@/components/ui/design";

export default function OurStorySection() {
  return (
    <section id="story" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden nx-sec-line">
      <SideLabel text="SEC.05 — STORY" />
      <Aurora
        a1={{ left: -200, top: 300, width: 700, height: 700, opacity: 0.7 }}
        a2={{ right: -200, top: 500, width: 600, height: 600, opacity: 0.7 }}
      />

      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">
        {/* ── 上段: ラベル + 大見出し ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-6">
          <div className="md:col-span-3 relative md:pt-[22px]">
            <SectionTag num="05" label="OUR STORY" />
            {/* ニューラルネットワーク図（PC: 左下 / SP: 右上に薄く） */}
            <div className="absolute right-[-40px] top-[-10px] w-[220px] opacity-35 md:opacity-90 md:right-auto md:left-0 md:top-[200px] md:w-[300px] pointer-events-none" aria-hidden="true">
              <Neural w={300} h={380} layers={[3, 5, 5, 2]} />
            </div>
          </div>
          <Reveal
            as="p"
            className="md:col-span-9 relative font-black leading-[1.25] tracking-[-0.04em] text-s3-text"
            style={{ fontSize: "clamp(2.1rem, 5.4vw, 4.9rem)", fontFeatureSettings: '"palt"' }}
          >
            AIは難しくない。<br />
            <span className="nx-outline">難しく考えすぎている</span><br className="hidden md:inline" />
            <span className="nx-outline">だけ。</span>
          </Reveal>
        </div>

        {/* ── 下段: 本文 2 カラム ── */}
        <div className="relative mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-y-5 md:gap-x-6 text-sm md:text-base leading-[2.1] text-s3-muted">
          <div className="md:col-start-4 md:col-span-4 flex flex-col gap-5">
            <p>「AIは大企業のもの」「IT企業のもの」という時代は、もう終わっています。でも、多くの会社の現場では、まだAIは「遠いもの」のままです。</p>
            <p>S3DOTは、そのギャップを埋めるために生まれました。難しい技術の話は私たちに任せてください。あなたは「やりたいこと」だけ話してくれればいい。</p>
          </div>
          <div className="md:col-start-9 md:col-span-4 flex flex-col gap-6 md:gap-7">
            <p>私たちがこだわるのは、「導入すること」ではなく<strong className="text-s3-text font-bold">「使われ続けること」</strong>。現場で本当に役立ち、会社の文化になるまで、S3DOTは隣にいます。</p>
            <div className="relative self-start flex items-center gap-3.5 px-4 py-3 md:px-5 md:py-3.5 rounded-[4px]" style={{ border: "1px solid var(--nx-accent-line)", background: "var(--nx-accent-soft)" }}>
              <Corners />
              <span className="nx-tech text-base md:text-xl font-bold tracking-[0.12em] text-s3-text">AI PARTNER</span>
              <span className="text-xs md:text-[13px]" style={{ color: "var(--nx-ok)" }}>✓ 伴走型サポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
