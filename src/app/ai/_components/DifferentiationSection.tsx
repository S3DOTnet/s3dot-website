"use client";

import { motion } from "framer-motion";

export default function DifferentiationSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "20%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-[820px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
        >
          Our Difference
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.6rem)", lineHeight: 1.4 }}
        >
          AIを導入するだけでは、
          <br />
          会社は<span className="gradient-text">変わりません。</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted leading-loose max-w-lg mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.02rem)" }}
        >
          多くの企業は、AIツールを導入するだけで終わっています。
          重要なのは、自社の業務にどう組み込み、どの業務を改善し、どれだけ利益につなげるかです。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 leading-loose max-w-lg mx-auto"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
        >
          <span className="text-white font-bold">S3DOTは、AIツールを販売する会社ではありません。</span>
          <br />
          <span className="text-s3-muted">
            企業ごとの業務を分析し、最適なAI活用方法を設計・導入・改善まで支援する<span className="text-white font-semibold">利益改善パートナー</span>です。
          </span>
        </motion.p>
      </div>
    </section>
  );
}
