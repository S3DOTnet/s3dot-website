import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "AI導入に関するよくある質問にお答えします。費用・進め方・サポートについてなど。",
};

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
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
