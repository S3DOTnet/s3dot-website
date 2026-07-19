"use client";

import { motion } from "framer-motion";
import { Rocket, Workflow, Code2, MessageSquareText, Sparkles } from "lucide-react";

const services = [
  { icon: Rocket, title: "AI導入支援", desc: "現状の業務を整理し、AIをどこにどう組み込むかを設計・実装します。", color: "#00C8FF" },
  { icon: Workflow, title: "業務自動化", desc: "繰り返し作業やデータ処理を自動化し、手作業の時間を削減します。", color: "#7B5EFF" },
  { icon: Code2, title: "企業専用AI開発", desc: "既存システムと連携する、御社専用のAIシステムを開発します。", color: "#00E5A0" },
  { icon: MessageSquareText, title: "AIチャットボット開発", desc: "問い合わせ対応や社内ヘルプデスクをAIチャットボットが代行します。", color: "#00C8FF" },
  { icon: Sparkles, title: "生成AI活用支援", desc: "ChatGPT等の生成AIを、実務で成果につながる形で活用できるよう支援します。", color: "#7B5EFF" },
];

export default function ServicesSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "10%", top: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(123,94,255,0.06) 0%, transparent 70%)", filter: "blur(70px)" }} />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-9">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            提供する<span className="gradient-text">サービス</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-5 max-w-5xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-luxury card-shine rounded-xl p-5 flex flex-col gap-2.5"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${s.color}1A`, border: `1px solid ${s.color}40` }}>
                  <Icon size={19} style={{ color: s.color }} />
                </div>
                <h3 className="text-white font-bold" style={{ fontSize: "1rem" }}>{s.title}</h3>
                <p className="text-s3-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
