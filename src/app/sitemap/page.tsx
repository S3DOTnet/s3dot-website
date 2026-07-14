import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SitemapCard from "./SitemapCard";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.s3dot.com";

export const metadata: Metadata = {
  title: "サイトマップ | S3DOT",
  description:
    "S3DOT（エススリードット株式会社）のウェブサイト全ページ一覧です。各ページへのリンクからご覧になりたいページへお進みください。",
  alternates: {
    canonical: `${SITE_URL}/sitemap`,
  },
  openGraph: {
    type:        "website",
    locale:      "ja_JP",
    url:         `${SITE_URL}/sitemap`,
    siteName:    "S3DOT",
    title:       "サイトマップ | S3DOT",
    description: "S3DOT（エススリードット株式会社）のウェブサイト全ページ一覧です。",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "S3DOT" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "サイトマップ | S3DOT",
    description: "S3DOT（エススリードット株式会社）のウェブサイト全ページ一覧です。",
    images:      ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

interface SiteLink {
  label: string;
  href:  string;
  desc?: string;
}

interface SiteGroup {
  category: string;
  accent:   string;
  links:    SiteLink[];
}

const siteGroups: SiteGroup[] = [
  {
    category: "メインページ",
    accent:   "#00C8FF",
    links: [
      {
        label: "トップページ",
        href:  "/",
        desc:  "S3DOTのトップページ。AI導入支援・業務効率化・ホームページ制作など事業の全体像をご覧いただけます。",
      },
      {
        label: "サービス",
        href:  "/#service",
        desc:  "AI導入相談・業務改善・自動化・AI制作・AIシステム開発など、当社が提供するサービスの詳細ページです。",
      },
      {
        label: "活用イメージ",
        href:  "/#pickup",
        desc:  "AIを活用した業務改善の具体的な事例・ユースケースをご紹介しています。",
      },
      {
        label: "導入の流れ",
        href:  "/#process",
        desc:  "無料相談から導入・運用まで、S3DOTと進める5つのステップをご確認いただけます。",
      },
      {
        label: "料金",
        href:  "/#price",
        desc:  "初期費用・月額費用・プランの概要をご案内しています（詳細は個別見積もり）。",
      },
      {
        label: "よくある質問",
        href:  "/#faq",
        desc:  "AI導入に関するよくあるご質問と回答をまとめています。",
      },
    ],
  },
  {
    category: "会社情報",
    accent:   "#7B5EFF",
    links: [
      {
        label: "会社概要",
        href:  "/#company",
        desc:  "エススリードット株式会社の概要・所在地・代表者情報・設立背景をご覧いただけます。",
      },
      {
        label: "Our Story",
        href:  "/#story",
        desc:  "「AIを、もっと身近に。」という理念が生まれたストーリーをお伝えします。",
      },
      {
        label: "コンセプト",
        href:  "/#concept",
        desc:  "S3DOTが目指すAI活用の世界観・ビジョンを紹介しています。",
      },
    ],
  },
  {
    category: "お問い合わせ",
    accent:   "#00E5A0",
    links: [
      {
        label: "お問い合わせ・無料相談",
        href:  "/#contact",
        desc:  "フォームまたはLINEからお気軽にご相談ください。無料相談は随時受け付けています。",
      },
    ],
  },
  {
    category: "法務・サポート",
    accent:   "#00E5A0",
    links: [
      {
        label: "プライバシーポリシー",
        href:  "/privacy",
        desc:  "個人情報の収集・利用・第三者提供・安全管理に関する当社の方針を記載しています。",
      },
      {
        label: "利用規約",
        href:  "/terms",
        desc:  "当社サービスをご利用いただくための利用規約・禁止事項・免責事項です。",
      },
      {
        label: "特定商取引法に基づく表記",
        href:  "/legal",
        desc:  "特定商取引法に基づく販売事業者情報・料金・支払方法・キャンセルポリシー等です。",
      },
      {
        label: "サイトマップ",
        href:  "/sitemap",
        desc:  "現在のページです。サイト内の全ページへのリンク一覧です。",
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 bg-s3-bg overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.05) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 hero-grid" style={{ opacity: 0.06 }} />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(0,200,255,0.2),transparent)",
            }}
          />

          <div className="relative max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.36em] text-s3-blue uppercase font-mono mb-4">
              Sitemap
            </p>
            <h1
              className="font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.75rem,5vw,3rem)" }}
            >
              サイトマップ
            </h1>
            <p
              className="text-[rgba(74,96,112,0.9)] tracking-wide"
              style={{ fontSize: "0.88rem", maxWidth: "480px", margin: "0 auto" }}
            >
              S3DOTウェブサイトの全ページ一覧です。
            </p>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(30,45,61,0.6),transparent)",
            }}
          />
        </section>

        {/* ── Content ── */}
        <section className="py-14 md:py-20 bg-s3-surface">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {siteGroups.map((group) => (
                <div key={group.category}>
                  {/* Group heading */}
                  <div
                    className="flex items-center gap-3 mb-5"
                    style={{ borderBottom: `1px solid ${group.accent}22`, paddingBottom: "0.75rem" }}
                  >
                    <span
                      className="block w-1 h-4 rounded-full"
                      style={{ background: group.accent }}
                    />
                    <h2
                      className="font-semibold text-white text-sm tracking-[0.06em]"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {group.category}
                    </h2>
                  </div>

                  {/* Links */}
                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <SitemapCard
                          href={link.href}
                          label={link.label}
                          desc={link.desc}
                          accent={group.accent}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Updated notice */}
            <div className="mt-14 text-center">
              <p
                className="text-xs"
                style={{ color: "rgba(74,96,112,0.7)", letterSpacing: "0.02em" }}
              >
                最終更新日：2026年7月14日　／　S3DOT — AIを、もっと身近に。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
