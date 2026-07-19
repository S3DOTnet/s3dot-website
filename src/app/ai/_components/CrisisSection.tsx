"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles, ArrowRight } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const waves = [
  { icon: Globe, era: "199X〜", label: "インターネット", desc: "を活用した企業が成長した" },
  { icon: Smartphone, era: "201X〜", label: "スマートフォン", desc: "を活用した企業が成長した" },
  { icon: Sparkles, era: "202X〜", label: "AI", desc: "を活用する企業が、これから成長する" },
];

export default function CrisisSection() {
  return (
    <section className="relative py-16 md:py-24 bg-s3-bg overflow-hidden">
      <NetworkBackground opacity={0.22} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "0%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(123,94,255,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            Why Now
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.4rem)", lineHeight: 1.45 }}
          >
            AIを導入する企業と、導入しない企業。
            <br />
            これから<span className="gradient-text-blue-purple">差が広がります。</span>
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* 縦の接続ライン (md以上) */}
          <div
            className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, rgba(0,200,255,0.3), rgba(123,94,255,0.3))" }}
          />
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 md:justify-between">
            {waves.map((w, i) => {
              const Icon = w.icon;
              const isLast = i === waves.length - 1;
              return (
                <motion.div
                  key={w.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="relative flex-1 md:max-w-[220px] card-luxury rounded-xl p-5 md:p-6 flex flex-col items-center text-center gap-2.5"
                  style={isLast ? { border: "1px solid rgba(123,94,255,0.35)", boxShadow: "0 0 30px rgba(123,94,255,0.12)" } : undefined}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isLast ? "linear-gradient(135deg, rgba(0,200,255,0.18), rgba(123,94,255,0.18))" : "rgba(0,200,255,0.10)",
                      border: `1px solid ${isLast ? "rgba(123,94,255,0.4)" : "rgba(0,200,255,0.24)"}`,
                    }}
                  >
                    <Icon size={19} style={{ color: isLast ? "#7B5EFF" : "#00C8FF" }} />
                  </div>
                  <p className="font-mono" style={{ fontSize: "0.7rem", color: "rgba(143,164,184,0.7)" }}>{w.era}</p>
                  <p className="text-white font-bold text-sm md:text-base">
                    {w.label}
                    <span className="block font-normal text-s3-muted mt-1" style={{ fontSize: "0.78rem", lineHeight: 1.6 }}>{w.desc}</span>
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16 text-s3-muted max-w-xl mx-auto leading-relaxed text-sm md:text-base flex items-center justify-center gap-2 flex-wrap"
        >
          変化に対応した企業ほど、成長してきました。
          <ArrowRight size={15} className="text-s3-blue" />
          <span className="text-white font-semibold">今、その波はAIです。</span>
        </motion.p>
      </div>
    </section>
  );
}
