"use client";

import { motion } from "framer-motion";
import { Clock, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, title: "無駄な業務時間の削減", color: "#00C8FF" },
  { icon: Wallet, title: "人件費の最適化", color: "#7B5EFF" },
  { icon: TrendingUp, title: "利益につながる時間の創出", color: "#00E5A0" },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.22),transparent)" }} />
      <div className="relative max-w-[820px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
        >
          AI Benefits
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.6rem)", lineHeight: 1.4 }}
        >
          AIを導入した会社だけが得られる、<span className="gradient-text">時間と利益。</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
        >
          AIは人の仕事を奪う存在ではなく、社員が本来集中すべき仕事に時間を使うための戦力です。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 md:mt-9 flex items-center justify-center flex-wrap gap-x-6 gap-y-3 md:gap-x-10"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex items-center gap-4 sm:gap-8">
                {i > 0 && <span className="hidden sm:block w-px h-4" style={{ background: "rgba(143,164,184,0.25)" }} />}
                <div className="flex items-center gap-2">
                  <Icon size={17} style={{ color: b.color }} />
                  <span className="text-white font-bold" style={{ fontSize: "0.92rem" }}>{b.title}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
