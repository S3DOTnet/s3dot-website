"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Settings,
  Zap,
  Sparkles,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    label: "AI導入相談",
    sub: "「何から始めればいいか」から一緒に考える",
    body: "AIについて知識がなくても大丈夫。現在の業務・課題・目標をヒアリングし、あなたの会社に本当に合った活用方法を一緒に見つけます。",
    tags: ["無料相談あり", "課題整理", "導入計画"],
    color: "#00C8FF",
  },
  {
    icon: Settings,
    label: "業務改善",
    sub: "今のやり方に、AIをうまく組み込む",
    body: "既存の業務フローを壊すことなく、AIを自然に組み込みます。人がやらなくていい作業をAIに任せ、人は人にしかできない仕事に集中できる環境を作ります。",
    tags: ["フロー最適化", "コスト削減", "ミス削減"],
    color: "#7B5EFF",
  },
  {
    icon: Zap,
    label: "自動化",
    sub: "繰り返しをなくす。それだけで会社は変わる。",
    body: "毎日同じことを繰り返している作業を洗い出し、自動化の仕組みを構築します。データ収集・集計・転記・通知など、まるごと自動で動かします。",
    tags: ["時間削減", "省人化", "RPA"],
    color: "#00E5A0",
  },
  {
    icon: Sparkles,
    label: "AI制作",
    sub: "コンテンツ制作を、速く・安く・大量に。",
    body: "AIを活用した画像・動画・文章・音声コンテンツの制作を支援します。広告バナー、SNS投稿、商品説明文など、制作コストと時間を大幅に削減できます。",
    tags: ["画像生成", "動画制作", "テキスト生成"],
    color: "#00C8FF",
  },
  {
    icon: Code2,
    label: "AIシステム開発",
    sub: "あなたの会社専用のAIを作る。",
    body: "既存ツールでは対応できないケースのために、オーダーメイドのAIシステムを構築します。設計・開発・運用までワンストップで対応します。",
    tags: ["オーダーメイド", "API連携", "運用サポート"],
    color: "#7B5EFF",
  },
];

function ServiceCard({
  icon: Icon,
  label,
  sub,
  body,
  tags,
  color,
  index,
}: (typeof services)[0] & { index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered
          ? `1px solid ${color}40`
          : "1px solid rgba(30,45,61,0.8)",
        boxShadow: hovered
          ? `0 0 30px ${color}15, 0 8px 32px rgba(0,0,0,0.3)`
          : "0 4px 16px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      className="card-luxury card-shine rounded-xl p-5 md:p-7 flex flex-col gap-4 md:gap-5 cursor-default"
    >
      {/* Icon — 発光グラス */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${color}24 0%, ${color}08 100%)`,
          border: `1px solid ${color}32`,
          boxShadow: `0 0 16px ${color}1A, inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <Icon size={20} style={{ color, filter: `drop-shadow(0 0 5px ${color}99)` }} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-base font-bold text-s3-text mb-1">{label}</h3>
        <p className="text-xs text-s3-muted leading-relaxed">{sub}</p>
      </div>
      <p className="text-sm text-s3-muted leading-relaxed flex-1">{body}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
            style={{
              color,
              background: `${color}12`,
              border: `1px solid ${color}25`,
            }}
          >
            #{t}
          </span>
        ))}
      </div>

      {/* Bottom line */}
      <div
        className="h-px transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </motion.div>
  );
}

export default function ServiceSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" className="relative py-16 md:py-28 bg-s3-bg overflow-hidden section-grid noise-overlay">
      {/* BG — Purple 左グロー (Conceptと差別化) */}
      <div className="hidden sm:block" style={{ position:"absolute", left:"-10%", top:"50%", transform:"translateY(-50%)", width:700, height:700, background:"radial-gradient(ellipse, rgba(123,94,255,0.07) 0%, rgba(123,94,255,0.015) 50%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none" }} />
      <div className="hidden sm:block" style={{ position:"absolute", right:"-5%", bottom:"10%", width:400, height:400, background:"radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
      {/* 上部アクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(123,94,255,0.3),transparent)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        {!hideHeading && (
          <div ref={ref} className="mb-10 md:mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-s3-text"
            >
              S3DOTの<span className="gradient-text">できること</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-s3-muted text-lg"
            >
              AIで「変えられる」ことは、想像以上に多い。
            </motion.p>
          </div>
        )}

        {/* Service cards: 3 + 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.label} {...s} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 md:max-w-[calc(66.666%+10px)] mx-auto md:mx-0 md:ml-auto md:mr-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.label} {...s} index={i + 3} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 md:mt-32" />
    </section>
  );
}
