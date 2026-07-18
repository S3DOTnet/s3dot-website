import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CompanySection from "@/components/sections/CompanySection";
import PageHero from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "会社情報",
  description:
    "エススリードット株式会社（S3DOT Inc.）の代表者、所在地、電話番号、問い合わせ先などの会社情報をご案内します。",
  path: "/company",
});

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Company"
          title="会社情報"
          description="AIを、もっと身近にする会社。エススリードット株式会社の基本情報をご案内します。"
        />

        <CompanySection hideHeading />

        <section className="relative py-14 md:py-20 bg-s3-bg overflow-hidden">
          <div className="relative max-w-[760px] mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI導入や業務改善について、<br className="sm:hidden" />まずはご相談ください。
            </p>
            <p className="text-s3-muted leading-relaxed mb-8">
              何から始めればよいか分からない段階でも大丈夫です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white gradient-cta glow-blue hover:brightness-110 transition-all"
              >
                無料相談
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#06C755] hover:brightness-110 transition-all"
              >
                公式LINEで相談
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
