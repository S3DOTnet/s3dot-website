import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

/**
 * robots.txt
 * 生成される内容:
 *   User-agent: *
 *   Allow: /
 *   Sitemap: https://s3dot.com/sitemap.xml
 *   Host: https://s3dot.com
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
