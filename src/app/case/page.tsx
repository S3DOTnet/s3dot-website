import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import PickUpSection from "@/components/sections/PickUpSection";
import AICapabilitiesSection from "@/components/sections/AICapabilitiesSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "AI活用イメージ",
  description:
    "問い合わせ対応、見積書作成、社内資料、顧客情報整理など、企業の業務でAIを活用する方法と導入後の変化を活用イメージとしてご紹介します。",
  path: "/case",
});

const usageExamples = [
  "問い合わせ対応の自動化",
  "見積書作成の効率化",
  "社内資料の作成支援",
  "顧客情報の整理",
  "ホームページ更新の省力化",
];

export default function CasePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Case Examples"
          title="どんな業種でも、"
          titleGradient="変えられることがある。"
          description="業種・規模に関係なく、AIによって生まれる『変化』のイメージをご紹介します。"
        />

        {/* 業務ごとの活用イメージ */}
        <section className="relative py-10 md:py-16 bg-s3-bg overflow-hidden section-grid noise-overlay">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(0,229,160,0.2),transparent)" }}
          />
          <div className="relative max-w-[1200px] mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">Case Examples</p>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
              業務ごとの<span className="gradient-text">活用イメージ</span>
            </h2>
            <p className="text-sm text-s3-muted leading-relaxed mb-7 max-w-xl">
              実際の業務を想定し、AI導入によってどのように変えられるかをご紹介します。
            </p>
            <div className="flex flex-wrap gap-2">
              {usageExamples.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(0,229,160,0.08)",
                    border: "1px solid rgba(0,229,160,0.22)",
                    color: "rgba(232,237,242,0.9)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <PickUpSection hideHeading={true} />
        <AICapabilitiesSection />
      </main>
      <Footer />
    </>
  );
}
