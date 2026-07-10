import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://s3dot.co.jp";

/**
 * robots.txt
 * 生成される内容:
 *   User-agent: *
 *   Allow: /
 *   Sitemap: https://s3dot.co.jp/sitemap.xml
 *   Host: https://s3dot.co.jp
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow:     "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host:    SITE_URL,
  };
}
