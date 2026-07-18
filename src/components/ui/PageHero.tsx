"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  badge: string;
  title: string;
  titleGradient?: string;
  description: string;
};

export default function PageHero({ badge, title, titleGradient, description }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-s3-bg overflow-hidden">
      {/* Aurora — desktop only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block" style={{ position: "absolute", width: "100vw", height: "60vh", top: "-10%", left: "0", background: "radial-gradient(ellipse at 50% 40%, rgba(0,200,255,0.07) 0%, rgba(0,200,255,0.018) 50%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="hidden sm:block" style={{ position: "absolute", width: "60vw", height: "50vh", bottom: "0", right: "0", background: "radial-gradient(ellipse at center, rgba(123,94,255,0.05) 0%, transparent 70%)", filter: "blur(70px)" }} />
      </div>
      <div className="absolute inset-0 hero-grid" style={{ opacity: 0.1 }} />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.2), transparent)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="text-xs tracking-[0.32em] text-s3-blue uppercase font-mono mb-5"
        >
          {badge}
        </motion.p>
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="font-bold text-s3-text leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {title}
          {titleGradient && (
            <span className="gradient-text ml-2">{titleGradient}</span>
          )}
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="text-s3-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(30,45,61,0.8), transparent)" }} />
    </section>
  );
}
