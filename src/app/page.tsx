import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import ServiceSection from "@/components/sections/ServiceSection";
import AICapabilitiesSection from "@/components/sections/AICapabilitiesSection";
import PickUpSection from "@/components/sections/PickUpSection";
import OurStorySection from "@/components/sections/OurStorySection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import CompanySection from "@/components/sections/CompanySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />          {/* 1. Hero */}
        <ConceptSection />        {/* 2. Concept */}
        <ServiceSection />        {/* 3. Service */}
        <AICapabilitiesSection /> {/* 4. What AI Can Do */}
        <PickUpSection />         {/* 5. Pick Up */}
        <OurStorySection />       {/* 6. Our Story */}
        <ProcessSection />        {/* 7. AI導入の流れ */}
        <FAQSection />            {/* 8. FAQ */}
        <ContactSection />        {/* 9. Contact */}
        <CompanySection />        {/* 10. Company（信頼確認・最後） */}
      </main>
      <Footer />
    </>
  );
}
