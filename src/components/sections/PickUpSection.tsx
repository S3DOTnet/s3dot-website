"use client";

import { Reveal, SectionHead, SideLabel, TextLink } from "@/components/ui/design";

/* 想定効果（Before → After のバーは、掲載している数値をそのまま比率にしたもの） */
const cases = [
  {
    industry: "小売業",
    tag: "コンテンツ制作",
    title: "商品説明文500件を、\n1日で量産",
    body: "EC担当者が1件30分かけて書いていた商品説明文も、AIなら一括生成が可能。品質を保ちながらコストを抑え、売場展開のスピードアップが期待できます。",
    figure: "×20",
    figureLabel: "制作速度",
    metricSub: "制作コスト 1/5",
    before: { label: "1件 30分", w: 100 },
    after:  { label: "一括生成", w: 5 },
  },
  {
    industry: "サービス業",
    tag: "業務自動化",
    title: "問い合わせ対応を\n24時間365日自動化",
    body: "よくある質問への返答をAIチャットボットが自動対応。深夜・休日も顧客対応を止めずに、スタッフの負担軽減と顧客満足度の向上が見込めます。",
    figure: "24h",
    figureLabel: "自動対応",
    metricSub: "対応時間 1/3",
    before: { label: "対応時間", w: 100 },
    after:  { label: "1/3", w: 33 },
  },
  {
    industry: "飲食・食品",
    tag: "SNS・集客",
    title: "SNS投稿を、\n週1作業でまるごと自動化",
    body: "月のSNS投稿計画・文章・画像キャプションをAIが一括生成。担当者の作業時間を大幅に減らしながら、投稿頻度アップによる集客効果が期待できます。",
    figure: "8h→1h",
    figureLabel: "月の作業時間",
    metricSub: "投稿頻度 ×3",
    before: { label: "月 8h", w: 100 },
    after:  { label: "月 1h", w: 12.5 },
  },
  {
    industry: "士業・コンサル",
    tag: "業務効率化",
    title: "議事録・要約を\nその場で自動生成",
    body: "1時間の会議録音から議事録・アクションアイテム・要約を5分で自動生成。会議後の作業負担をなくし、本来の業務に集中できる時間を生み出せます。",
    figure: "2h→5min",
    figureLabel: "議事録作成",
    metricSub: "精度 向上",
    before: { label: "2時間", w: 100 },
    after:  { label: "5分", w: 4 },
  },
  {
    industry: "製造・物流",
    tag: "データ活用",
    title: "毎朝の集計レポートを\nゼロ工数で自動配信",
    body: "担当者が毎朝1時間かけていたデータ集計・レポート作成を自動化し、毎朝の自動配信も可能に。ヒューマンエラーの削減も見込めます。",
    figure: "0",
    figureLabel: "毎朝の集計工数",
    metricSub: "ヒューマンエラー 0件",
    before: { label: "毎朝 1時間", w: 100 },
    after:  { label: "ゼロ工数", w: 0 },
  },
  {
    industry: "建設・不動産",
    tag: "書類・提案",
    title: "提案書・見積書の\n下書きを即生成",
    body: "案件情報を入力するだけで、提案書の下書きをAIが生成。営業担当者は修正・確認するだけで完成でき、提案件数の増加が期待できます。",
    figure: "×2",
    figureLabel: "提案件数",
    metricSub: "作成時間 1/4",
    before: { label: "作成時間", w: 100 },
    after:  { label: "1/4", w: 25 },
  },
];

function BarRow({ label, w, accent }: { label: string; w: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3 nx-code text-[10px] tracking-[0.1em]" style={{ color: accent ? "var(--nx-accent)" : "#8FA4B8" }}>
      <span className="w-[46px] shrink-0">{label}</span>
      <span className="flex-1 h-1.5 rounded-[3px] overflow-hidden" style={{ background: "rgba(140,205,255,0.08)" }}>
        <i className="block h-full rounded-[3px]" style={{ width: `${Math.max(w, 1.5)}%`, background: accent ? "var(--nx-accent)" : "#4A6070" }} />
      </span>
    </div>
  );
}

export default function PickUpSection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden nx-sec-line">
      {!hideHeading && <SideLabel text="SEC.04 — PICK UP" />}
      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">
        {!hideHeading && (
          <SectionHead
            num="04"
            label="PICK UP"
            title={<><span className="inline-block">どんな業種でも、</span><br /><span className="inline-block">変えられることがある。</span></>}
            titleStyle={{ fontSize: "clamp(1.9rem, 4.6vw, 3.75rem)" }}
            desc={<>業種・規模に関係なく、<br className="hidden md:inline" />AIでこんな「変化」が生み出せます。</>}
            link={<TextLink href="/case">活用イメージ・事例を見る</TextLink>}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {cases.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 0.08}
              className="nx-panel hover overflow-hidden p-[22px] md:p-[30px] flex flex-col gap-3.5 md:gap-5"
            >
              {/* 透かし番号 */}
              <span
                className="absolute right-2.5 md:right-3.5 bottom-[-16px] md:bottom-[-22px] nx-tech font-bold leading-none pointer-events-none select-none"
                style={{ fontSize: "clamp(5.5rem, 9vw, 8rem)", color: "transparent", WebkitTextStroke: "1px var(--nx-line)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="nx-meta">
                <span className="flex gap-2 tracking-normal" style={{ fontFamily: "var(--font-jp)" }}>
                  <span className="px-2.5 py-1 rounded-[3px] text-[11px] md:text-xs font-bold" style={{ background: "var(--nx-accent)", color: "#080C10" }}>{c.industry}</span>
                  <span className="px-2.5 py-1 rounded-[3px] text-[11px] md:text-xs text-s3-muted" style={{ border: "1px solid var(--nx-line)" }}>{c.tag}</span>
                </span>
                <span className="text-[10px]">CASE {String(i + 1).padStart(2, "0")} / 06</span>
              </div>

              {/* 数字 */}
              <div className="py-4 md:py-5 flex justify-between items-end gap-3" style={{ borderTop: "1px solid var(--nx-line)", borderBottom: "1px solid var(--nx-line)" }}>
                <div className="flex flex-col gap-1.5">
                  <span className="nx-code text-[10px] md:text-[11px] tracking-[0.16em] text-s3-muted">想定効果 · {c.figureLabel}</span>
                  <span className="nx-tech font-semibold leading-none tracking-[-0.03em] nx-glow" style={{ fontSize: "clamp(2.9rem, 4vw, 4rem)", color: "var(--nx-accent)" }}>{c.figure}</span>
                </div>
                <span className="text-xs md:text-[13px] font-bold px-2.5 py-1.5 rounded-[3px] whitespace-nowrap text-s3-text" style={{ border: "1px solid var(--nx-line)" }}>{c.metricSub}</span>
              </div>

              {/* Before → After */}
              <div className="flex flex-col gap-2">
                <BarRow label="BEFORE" w={c.before.w} />
                <BarRow label="AFTER" w={c.after.w} accent />
                <div className="flex justify-between text-xs text-s3-muted pl-[58px]">
                  <span>{c.before.label}</span>
                  <span className="font-bold text-s3-text">→ {c.after.label}</span>
                </div>
              </div>

              <h3 className="text-lg md:text-[21px] font-black leading-[1.5] tracking-[-0.01em] text-s3-text whitespace-pre-line">{c.title}</h3>
              <p className="text-[13px] md:text-sm leading-[1.95] text-s3-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-s3-muted">
          ※ 掲載の内容はAI活用の想定効果イメージです。特定企業における実績ではありません。
        </p>
      </div>
    </section>
  );
}
