"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Google Analytics 4
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID が設定されている場合のみ読み込む
 * - 本番環境（NODE_ENV === 'production'）のみ動作
 * - Next.js Script の afterInteractive でパフォーマンスに影響しない
 */
export default function GoogleAnalytics() {
  /* IDなし or 開発環境では何も返さない */
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/* Googleタグ（gtag.js）の読み込み */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* 初期化スクリプト */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
