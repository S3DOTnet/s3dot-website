"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const targets = [
  "何から始めればいいか分からない",
  "社内にIT担当者がいない",
  "Excelや紙の業務が多い",
  "人手不足で困っている",
  "採用しても人が足りない",
  "同じ作業を毎月繰り返している",
  "社員によって仕事の品質に差がある",
  "顧客対応に時間を取られている",
  "業務が特定の担当者へ依存している",
  "AIツールを契約したが活用できていない",
  "AI導入の費用対効果が分からない",
];

export default function TargetSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <div className="relative max-w-[820px] mx-auto px-6">
        <div className="text-center mb-9 md:mb-11">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            AIに詳しい会社だけが、
            <br />
            <span className="gradient-text">対象ではありません。</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-2xl mx-auto mb-10 md:mb-12">
          {targets.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-2.5"
            >
              <CheckSquare size={15} className="shrink-0 mt-0.5" style={{ color: "#00E5A0" }} />
              <span className="text-s3-muted text-sm leading-relaxed">{t}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center text-white font-semibold max-w-md mx-auto"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", lineHeight: 1.7 }}
        >
          一つでも当てはまる場合は、改善できる業務がないか確認する価値があります。
        </motion.p>
      </div>
    </section>
  );
}
