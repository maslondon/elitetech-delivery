import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { socialImage } from "@/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Websites, Apps & Technical Delivery`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [socialImage.url],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  areaServed: "GB",
};

/**
 * Document shell only. The public site's header, footer and cookie banner
 * live in the (site) route group so that /studio can render full-screen
 * without them.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <head>
        {/*
          Marks the document as JavaScript-capable before first paint, so the
          scroll-reveal styles can hide their content only when there is
          something able to reveal it again. Inline and synchronous on purpose:
          deferring it would let the page paint unhidden and then flicker.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
      </head>
      <body className="min-h-full font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
