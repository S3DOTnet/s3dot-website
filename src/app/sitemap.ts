import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-metadata";

const pages: Array<{
  path: `/${string}` | "/";
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/",        changeFrequency: "monthly", priority: 1.0 },
  { path: "/ai",      changeFrequency: "monthly", priority: 0.9 },
  { path: "/service", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case",    changeFrequency: "monthly", priority: 0.7 },
  { path: "/price",   changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq",     changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/company", changeFrequency: "yearly",  priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly",  priority: 0.4 },
  { path: "/terms",   changeFrequency: "yearly",  priority: 0.4 },
  { path: "/legal",   changeFrequency: "yearly",  priority: 0.4 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
