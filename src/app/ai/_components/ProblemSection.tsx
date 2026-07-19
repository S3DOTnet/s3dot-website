"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Search, Keyboard, FolderKanban } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import SectionBridge from "./SectionBridge";

const tasks = [
  { icon: FileText, label: "資料作成", hours: 5 },
  { icon: Mail, label: "メール対応", hours: 4 },
  { icon: Search, label: "情報検索", hours: 3 },
  { icon: Keyboard, label: "入力作業", hours: 3 },
  { icon: FolderKanban, label: "書類整理", hours: 2 },
];

const totalWeekly = tasks.reduce((sum, t) => sum + t.hours, 0);
const totalMonthly = totalWeekly * 4;
const HOURLY_WAGE = 2500;
const monthlyCost = totalMonthly * HOURLY_WAGE;

export default function ProblemSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-9">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)", lineHeight: 1.4 }}
          >
            あなたの会社は、毎月どれだけの
            <br className="hidden md:block" />
            時間を<span className="gradient-text">失っていますか？</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3.5 max-w-4xl mx-auto mb-6 md:mb-8">
          {tasks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-luxury rounded-xl p-3.5 md:p-4 flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,200,255,0.10)", border: "1px solid rgba(0,200,255,0.24)" }}
                >
                  <Icon size={16} style={{ color: "#00C8FF" }} />
                </div>
                <p className="text-white text-sm font-semibold">{t.label}</p>
                <p className="text-s3-dim" style={{ fontSize: "0.72rem" }}>目安 週{t.hours}時間</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl p-5 md:p-7 text-center"
          style={{ background: "linear-gradient(145deg, rgba(0,200,255,0.05), rgba(123,94,255,0.05))", border: "1px solid rgba(0,200,255,0.16)" }}
        >
          <p className="text-s3-muted text-sm mb-2.5">これら5つの業務だけでも、目安として</p>
          <p className="font-black text-white" style={{ fontSize: "clamp(1.9rem, 4.6vw, 2.75rem)" }}>
            月<AnimatedCounter to={totalMonthly} className="gradient-text" /> 時間
          </p>

          <div className="mt-5 md:mt-6 grid grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto">
            <div className="rounded-xl p-3.5 md:p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(30,45,61,0.9)" }}>
              <p className="uppercase font-mono mb-1.5" style={{ fontSize: "0.62rem", color: "rgba(0,200,255,0.75)", letterSpacing: "0.1em" }}>週あたり</p>
              <p className="font-bold text-white" style={{ fontSize: "1.5rem" }}>
                <AnimatedCounter to={totalWeekly} /> 時間
              </p>
            </div>
            <div className="rounded-xl p-3.5 md:p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(30,45,61,0.9)" }}>
              <p className="uppercase font-mono mb-1.5" style={{ fontSize: "0.62rem", color: "rgba(0,200,255,0.75)", letterSpacing: "0.1em" }}>人件費換算 / 月</p>
              <p className="font-bold text-white" style={{ fontSize: "1.5rem" }}>
                <AnimatedCounter to={Math.round(monthlyCost / 10000)} suffix="万円" />
              </p>
            </div>
          </div>

          <p className="mt-5 text-s3-muted text-sm leading-relaxed">
            その時間には、必ず<span className="text-white font-semibold">人件費というコスト</span>が発生しています。
            <br className="hidden sm:block" />
            本来、社員が集中すべきなのは、<span className="text-white font-semibold">営業・企画・顧客対応など利益に直結する仕事</span>のはずです。
          </p>
          <p className="mt-2" style={{ fontSize: "0.7rem", color: "rgba(74,96,112,0.9)" }}>
            ※ 一般的な業務量・時給2,500円換算をもとにした目安の試算です。実際の時間・費用は業種・体制により異なります。
          </p>
        </motion.div>

        <SectionBridge text="このコスト、これからどうなっていくのか" />
      </div>
    </section>
  );
}
