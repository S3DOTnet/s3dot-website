"use client";

import { motion } from "framer-motion";
import LineCtaButton from "./LineCtaButton";
import TrustNote, { FULL_LINES } from "./TrustNote";

export default function FinalCtaSection() {
  return (
    <section className="relative py-16 md:py-22 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(6,199,85,0.25),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, rgba(123,94,255,0.05) 50%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-[720px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="font-bold text-white mb-5" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.5rem)", lineHeight: 1.4 }}
        >
          まずは御社の業務から、
          <br />
          <span className="gradient-text">AIで減らせる仕事</span>を
          <br />
          無料で洗い出します。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-s3-muted text-sm md:text-base leading-relaxed mb-9 md:mb-11"
        >
          LINEで現在のお悩みを簡単にお送りください。
          <br />
          S3DOTが内容を確認し、担当者よりご連絡します。
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <LineCtaButton location="final_cta" className="w-full sm:w-auto" />
          <div className="mt-5">
            <TrustNote lines={FULL_LINES} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
