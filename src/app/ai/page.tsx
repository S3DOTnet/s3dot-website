import { createPageMetadata } from "@/lib/site-metadata";
import LPHeader from "./_components/LPHeader";
import LPFooter from "./_components/LPFooter";
import StickyMobileCta from "./_components/StickyMobileCta";
import HeroSection from "./_components/HeroSection";
import ProblemSection from "./_components/ProblemSection";
import CrisisSection from "./_components/CrisisSection";
import OpportunityCostSection from "./_components/OpportunityCostSection";
import DifferentiationSection from "./_components/DifferentiationSection";
import BeforeAfterSection from "./_components/BeforeAfterSection";
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
        <DifferentiationSection />
        <BeforeAfterSection />
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
