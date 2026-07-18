"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const LINES = [
  { text: "毎日3時間かかっていた帳票作成を → 5分に。",           tag: "バックオフィス",   color: "#00C8FF" },
  { text: "問い合わせ対応を → 24時間365日、自動化。",            tag: "顧客対応",         color: "#7B5EFF" },
  { text: "会議の録音から → 議事録を即自動生成。",               tag: "業務効率化",       color: "#00E5A0" },
  { text: "営業メールを500通 → 30分でパーソナライズ。",          tag: "営業",             color: "#00C8FF" },
  { text: "SNS投稿を → 週1作業でまるごと自動化。",              tag: "マーケティング",   color: "#7B5EFF" },
  { text: "社内ナレッジをAIに学ばせ → 新入社員が即戦力に。",    tag: "人事・育成",       color: "#00E5A0" },
  { text: "データ集計レポートを → 毎朝ゼロ工数で配信。",        tag: "データ活用",       color: "#00C8FF" },
  { text: "採用書類のスクリーニングを → 完全自動化。",          tag: "採用",             color: "#7B5EFF" },
  { text: "商品説明文100件を → AIが一括生成。",                 tag: "コンテンツ制作",   color: "#00E5A0" },
  { text: "顧客アンケートの感情分析を → 瞬時に可視化。",        tag: "データ分析",       color: "#00C8FF" },
  { text: "提案書・見積書の下書きを → 入力だけで即生成。",      tag: "営業支援",         color: "#7B5EFF" },
  { text: "社内規程・マニュアルを → AIが即座に検索・回答。",    tag: "ナレッジ管理",     color: "#00E5A0" },
];

const ROW_H        = 44;   /* px — 各行の固定高さ。絶対に変えない */
const TOTAL_H      = LINES.length * ROW_H + 24; /* コンテナ固定高さ */
const TYPING_SPEED = 28;   /* ms/文字 */
const LINE_PAUSE   = 480;  /* 行間休止 */
const LOOP_PAUSE   = 8000; /* 全行表示後8秒停止 — 読み終わる時間を確保 */

/* ─────────────────────────────────────────────
   sleep ユーティリティ
───────────────────────────────────────────── */
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
export default function AICapabilitiesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const shouldReduceMotion = useReducedMotion();

  /* ── 状態 ───────────────────────────────
     visible: 表示済み行インデックスの集合
     done:    タイピング完了行インデックスの集合
     typing:  現在タイピング中の行インデックス (-1 = なし)
     texts:   各行のタイピング済みテキスト
  ─────────────────────────────────────── */
  const [visible,   setVisible]   = useState<Set<number>>(new Set());
  const [done,      setDone]      = useState<Set<number>>(new Set());
  const [typing,    setTyping]    = useState(-1);
  const [texts,     setTexts]     = useState<string[]>(LINES.map(() => ""));

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!inView) return;
    let cancelled = false;

    const reset = () => {
      setVisible(new Set());
      setDone(new Set());
      setTyping(-1);
      setTexts(LINES.map(() => ""));
    };

    const run = async () => {
      reset();

      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;

        /* 行を表示開始 */
        setVisible((prev) => new Set([...prev, i]));
        setTyping(i);

        /* 1文字ずつタイプ */
        const full = LINES[i].text;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          const chunk = full.slice(0, c);
          setTexts((prev) => {
            const next = [...prev];
            next[i] = chunk;
            return next;
          });
          await sleep(TYPING_SPEED);
        }

        /* 行完了 */
        setDone((prev) => new Set([...prev, i]));
        setTyping(-1);
        await sleep(LINE_PAUSE);
      }

      /* 全行完了 → 休止 → リセット → ループ */
      await sleep(LOOP_PAUSE);
      if (!cancelled) run();
    };

    run();
    return () => { cancelled = true; };
  }, [inView, shouldReduceMotion]);

  const doneCount = shouldReduceMotion ? LINES.length : done.size;

  return (
    <section className="relative py-16 md:py-28 bg-s3-surface overflow-hidden section-grid noise-overlay">
      {/* BG */}
      <div className="hidden sm:block" style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:600, height:600, background:"radial-gradient(circle,rgba(123,94,255,0.055) 0%,transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div ref={ref} className="mb-12 text-center">
          <motion.p initial={shouldReduceMotion ? false : {opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:shouldReduceMotion ? 0 : 0.5}} className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">
            What AI Can Do
          </motion.p>
          <motion.h2 initial={shouldReduceMotion ? false : {opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:shouldReduceMotion ? 0 : 0.6,delay:shouldReduceMotion ? 0 : 0.1}} className="font-black tracking-[-0.02em] mb-4" style={{fontSize:"clamp(2rem,5vw,3.5rem)"}}>
            <span className="text-white">AIで、</span>
            <span className="gradient-text-blue-purple">こんなことまで。</span>
          </motion.h2>
          <motion.p initial={shouldReduceMotion ? false : {opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:shouldReduceMotion ? 0 : 0.6,delay:shouldReduceMotion ? 0 : 0.2}} className="text-s3-muted text-lg max-w-lg mx-auto">
            「うちには関係ない」と<br className="sm:hidden" />思っていた方ほど、驚かれます。
          </motion.p>
        </div>

        {/* Terminal window */}
        <motion.div
          initial={shouldReduceMotion ? false : {opacity:0,y:32,scale:0.98}}
          animate={inView?{opacity:1,y:0,scale:1}:{}}
          transition={{duration:shouldReduceMotion ? 0 : 0.7,delay:shouldReduceMotion ? 0 : 0.3}}
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background:"rgba(8,12,16,0.88)",
            border:"1px solid rgba(255,255,255,0.06)",
            boxShadow:"0 0 0 1px rgba(0,200,255,0.05),0 24px 80px rgba(0,0,0,0.55)",
            backdropFilter:"blur(24px)",
          }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05]" style={{background:"rgba(15,21,25,0.7)"}}>
            <span className="w-3 h-3 rounded-full" style={{background:"rgba(255,95,86,0.7)"}}/>
            <span className="w-3 h-3 rounded-full" style={{background:"rgba(255,189,46,0.7)"}}/>
            <span className="w-3 h-3 rounded-full" style={{background:"rgba(40,200,64,0.7)"}}/>
            <span className="ml-4 font-mono text-xs text-s3-dim">ai-capabilities — S3DOT</span>
            <span className="ml-auto font-mono text-[10px] text-s3-dim tabular-nums">{doneCount}/{LINES.length}</span>
          </div>

          {/* Command line */}
          <div className="px-5 py-3 border-b border-white/[0.04]" style={{background:"rgba(15,21,25,0.35)"}}>
            <span className="font-mono text-xs">
              <span className="text-s3-green">✓</span>
              <span className="text-s3-blue ml-2">s3dot</span>
              <span className="text-s3-dim"> analyze --industry all --output live</span>
            </span>
          </div>

          {/* ──────────────────────────────────────────
              行コンテナ — 高さ完全固定・CLSゼロ保証
              - TOTAL_H は定数 (LINES.length * ROW_H + 24)
              - 各行の高さは ROW_H px で固定
              - opacity のみ変化（height は絶対に変わらない）
              - key={i} 固定でDOMノードを再マウントしない
          ────────────────────────────────────────── */}
          <div
            className="px-2 py-3"
            style={{
              height: TOTAL_H,      /* ← 固定値。変化しない */
              overflow: "hidden",   /* ← 余分なコンテンツを隠す */
            }}
          >
            {LINES.map((line, i) => {
              const isVisible = shouldReduceMotion || visible.has(i);
              const isDone    = shouldReduceMotion || done.has(i);
              const isTyping  = !shouldReduceMotion && typing === i;
              /* テキスト: 完了行は全文、タイピング中は途中、非表示は NBSP */
              const displayText = shouldReduceMotion || isDone ? line.text : (texts[i] || " ");

              return (
                /* key={i} 固定 — ループリセット時も再マウントしない */
                <div
                  key={i}
                  style={{
                    height: ROW_H,            /* ← 行の高さ固定 */
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.22s ease",
                    /* translateX で横スライドイン */
                    transform: isVisible ? "translateX(0)" : "translateX(-6px)",
                  }}
                >
                  <div className="flex items-center gap-3 px-4 h-full">
                    {/* 行番号 */}
                    <span className="shrink-0 font-mono text-[11px] text-s3-dim w-5 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* prompt */}
                    <span className="shrink-0 font-mono text-xs" style={{ color: line.color }}>›</span>
                    {/* テキスト */}
                    <span className="font-mono text-sm text-s3-text flex-1 truncate">
                      {displayText}
                      {isTyping && (
                        <span
                          className="inline-block w-0.5 h-3.5 ml-0.5 align-middle"
                          style={{ background: line.color, animation: "cursor-blink 0.8s step-end infinite" }}
                        />
                      )}
                    </span>
                    {/* タグ — doneになったらフェードイン */}
                    <span
                      className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide"
                      style={{
                        opacity: isDone ? 1 : 0,
                        transition: "opacity 0.2s ease",
                        color: line.color,
                        background: `${line.color}18`,
                        border: `1px solid ${line.color}28`,
                        /* スペースを常に確保してシフトしない */
                        minWidth: "5rem",
                        textAlign: "center",
                      }}
                    >
                      {line.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={shouldReduceMotion ? false : {opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:shouldReduceMotion ? 0 : 0.6,delay:shouldReduceMotion ? 0 : 0.2}} className="mt-12 text-center">
          <p className="text-s3-muted mb-5">あなたの会社でもできることが必ずある。</p>
          <a href="/contact#contact-form" className="inline-flex items-center gap-2 px-9 py-3.5 rounded text-sm font-bold text-white gradient-cta glow-blue hover:brightness-110 transition-all tracking-wide">
            何ができるか、一緒に考えてみる →
          </a>
        </motion.div>
      </div>
      <div className="section-divider mt-12 md:mt-24"/>
    </section>
  );
}
