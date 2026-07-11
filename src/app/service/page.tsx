import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ServiceSection from "@/components/sections/ServiceSection";
import ProcessSection from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "サービス内容",
  description: "AI導入相談・業務改善・自動化・AI制作・AIシステム開発まで。S3DOTのサービス一覧。",
};

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Services"
          title="S3DOTの"
          titleGradient="できること"
          description="AIで「変えられる」ことは、想像以上に多い。あなたの会社に合った活用方法を一緒に見つけます。"
        />

        {/* 課題に合わせて選べるサービス */}
        <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.25),transparent)" }}
          />
          <div className="relative max-w-[1200px] mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">Solutions</p>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
              課題に合わせて<span className="gradient-text">選べるサービス</span>
            </h2>
            <p className="text-sm text-s3-muted leading-relaxed max-w-xl">
              決まった形を押しつけるのではなく、現在の業務や課題に合わせて必要な仕組みをご提案します。
            </p>
          </div>
        </section>

        <ServiceSection hideHeading={true} />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
