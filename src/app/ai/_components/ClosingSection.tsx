"use client";

import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

export default function ClosingSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <NetworkBackground opacity={0.3} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(0,200,255,0.07) 0%, rgba(123,94,255,0.05) 50%, transparent 70%)", filter: "blur(90px)" }} />
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="font-black text-white" style={{ fontSize: "clamp(1.7rem, 4.4vw, 3.1rem)", lineHeight: 1.4 }}
        >
          AIを知っているかどうかより、
          <br />
          <span className="gradient-text-blue-purple">自社にどう活かすかです。</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 md:mt-7 space-y-4"
        >
          <p className="text-s3-muted text-sm md:text-base leading-relaxed">
            多くの会社が、すでにAIについて知っています。
            <br />
            差がつくのは、それを<span className="text-white font-semibold">自社の業務に落とし込めるか</span>です。
          </p>
          <p className="text-white font-bold" style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)" }}>
            まずは、自社のどこにその余地があるかを知ることから。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
