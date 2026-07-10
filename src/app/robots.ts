import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.s3dot.com";

/**
 * robots.txt
 * 生成される内容:
 *   User-agent: *
 *   Allow: /
 *   Sitemap: https://www.s3dot.com/sitemap.xml
 *   Host: https://www.s3dot.com
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
