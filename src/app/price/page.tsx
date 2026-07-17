"use client";

import { motion } from "framer-motion";
import { MessageCircle, Settings, Code2, LifeBuoy, ArrowRight, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";

const philosophy = [
  { text: "まずは無料相談。費用ゼロで現状ヒアリング・課題整理・AI化診断をします。" },
  { text: "高額システムは勧めません。必要なものだけをご提案します。" },
  { text: "小さく始めて大きく育てる。効果を確認してから拡大できます。" },
];

const plans = [
  {
    icon: MessageCircle,
    step: "STEP 0",
    label: "無料相談・業務分析",
    price: "無料",
    priceNote: "完全無料",
    features: [
      "現状ヒアリング",
      "業務課題の整理",
      "AI化できる箇所の診断",
      "導入イメージのご提案",
    ],
    color: "#00C8FF",
    primary: false,
  },
  {
    icon: Settings,
    step: "STEP 1",
    label: "AIツール導入サポート",
    price: "数万円〜",
    priceNote: "目安",
    features: [
      "ツール選定・初期設定",
      "既存業務への組み込み",
      "スタッフへの使い方レクチャー",
      "マニュアル整備",
    ],
    color: "#7B5EFF",
    primary: true,
  },
  {
    icon: Code2,
    step: "STEP 2",
    label: "業務自動化・システム連携",
    price: "数十万円〜",
    priceNote: "目安",
    features: [
      "繰り返し作業の自動化",
      "各種ツール・APIとの連携",
      "データ集計・レポート自動化",
      "テスト・運用サポート",
    ],
    color: "#00E5A0",
    primary: false,
  },
  {
    icon: Code2,
    step: "STEP 3",
    label: "オーダーメイドAI開発",
    price: "要見積もり",
    priceNote: "内容により異なります",
    features: [
      "御社専用AIシステムの設計・開発",
      "既存システムとの統合",
      "設計から運用まで一括対応",
      "長期サポートプランあり",
    ],
    color: "#7B5EFF",
    primary: false,
  },
];

export default function PricePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Pricing"
          title="料金について"
          description="S3DOTは固定パッケージではなく、お客様の状況に合わせてご提案します。まずは無料相談からどうぞ。"
        />

        {/* ── 料金の考え方 ── */}
        <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden section-grid noise-overlay">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: "absolute", left: "5%", top: "20%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)", filter: "blur(70px)" }} />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
              >
                Our Policy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-4xl font-bold text-white mb-4"
              >
                必要なものだけ。<br className="hidden md:block" />それがS3DOTの<span className="gradient-text">料金の考え方</span>です。
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {philosophy.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="card-luxury rounded-xl p-5 flex gap-3 items-start"
                >
                  <div
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,200,255,0.15)", border: "1px solid rgba(0,200,255,0.3)" }}
                  >
                    <Check size={11} style={{ color: "#00C8FF" }} />
                  </div>
                  <p className="text-s3-muted text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 導入ステップと目安 ── */}
        <section className="relative py-14 md:py-24 bg-s3-surface overflow-hidden section-grid noise-overlay">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.25),transparent)" }} />
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: "absolute", right: "0", top: "30%", width: 500, height: 500, background: "radial-gradient(circle, rgba(123,94,255,0.06) 0%, transparent 70%)", filter: "blur(70px)" }} />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10 md:mb-16">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
              >
                Price Guide
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-4xl font-bold text-white"
              >
                よくある<span className="gradient-text">導入パターン</span>と目安
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-s3-muted text-sm md:text-base"
              >
                ※ 以下はあくまで目安です。実際のご費用は無料相談にてお見積もりします。
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {plans.map((plan, i) => {
                const Icon = plan.icon;
                return (
                  <motion.div
                    key={plan.label}
                    initial={{ opacity: 0, y: 36, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                    className="card-luxury card-shine rounded-xl p-6 md:p-7 flex flex-col gap-4 relative overflow-hidden"
                    style={{
                      border: plan.primary ? `1px solid ${plan.color}40` : undefined,
                      boxShadow: plan.primary ? `0 0 30px ${plan.color}12` : undefined,
                    }}
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)`, opacity: 0.6 }} />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: `radial-gradient(circle, ${plan.color}22 0%, ${plan.color}06 100%)`,
                            border: `1px solid ${plan.color}30`,
                          }}
                        >
                          <Icon size={18} style={{ color: plan.color }} />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono tracking-wider" style={{ color: plan.color }}>{plan.step}</p>
                          <h3 className="text-sm font-bold text-white leading-snug">{plan.label}</h3>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-white" style={{ fontSize: "1.1rem" }}>{plan.price}</p>
                        <p className="text-[10px] text-s3-dim">{plan.priceNote}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-s3-muted text-sm">
                          <span style={{ color: plan.color, marginTop: "2px", fontSize: "10px" }}>▶</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* Monthly support note */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-10 max-w-4xl mx-auto"
            >
              <div
                className="rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4"
                style={{
                  background: "rgba(0,200,255,0.04)",
                  border: "1px solid rgba(0,200,255,0.14)",
                }}
              >
                <LifeBuoy size={20} style={{ color: "#00C8FF", flexShrink: 0 }} />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">月額サポートプランもあります</p>
                  <p className="text-s3-muted text-sm leading-relaxed">
                    導入後も継続してサポートする月額プランをご用意しています。運用支援・改善提案・追加開発など、必要なものだけを組み合わせることができます。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="section-divider mt-14 md:mt-24" />
        </section>

        {/* ── CTA ── */}
        <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, rgba(123,94,255,0.04) 50%, transparent 70%)", filter: "blur(80px)" }} />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                まずは無料相談で<br className="sm:hidden" />費用感を確認できます。
              </p>
              <p className="text-s3-muted mb-8 leading-relaxed">
                相談は完全無料。実際のお見積もりもご提示します。<br className="hidden md:block" />
                お気軽にご連絡ください。
              </p>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold text-white gradient-cta glow-blue hover:brightness-110 hover:scale-[1.02] transition-all tracking-wide text-sm md:text-base"
              >
                無料で相談してみる
                <ArrowRight size={16} />
              </a>
              <p className="mt-4 text-xs text-s3-dim">相談は無料です。</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
