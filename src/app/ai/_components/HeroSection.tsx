"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: shouldReduceMotion ? {} : { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const reveal: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
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
        style={{ height: "220px", background: "linear-gradient(to bottom, transparent, rgba(8,12,16,0.96))" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full mx-auto px-6 sm:px-10"
        style={{ maxWidth: "1080px", paddingTop: "clamp(6rem, 15vh, 9rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
      >
        <motion.div
          variants={reveal}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 md:mb-8"
          style={{ background: "rgba(0,200,255,0.07)", border: "1px solid rgba(0,200,255,0.24)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C8FF", boxShadow: "0 0 8px #00C8FF" }} />
          <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.28em", color: "rgba(0,200,255,0.85)" }}>
            AI導入・業務改善パートナー
          </span>
        </motion.div>

        <motion.h1 variants={reveal} className="font-black text-white tracking-tight" style={{ fontSize: "clamp(1.75rem, 5.4vw, 3.75rem)", lineHeight: 1.28 }}>
          どうせ使うAIなら、
          <br />
          <span className="gradient-text-blue-purple">早く始めた企業が有利です。</span>
        </motion.h1>

        <motion.p
          variants={reveal}
          className="mt-6 md:mt-8"
          style={{ fontSize: "clamp(0.92rem, 1.6vw, 1.1rem)", lineHeight: 1.9, color: "rgba(232,237,242,0.72)", maxWidth: "620px" }}
        >
          AIは「いつか必要になるもの」ではありません。
          <br className="hidden sm:block" />
          すでに多くの企業が、業務時間削減・人件費最適化・生産性向上のために
          AI活用を始めています。
        </motion.p>

        <motion.div
          variants={reveal}
          className="mt-8 md:mt-10 px-5 py-4 md:px-8 md:py-5 rounded-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(0,200,255,0.06), rgba(123,94,255,0.06))",
            border: "1px solid rgba(0,200,255,0.18)",
          }}
        >
          <p className="font-bold text-white" style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", lineHeight: 1.6 }}>
            AIを使う会社と、使わない会社。
            <br />
            これから企業の差は<span className="gradient-text">広がります。</span>
          </p>
        </motion.div>

        <motion.div variants={reveal} className="mt-9 md:mt-12 w-full flex justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white w-full sm:w-auto py-4 px-8 sm:px-12 transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.02rem)",
              background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
              boxShadow: "0 0 26px rgba(6,199,85,0.32), 0 8px 24px rgba(0,0,0,0.35)",
            }}
          >
            <LineIcon size={19} />
            無料AI活用相談をLINEで受ける
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.p variants={reveal} className="mt-4 text-xs" style={{ color: "rgba(143,164,184,0.6)" }}>
          相談は無料・登録1分。しつこい営業はしません。
        </motion.p>
      </motion.div>
    </section>
  );
}
