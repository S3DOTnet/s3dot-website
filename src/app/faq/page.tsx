import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "よくある質問｜AI導入支援",
  description:
    "AI導入の費用、進め方、準備、サポートなど、S3DOTへ多く寄せられる質問にお答えします。",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="FAQ"
          title="よくある"
          titleGradient="ご質問"
          description="AI導入についてのご疑問にお答えします。他にも気になることがあれば、お気軽にご相談ください。"
        />

        {/* AI導入前に知っておきたいこと */}
        <section className="relative py-10 md:py-14 bg-s3-bg">
          <div className="relative max-w-[760px] mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">
              Before You Start
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
              AI導入前に<span className="gradient-text">知っておきたいこと</span>
            </h2>
            <p className="text-sm text-s3-muted leading-relaxed">
              費用や導入方法、サポート内容など、ご相談前に多くいただく疑問をまとめました。
            </p>
          </div>
        </section>

        <FAQSection hideHeading={true} />
      </main>
      <Footer />
    </>
  );
}
