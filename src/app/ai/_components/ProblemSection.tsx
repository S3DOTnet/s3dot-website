"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import SectionBridge from "./SectionBridge";

const taskLabels = ["資料作成", "メール対応", "情報検索", "入力作業", "書類整理"];

const totalWeekly = 17;
const totalMonthly = totalWeekly * 4;
const HOURLY_WAGE = 2500;
const monthlyCost = totalMonthly * HOURLY_WAGE;

export default function ProblemSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
        >
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-white mb-5" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.6rem)", lineHeight: 1.4 }}
        >
          あなたの会社は、毎月どれだけの
          <br className="hidden md:block" />
          時間を<span className="gradient-text">失っていますか？</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted mb-8 md:mb-10 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
        >
          {taskLabels.join("、")}——こうした日々の業務だけでも、
          <br className="hidden sm:block" />
          気づかないうちに、これだけの時間が積み上がっています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <p className="font-black text-white" style={{ fontSize: "clamp(2.4rem, 7vw, 4rem)", lineHeight: 1.15 }}>
            月<AnimatedCounter to={totalMonthly} className="gradient-text" /><span style={{ fontSize: "0.5em" }}>時間</span>
          </p>
          <p className="text-s3-muted mt-2" style={{ fontSize: "0.92rem" }}>
            人件費に換算すると、月<AnimatedCounter to={Math.round(monthlyCost / 10000)} suffix="万円" className="text-white font-bold" />規模になります。
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-s3-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          その時間には、必ず<span className="text-white font-semibold">人件費というコスト</span>が発生しています。
          本来、社員が集中すべきなのは、<span className="text-white font-semibold">営業・企画・顧客対応など利益に直結する仕事</span>のはずです。
        </motion.p>
        <p className="mt-3" style={{ fontSize: "0.7rem", color: "rgba(74,96,112,0.9)" }}>
          ※ 一般的な業務量・時給2,500円換算をもとにした目安の試算です。実際の時間・費用は業種・体制により異なります。
        </p>

        <SectionBridge text="このコスト、これからどうなっていくのか" />
      </div>
    </section>
  );
}
