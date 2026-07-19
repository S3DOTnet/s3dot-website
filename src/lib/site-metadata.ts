import type { Metadata } from "next";

export const SITE_NAME = "S3DOT";
export const SITE_URL = "https://www.s3dot.com";
export const X_ACCOUNT = "@s3dot_ai";

export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "S3DOT｜AIは特別なものじゃない。もう、仕事のスタンダードです。",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: canonical,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: X_ACCOUNT,
      creator: X_ACCOUNT,
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
