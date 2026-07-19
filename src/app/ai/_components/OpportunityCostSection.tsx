"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingDown, Users, AlertTriangle } from "lucide-react";
import SectionBridge from "./SectionBridge";

const losses = [
  { icon: Wallet, num: "01", title: "人件費の機会損失", desc: "AI化すれば削減できたはずの人件費を、毎月そのまま払い続けることになります。", color: "#00C8FF" },
  { icon: TrendingDown, num: "02", title: "利益改善の遅れ", desc: "浮くはずだった時間が単純作業に消え、利益に変える機会を逃し続けます。", color: "#7B5EFF" },
  { icon: Users, num: "03", title: "競争力の低下", desc: "AIを導入した競合は、同じ人数でより多くの成果を出し始めています。", color: "#00E5A0" },
];

export default function OpportunityCostSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.22),transparent)" }} />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-7 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            The Cost of Inaction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            AIを導入しない企業が、
            <br />
            <span className="gradient-text">確実に失っているもの。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base"
          >
            それは、AIの便利さの話ではありません。人件費・利益・競争力という、経営そのものの話です。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-5 max-w-4xl mx-auto">
          {losses.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.num}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="card-luxury card-shine rounded-xl p-5 md:p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${l.color}, transparent)`, opacity: 0.6 }} />
                <p className="font-mono mb-3" style={{ fontSize: "0.72rem", color: `${l.color}99`, letterSpacing: "0.1em" }}>{l.num}</p>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${l.color}1A`, border: `1px solid ${l.color}40` }}>
                  <Icon size={19} style={{ color: l.color }} />
                </div>
                <h3 className="text-white font-bold mb-1.5" style={{ fontSize: "1.05rem" }}>{l.title}</h3>
                <p className="text-s3-muted text-sm leading-relaxed">{l.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 md:mt-8 rounded-xl p-4 md:p-5 flex items-start gap-3"
          style={{ background: "rgba(123,94,255,0.06)", border: "1px solid rgba(123,94,255,0.24)" }}
        >
          <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: "#7B5EFF" }} />
          <p className="text-s3-muted text-sm leading-relaxed">
            AIを導入する会社と、導入しない会社。差は<span className="text-white font-semibold">人件費・利益・競争力のすべて</span>で広がっていきます。
          </p>
        </motion.div>

        <SectionBridge text="その差を、埋める方法があります" />
      </div>
    </section>
  );
}
