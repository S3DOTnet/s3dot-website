"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, Table2, Search, ClipboardCheck, Sparkles, Clock, ArrowRight } from "lucide-react";

const tabs = [
  {
    icon: FileText,
    tab: "書類作成",
    title: "書類作成を減らす",
    body: "見積書、請求書、提案書、報告書、契約書などの下書きや入力を支援。過去の書式や顧客情報を活用し、ゼロから作成する時間を減らします。",
  },
  {
    icon: Mail,
    tab: "メール・問い合わせ",
    title: "メール・問い合わせ対応を減らす",
    body: "要点を入力するだけで、返信文の下書きを作成。よくある質問への一次対応や、担当者への引き継ぎも効率化できます。",
  },
  {
    icon: Table2,
    tab: "入力・転記",
    title: "入力・転記作業を減らす",
    body: "Excel、顧客情報、申込情報、日報など、複数箇所への入力や転記を自動化・半自動化します。",
  },
  {
    icon: Search,
    tab: "情報検索",
    title: "探す時間を減らす",
    body: "過去資料、社内ルール、商品情報、顧客情報などを、AIへ質問して探せる環境を構築します。",
  },
  {
    icon: ClipboardCheck,
    tab: "管理・報告",
    title: "管理・報告業務を減らす",
    body: "議事録、タスク整理、進捗報告、データ集計などを支援し、管理者の確認時間を減らします。",
  },
];

export default function TasksSection() {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "10%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-[880px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            What You Can Reduce
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            「AIで何ができるか」ではなく、
            <br />
            「<span className="gradient-text">御社の何を減らせるか</span>」を
            <br className="sm:hidden" />
            考えます。
          </motion.h2>
        </div>

        {/* タブ */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:mb-8 md:justify-center md:flex-wrap" style={{ scrollbarWidth: "none" }}>
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === active;
            return (
              <button
                key={t.tab}
                onClick={() => setActive(i)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: isActive ? "linear-gradient(135deg, rgba(0,200,255,0.16), rgba(123,94,255,0.16))" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? "rgba(0,200,255,0.4)" : "rgba(30,45,61,0.9)"}`,
                  color: isActive ? "#ffffff" : "#8FA4B8",
                }}
              >
                <Icon size={15} style={{ color: isActive ? "#00C8FF" : "#8FA4B8" }} />
                {t.tab}
              </button>
            );
          })}
        </div>

        {/* パネル */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 md:p-9"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(30,45,61,0.9)" }}
          >
            <h3 className="text-white font-bold mb-3" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}>{current.title}</h3>
            <p className="text-s3-muted leading-relaxed mb-7" style={{ fontSize: "0.95rem", maxWidth: "560px" }}>{current.body}</p>

            {/* 簡易図解: 現状 → AIが支援 → 時間を削減 */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,200,255,0.10)", border: "1px solid rgba(0,200,255,0.24)" }}>
                  <CurrentIcon size={18} style={{ color: "#00C8FF" }} />
                </div>
                <span className="text-s3-dim" style={{ fontSize: "0.68rem" }}>現在の作業</span>
              </div>
              <ArrowRight size={16} className="text-s3-dim" />
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(123,94,255,0.10)", border: "1px solid rgba(123,94,255,0.24)" }}>
                  <Sparkles size={18} style={{ color: "#7B5EFF" }} />
                </div>
                <span className="text-s3-dim" style={{ fontSize: "0.68rem" }}>AIが支援</span>
              </div>
              <ArrowRight size={16} className="text-s3-dim" />
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,229,160,0.10)", border: "1px solid rgba(0,229,160,0.24)" }}>
                  <Clock size={18} style={{ color: "#00E5A0" }} />
                </div>
                <span className="text-s3-dim" style={{ fontSize: "0.68rem" }}>時間を削減</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
