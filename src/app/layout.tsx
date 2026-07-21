import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import SafariReflowFix from "@/components/SafariReflowFix";
import { SITE_URL, SOCIAL_IMAGE, X_ACCOUNT } from "@/lib/site-metadata";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/* ── Google Tag Manager コンテナID ──
   全ページで読み込むため環境変数ではなく固定値として管理する */
const GTM_ID = "GTM-P46TGDBV";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const ROOT_TITLE = "S3DOT｜AI導入・業務改善をもっと身近に。AI活用パートナー";
const ROOT_DESCRIPTION =
  "AI導入・業務改善・業務自動化・AIシステム開発まで。S3DOTはAIをもっと身近にするAI活用パートナー。あなたの会社に合った最適なAI活用をご提案します。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── タイトル ── */
  title: {
    default: ROOT_TITLE,
    template: "%s | S3DOT",
  },

  /* ── description ── */
  description: ROOT_DESCRIPTION,

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
  alternates: { canonical: `${SITE_URL}/` },

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
    url:         `${SITE_URL}/`,
    siteName:    "S3DOT",
    title:       ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    images:      [SOCIAL_IMAGE],
  },

  /* ── Twitter / X ── */
  twitter: {
    card:        "summary_large_image",
    site:        X_ACCOUNT,
    creator:     X_ACCOUNT,
    title:       ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    images:      [SOCIAL_IMAGE.url],
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
        {/* Google Tag Manager（beforeInteractive: 必ずhead内に挿入される） */}
        <Script
          id="gtm-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* ⑤ 構造化データ（JSON-LD） */}
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-s3-bg text-s3-text">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SafariReflowFix />
        {children}
      </body>
      {/* ① Google Analytics 4（@next/third-parties、GA_ID 設定時のみ全ページで動作） */}
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
