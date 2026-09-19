"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Btn, Corners, Reveal, SectionTag, SideLabel } from "@/components/ui/design";

/* 12の業務領域と、その領域でAIができることの例 */
const LINES = [
  { tag: "バックオフィス",  text: "毎日3時間かかっていた帳票作成を → 5分に。" },
  { tag: "顧客対応",        text: "問い合わせ対応を → 24時間365日、自動化。" },
  { tag: "業務効率化",      text: "会議の録音から → 議事録を即自動生成。" },
  { tag: "営業",            text: "営業メールを500通 → 30分でパーソナライズ。" },
  { tag: "マーケティング",  text: "SNS投稿を → 週1作業でまるごと自動化。" },
  { tag: "人事・育成",      text: "社内ナレッジをAIに学ばせ → 新入社員が即戦力に。" },
  { tag: "データ活用",      text: "データ集計レポートを → 毎朝ゼロ工数で配信。" },
  { tag: "採用",            text: "採用書類のスクリーニングを → 完全自動化。" },
  { tag: "コンテンツ制作",  text: "商品説明文100件を → AIが一括生成。" },
  { tag: "データ分析",      text: "顧客アンケートの感情分析を → 瞬時に可視化。" },
  { tag: "営業支援",        text: "提案書・見積書の下書きを → 入力だけで即生成。" },
  { tag: "ナレッジ管理",    text: "社内規程・マニュアルを → AIが即座に検索・回答。" },
];

const TICK_MS  = 320;  /* 1領域あたりの確認時間 */
const CYCLE    = 28;   /* 12領域 + 表示保持 → 再開 */

/* ─────────────────────────────────────────────
   AI活用チェック — 12領域を上から順に確認し「対応可」に変わる
───────────────────────────────────────────── */
export default function AICapabilitiesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || !inView) return;
    const id = setInterval(() => setTick((t) => (t + 1) % CYCLE), TICK_MS);
    return () => clearInterval(id);
  }, [inView, shouldReduceMotion]);

  const cur  = shouldReduceMotion ? LINES.length : tick;
  const done = Math.min(cur, LINES.length);
  const complete = done === LINES.length;

  return (
    <section className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden">
      <SideLabel text="SEC.03 — CAPABILITIES" />
      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">

        {/* ── 左: 見出し + CTA ── */}
        <div className="lg:col-span-5 flex flex-col gap-5 md:gap-7 lg:pr-6">
          <SectionTag num="03" label="WHAT AI CAN DO" />
          {/* 「こんなことまで。」を1行に保つ（文字サイズは左カラム幅に収まる上限に） */}
          <h2 className="font-black leading-[1.18] tracking-[-0.04em] text-s3-text" style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)" }}>
            AIで、<br /><span className="inline-block">こんなことまで。</span>
          </h2>
          <p className="text-sm md:text-[17px] leading-[2] text-s3-muted">
            「うちには関係ない」と<br className="hidden md:inline" />思っていた方ほど、驚かれます。
          </p>
          <div className="lg:mt-12 flex flex-col gap-5 md:gap-6">
            <p className="text-xl md:text-2xl font-black leading-[1.6] tracking-[-0.02em] text-s3-text">
              あなたの会社でもできることが<br className="hidden md:inline" /><span style={{ color: "var(--nx-accent)" }}>必ずある。</span>
            </p>
            <div className="w-full lg:max-w-[360px]">
              <Btn href="/contact#contact-form" variant="ghost">何ができるか、一緒に考えてみる</Btn>
            </div>
          </div>
        </div>

        {/* ── 右: チェックパネル ── */}
        <Reveal
          className="lg:col-span-7 relative rounded-md overflow-hidden"
          style={{ background: "rgba(2,4,8,0.92)", border: "1px solid var(--nx-line)", boxShadow: "0 0 90px var(--nx-accent-soft)" }}
        >
          <Corners />
          <i className="nx-scan" aria-hidden="true" />

          {/* ヘッダー */}
          <div className="h-[52px] flex items-center gap-3 px-4 md:px-5" style={{ borderBottom: "1px solid var(--nx-line)" }}>
            <span className="nx-dot nx-pulse" />
            <b className="text-sm font-bold text-s3-text whitespace-nowrap">AI活用チェック</b>
            <span className="hidden md:inline nx-code text-xs tracking-[0.1em] text-s3-muted">12の業務領域</span>
            <span className="ml-auto flex items-baseline gap-1.5 whitespace-nowrap">
              <small className="hidden md:inline text-[11px] text-s3-muted">対応できる領域</small>
              <b className="nx-tech text-lg font-semibold tabular-nums" style={{ color: "var(--nx-accent)" }}>{String(done).padStart(2, "0")}</b>
              <span className="nx-tech text-[13px] text-s3-muted">/ 12</span>
            </span>
          </div>

          {/* 本体 */}
          <div ref={ref} className="relative px-4 py-4 md:px-7 md:pb-7 md:pt-5 flex flex-col gap-2.5">
            <p className="text-xs text-s3-muted flex items-center gap-2">
              <span style={{ color: "var(--nx-ok)" }}>✓</span>御社の業務に当てはまる領域を、上から順に確認しています
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
              {LINES.map((line, i) => {
                const isDone   = i < done;
                const isActive = !shouldReduceMotion && i === cur;
                return (
                  <li
                    key={line.tag}
                    className="relative flex items-center gap-3 h-[62px] md:h-16"
                    style={{ borderBottom: "1px dashed var(--nx-line-s)" }}
                  >
                    {isActive && (
                      <span className="absolute left-[-12px] right-[-12px] top-1.5 bottom-1.5" style={{ background: "var(--nx-accent-soft)", borderLeft: "2px solid var(--nx-accent)" }} aria-hidden="true" />
                    )}
                    <span className="relative nx-code text-[11px] text-s3-muted w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="relative flex-1 min-w-0 flex flex-col gap-[3px]">
                      <b className="text-[15px] font-bold leading-[1.3] text-s3-text">{line.tag}</b>
                      <small className="text-[11.5px] leading-[1.4] text-s3-muted truncate">{line.text}</small>
                    </span>
                    <span
                      className="relative shrink-0 text-[11px] px-2.5 py-1 rounded-[3px] transition-all duration-300"
                      style={
                        isDone
                          ? { fontWeight: 700, background: "rgba(0,229,160,0.12)", color: "var(--nx-ok)", border: "1px solid rgba(0,229,160,0.35)" }
                          : isActive
                          ? { fontWeight: 700, background: "var(--nx-accent-soft)", color: "var(--nx-accent)", border: "1px solid var(--nx-accent-line)" }
                          : { border: "1px solid var(--nx-line-s)", color: "#4A6070" }
                      }
                    >
                      {isDone ? "対応可" : isActive ? "確認中…" : "待機"}
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="pt-3 min-h-[22px] text-[13px] flex flex-wrap items-center gap-2" aria-live="polite">
              {complete ? (
                <>
                  <span style={{ color: "var(--nx-ok)" }}>●</span>
                  <b className="font-bold text-s3-text">12領域すべてで活用できます。</b>
                  <span className="text-s3-muted">あなたの会社の業務も、この中にあります。</span>
                </>
              ) : (
                <>
                  <span style={{ color: "var(--nx-accent)" }}>●</span>
                  <span className="text-s3-muted">確認しています…</span>
                </>
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
