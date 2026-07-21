"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, Search, Inbox, ChevronDown } from "lucide-react";

const examples = [
  {
    icon: FileText,
    tab: "資料作成",
    before: ["過去資料を探す", "内容を確認する", "一から入力する", "構成を整える", "上司が確認・修正する"],
    after: ["必要事項を入力", "AIが過去資料を参考に下書きと構成を作成", "担当者は確認・修正して完成"],
  },
  {
    icon: Mail,
    tab: "メール対応",
    before: ["問い合わせ内容を確認", "毎回文章を一から考える", "表現や誤字を確認", "送信"],
    after: ["要点を入力", "AIが用途に合った返信文を作成", "担当者は確認して送信"],
  },
  {
    icon: Search,
    tab: "社内情報検索",
    before: ["複数のフォルダを探す", "過去の資料を開く", "必要な箇所を確認", "担当者へ質問する"],
    after: ["AIへ質問", "登録された社内情報から必要な回答や資料を探す"],
  },
  {
    icon: Inbox,
    tab: "問い合わせ対応",
    before: ["すべての問い合わせを担当者が確認", "内容を分類", "毎回返信", "必要な部署へ連絡"],
    after: ["AIがよくある質問への一次対応を支援", "必要な相談だけ担当者へ引き継ぐ"],
  },
];

function StepChain({ steps, color, label }: { steps: string[]; color: string; label: string }) {
  return (
    <div className="flex-1">
      <p className="uppercase font-mono mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color }}>{label}</p>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={i}>
            <div
              className="rounded-lg px-3.5 py-2.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(30,45,61,0.9)" }}
            >
              <span className="text-white text-sm leading-relaxed">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <ChevronDown size={14} style={{ color }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const current = examples[active];

  return (
    <section className="relative py-14 md:py-20 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Before / After
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.3rem)", lineHeight: 1.5 }}
          >
            AIを入れることが
            <br className="sm:hidden" />
            目的ではありません。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base max-w-md mx-auto"
          >
            人がやらなくてもよい仕事を減らすことが目的です。
          </motion.p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:mb-8 md:justify-center" style={{ scrollbarWidth: "none" }}>
          {examples.map((ex, i) => {
            const Icon = ex.icon;
            const isActive = i === active;
            return (
              <button
                key={ex.tab}
                onClick={() => setActive(i)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: isActive ? "linear-gradient(135deg, rgba(0,200,255,0.16), rgba(123,94,255,0.16))" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? "rgba(0,200,255,0.4)" : "rgba(30,45,61,0.9)"}`,
                  color: isActive ? "#ffffff" : "#8FA4B8",
                }}
              >
                <Icon size={15} style={{ color: isActive ? "#00C8FF" : "#8FA4B8" }} />
                {ex.tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 rounded-2xl p-6 md:p-9"
            style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(30,45,61,0.9)" }}
          >
            <StepChain steps={current.before} color="rgba(143,164,184,0.75)" label="Before" />
            <StepChain steps={current.after} color="#00C8FF" label="After" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
