import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.s3dot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             SITE_URL,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        1.0,
    },
    {
      url:             `${SITE_URL}/#service`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/#pickup`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/#process`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/#price`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${SITE_URL}/#faq`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${SITE_URL}/#company`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.6,
    },
    {
      url:             `${SITE_URL}/#contact`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.9,
    },
    {
      url:             `${SITE_URL}/privacy`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.4,
    },
    {
      url:             `${SITE_URL}/terms`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.4,
    },
    {
      url:             `${SITE_URL}/legal`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.4,
    },
    {
      url:             `${SITE_URL}/sitemap`,
      lastModified:    new Date(),
      changeFrequency: "monthly",
      priority:        0.3,
    },
  ];
}
