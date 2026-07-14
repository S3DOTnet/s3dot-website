"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import TransparentLogo from "@/components/ui/TransparentLogo";

/* ─────────────────────────────────────────────
   CSS-only Aurora — 3 layered radial gradients
───────────────────────────────────────────── */
function Aurora() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* aurora orbs — モバイルでは非表示 (filter:blur + animation は iOS で重い) */}
      <div
        className="hidden sm:block"
        style={{
          position: "absolute",
          width: "130vw", height: "90vh",
          top: "-25%", left: "-15%",
          background:
            "radial-gradient(ellipse at 50% 44%, rgba(0,200,255,0.09) 0%, rgba(0,140,210,0.022) 44%, transparent 64%)",
          filter: "blur(80px)",
          animation: "aurora-drift 26s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="hidden sm:block"
        style={{
          position: "absolute",
          width: "72vw", height: "68vh",
          top: "-5%", right: "-12%",
          background:
            "radial-gradient(ellipse at center, rgba(123,94,255,0.07) 0%, rgba(90,60,200,0.016) 52%, transparent 72%)",
          filter: "blur(95px)",
          animation: "aurora-drift 38s ease-in-out infinite reverse",
          animationDelay: "-16s",
          willChange: "transform",
        }}
      />
      <div
        className="hidden sm:block"
        style={{
          position: "absolute",
          width: "80vw", height: "55vh",
          bottom: "-18%", left: "10%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,200,255,0.038) 0%, rgba(120,80,255,0.026) 48%, transparent 70%)",
          filter: "blur(95px)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   LINE Icon
───────────────────────────────────────────── */
function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#06C755" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 450], [1, 0.28]);
  const ghostY    = useTransform(scrollY, [0, 700], [0, 55]);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const reveal: Variants = {
    hidden:  { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.80, ease: "easeOut" as const } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080C10" }}
    >
      {/* ── Aurora + grid ── */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 hero-grid" style={{ opacity: 0.13 }} />
        <Aurora />
      </motion.div>

      {/* ── Ghost logo watermark — behind all content ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          style={{
            y: ghostY,
            opacity: 0.045,
            width: "min(64vh, 64vw)",
            height: "min(64vh, 64vw)",
            marginTop: "-4%",
          }}
        >
          <TransparentLogo
            src="/images/logo.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Vignette — pulls focus to center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 88% 80% at 50% 44%, transparent 34%, rgba(8,12,16,0.65) 100%)",
        }}
      />

      {/* Top edge accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,200,255,0.18) 28%, rgba(123,94,255,0.14) 72%, transparent 100%)",
        }}
      />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "240px",
          background: "linear-gradient(to bottom, transparent, rgba(8,12,16,0.94))",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full mx-auto px-8 sm:px-16"
        style={{
          maxWidth: "1300px",
          paddingTop: "clamp(4rem, 13vh, 10rem)",
          paddingBottom: "clamp(4rem, 11vh, 8rem)",
        }}
      >

        {/* ── Label — minimal mono ── */}
        <motion.div variants={reveal} className="mb-7 sm:mb-10">
          <p
            className="font-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.38em",
              color: "rgba(0,200,255,0.58)",
            }}
          >
            AI PARTNER ·&nbsp; S3DOT
          </p>
        </motion.div>

        {/* ── Mobile heading (< 640px): 2 lines fixed ── */}
        <motion.div
          variants={reveal}
          className="sm:hidden w-full text-center"
          style={{ marginBottom: "clamp(1.5rem, 5vh, 4.5rem)" }}
        >
          <h1
            className="font-black text-white"
            style={{
              fontSize: "clamp(1.2rem, 5.8vw, 2.6rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.028em",
              fontFeatureSettings: '"palt"',
              marginBottom: "0.25rem",
            }}
          >
            AIは特別なものじゃない。
          </h1>
          <div
            className="font-black"
            style={{
              fontSize: "clamp(1.05rem, 5.2vw, 1.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.020em",
              fontFeatureSettings: '"palt"',
              background: "linear-gradient(110deg, #00C8FF 0%, #5BAFFF 34%, #7B5EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            もう仕事のスタンダードです。
          </div>
        </motion.div>

        {/* ── Desktop heading (≥ 640px): original 2-element layout ── */}
        <motion.h1
          variants={reveal}
          className="hidden sm:block font-black text-white"
          style={{
            fontSize: "clamp(2.6rem, 6.0vw, 6.0rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.030em",
            fontFeatureSettings: '"palt"',
            marginBottom: "0.44rem",
          }}
        >
          <span className="inline-block">AIは特別な</span>
          <span className="inline-block">ものじゃない。</span>
        </motion.h1>
        <motion.h2
          variants={reveal}
          className="hidden sm:block font-black"
          style={{
            fontSize: "clamp(1.8rem, 4.2vw, 4.8rem)",
            lineHeight: 1.07,
            letterSpacing: "-0.020em",
            fontFeatureSettings: '"palt"',
            background: "linear-gradient(110deg, #00C8FF 0%, #5BAFFF 34%, #7B5EFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "clamp(1.8rem, 5vh, 4.5rem)",
          }}
        >
          <span className="inline-block">もう、仕事の</span>
          <span className="inline-block">スタンダードです。</span>
        </motion.h2>

        {/* ── Accent rule ── */}
        <motion.div
          variants={reveal}
          style={{
            width: "40px",
            height: "1px",
            background: "linear-gradient(90deg, #00C8FF, #7B5EFF)",
            opacity: 0.44,
            marginBottom: "clamp(1.4rem, 3.5vh, 3.5rem)",
          }}
        />

        {/* ── Sub copy ── */}
        <motion.p
          variants={reveal}
          style={{
            fontSize: "clamp(0.90rem, 1.55vw, 1.08rem)",
            lineHeight: 1.75,
            color: "rgba(232,237,242,0.60)",
            letterSpacing: "0.016em",
            maxWidth: "500px",
            marginBottom: "clamp(1.8rem, 5vh, 4.5rem)",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          }}
        >
          使わない方がコストも時間も、
          <br className="sm:hidden" />
          確実に高くつく時代へ。
          <br className="sm:hidden" />
          S3DOTは、
          <span style={{ color: "#00C8FF", fontWeight: 600 }}>AIを「使える力」</span>
          に変え、
          <br className="sm:hidden" />
          会社の成長を加速させます。
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          variants={reveal}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full"
        >
          {/* Primary */}
          <a
            href="#contact"
            className="hero-cta-primary group relative inline-flex items-center justify-center gap-2.5 rounded-[14px] font-bold text-white overflow-hidden w-full sm:w-auto py-3 sm:py-[1.1rem] px-7 sm:px-11"
            style={{
              fontSize: "clamp(0.875rem, 1.25vw, 0.975rem)",
              letterSpacing: "0.04em",
            }}
          >
            <span className="relative z-10">まずは無料で相談する</span>
            <span
              className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
              style={{ fontSize: "0.85rem" }}
            >
              →
            </span>
          </a>

          {/* Secondary — LINE */}
          <a
            href="https://line.me/R/ti/p/@377ryvgd"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary inline-flex items-center justify-center gap-2.5 rounded-[14px] font-medium text-white w-full sm:w-auto py-3 sm:py-[1.1rem] px-6 sm:px-9"
            style={{
              fontSize: "clamp(0.875rem, 1.25vw, 0.975rem)",
              letterSpacing: "0.03em",
            }}
          >
            <LineIcon />
            公式LINEで相談する
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          variants={reveal}
          style={{
            marginTop: "0.9rem",
            fontSize: "0.72rem",
            color: "rgba(74,96,112,0.78)",
            letterSpacing: "0.04em",
          }}
        >
          相談は無料です。
        </motion.p>
      </motion.div>

      {/* ── Scroll indicator — light trail ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
      >
        <span
          style={{
            fontSize: "8px",
            letterSpacing: "0.50em",
            color: "rgba(74,96,112,0.52)",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          Scroll
        </span>
        <div
          className="relative overflow-hidden"
          style={{ width: "1px", height: "44px", background: "rgba(74,96,112,0.15)" }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "55%",
              background: "linear-gradient(to bottom, transparent, rgba(0,200,255,0.48))",
            }}
            animate={{ y: ["0%", "182%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.85,
              ease: "linear" as const,
              repeatDelay: 0.4,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
