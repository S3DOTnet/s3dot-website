"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Search, ArrowRight } from "lucide-react";

const rows = [
  { icon: FileText, label: "資料作成", before: "数時間かけて作成", after: "AIが下書き・整理をサポート" },
  { icon: Mail, label: "メール対応", before: "毎回文章を一から作成", after: "AIが返信作成をサポート" },
  { icon: Search, label: "情報検索", before: "資料をあちこち探す", after: "AIへ質問するだけ" },
];

export default function BeforeAfterSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", right: "0%", top: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)", filter: "blur(70px)" }} />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-9">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Before / After
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            導入前と導入後で、
            <br className="md:hidden" />
            <span className="gradient-text">ここまで変わる。</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="card-luxury rounded-xl p-4 md:p-5 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr] items-center gap-3 md:gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,200,255,0.10)", border: "1px solid rgba(0,200,255,0.24)" }}>
                    <Icon size={16} style={{ color: "#00C8FF" }} />
                  </div>
                  <p className="text-white font-bold text-sm whitespace-nowrap">{r.label}</p>
                </div>

                <div className="rounded-lg px-4 py-2.5" style={{ background: "rgba(74,96,112,0.08)", border: "1px solid rgba(74,96,112,0.2)" }}>
                  <p className="uppercase font-mono mb-1" style={{ fontSize: "0.62rem", color: "rgba(143,164,184,0.6)", letterSpacing: "0.12em" }}>Before</p>
                  <p className="text-s3-muted text-sm">{r.before}</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={18} className="text-s3-blue" />
                </div>
                <div className="md:hidden flex items-center gap-2 text-s3-blue">
                  <ArrowRight size={14} className="rotate-90" />
                </div>

                <div className="rounded-lg px-4 py-2.5" style={{ background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.24)" }}>
                  <p className="uppercase font-mono mb-1" style={{ fontSize: "0.62rem", color: "rgba(0,200,255,0.75)", letterSpacing: "0.12em" }}>After</p>
                  <p className="text-white font-medium text-sm">{r.after}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
