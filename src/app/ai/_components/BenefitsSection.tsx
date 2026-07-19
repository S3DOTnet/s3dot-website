"use client";

import { motion } from "framer-motion";
import { Clock, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, num: "01", title: "無駄な業務時間削減", desc: "資料作成・入力・検索など、繰り返しの作業をAIが引き受け、残業や追加人員のコストを抑えます。", color: "#00C8FF" },
  { icon: Wallet, num: "02", title: "人件費最適化", desc: "増員せずに、今の人員で成果を最大化できる体制をつくります。", color: "#7B5EFF" },
  { icon: TrendingUp, num: "03", title: "利益につながる時間創出", desc: "生まれた時間を、営業・企画・顧客対応など利益に直結する仕事へ。", color: "#00E5A0" },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.22),transparent)" }} />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-7 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            AI Benefits
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            AIを導入した会社だけが得られる、<span className="gradient-text">時間と利益。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base"
          >
            AIは人の仕事を奪う存在ではなく、社員が本来集中すべき仕事に時間を使うための戦力です。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="card-luxury card-shine rounded-xl p-5 md:p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${b.color}, transparent)`, opacity: 0.6 }} />
                <p className="font-mono mb-3" style={{ fontSize: "0.72rem", color: `${b.color}99`, letterSpacing: "0.1em" }}>{b.num}</p>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${b.color}1A`, border: `1px solid ${b.color}40` }}>
                  <Icon size={19} style={{ color: b.color }} />
                </div>
                <h3 className="text-white font-bold mb-1.5" style={{ fontSize: "1.05rem" }}>{b.title}</h3>
                <p className="text-s3-muted text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
