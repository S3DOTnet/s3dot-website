import { createPageMetadata } from "@/lib/site-metadata";
import LPHeader from "./_components/LPHeader";
import LPFooter from "./_components/LPFooter";
import StickyMobileCta from "./_components/StickyMobileCta";
import HeroSection from "./_components/HeroSection";
import ProblemSection from "./_components/ProblemSection";
import CrisisSection from "./_components/CrisisSection";
import OpportunityCostSection from "./_components/OpportunityCostSection";
import MidCtaBanner from "./_components/MidCtaBanner";
import BenefitsSection from "./_components/BenefitsSection";
import BeforeAfterSection from "./_components/BeforeAfterSection";
import DifferentiationSection from "./_components/DifferentiationSection";
import ServicesSection from "./_components/ServicesSection";
import FlowSection from "./_components/FlowSection";
import ClosingSection from "./_components/ClosingSection";
import FinalCtaSection from "./_components/FinalCtaSection";

export const metadata = createPageMetadata({
  title: "AI導入・業務改善のご相談 | 無料AI活用診断",
  description:
    "AI導入を検討している中小企業の経営者へ。人件費削減・利益改善・競争力強化につながるAI活用を、無料のAI活用診断でご提案します。AIを使う会社と使わない会社、これから差が広がります。",
  path: "/ai",
});

export default function AiLandingPage() {
  return (
    <>
      <LPHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <CrisisSection />
        <OpportunityCostSection />
        <MidCtaBanner
          text="「様子見」の間にも、コストは積み上がっています。"
          sub="まずは無料診断で、自社の現状を整理しませんか。"
        />
        <BenefitsSection />
        <BeforeAfterSection />
        <DifferentiationSection />
        <ServicesSection />
        <MidCtaBanner
          text="その業務、人件費をかけずにAIに任せられます。"
          sub="無料診断で、御社の削減余地を確認しませんか。"
        />
        <FlowSection />
        <ClosingSection />
        <FinalCtaSection />
      </main>
      <LPFooter />
      <StickyMobileCta />
    </>
  );
}
