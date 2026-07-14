import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.s3dot.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── タイトル ── */
  title: {
    default:  "S3DOT｜AI導入・業務改善をもっと身近に。AI活用パートナー",
    template: "%s | S3DOT",
  },

  /* ── description ── */
  description:
    "AI導入・業務改善・業務自動化・AIシステム開発まで。S3DOTはAIをもっと身近にするAI活用パートナー。あなたの会社に合った最適なAI活用をご提案します。",

  /* ── keywords ── */
  keywords: [
    "AI導入", "業務改善", "業務自動化", "AI活用",
    "AIシステム開発", "AI事務員", "LINE連携",
    "中小企業AI", "AI相談", "S3DOT", "エススリードット",
  ],

  /* ── 著者・サイト ── */
  authors:   [{ name: "エススリードット株式会社", url: SITE_URL }],
  creator:   "エススリードット株式会社",
  publisher: "エススリードット株式会社",

  /* ── canonical ── */
  alternates: { canonical: "/" },

  /* ── robots ── */
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },

  /* ── ② Google Search Console 所有権確認 ──
     環境変数 NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION が設定されると
     <meta name="google-site-verification" content="..." /> が自動生成される */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  /* ── OGP ── */
  openGraph: {
    type:        "website",
    locale:      "ja_JP",
    url:         SITE_URL,
    siteName:    "S3DOT",
    title:       "S3DOT｜AI導入・業務改善をもっと身近に。AI活用パートナー",
    description:
      "AI導入・業務改善・業務自動化・AIシステム開発まで。S3DOTはAIをもっと身近にするAI活用パートナー。",
    images: [
      {
        url:    "/opengraph-image",
        width:  1200,
        height: 630,
        alt:    "S3DOT｜AIは特別なものじゃない。もう、仕事のスタンダードです。",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card:        "summary_large_image",
    site:        "@s3dot_ai",
    creator:     "@s3dot_ai",
    title:       "S3DOT｜AI導入・業務改善をもっと身近に。AI活用パートナー",
    description:
      "AI導入・業務改善・業務自動化・AIシステム開発まで。S3DOTはAIをもっと身近にするAI活用パートナー。",
    images: ["/opengraph-image"],
  },

  /* ── Icons ── */
  icons: {
    shortcut: "/favicon.ico",
    icon:  [{ url: "/icon",       sizes: "32x32",   type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* ⑤ 構造化データ（JSON-LD） */}
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-s3-bg text-s3-text">
        {/* ① Google Analytics 4（本番 + GA_ID 設定時のみ動作） */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
