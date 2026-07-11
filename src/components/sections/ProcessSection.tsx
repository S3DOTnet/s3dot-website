"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  BarChart2,
  Lightbulb,
  Code2,
  LifeBuoy,
} from "lucide-react";

/* ── ステップデータ ───────────────────────────── */
const steps = [
  {
    num: "01",
    Icon: MessageCircle,
    title: "無料相談",
    lines: [
      "現状のお悩みをヒアリングします。",
      "AIが必要かどうかも一緒に考えます。",
      "営業は一切ありません。",
    ],
    color: "#00C8FF",
  },
  {
    num: "02",
    Icon: BarChart2,
    title: "業務分析",
    lines: [
      "現在の業務を整理し、AI化できる部分を分析。",
      "削減時間や導入イメージをご提案します。",
    ],
    color: "#4BBEFF",
  },
  {
    num: "03",
    Icon: Lightbulb,
    title: "ご提案",
    lines: [
      "御社専用のAIプランをご提案。",
      "必要なものだけ導入します。",
    ],
    color: "#7B5EFF",
  },
  {
    num: "04",
    Icon: Code2,
    title: "開発・導入",
    lines: ["AI制作・設定・各種連携まで対応します。"],
    color: "#9B7EFF",
  },
  {
    num: "05",
    Icon: LifeBuoy,
    title: "運用サポート",
    lines: [
      "導入して終わりではありません。",
      "社員の方が使いこなせるまで伴走します。",
    ],
    color: "#00E5A0",
  },
];

/* ── Main ─────────────────────────────────────── */
export default function ProcessSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative py-16 md:py-28 bg-s3-bg overflow-hidden section-grid noise-overlay"
    >
      {/* 上部アクセントライン */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }}
      />

      {/* BG glow */}
      <div
        style={{
          position: "absolute", left: "50%", top: "35%",
          transform: "translate(-50%,-50%)",
          width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(0,200,255,0.042) 0%, rgba(123,94,255,0.022) 50%, transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">

        {/* ── Heading ── */}
        <div ref={ref} className="mb-12 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            <span className="text-white">AI導入の</span>
            <span className="gradient-text">流れ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-s3-muted text-lg max-w-lg mx-auto"
          >
            はじめてでも迷わない。<br className="sm:hidden" />S3DOTが全工程を<br className="sm:hidden" />サポートします。
          </motion.p>
        </div>

        {/* ── Steps ── */}
        <div className="relative">

          {/* 接続ライン（PC のみ） */}
          <div
            className="hidden md:block absolute top-7 left-[14%] right-[14%] h-px"
            style={{
              background: "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 50%, #00E5A0 100%)",
              opacity: 0.20,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-0"
              >
                {/* SP 縦接続ライン */}
                {i > 0 && (
                  <div className="md:hidden flex justify-center py-2">
                    <div
                      className="w-px h-7"
                      style={{
                        background: `linear-gradient(to bottom, ${steps[i - 1].color}55, ${step.color}55)`,
                      }}
                    />
                  </div>
                )}

                {/* アイコンボックス */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shrink-0 z-10"
                  style={{
                    background: `radial-gradient(circle, ${step.color}20 0%, ${step.color}06 100%)`,
                    border: `1px solid ${step.color}32`,
                    boxShadow: `0 0 20px ${step.color}1C, inset 0 1px 0 rgba(255,255,255,0.07)`,
                  }}
                >
                  <step.Icon
                    size={22}
                    style={{
                      color: step.color,
                      filter: `drop-shadow(0 0 6px ${step.color}cc)`,
                    }}
                  />
                  {/* ステップ番号バッジ */}
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black font-mono leading-none"
                    style={{ background: step.color, color: "#080C10" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* カード */}
                <div className="card-luxury rounded-xl p-5 w-full flex flex-col gap-3 text-left h-full">
                  <h3
                    className="text-sm font-bold"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <div className="space-y-1.5">
                    {step.lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-s3-muted leading-relaxed"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 md:mt-24 text-center"
        >
          {/* セパレーターライン */}
          <div
            className="mx-auto mb-10 h-px max-w-xs"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.3), transparent)" }}
          />

          <p className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            「小さく始めて、大きく育てる。」
          </p>
          <p className="text-s3-muted text-base md:text-lg leading-[1.95] max-w-lg mx-auto">
            AI導入は、一気に<br className="sm:hidden" />変える必要はありません。
            <br className="sm:hidden" /><br className="hidden md:block" />
            まずは一つの業務から。
            <br className="sm:hidden" /><br className="hidden md:block" />
            効果を確認しながら、<br className="sm:hidden" />御社に合わせて<br className="sm:hidden" />広げていきます。
          </p>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-lg text-sm font-bold text-white gradient-cta glow-blue hover:brightness-110 hover:scale-[1.02] transition-all tracking-wide"
          >
            まず無料で相談してみる →
          </motion.a>
        </motion.div>
      </div>

      <div className="section-divider mt-14 md:mt-28" />
    </section>
  );
}
