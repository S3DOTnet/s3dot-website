"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Lightbulb, Route } from "lucide-react";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

const points = [
  { icon: ClipboardCheck, text: "AI化できる業務" },
  { icon: Lightbulb, text: "改善できる可能性" },
  { icon: Route, text: "導入までの流れ" },
];

export default function FinalCtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(6,199,85,0.25),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, rgba(123,94,255,0.05) 50%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-5"
        >
          Free Consultation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 3.8vw, 2.6rem)", lineHeight: 1.4 }}
        >
          あなたの会社では、
          <br />
          AIで<span className="gradient-text">改善できる業務</span>が必ずあります。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted text-sm md:text-base leading-relaxed mb-8"
        >
          LINEで簡単に相談できます。以下を整理してお伝えします。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
        >
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.2)" }}
              >
                <Icon size={14} style={{ color: "#00C8FF" }} />
                <span className="text-white text-sm">{p.text}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white w-full sm:w-auto py-4 px-8 sm:px-12 transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
            style={{
              fontSize: "clamp(0.9rem, 1.3vw, 1.02rem)",
              background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
              boxShadow: "0 0 28px rgba(6,199,85,0.34), 0 8px 26px rgba(0,0,0,0.35)",
            }}
          >
            <LineIcon size={19} />
            無料AI活用相談をLINEで受ける
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs" style={{ color: "rgba(143,164,184,0.6)" }}>相談は無料です。しつこい営業はしません。</p>
        </motion.div>
      </div>
    </section>
  );
}
