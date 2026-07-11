"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    industry: "小売業",
    tag: "コンテンツ制作",
    title: "商品説明文500件を、\n1日で量産",
    body: "EC担当者が1件30分かけて書いていた商品説明文を、AIが一括生成。品質を保ちながらコストを大幅削減し、売場展開スピードが変わりました。",
    metric: "×20 制作速度",
    metricSub: "制作コスト 1/5",
    color: "#00C8FF",
    tag2: "Before → After",
  },
  {
    industry: "サービス業",
    tag: "業務自動化",
    title: "問い合わせ対応を\n24時間365日自動化",
    body: "よくある質問への返答をAIチャットボットが自動対応。深夜・休日も顧客対応が続き、スタッフの残業が減り、顧客満足度が向上しました。",
    metric: "24h 自動対応",
    metricSub: "対応時間 1/3",
    color: "#7B5EFF",
    tag2: "Before → After",
  },
  {
    industry: "飲食・食品",
    tag: "SNS・集客",
    title: "SNS投稿を、\n週1作業でまるごと自動化",
    body: "月のSNS投稿計画・文章・画像キャプションをAIが一括生成。担当者の作業時間が激減し、投稿頻度が上がって集客効果が改善しました。",
    metric: "月8h → 1h",
    metricSub: "投稿頻度 ×3",
    color: "#00E5A0",
    tag2: "Before → After",
  },
  {
    industry: "士業・コンサル",
    tag: "業務効率化",
    title: "議事録・要約を\nその場で自動生成",
    body: "1時間の会議録音から議事録・アクションアイテム・要約を5分で自動生成。会議後の作業が消え、本来の業務に集中できるようになりました。",
    metric: "2h → 5分",
    metricSub: "精度 向上",
    color: "#00C8FF",
    tag2: "Before → After",
  },
  {
    industry: "製造・物流",
    tag: "データ活用",
    title: "毎朝の集計レポートを\nゼロ工数で自動配信",
    body: "担当者が毎朝1時間かけていたデータ集計・レポート作成を完全自動化。毎朝自動でメール配信され、ミスもゼロになりました。",
    metric: "毎朝ゼロ工数",
    metricSub: "ヒューマンエラー 0件",
    color: "#7B5EFF",
    tag2: "Before → After",
  },
  {
    industry: "建設・不動産",
    tag: "書類・提案",
    title: "提案書・見積書の\n下書きを即生成",
    body: "案件情報を入力するだけで、提案書の下書きをAIが生成。営業担当者が修正・確認するだけで完成し、提案件数が2倍になりました。",
    metric: "提案件数 ×2",
    metricSub: "作成時間 1/4",
    color: "#00E5A0",
    tag2: "Before → After",
  },
];

export default function PickUpSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-28 bg-s3-surface overflow-hidden section-grid noise-overlay">
      {/* BG — Green/Teal 右グロー (Serviceと差別化) */}
      <div style={{ position:"absolute", right:"-5%", top:"30%", width:600, height:600, background:"radial-gradient(ellipse, rgba(0,229,160,0.06) 0%, rgba(0,229,160,0.012) 50%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", left:"5%", bottom:"10%", width:500, height:500, background:"radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }} />
      {/* 上部アクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(0,229,160,0.28),transparent)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div ref={ref} className="mb-10 md:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            Pick Up
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold"
            style={{ fontSize: "clamp(1.5rem, 7.5vw, 3rem)" }}
          >
            <span className="text-white inline-block">どんな業種でも、</span>
            <span className="gradient-text inline-block">変えられることがある。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-s3-muted text-lg max-w-xl mx-auto"
          >
            業種・規模に関係なく、<br className="sm:hidden" />現場で起きている<br className="sm:hidden" />「リアルな変化」。
          </motion.p>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative card-luxury card-shine rounded-xl overflow-hidden group cursor-default"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`, opacity: 0.7 }} />

              <div className="p-6 flex flex-col gap-4 h-full">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ color: c.color, background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                    {c.industry}
                  </span>
                  <span className="text-[11px] text-s3-dim">{c.tag}</span>
                </div>

                {/* Metric */}
                <div>
                  <p className="text-xl font-bold font-mono" style={{ color: c.color }}>
                    {c.metric}
                  </p>
                  <p className="text-xs text-s3-muted mt-0.5">{c.metricSub}</p>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-white leading-snug whitespace-pre-line">
                  {c.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-s3-muted leading-relaxed flex-1">{c.body}</p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-xs text-s3-dim"
        >
          ※ 掲載の数値はヒアリングをもとにした概算値です
        </motion.p>
      </div>

      <div className="section-divider mt-16 md:mt-32" />
    </section>
  );
}
