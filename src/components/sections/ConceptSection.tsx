"use client";

import { Corners, Reveal, SectionHead, SideLabel } from "@/components/ui/design";

const values = [
  {
    number: "01",
    key: "HONEST",
    title: "売らない。一緒に考える。",
    body: "S3DOTはAIを「売る」会社ではありません。あなたの課題を聞き、本当に必要かどうかから一緒に考えます。「導入しない」という結論も、誠実にお伝えします。",
  },
  {
    number: "02",
    key: "SMALL START",
    title: "小さく始めて、確かめる。",
    body: "大きな投資から始める必要はありません。効果が確認できる小さな一歩から。リスクを最小化しながら、実績を積み上げていきます。",
  },
  {
    number: "03",
    key: "COMMIT",
    title: "定着するまで、伴走する。",
    body: "導入して終わりではありません。現場で本当に使われるか、文化として根付くか。S3DOTはそこまでコミットします。",
  },
];

/* サービス名の流れる帯（装飾） */
const tickerItems = ["AI導入支援", "業務改善", "業務自動化", "AI制作", "専用AIシステム開発", "LINE連携", "チャットボット", "社内AI", "AI事務員"];

export default function ConceptSection() {
  return (
    <>
      {/* ── 流れる帯 ── */}
      <div
        className="nx h-14 md:h-[72px] overflow-hidden flex items-center"
        style={{ borderTop: "1px solid var(--nx-line)", borderBottom: "1px solid var(--nx-line)", background: "rgba(8,12,16,0.85)" }}
        aria-hidden="true"
      >
        <div className="nx-marquee nx-tech text-base md:text-[22px] font-semibold tracking-[0.06em] text-s3-muted pl-6 md:pl-10 gap-6 md:gap-10">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="flex items-center gap-6 md:gap-10">
              {t}
              <i className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--nx-accent)" }} />
            </span>
          ))}
        </div>
      </div>

      <section id="concept" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden">
        <SideLabel text="SEC.01 — CONCEPT" />
        <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">
          <SectionHead
            num="01"
            label="CONCEPT"
            title={<>AIを、<br />もっと<span style={{ color: "var(--nx-accent)" }}>身近</span>にする。</>}
            desc={<>AIは難しくない。<br className="hidden md:inline" />難しく考えすぎているだけ。<br /><strong className="text-s3-text font-bold">S3DOTは、その「壁」を一緒に取り除くパートナーです。</strong></>}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {values.map((v, i) => (
              <Reveal
                as="article"
                key={v.number}
                delay={i * 0.12}
                className="nx-panel hover overflow-hidden p-6 md:p-9 flex flex-col gap-4 md:gap-[18px]"
              >
                <Corners />
                <div className="nx-meta">
                  <span>PROTOCOL</span>
                  <span style={{ color: "var(--nx-accent)" }}>{v.key}</span>
                </div>
                <span
                  className="nx-tech font-semibold leading-none tracking-[-0.04em]"
                  style={{ fontSize: "clamp(3.25rem, 6vw, 6rem)", color: "transparent", WebkitTextStroke: "1px var(--nx-accent)" }}
                >
                  {v.number}
                </span>
                <h3 className="text-xl md:text-[26px] font-black tracking-[-0.02em] text-s3-text">{v.title}</h3>
                <p className="text-[13px] md:text-sm leading-[2] text-s3-muted">{v.body}</p>
                <i className="nx-bar" style={{ animationDelay: `${-1.3 * (i + 1)}s` }} aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
