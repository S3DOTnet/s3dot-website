import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談",
  description: "AIについてのご相談・お問い合わせはこちらから。S3DOTは売り込みなし、まずはお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Contact"
          title="お問い合わせ・"
          titleGradient="無料相談"
          description="AIについて詳しくなくても大丈夫。「これもAIでできますか？」その一言から始めましょう。売り込みは一切しません。"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
