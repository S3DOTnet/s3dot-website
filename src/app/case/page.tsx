import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import PickUpSection from "@/components/sections/PickUpSection";
import AICapabilitiesSection from "@/components/sections/AICapabilitiesSection";

export const metadata: Metadata = {
  title: "導入事例",
  description: "小売・サービス業・飲食・士業・製造・建設など、さまざまな業種でのAI活用事例をご紹介。",
};

export default function CasePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Case Studies"
          title="どんな業種でも、"
          titleGradient="変えられることがある。"
          description="業種・規模に関係なく、現場で起きている「リアルな変化」をご紹介します。"
        />
        <PickUpSection />
        <AICapabilitiesSection />
      </main>
      <Footer />
    </>
  );
}
