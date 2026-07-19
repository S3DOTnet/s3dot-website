"use client";

import { motion } from "framer-motion";
import SectionBridge from "./SectionBridge";

export default function OpportunityCostSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.22),transparent)" }} />
      <div className="relative max-w-[820px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
        >
          The Cost of Inaction
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-5" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.4rem)", lineHeight: 1.45 }}
        >
          何もしないことで、
          <br />
          本来削減できる<span className="gradient-text">時間やコスト</span>を、
          <br />
          失い続けています。
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted leading-relaxed max-w-lg mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
        >
          本来削減できたはずの人件費を、毎月そのまま払い続ける。
          浮くはずだった時間が、単純作業に使われ続ける。
          その間にも、仕組みを変えた企業は、同じ人数でより多くの成果を出し始めています。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-white font-semibold"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
        >
          特別な会社の話ではありません。多くの企業が、静かに直面している現実です。
        </motion.p>

        <SectionBridge text="その差を、埋める方法があります" />
      </div>
    </section>
  );
}
