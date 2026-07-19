"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const waves = [
  {
    icon: Globe,
    era: "1990年代〜",
    label: "インターネット",
    headline: "情報とスピードが、企業の武器になった。",
    body: "早く活用した企業は、新しい可能性を広げました。「まだ必要ない」と変化を後回しにした企業との差は、そこから生まれています。",
  },
  {
    icon: Smartphone,
    era: "2000年代〜",
    label: "スマートフォン",
    headline: "人と情報が、常につながる時代に。",
    body: "活用した企業は、顧客との接点や仕事の進め方を進化させました。変化を受け入れる企業ほど、新しい時代の流れを掴んできました。",
  },
  {
    icon: Sparkles,
    era: "2020年代〜",
    label: "AI",
    headline: "そして今、次の大きな波はAIです。",
    body: "AIを活用する企業と、「まだ早い」と様子を見る企業。その差は、時間・人件費・競争力の差として、これから広がっていきます。",
  },
];

export default function CrisisSection() {
  return (
    <section className="relative py-10 md:py-16 bg-s3-bg overflow-hidden">
      <NetworkBackground opacity={0.22} />
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", left: "50%", top: "0%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(123,94,255,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-3"
          >
            Why Now
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-white" style={{ fontSize: "clamp(1.55rem, 3.8vw, 2.6rem)", lineHeight: 1.4 }}
          >
            大きな変化のたびに、
            <br />
            <span className="gradient-text-blue-purple">企業の差は広がってきました。</span>
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, rgba(0,200,255,0.3), rgba(123,94,255,0.3))" }}
          />
          <div className="flex flex-col gap-4 md:gap-5">
            {waves.map((w, i) => {
              const Icon = w.icon;
              const isLast = i === waves.length - 1;
              return (
                <motion.div
                  key={w.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="relative card-luxury rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-start gap-4"
                  style={isLast ? { border: "1px solid rgba(123,94,255,0.35)", boxShadow: "0 0 30px rgba(123,94,255,0.12)" } : undefined}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: isLast ? "linear-gradient(135deg, rgba(0,200,255,0.18), rgba(123,94,255,0.18))" : "rgba(0,200,255,0.10)",
                      border: `1px solid ${isLast ? "rgba(123,94,255,0.4)" : "rgba(0,200,255,0.24)"}`,
                    }}
                  >
                    <Icon size={21} style={{ color: isLast ? "#7B5EFF" : "#00C8FF" }} />
                  </div>
                  <div>
                    <p className="font-mono" style={{ fontSize: "0.68rem", color: "rgba(143,164,184,0.7)" }}>
                      {w.era} {w.label}
                    </p>
                    <p className="text-white font-bold mt-1" style={{ fontSize: "1.05rem" }}>{w.headline}</p>
                    <p className="text-s3-muted mt-1.5 leading-relaxed" style={{ fontSize: "0.85rem" }}>{w.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-9 md:mt-12 max-w-xl mx-auto"
        >
          <p className="text-s3-muted leading-loose text-sm md:text-base">
            インターネットも、スマートフォンも、最初から全員が使っていたわけではありません。
            <br />
            変化を受け入れた企業が、次の時代のスタンダードを作ってきました。
          </p>
          <p className="text-white font-bold mt-3" style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)" }}>
            今、その波は<span className="gradient-text">AI</span>です。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
