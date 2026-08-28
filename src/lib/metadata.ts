import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * The card shown when a link to the site is shared — LinkedIn, WhatsApp,
 * Slack, X. Declared once and reused by every page, so a link to any route
 * previews with the same branded card rather than as a bare URL.
 *
 * The dimensions are the 1.91:1 ratio those platforms crop to; anything else
 * gets letterboxed or cut.
 */
export const socialImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — websites, apps, digital products and AI`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [socialImage.url],
    },
  };
}
