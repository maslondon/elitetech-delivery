import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { articles } from "@/lib/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/insights", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: article.date,
  }));

  return [...staticRoutes, ...articleRoutes];
}
