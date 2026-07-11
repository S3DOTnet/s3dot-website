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
        <ServiceSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
