"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Search, ArrowRight } from "lucide-react";

const rows = [
  { icon: FileText, label: "資料作成", before: "過去資料を探し、数時間かけて一から作成", after: "必要事項を伝えるだけで、AIが下書きと構成を作成" },
  { icon: Mail, label: "メール対応", before: "内容を確認し、毎回文章を一から考える", after: "要点を入力するだけで、返信文をすぐに作成" },
  { icon: Search, label: "情報検索", before: "複数のフォルダや資料から必要情報を探す", after: "質問するだけで、社内情報から回答を探せる" },
];

export default function BeforeAfterSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
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
            className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            仕組みを変えるだけで、
            <br className="md:hidden" />
            <span className="gradient-text">ここまで変わる。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base"
          >
            浮いた時間は、そのまま利益につながる時間になります。
          </motion.p>
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
                className="rounded-xl p-4 md:p-5 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr] items-center gap-3 md:gap-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(30,45,61,0.9)" }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} style={{ color: "#00C8FF" }} />
                  <p className="text-white font-bold text-sm whitespace-nowrap">{r.label}</p>
                </div>

                <p className="text-s3-muted text-sm">
                  <span className="font-mono mr-1.5" style={{ fontSize: "0.62rem", color: "rgba(143,164,184,0.55)" }}>BEFORE</span>
                  {r.before}
                </p>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={18} className="text-s3-blue" />
                </div>
                <div className="md:hidden flex items-center gap-2 text-s3-blue">
                  <ArrowRight size={14} className="rotate-90" />
                </div>

                <p className="text-white font-medium text-sm">
                  <span className="font-mono mr-1.5" style={{ fontSize: "0.62rem", color: "rgba(0,200,255,0.75)" }}>AFTER</span>
                  {r.after}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
