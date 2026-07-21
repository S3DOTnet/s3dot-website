"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import NetworkBackground from "./NetworkBackground";
import LineCtaButton from "./LineCtaButton";
import TrustNote from "./TrustNote";
import SectionBridge from "./SectionBridge";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: shouldReduceMotion ? {} : { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const reveal: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#080C10" }}>
      <NetworkBackground opacity={0.5} />
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
        style={{ background: "radial-gradient(ellipse 88% 78% at 50% 30%, transparent 34%, rgba(8,12,16,0.7) 100%)" }}
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
        style={{ maxWidth: "820px", paddingTop: "clamp(5.5rem, 13vh, 8rem)", paddingBottom: "clamp(2.5rem, 6vh, 4rem)" }}
      >
        <motion.h1 variants={reveal} className="font-black text-white tracking-tight" style={{ fontSize: "clamp(1.7rem, 5.6vw, 3.6rem)", lineHeight: 1.35 }}>
          どうせ使うAIなら、
          <br />
          <span className="gradient-text-blue-purple">
            早く始めた企業が
            <br className="sm:hidden" />
            有利です。
          </span>
        </motion.h1>

        <motion.div
          variants={reveal}
          className="mt-6 md:mt-7 px-5 py-4 md:px-8 md:py-5 rounded-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(0,200,255,0.07), rgba(123,94,255,0.07))",
            border: "1px solid rgba(0,200,255,0.2)",
          }}
        >
          <p className="font-bold text-white" style={{ fontSize: "clamp(1rem, 2.1vw, 1.3rem)", lineHeight: 1.6 }}>
            人を増やす前に、
            <br />
            今ある仕事を<span className="gradient-text">減らせないか</span>
            <br className="sm:hidden" />
            確認してください。
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          className="mt-7 md:mt-8 flex flex-col gap-4"
          style={{ fontSize: "clamp(0.88rem, 1.5vw, 1.02rem)", lineHeight: 1.9, color: "rgba(232,237,242,0.68)", maxWidth: "620px" }}
        >
          <p>見積書、請求書、資料作成、メール返信、データ入力、情報検索。</p>
          <p>社員が毎月繰り返している仕事の中には、AIやシステムに任せられる可能性がある業務が数多くあります。</p>
        </motion.div>

        <motion.div variants={reveal} className="mt-6 md:mt-7 max-w-xl">
          <p className="text-white font-semibold" style={{ fontSize: "clamp(0.92rem, 1.6vw, 1.08rem)", lineHeight: 1.85 }}>
            S3DOTは、AIツールを販売するだけの
            <br className="sm:hidden" />
            会社ではありません。
          </p>
          <p className="mt-2" style={{ fontSize: "clamp(0.88rem, 1.5vw, 1.02rem)", lineHeight: 1.85, color: "rgba(232,237,242,0.68)" }}>
            現在の業務を確認し、削減できる作業を見つけ、実際に仕事で使える仕組みとして導入する会社です。
          </p>
        </motion.div>

        <motion.p
          variants={reveal}
          className="mt-8 md:mt-9 font-bold gradient-text"
          style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.6rem)" }}
        >
          削れる時間を、利益を生む時間へ。
        </motion.p>

        <motion.div variants={reveal} className="mt-7 md:mt-9 w-full flex justify-center">
          <LineCtaButton location="hero" className="w-full sm:w-auto" />
        </motion.div>
        <motion.div variants={reveal} className="mt-4">
          <TrustNote />
        </motion.div>

        <motion.div variants={reveal}>
          <SectionBridge text="毎月、いくらの人件費を払っていますか" />
        </motion.div>
      </motion.div>
    </section>
  );
}
