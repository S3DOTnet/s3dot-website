"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const pitfalls = [
  "一部の社員しか使わない",
  "使い方が個人任せになる",
  "業務フローは今までと変わらない",
  "効果を測定できない",
  "数か月後には使われなくなる",
  "情報管理が曖昧になる",
];

const keys = ["どの業務を減らし、", "どこへ組み込み、", "どう運用するか。"];

export default function DifferentiationSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[800px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Our Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            ChatGPTを契約するだけでは、
            <br />
            会社の<span className="gradient-text">利益は変わりません。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base max-w-md mx-auto"
          >
            AIツールを契約し、社員へアカウントを配るだけでは、次のような状態になりがちです。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-lg mx-auto mb-10 md:mb-12">
          {pitfalls.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2.5"
            >
              <X size={14} className="shrink-0" style={{ color: "#8FA4B8" }} />
              <span className="text-s3-muted text-sm">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-s3-muted text-sm md:text-base mb-3">重要なのは、AIを導入することではありません。</p>
          <div className="inline-flex flex-col items-center gap-1">
            {keys.map((k) => (
              <p key={k} className="text-white font-bold" style={{ fontSize: "clamp(1.05rem, 2.1vw, 1.3rem)" }}>
                <span className="gradient-text">{k}</span>
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-lg mx-auto text-center rounded-2xl px-6 py-6 md:px-8 md:py-7"
          style={{ background: "linear-gradient(145deg, rgba(0,200,255,0.05), rgba(123,94,255,0.05))", border: "1px solid rgba(0,200,255,0.16)" }}
        >
          <p className="text-s3-muted text-sm leading-relaxed">
            S3DOTはAIツールの販売会社
            <br className="sm:hidden" />
            ではありません。
          </p>
          <p className="text-white font-bold mt-2 leading-relaxed" style={{ fontSize: "clamp(0.98rem, 1.9vw, 1.15rem)" }}>
            御社の業務を理解し、利益につながる使い方を
            <br className="hidden sm:block" />
            設計・導入する<span className="gradient-text">AI活用パートナー</span>です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
