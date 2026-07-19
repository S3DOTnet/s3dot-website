"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Lightbulb, Route } from "lucide-react";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

const points = [
  { icon: ClipboardCheck, text: "利益改善できる業務" },
  { icon: Lightbulb, text: "コスト削減の可能性" },
  { icon: Route, text: "導入までの流れ" },
];

export default function FinalCtaSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(6,199,85,0.25),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, rgba(123,94,255,0.05) 50%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
        >
          Free Consultation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.7rem, 4.2vw, 2.9rem)", lineHeight: 1.35 }}
        >
          あなたの会社にも、
          <br />
          仕組み化で<span className="gradient-text">人件費を削減できる業務</span>が必ずあります。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted text-sm md:text-base leading-relaxed mb-6"
        >
          まずは、現在の業務のどこにAIを活かせるか、無料で診断します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-wrap justify-center gap-3 mb-9 md:mb-11"
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
            className="animate-cta-pulse group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white w-full sm:w-auto py-5 px-10 sm:px-14 transition-all duration-200 hover:brightness-110 hover:scale-[1.03]"
            style={{
              fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)",
              background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
            }}
          >
            <LineIcon size={20} />
            無料AI活用診断をLINEで受ける
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3.5 text-xs" style={{ color: "rgba(143,164,184,0.6)" }}>相談は無料です。しつこい営業はしません。</p>
        </motion.div>
      </div>
    </section>
  );
}
