"use client";

import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import LineCtaButton from "./LineCtaButton";
import TrustNote, { FULL_LINES } from "./TrustNote";

const items = [
  "現在困っている業務",
  "AI化、自動化できる可能性がある業務",
  "削減できる作業時間の目安",
  "人件費、外注費を減らせる可能性",
  "優先して改善すべき業務",
  "導入の難易度",
  "活用できる既存ツール",
  "専用開発が必要かどうか",
  "導入する場合の費用感",
  "最初に行うべきこと",
];

export default function DiagnosisSection() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0A0E1A 0%, #130F26 45%, #170F2C 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "10%", top: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(0,200,255,0.16) 0%, transparent 65%)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", right: "5%", bottom: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(123,94,255,0.2) 0%, transparent 65%)", filter: "blur(90px)" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.4),rgba(123,94,255,0.4),transparent)" }} />

      <div className="relative max-w-[820px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
        >
          Free Diagnosis
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
          className="font-black text-white mb-3" style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.3rem)", lineHeight: 1.4 }}
        >
          ただの無料相談では
          <br className="sm:hidden" />
          ありません。
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold mb-10 md:mb-12" style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.6rem)", lineHeight: 1.6 }}
        >
          御社の業務を整理し、
          <br />
          <span className="gradient-text-blue-purple">改善できる可能性を一緒に確認します。</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-2xl px-6 py-7 md:px-10 md:py-9 mb-9 md:mb-11 text-left"
          style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(12px)" }}
        >
          <p className="flex items-center gap-2 text-white font-semibold mb-5" style={{ fontSize: "0.92rem" }}>
            <ClipboardList size={16} style={{ color: "#00C8FF" }} />
            診断で整理する内容
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#00C8FF" }} />
                <span style={{ color: "rgba(232,237,242,0.8)", fontSize: "0.9rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-9 md:mb-11"
        >
          <p style={{ color: "rgba(232,237,242,0.65)", fontSize: "0.95rem" }}>「AIを入れるべきか」ではなく、</p>
          <p className="font-bold text-white mt-1" style={{ fontSize: "clamp(1.1rem, 2.3vw, 1.4rem)" }}>
            「<span className="gradient-text">御社ではどこへ使うべきか</span>」が
            <br className="sm:hidden" />
            分かります。
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}>
          <LineCtaButton location="diagnosis" label="無料AI業務改善診断をLINEで受ける" className="w-full sm:w-auto" />
          <div className="mt-5">
            <TrustNote lines={FULL_LINES} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
