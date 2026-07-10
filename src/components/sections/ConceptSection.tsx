"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sprout, Rocket } from "lucide-react";

const values = [
  {
    number: "01",
    Icon: Users,
    title: "売らない。一緒に考える。",
    body: "S3DOTはAIを「売る」会社ではありません。あなたの課題を聞き、本当に必要かどうかから一緒に考えます。「導入しない」という結論も、誠実にお伝えします。",
    color: "#00C8FF",
  },
  {
    number: "02",
    Icon: Sprout,
    title: "小さく始めて、確かめる。",
    body: "大きな投資から始める必要はありません。効果が確認できる小さな一歩から。リスクを最小化しながら、実績を積み上げていきます。",
    color: "#00E5A0",
  },
  {
    number: "03",
    Icon: Rocket,
    title: "定着するまで、伴走する。",
    body: "導入して終わりではありません。現場で本当に使われるか、文化として根付くか。S3DOTはそこまでコミットします。",
    color: "#7B5EFF",
  },
];

export default function ConceptSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="concept" className="relative py-16 md:py-28 bg-s3-bg overflow-hidden section-grid noise-overlay">
      {/* BG — Electric Blue 中央グロー */}
      <div style={{ position:"absolute", left:"50%", top:"40%", transform:"translate(-50%,-50%)", width:1000, height:700, background:"radial-gradient(ellipse, rgba(0,200,255,0.055) 0%, rgba(0,200,255,0.012) 45%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none" }} />
      {/* 上部アクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(0,200,255,0.25),transparent)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div ref={ref} className="text-center mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-5"
          >
            Concept
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            <span className="text-white">AIを、</span>
            <span className="gradient-text">もっと身近にする。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-s3-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            AIは難しくない。難しく考えすぎているだけ。
            <br className="hidden md:block" />
            S3DOTは、その「壁」を一緒に取り除くパートナーです。
          </motion.p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
              className="card-luxury card-shine rounded-xl p-8 flex flex-col gap-5 group cursor-default"
            >
              {/* Number + Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest" style={{ color: v.color }}>{v.number}</span>
                {/* Lucideアイコン — 発光グラスボックス */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${v.color}22 0%, ${v.color}06 100%)`,
                    border: `1px solid ${v.color}30`,
                    boxShadow: `0 0 16px ${v.color}1E, inset 0 1px 0 rgba(255,255,255,0.07)`,
                  }}
                >
                  <v.Icon
                    size={19}
                    style={{ color: v.color, filter: `drop-shadow(0 0 5px ${v.color}99)` }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white leading-snug">{v.title}</h3>

              {/* Body */}
              <p className="text-s3-muted text-sm leading-relaxed flex-1">{v.body}</p>

              {/* Bottom line (hover) */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-s3-muted text-base">
            AIパートナー、S3DOT。
            <span className="ml-2 text-s3-text font-medium">エススリードット株式会社</span>
          </p>
        </motion.div>
      </div>

      <div className="section-divider mt-16 md:mt-32" />
    </section>
  );
}
