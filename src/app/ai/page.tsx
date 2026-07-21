import { createPageMetadata } from "@/lib/site-metadata";
import LPHeader from "./_components/LPHeader";
import LPFooter from "./_components/LPFooter";
import StickyMobileCta from "./_components/StickyMobileCta";
import FaqJsonLd from "./_components/FaqJsonLd";
import HeroSection from "./_components/HeroSection";
import ProblemSection from "./_components/ProblemSection";
import CostSection from "./_components/CostSection";
import TasksSection from "./_components/TasksSection";
import BeforeAfterSection from "./_components/BeforeAfterSection";
import CrisisSection from "./_components/CrisisSection";
import DifferentiationSection from "./_components/DifferentiationSection";
import ProcessSection from "./_components/ProcessSection";
import ServicesSection from "./_components/ServicesSection";
import TargetSection from "./_components/TargetSection";
import DiagnosisSection from "./_components/DiagnosisSection";
import FaqSection from "./_components/FaqSection";
import ClosingSection from "./_components/ClosingSection";
import FinalCtaSection from "./_components/FinalCtaSection";

export const metadata = createPageMetadata({
  title: "AI業務改善・業務自動化ならS3DOT｜無料AI業務改善診断",
  description:
    "中小企業の見積書・資料作成・メール対応・情報検索など、毎月発生する定型業務をAIで効率化。S3DOTが御社の削減可能業務を無料で診断し、実際に使える仕組みとして導入します。",
  path: "/ai",
});

export default function AiLandingPage() {
  return (
    <>
      <FaqJsonLd />
      <LPHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <CostSection />
        <TasksSection />
        <BeforeAfterSection />
        <CrisisSection />
        <DifferentiationSection />
        <ProcessSection />
        <ServicesSection />
        <TargetSection />
        <DiagnosisSection />
        <FaqSection />
        <ClosingSection />
        <FinalCtaSection />
      </main>
      <LPFooter />
      <StickyMobileCta />
    </>
  );
}
