import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.s3dot.com";

/**
 * sitemap.xml
 * - /sitemap.xml に自動配信される
 * - 公開後は Search Console に登録する
 * - 新しいページを追加した際はここに追記する
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             SITE_URL,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        1.0,
    },
  ];
}
