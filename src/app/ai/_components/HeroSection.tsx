"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Clock, Wallet, TrendingUp } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import LineIcon from "./LineIcon";
import SectionBridge from "./SectionBridge";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

const kpis = [
  { icon: Clock, label: "時間削減", desc: "毎月数十時間の無駄をゼロへ" },
  { icon: Wallet, label: "人件費最適化", desc: "増員せず、今の人員で利益を伸ばす" },
  { icon: TrendingUp, label: "利益向上", desc: "浮いた時間を売上に直結する仕事へ" },
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: shouldReduceMotion ? {} : { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
  };
  const reveal: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080C10" }}
    >
      {/* AIネットワーク背景 */}
      <NetworkBackground opacity={0.55} />

      {/* Aurora glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hidden sm:block"
          style={{
            position: "absolute", width: "120vw", height: "85vh", top: "-20%", left: "-10%",
            background: "radial-gradient(ellipse at 50% 40%, rgba(0,200,255,0.10) 0%, rgba(0,140,210,0.02) 46%, transparent 66%)",
            filter: "blur(85px)", animation: "aurora-drift 26s ease-in-out infinite",
          }}
        />
        <div
          className="hidden sm:block"
          style={{
            position: "absolute", width: "70vw", height: "60vh", top: "-5%", right: "-14%",
            background: "radial-gradient(ellipse at center, rgba(123,94,255,0.09) 0%, transparent 70%)",
            filter: "blur(90px)", animation: "aurora-drift 34s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 88% 78% at 50% 42%, transparent 32%, rgba(8,12,16,0.7) 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "180px", background: "linear-gradient(to bottom, transparent, rgba(8,12,16,0.96))" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full mx-auto px-6 sm:px-10"
        style={{ maxWidth: "1120px", paddingTop: "clamp(5rem, 12vh, 7.5rem)", paddingBottom: "clamp(2rem, 5vh, 3rem)" }}
      >
        <motion.div
          variants={reveal}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 md:mb-6"
          style={{ background: "rgba(0,200,255,0.07)", border: "1px solid rgba(0,200,255,0.24)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C8FF", boxShadow: "0 0 8px #00C8FF" }} />
          <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.28em", color: "rgba(0,200,255,0.85)" }}>
            経営者のためのAI導入・業務改善パートナー
          </span>
        </motion.div>

        <motion.h1 variants={reveal} className="font-black text-white tracking-tight" style={{ fontSize: "clamp(1.55rem, 6vw, 4.1rem)", lineHeight: 1.3 }}>
          どうせ使うAIなら、
          <br />
          <span className="gradient-text-blue-purple">
            1日でも早く導入した企業が
            <br />
            これから勝ちます。
          </span>
        </motion.h1>

        <motion.p
          variants={reveal}
          className="mt-5 md:mt-6"
          style={{ fontSize: "clamp(0.92rem, 1.6vw, 1.12rem)", lineHeight: 1.85, color: "rgba(232,237,242,0.72)", maxWidth: "640px" }}
        >
          毎月発生している無駄な作業時間と、増え続ける人件費。
          それを放置するか、AIで削減して利益に変えるか。
          すでに多くの企業が動き出しています。
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-6 md:mt-7 px-5 py-3.5 md:px-8 md:py-4 rounded-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(0,200,255,0.07), rgba(123,94,255,0.07))",
            border: "1px solid rgba(0,200,255,0.2)",
          }}
        >
          <p className="font-bold text-white" style={{ fontSize: "clamp(1rem, 2.1vw, 1.35rem)", lineHeight: 1.55 }}>
            AIを使う会社と、使わない会社。
            <br />
            これから企業の差は<span className="gradient-text">広がります。</span>
          </p>
        </motion.div>

        {/* KPI強調行 */}
        <motion.div variants={reveal} className="mt-7 md:mt-9 grid grid-cols-3 gap-2.5 md:gap-4 w-full max-w-2xl">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <div
                key={k.label}
                className="card-luxury rounded-xl px-2.5 py-3.5 md:px-4 md:py-5 flex flex-col items-center gap-1.5 md:gap-2 text-center"
              >
                <Icon size={18} className="md:w-5 md:h-5" style={{ color: "#00C8FF" }} />
                <p className="font-bold text-white leading-tight" style={{ fontSize: "clamp(0.78rem, 1.6vw, 0.95rem)" }}>{k.label}</p>
                <p className="hidden sm:block text-s3-dim leading-snug" style={{ fontSize: "0.68rem" }}>{k.desc}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={reveal} className="mt-7 md:mt-9 w-full flex justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-pulse group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white w-full sm:w-auto py-4 sm:py-5 px-8 sm:px-14 transition-all duration-200 hover:brightness-110 hover:scale-[1.03]"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
              background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
            }}
          >
            <LineIcon size={20} />
            無料AI活用相談をLINEで受ける
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.p variants={reveal} className="mt-3.5 text-xs" style={{ color: "rgba(143,164,184,0.6)" }}>
          相談は無料・登録1分。しつこい営業はしません。
        </motion.p>

        <motion.div variants={reveal}>
          <SectionBridge text="毎月、いくらの人件費を無駄にしているか" />
        </motion.div>
      </motion.div>
    </section>
  );
}
