"use client";

import { motion } from "framer-motion";
import {
  FileText, Copy, Mail, Table2, ClipboardList,
  MessageCircleQuestion, Split, Newspaper,
} from "lucide-react";
import SectionBridge from "./SectionBridge";

const tasks = [
  { icon: FileText, text: "見積書や請求書を毎回作成する" },
  { icon: Copy, text: "過去の資料を探し、内容を転記する" },
  { icon: Mail, text: "同じようなメールへ何度も返信する" },
  { icon: Table2, text: "Excelやシステムへ情報を入力する" },
  { icon: ClipboardList, text: "会議後に議事録やタスクを整理する" },
  { icon: MessageCircleQuestion, text: "社内からの同じ質問へ繰り返し回答する" },
  { icon: Split, text: "問い合わせ内容を確認し、担当者へ振り分ける" },
  { icon: Newspaper, text: "日報、報告書、求人原稿を毎回作成する" },
];

export default function ProblemSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-surface overflow-hidden section-grid noise-overlay">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }} />
      <div className="relative max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3.8vw, 2.5rem)", lineHeight: 1.45 }}
          >
            利益を生まない作業に、
            <br />
            毎月<span className="gradient-text">いくらの人件費</span>を
            <br className="sm:hidden" />
            払っていますか？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted text-sm md:text-base max-w-lg mx-auto"
          >
            多くの会社では、社員が能力を発揮する前に、繰り返し作業へ時間を取られています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-2xl mx-auto mb-9 md:mb-11">
          {tasks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                <Icon size={15} className="shrink-0 mt-0.5" style={{ color: "#00C8FF" }} />
                <span className="text-s3-muted text-sm leading-relaxed">{t.text}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-s3-muted text-sm md:text-base leading-relaxed">
            これらは必要な仕事です。
            <br />
            しかし、すべてを人が最初から行う必要がある仕事ではありません。
          </p>
          <div className="mt-6 md:mt-7 rounded-2xl px-5 py-5 md:px-8 md:py-6" style={{ background: "linear-gradient(145deg, rgba(0,200,255,0.05), rgba(123,94,255,0.05))", border: "1px solid rgba(0,200,255,0.16)" }}>
            <p className="text-s3-muted text-sm md:text-base">作業時間の問題ではありません。</p>
            <p className="text-white font-bold mt-2" style={{ fontSize: "clamp(1.02rem, 2.1vw, 1.3rem)", lineHeight: 1.6 }}>
              本来、<span className="gradient-text">売上をつくる仕事</span>に使えた時間を
              失っているということです。
            </p>
          </div>
        </motion.div>

        <SectionBridge text="1日30分の積み重ねが、どれだけの差になるか" />
      </div>
    </section>
  );
}
