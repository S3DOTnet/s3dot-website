const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://s3dot.co.jp";

/* ── Organization Schema ──────────────────── */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "エススリードット株式会社",
  alternateName: "S3DOT",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    "AIを、もっと身近にする会社。AI導入相談・業務改善・業務自動化・AI制作・AIシステム開発を通じて、あなたの会社に合った最適なAI活用をご提案します。",
  sameAs: [],  /* 公式SNSアカウントURLを確定後に追加 */
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
};

/* ── WebSite Schema ───────────────────────── */
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "S3DOT",
  url: SITE_URL,
  description: "AIを、もっと身近にする会社。S3DOTのAI活用パートナーサービス。",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "ja",
};

/**
 * 構造化データ（JSON-LD）
 * layout.tsx の <head> 内に配置する Server Component
 */
export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
