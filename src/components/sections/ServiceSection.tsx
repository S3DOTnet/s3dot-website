"use client";

import {
  MessageCircle,
  Settings,
  Zap,
  Sparkles,
  Code2,
} from "lucide-react";
import { Btn, Reveal, Ring, SectionHead, SideLabel, TextLink } from "@/components/ui/design";

const services = [
  {
    icon: MessageCircle,
    label: "AI導入支援",
    sub: "「何から始めればいいか」から一緒に考える",
    body: "企業ごとの課題に合わせて、AI活用の方法をご提案します。",
    tags: ["無料相談あり", "課題整理", "導入計画"],
    href: "/ai",
  },
  {
    icon: Settings,
    label: "業務改善",
    sub: "今のやり方に、AIをうまく組み込む",
    body: "既存の業務の流れを変えずに、AIを自然に取り入れ、負担を軽くします。",
    tags: ["フロー最適化", "コスト削減", "ミス削減"],
    href: undefined,
  },
  {
    icon: Zap,
    label: "業務自動化",
    sub: "繰り返しをなくす。それだけで会社は変わる。",
    body: "日々の事務作業や定型業務をAIで効率化します。",
    tags: ["時間削減", "省人化", "RPA"],
    href: undefined,
  },
  {
    icon: Sparkles,
    label: "AI制作",
    sub: "コンテンツ制作を、速く・安く・大量に。",
    body: "画像・動画・文章・音声など、広告やSNSに使えるコンテンツ制作をAIで支援します。",
    tags: ["画像生成", "動画制作", "テキスト生成"],
    href: undefined,
  },
  {
    icon: Code2,
    label: "専用AIシステム開発",
    sub: "あなたの会社専用のAIを作る。",
    body: "会社独自の業務に合わせたAIツールを開発します。",
    tags: ["オーダーメイド", "API連携", "運用サポート"],
    href: undefined,
  },
];

/* 目玉カード（01 AI導入支援）: 光が一周する枠線 */
function FeaturedCard({ s }: { s: (typeof services)[0] }) {
  const Icon = s.icon;
  return (
    <Reveal className="nx-glow-wrap md:col-span-2 lg:col-span-1 lg:row-span-2">
      <i className="nx-conic" aria-hidden="true" />
      <article
        className="relative flex-1 overflow-hidden rounded-[5px] p-6 md:p-11 flex flex-col justify-between gap-6 md:gap-10"
        style={{ background: "linear-gradient(160deg, var(--nx-accent-soft), rgba(8,12,20,0.98) 60%)" }}
      >
        <div className="hidden md:block absolute right-[-120px] top-[-120px] w-[380px] h-[380px] opacity-80" aria-hidden="true">
          <Ring d={380} dash="1 6" cls="nx-spin" dur={50} accent />
          <Ring d={300} dash="30 10" cls="nx-spinr" dur={70} accent />
        </div>
        <div className="relative flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-3.5">
            <span className="w-12 h-12 md:w-14 md:h-14 rounded-md flex items-center justify-center" style={{ background: "var(--nx-accent)", color: "#080C10", boxShadow: "0 0 30px var(--nx-accent-glow)" }}>
              <Icon size={26} strokeWidth={1.6} />
            </span>
            <span className="nx-code text-xs tracking-[0.2em]" style={{ color: "var(--nx-accent)" }}>MODULE 01 / 05</span>
          </div>
          <h3 className="font-black leading-[1.15] tracking-[-0.03em] text-s3-text" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.9rem)" }}>{s.label}</h3>
          <p className="text-base md:text-[22px] font-bold leading-[1.6] text-s3-text">{s.sub}</p>
          <p className="text-[13px] md:text-base leading-[1.9]" style={{ color: "var(--nx-soft)" }}>{s.body}</p>
        </div>
        <div className="relative flex flex-col gap-5 md:gap-6">
          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <span key={t} className="nx-chip" style={{ borderColor: "var(--nx-accent-line)", color: "#E8EDF2" }}>#{t}</span>
            ))}
          </div>
          {s.href && <Btn href={s.href}>無料AI業務改善診断を見る</Btn>}
        </div>
      </article>
    </Reveal>
  );
}

function ServiceCard({ s, index }: { s: (typeof services)[0]; index: number }) {
  const Icon = s.icon;
  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="nx-panel hover p-6 md:p-8 flex flex-col justify-between gap-5 md:gap-6"
    >
      <div className="flex flex-col gap-3.5">
        <div className="nx-meta">
          <Icon size={28} strokeWidth={1.4} style={{ color: "var(--nx-accent)" }} />
          <span>MODULE 0{index + 1}</span>
        </div>
        <h3 className="text-[22px] md:text-[27px] font-black tracking-[-0.02em] text-s3-text">{s.label}</h3>
        <p className="text-sm md:text-base font-bold leading-[1.6] text-s3-text">{s.sub}</p>
        <p className="text-[13px] md:text-sm leading-[1.9] text-s3-muted">{s.body}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span key={t} className="nx-chip">#{t}</span>
        ))}
      </div>
    </Reveal>
  );
}

export default function ServiceSection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="service" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden">
      {!hideHeading && <SideLabel text="SEC.02 — SERVICES" />}
      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">
        {!hideHeading && (
          <SectionHead
            num="02"
            label="SERVICES"
            title="S3DOTのできること"
            desc={<>AIで「変えられる」ことは、<br className="hidden md:inline" /><strong className="text-s3-text font-bold">想像以上に多い。</strong></>}
            link={<TextLink href="/service">サービス一覧を見る</TextLink>}
          />
        )}

        {/* ベント配置: 01 を大きく、残り4つを周りに */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-5">
          <FeaturedCard s={services[0]} />
          {services.slice(1).map((s, i) => (
            <ServiceCard key={s.label} s={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
