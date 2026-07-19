import { createPageMetadata } from "@/lib/site-metadata";
import LPHeader from "./_components/LPHeader";
import LPFooter from "./_components/LPFooter";
import StickyMobileCta from "./_components/StickyMobileCta";
import HeroSection from "./_components/HeroSection";
import ProblemSection from "./_components/ProblemSection";
import CrisisSection from "./_components/CrisisSection";
import BenefitsSection from "./_components/BenefitsSection";
import BeforeAfterSection from "./_components/BeforeAfterSection";
import DifferentiationSection from "./_components/DifferentiationSection";
import ServicesSection from "./_components/ServicesSection";
import FlowSection from "./_components/FlowSection";
import ClosingSection from "./_components/ClosingSection";
import FinalCtaSection from "./_components/FinalCtaSection";

export const metadata = createPageMetadata({
  title: "AI導入・業務改善のご相談 | 無料AI活用相談",
  description:
    "AI導入を検討している中小企業の経営者へ。業務時間削減・人件費最適化・生産性向上につながるAI活用を、無料のLINE相談でご提案します。AIを使う会社と使わない会社、これから差が広がります。",
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
        <BenefitsSection />
        <BeforeAfterSection />
        <DifferentiationSection />
        <ServicesSection />
        <FlowSection />
        <ClosingSection />
        <FinalCtaSection />
      </main>
      <LPFooter />
      <StickyMobileCta />
    </>
  );
}
