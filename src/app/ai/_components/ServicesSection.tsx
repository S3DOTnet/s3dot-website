"use client";

import { motion } from "framer-motion";
import { Stethoscope, Workflow, MessagesSquare, Link2 } from "lucide-react";

const categories = [
  {
    icon: Stethoscope,
    title: "診断・活用支援",
    items: ["AI業務改善診断", "生成AI活用支援(ChatGPT・Claude等)", "見積書・請求書・提案書などの書類作成支援"],
    color: "#00C8FF",
  },
  {
    icon: Workflow,
    title: "業務自動化・効率化",
    items: ["データ入力・集計・転記の自動化", "メール・議事録・日報作成支援"],
    color: "#7B5EFF",
  },
  {
    icon: MessagesSquare,
    title: "顧客対応・社内対応",
    items: ["AIチャットボット開発", "企業専用AIチャット", "顧客対応・社内対応AI", "社内資料検索システム"],
    color: "#00E5A0",
  },
  {
    icon: Link2,
    title: "システム連携・専用開発",
    items: ["LINE連携・Google Drive連携", "既存業務システムとの連携", "企業専用AIシステム開発", "社員向け導入サポート・運用改善"],
    color: "#00C8FF",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[900px] mx-auto px-6">
        <div className="text-center mb-9 md:mb-11">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            小さな業務改善から、
            <br />
            <span className="gradient-text">企業専用システム</span>まで
            <br className="sm:hidden" />
            対応します。
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto mb-8 md:mb-10">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl p-5 md:p-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(30,45,61,0.9)" }}
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${c.color}1A`, border: `1px solid ${c.color}40` }}>
                    <Icon size={18} style={{ color: c.color }} />
                  </div>
                  <h3 className="text-white font-bold" style={{ fontSize: "1rem" }}>{c.title}</h3>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="text-s3-muted leading-relaxed flex gap-2" style={{ fontSize: "0.85rem" }}>
                      <span style={{ color: c.color }}>・</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center text-s3-muted max-w-lg mx-auto leading-relaxed"
          style={{ fontSize: "0.85rem" }}
        >
          高額なシステム開発を前提にはしません。既存ツールで改善できる場合は、無理に新規開発を勧めず、費用対効果を考えた方法をご提案します。
        </motion.p>
      </div>
    </section>
  );
}
