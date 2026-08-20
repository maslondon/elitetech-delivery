import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealInit } from "@/components/RevealInit";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { getSiteSettings, getFooter } from "@/sanity/fetch";

/**
 * Chrome for the public website only. Sanity Studio deliberately sits
 * outside this group: when it was wrapped in this layout, the fixed cookie
 * banner covered Studio's action bar and made the Publish button
 * unreachable.
 */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [settings, footer] = await Promise.all([getSiteSettings(), getFooter()]);

  return (
    <div className="flex min-h-full flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <Header settings={settings} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer settings={settings} footer={footer} />
      <RevealInit />
      <CookieConsent />
      <GoogleAnalytics />
    </div>
  );
}
