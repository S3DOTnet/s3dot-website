"use client";

import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

export default function ClosingSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <NetworkBackground opacity={0.28} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, rgba(123,94,255,0.05) 50%, transparent 70%)", filter: "blur(90px)" }} />
      </div>

      <div className="relative max-w-[720px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="font-black text-white mb-6 md:mb-7" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.4rem)", lineHeight: 1.45 }}
        >
          人を増やす前に、
          <br />
          その仕事を<span className="gradient-text-blue-purple">減らせないか</span>
          <br />
          確認してください。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-3 mb-8 md:mb-9"
        >
          <p className="text-s3-muted text-sm md:text-base leading-loose">
            AI導入は、未来のための特別な投資ではありません。
            <br />
            毎月発生している業務時間、人件費、外注費を見直すための経営改善です。
          </p>
          <p className="text-s3-muted text-sm md:text-base leading-loose">
            今はまだ、多くの企業が様子を見ています。
            <br />
            だからこそ、早く始めた企業ほど、自社に合った活用方法を早く見つけ、改善を積み重ねられます。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          className="font-bold text-white" style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)", lineHeight: 1.5 }}
        >
          どうせ使うAIなら、
          <br />
          <span className="gradient-text">早く始めた企業が有利です。</span>
        </motion.p>
      </div>
    </section>
  );
}
