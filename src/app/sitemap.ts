import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getArticles } from "@/sanity/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/services", "/about", "/insights", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const articles = await getArticles();
  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: article.date,
  }));

  return [...staticRoutes, ...articleRoutes];
}
