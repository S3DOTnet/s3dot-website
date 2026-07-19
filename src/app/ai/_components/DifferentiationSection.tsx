"use client";

import { motion } from "framer-motion";
import { X, Search, ListChecks, Compass, Rocket, HeartHandshake } from "lucide-react";

const flow = [
  { icon: Search, label: "業務理解" },
  { icon: ListChecks, label: "課題分析" },
  { icon: Compass, label: "AI活用設計" },
  { icon: Rocket, label: "導入" },
  { icon: HeartHandshake, label: "改善サポート" },
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-16 md:py-24 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            Our Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.4rem)", lineHeight: 1.45 }}
          >
            AIを導入するだけでは、
            <br />
            会社は<span className="gradient-text">変わりません。</span>
          </motion.h2>
        </div>

        {/* 「ChatGPT契約しただけ」で終わる問題提起 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto mb-10 md:mb-14 rounded-xl p-5 md:p-6 flex items-start gap-3.5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(30,45,61,0.9)" }}
        >
          <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(143,164,184,0.12)", border: "1px solid rgba(143,164,184,0.25)" }}>
            <X size={13} style={{ color: "#8FA4B8" }} />
          </div>
          <p className="text-s3-muted text-sm leading-relaxed">
            多くの企業は、「ChatGPTを契約した」で終わっています。
            重要なのは、<span className="text-white font-semibold">自社の業務にどうAIを組み込むか</span>です。
          </p>
        </motion.div>

        {/* S3DOTのポジション */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-s3-muted text-sm md:text-base leading-relaxed">
            S3DOTは、AIツールを販売するだけの会社ではありません。
            <br />
            <span className="text-white font-semibold">企業の業務を理解し、利益につながるAI活用を設計する会社</span>です。
          </p>
        </motion.div>

        {/* 業務理解→...→改善サポート フロー */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
          {flow.map((f, i) => {
            const Icon = f.icon;
            const isLast = i === flow.length - 1;
            return (
              <div key={f.label} className="flex flex-col md:flex-row items-center gap-3 md:gap-2 md:flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="card-luxury rounded-xl p-4 md:p-5 flex flex-row md:flex-col items-center gap-3 md:gap-2.5 w-full md:text-center"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,200,255,0.10)", border: "1px solid rgba(0,200,255,0.24)" }}>
                    <Icon size={16} style={{ color: "#00C8FF" }} />
                  </div>
                  <p className="text-white font-semibold text-sm">{f.label}</p>
                </motion.div>
                {!isLast && (
                  <div className="text-s3-dim shrink-0 rotate-90 md:rotate-0" style={{ fontSize: "0.9rem" }}>→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
