"use client";

import { Aurora, Btn, FloorGrid, LINE_URL } from "@/components/ui/design";
import HeroOrb from "@/components/sections/HeroOrb";

/* ─────────────────────────────────────────────
   Hero — 左: コピー / 右: ワイヤーフレーム球体（HUD）
   コピーの入場は CSS アニメーション（.nx-rise + animation-delay）。
   SSR 時点で表示状態なので、JS の起動が遅れても見出し・本文・CTA は消えない。
───────────────────────────────────────────── */
const rise = (i: number) => ({ animationDelay: `${0.15 + i * 0.09}s` });

export default function HeroSection() {
  return (
    <section className="nx nx-grid relative overflow-hidden bg-s3-bg pb-8">
      {/* 背景: オーロラ + 奥行きグリッド */}
      <Aurora
        a1={{ left: "40%", top: -80, width: 1000, height: 1000 }}
        a2={{ left: -300, top: 300, width: 800, height: 800 }}
      />
      <FloorGrid />

      <div
        className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-[minmax(0,740px)_1fr] lg:min-h-[calc(100vh-104px)] pt-[92px] lg:pt-[104px]"
      >
        {/* ── 球体（PC: 右側に絶対配置 / SP: 上部に専用サイズで表示） ── */}
        <div
          className="nx-hero-orb relative lg:absolute lg:right-[-70px] lg:top-[20px] w-[320px] h-[320px] lg:w-[680px] lg:h-[680px] mx-auto lg:mx-0 mt-1 lg:mt-0 order-first lg:order-none pointer-events-none"
          aria-hidden="true"
        >
          {/* PC 用 / SP 用を切り替え（非表示側は画面外扱いで描画停止） */}
          <div className="hidden lg:block absolute inset-0">
            <HeroOrb size={680} r={225} />
          </div>
          <div className="lg:hidden absolute inset-0">
            <HeroOrb size={320} r={104} mobile />
          </div>
          {/* 十字ガイド */}
          <i className="absolute left-[-16px] right-[-16px] lg:left-[-40px] lg:right-[-40px] top-1/2 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--nx-accent-line) 30%, var(--nx-accent-line) 70%, transparent)", opacity: 0.55 }} />
          <i className="absolute top-[-16px] bottom-[-16px] lg:top-[-40px] lg:bottom-[-40px] left-1/2 w-px" style={{ background: "linear-gradient(180deg, transparent, var(--nx-line) 30%, var(--nx-line) 70%, transparent)" }} />
          {/* 読み出し */}
          <div className="absolute left-0 top-[6px] lg:left-[-24px] lg:top-[64px] nx-code text-[10px] lg:text-[11px] leading-[1.8] text-s3-muted">
            LAT 35.6725 N<br />LNG 139.7236 E<br /><span style={{ color: "var(--nx-accent)" }}>● TOKYO / AOYAMA</span>
          </div>
          <div className="absolute right-0 bottom-[6px] lg:right-[-14px] lg:bottom-[60px] text-right nx-code text-[10px] lg:text-[11px] leading-[1.8] text-s3-muted">
            NODE 12 / 12<br />STATUS <span style={{ color: "var(--nx-ok)" }}>ONLINE</span>
          </div>
        </div>

        {/* ── コピー ── */}
        <div className="relative z-10 flex flex-col gap-5 lg:gap-8 pt-6 lg:pt-[120px]">
          <div className="nx-rise inline-flex items-center gap-3 self-start h-[34px] px-3.5 rounded-full nx-code text-[11px] lg:text-xs tracking-[0.18em] text-s3-text" style={{ ...rise(0), border: "1px solid var(--nx-accent-line)", background: "var(--nx-accent-soft)" }}>
            <span className="nx-dot ok nx-pulse" />
            AI PARTNER · S3DOT
          </div>

          <div style={rise(1)} className="nx-rise nx-code text-[11px] lg:text-xs text-s3-muted tracking-[0.06em]" aria-hidden="true">
            <span className="nx-type">&gt; s3dot.ai_partner --init ... <b className="font-medium" style={{ color: "var(--nx-ok)" }}>READY</b></span>
          </div>

          <h1
            style={{ ...rise(2), fontSize: "clamp(2.85rem, 7vw, 6.25rem)", fontFeatureSettings: '"palt"' }}
            className="nx-rise font-black leading-[1.1] tracking-[-0.045em] text-s3-text"
          >
            AIは特別な<br />
            <span className="nx-grad">ものじゃない。</span>
          </h1>

          <p
            className="nx-rise font-bold leading-[1.4] tracking-[-0.02em] text-s3-muted"
            style={{ ...rise(3), fontSize: "clamp(1.3rem, 2.6vw, 2.25rem)" }}
          >
            もう、仕事の<span className="nx-glow" style={{ color: "var(--nx-accent)" }}>スタンダード</span>です。
          </p>

          <p style={rise(4)} className="nx-rise text-sm lg:text-base leading-[2] text-s3-muted">
            AIを導入したいけれど、何から始めればいいかわからない。<br className="hidden lg:inline" />
            そんな企業のためのAI活用パートナーです。<br className="hidden lg:inline" />
            使わない方がコストも時間も、確実に高くつく時代へ。<br className="hidden lg:inline" />
            <strong className="text-s3-text font-bold">S3DOTは、AIを「使える力」に変え、会社の成長を加速させます。</strong>
          </p>

          <div style={rise(5)} className="nx-rise flex flex-col sm:flex-row gap-3 sm:gap-3.5 mt-1">
            <div className="w-full sm:w-[300px]">
              <Btn href="/contact#contact-form">まずは無料で相談する</Btn>
            </div>
            <div className="w-full sm:w-[270px]">
              <Btn href={LINE_URL} variant="line">公式LINEで相談する</Btn>
            </div>
          </div>
        </div>

        {/* ── 下部の読み出し行 ── */}
        <div
          className="lg:col-span-2 mt-10 lg:mt-24 pt-5 lg:pt-6 flex flex-wrap items-center justify-between gap-4 nx-code text-[10px] lg:text-[11px] tracking-[0.2em] text-s3-muted"
          style={{ borderTop: "1px solid var(--nx-line)" }}
        >
          <span className="flex items-center gap-3">
            <i className="relative block w-px h-10 overflow-hidden" style={{ background: "var(--nx-line)" }}>
              <b className="nx-travely" style={{ left: 0, width: 1, height: 12, margin: 0, boxShadow: "none", borderRadius: 0 }} />
            </i>
            SCROLL
          </span>
          <span className="flex gap-4 lg:gap-10">
            <span><b className="font-medium" style={{ color: "var(--nx-accent)" }}>05</b> SERVICES</span>
            <span><b className="font-medium" style={{ color: "var(--nx-accent)" }}>12</b> DOMAINS</span>
            <span><b className="font-medium" style={{ color: "var(--nx-accent)" }}>06</b> INDUSTRIES</span>
          </span>
        </div>
      </div>
    </section>
  );
}
