import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談",
  description: "AIについてのご相談・お問い合わせはこちらから。まずはお気軽にどうぞ。",
};

const consultationExamples = [
  "毎日の事務作業を減らしたい",
  "見積書や請求書の作成を効率化したい",
  "LINEで問い合わせ対応をしたい",
  "ホームページを作りたい",
  "自社に合うAI活用を知りたい",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Contact"
          title="お問い合わせ・"
          titleGradient="無料相談"
          description="AIについて詳しくなくても大丈夫。「これもAIでできますか？」その一言から始めましょう。"
        />

        {/* こんなご相談をいただいています */}
        <section className="relative py-10 md:py-16 bg-s3-surface overflow-hidden section-grid noise-overlay">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.2),transparent)" }}
          />
          <div className="relative max-w-2xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">
              Consultation Topics
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
              こんなご相談を<span className="gradient-text">いただいています</span>
            </h2>
            <p className="text-sm text-s3-muted leading-relaxed mb-7">
              まだ具体的に決まっていなくても大丈夫です。現在のお悩みや業務内容をお聞きし、活用方法を一緒に整理します。
            </p>
            <ul className="space-y-3 mb-8">
              {consultationExamples.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(232,237,242,0.88)" }}
                >
                  <span
                    className="shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#00C8FF", boxShadow: "0 0 6px rgba(0,200,255,0.7)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm"
              style={{
                background: "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 100%)",
                boxShadow: "0 0 20px rgba(0,200,255,0.35), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              まずは無料で相談する →
            </a>
          </div>
        </section>

        <ContactSection hideIntro={true} />
      </main>
      <Footer />
    </>
  );
}
