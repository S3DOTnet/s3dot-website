"use client";

import { motion } from "framer-motion";
import { Rocket, Workflow, Code2, MessageSquareText, Sparkles } from "lucide-react";

const services = [
  { icon: Rocket, title: "AI導入支援", desc: "資料作成や定型業務など御社の日々の業務を整理し、コスト削減と利益改善につながる形で導入まで支援します。", color: "#00C8FF" },
  { icon: Workflow, title: "業務自動化", desc: "入力作業や集計など繰り返しの業務を自動化し、人件費と時間のムダを削減します。", color: "#7B5EFF" },
  { icon: Code2, title: "企業専用AI開発", desc: "受発注や顧客管理など既存システムと連携する御社専用のシステムを開発し、業務効率と利益率を高めます。", color: "#00E5A0" },
  { icon: MessageSquareText, title: "AIチャットボット開発", desc: "問い合わせ対応や社内質問をAIがサポートし、対応時間と人件費を削減します。", color: "#00C8FF" },
  { icon: Sparkles, title: "生成AI活用支援", desc: "文章作成や社内資料づくりなど日々の実務で使いこなせるよう支援し、作業時間を短縮します。", color: "#7B5EFF" },
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
            className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            あなたの会社の<span className="gradient-text">利益を増やす</span>AI活用
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base"
          >
            業務理解から導入・運用まで、コスト削減と利益向上に直結する形でご支援します。
          </motion.p>
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
