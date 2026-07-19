"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, FileCheck, Rocket } from "lucide-react";

const steps = [
  { step: "STEP 1", icon: MessageCircle, title: "無料LINE相談", desc: "公式LINEから、現状の課題やお悩みをお聞かせください。" },
  { step: "STEP 2", icon: Search, title: "業務分析", desc: "現状の業務内容をヒアリングし、AI化できる部分を洗い出します。" },
  { step: "STEP 3", icon: FileCheck, title: "改善提案", desc: "御社に合ったAI活用プランと導入イメージをご提案します。" },
  { step: "STEP 4", icon: Rocket, title: "導入・サポート", desc: "導入後も運用・改善を継続的にサポートします。" },
];

export default function FlowSection() {
  return (
    <section className="relative py-16 md:py-24 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.4rem)", lineHeight: 1.45 }}
          >
            導入までの<span className="gradient-text">流れ</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="hidden md:block absolute top-[38px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, rgba(0,200,255,0.35), rgba(123,94,255,0.35))" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center gap-3"
                >
                  <div
                    className="relative z-10 w-[76px] h-[76px] rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(145deg, rgba(0,200,255,0.12), rgba(123,94,255,0.12))",
                      border: "1px solid rgba(0,200,255,0.3)",
                      boxShadow: "0 0 24px rgba(0,200,255,0.10)",
                    }}
                  >
                    <Icon size={26} style={{ color: "#00C8FF" }} />
                  </div>
                  <p className="font-mono" style={{ fontSize: "0.7rem", color: "rgba(0,200,255,0.75)", letterSpacing: "0.1em" }}>{s.step}</p>
                  <p className="text-white font-bold text-sm md:text-base">{s.title}</p>
                  <p className="text-s3-muted text-sm leading-relaxed max-w-[220px]">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
