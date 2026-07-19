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
          className="font-black text-white" style={{ fontSize: "clamp(1.8rem, 4.8vw, 3.4rem)", lineHeight: 1.3 }}
        >
          AIを使う会社と、
          <br />
          <span className="gradient-text-blue-purple">使わない会社。</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 md:mt-7 space-y-4"
        >
          <p className="text-s3-muted text-sm md:text-base leading-relaxed">
            これから企業の差は、
            <br />
            AIを知っているかでは決まりません。
          </p>
          <p className="text-white font-bold" style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.6rem)" }}>
            AIを<span className="gradient-text">利益につなげられるか</span>で決まります。
          </p>
          <p className="text-s3-muted text-sm md:text-base leading-relaxed pt-1">
            AIは未来の話ではありません。
            <br />
            すでに、始まっています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
