"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const eras = [
  {
    icon: Globe,
    num: "01",
    era: "INTERNET",
    color: "#00C8FF",
    body: [
      "インターネットが普及した当時も、「まだ必要ない」「今までの方法で十分」と考える企業は少なくありませんでした。",
      "しかし、早く活用した企業は、情報収集、営業、顧客獲得、仕事のスピードを大きく変えました。",
      "変化を後回しにした企業は、後からその差を埋める必要がありました。",
    ],
  },
  {
    icon: Smartphone,
    num: "02",
    era: "SMARTPHONE",
    color: "#8B7CFF",
    body: [
      "スマートフォンも、最初から仕事の必需品だったわけではありません。",
      "しかし、普及すると顧客との接点、連絡方法、集客、決済、働き方まで大きく変わりました。",
      "早く適応した企業ほど、新しい市場と顧客接点を獲得しました。",
    ],
  },
  {
    icon: Sparkles,
    num: "03",
    era: "AI",
    color: "#7B5EFF",
    body: [
      "そして現在、次の大きな変化がAIです。",
      "今はまだ、「本当に必要なのか」「もう少し様子を見よう」と考える企業も多くあります。",
      "しかし、AIを業務へ活用する企業は、すでに時間、対応速度、生産性の改善を始めています。",
    ],
  },
];

export default function CrisisSection() {
  return (
    <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
      <NetworkBackground opacity={0.3} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "0%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(123,94,255,0.1) 0%, transparent 70%)", filter: "blur(90px)" }} />
      </div>

      <div className="relative max-w-[820px] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Why Now
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white" style={{ fontSize: "clamp(1.7rem, 4.4vw, 3rem)", lineHeight: 1.4 }}
          >
            大きな変化のたびに、
            <br />
            <span className="gradient-text-blue-purple">
              企業の差は
              <br className="sm:hidden" />
              広がってきました。
            </span>
          </motion.h2>
        </div>

        {/* タイムライン */}
        <div className="relative">
          <div
            className="absolute left-6 md:left-8 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(0,200,255,0.35), rgba(123,94,255,0.5))" }}
          />
          <div className="flex flex-col gap-12 md:gap-16">
            {eras.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.era}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  <div
                    className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${e.color}2A, ${e.color}0D)`,
                      border: `1px solid ${e.color}55`,
                      boxShadow: `0 0 24px ${e.color}22`,
                    }}
                  >
                    <Icon size={22} style={{ color: e.color }} />
                  </div>
                  <p className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: e.color }}>{e.num} / {e.era}</p>
                  <div className="mt-2 flex flex-col gap-2">
                    {e.body.map((line, li) => (
                      <p key={li} className="text-s3-muted leading-relaxed" style={{ fontSize: "0.92rem" }}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 締め */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14 md:mt-18"
        >
          <p className="text-s3-muted leading-loose" style={{ fontSize: "clamp(0.88rem, 1.5vw, 1rem)" }}>
            インターネットも、スマートフォンも、
            <br />
            最初から全員が使っていたわけではありません。
            <br />
            変化を早く受け入れた企業が、
            <br />
            次の時代のスタンダードをつくってきました。
          </p>
          <p className="text-white font-bold mt-4" style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.4rem)" }}>
            今、その波は<span className="gradient-text">AI</span>です。
          </p>
        </motion.div>

        {/* 追加の強調 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 md:mt-11 max-w-lg mx-auto rounded-2xl px-6 py-6 md:px-8 md:py-7 text-center"
          style={{ background: "linear-gradient(145deg, rgba(0,200,255,0.06), rgba(123,94,255,0.08))", border: "1px solid rgba(123,94,255,0.24)" }}
        >
          <p className="text-s3-muted text-sm leading-relaxed">問題は、AIを使うかどうかではありません。</p>
          <p className="text-white font-bold mt-1.5" style={{ fontSize: "clamp(0.98rem, 1.9vw, 1.15rem)" }}>
            競合より先に、<span className="gradient-text">自社の利益へ変えられるか</span>どうかです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
