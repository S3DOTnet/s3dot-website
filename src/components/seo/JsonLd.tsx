import { SITE_URL } from "@/lib/site-metadata";

/* ── Organization Schema ──────────────────── */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "エススリードット株式会社",
  legalName: "エススリードット株式会社",
  alternateName: ["S3DOT", "S3DOT Inc."],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
  },
  description:
    "AIを、もっと身近にする会社。AI導入相談・業務改善・業務自動化・AI制作・AIシステム開発を通じて、あなたの会社に合った最適なAI活用をご提案します。",
  address: {
    "@type": "PostalAddress",
    postalCode: "107-0061",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "港区",
    streetAddress: "北青山一丁目3番1号 アールキューブ青山3階",
  },
  telephone: "03-6868-4786",
  email: "contact@s3dot.net",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "03-6868-4786",
    email: "contact@s3dot.net",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
};

/* ── Representative Schema ───────────────── */
const representative = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#representative`,
  name: "木村健一郎",
  jobTitle: "代表取締役",
  affiliation: {
    "@id": `${SITE_URL}/#organization`,
  },
};

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(representative) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(website) }}
      />
    </>
  );
}
