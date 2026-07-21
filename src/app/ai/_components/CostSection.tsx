"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "1日", value: 2.5, decimals: 1, unit: "時間" },
  { label: "1か月", value: 50, decimals: 0, unit: "時間", approx: true },
  { label: "1年間", value: 600, decimals: 0, unit: "時間", approx: true },
];

const profitWork = ["営業", "提案", "顧客対応", "商品・サービス改善", "新規事業", "経営判断", "社員教育"];

export default function CostSection() {
  return (
    <section
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #E6ECFA 45%, #EEEAFB 100%)" }}
    >
      <div className="relative max-w-[900px] mx-auto px-6">
        <div className="text-center mb-9 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase font-mono mb-3"
            style={{ color: "#0077B6" }}
          >
            The Hidden Cost
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.6rem)", lineHeight: 1.4, color: "#0B1220" }}
          >
            1日30分でも、
            <br />
            1年間では<span style={{ color: "#6D42C7" }}>大きな差</span>
            <br className="sm:hidden" />
            になります。
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-lg mx-auto mb-8 md:mb-10"
          style={{ color: "#3D4756", fontSize: "clamp(0.9rem, 1.5vw, 1.02rem)", lineHeight: 1.8 }}
        >
          例えば、社員5人がそれぞれ1日30分、定型的な事務作業へ時間を使っている場合。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center flex-wrap gap-4 sm:gap-2 mb-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4 sm:gap-2">
              <div className="flex flex-col items-center">
                <p className="font-mono uppercase mb-1" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#6B7686" }}>{s.label}</p>
                <p className="font-black" style={{ fontSize: "clamp(1.8rem, 5vw, 2.9rem)", color: "#0B1220" }}>
                  {s.approx && <span style={{ fontSize: "0.5em", color: "#6B7686" }}>約</span>}
                  <AnimatedCounter to={s.value} decimals={s.decimals} style={{ background: "linear-gradient(90deg,#0077B6,#6D42C7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} />
                  <span style={{ fontSize: "0.42em", color: "#3D4756" }}>{s.unit}</span>
                </p>
              </div>
              {i < stats.length - 1 && (
                <ArrowRight size={20} className="mt-4 shrink-0" style={{ color: "#B7BFCC" }} />
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10 md:mb-12" style={{ fontSize: "0.76rem", color: "#5A6474" }}
        >
          ※ これは、1日8時間・月20営業日として計算した一例です。実際の削減効果は、業務内容や運用方法によって異なります。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto mb-9 md:mb-11"
          style={{ color: "#3D4756", fontSize: "clamp(0.9rem, 1.5vw, 1.02rem)", lineHeight: 1.8 }}
        >
          毎日の小さな作業も、会社全体で積み上げると、大きな人件費と機会損失になります。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl px-6 py-7 md:px-10 md:py-8 text-center"
          style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(11,18,32,0.08)" }}
        >
          <p style={{ color: "#3D4756", fontSize: "0.92rem" }}>AI導入の目的は、社員を減らすことではありません。</p>
          <p className="font-bold mt-1.5" style={{ color: "#0B1220", fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)" }}>
            人にしかできない仕事へ、<span style={{ color: "#6D42C7" }}>時間を戻す</span>ことです。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {profitWork.map((w) => (
              <span
                key={w}
                className="px-3.5 py-1.5 rounded-full font-medium"
                style={{ fontSize: "0.8rem", color: "#0077B6", background: "rgba(0,119,182,0.08)", border: "1px solid rgba(0,119,182,0.2)" }}
              >
                {w}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
