import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { siteConfig } from "@/lib/site-config";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { linkedinIcon, xIcon, facebookIcon, instagramIcon } from "@/lib/icons";
import type { SiteSettingsData, FooterData } from "@/sanity/fetch";

const socialIconClasses =
  "flex h-9 w-9 items-center justify-center rounded-full text-ivory/70 ring-1 ring-ivory/20 transition-colors hover:text-bronze hover:ring-bronze";

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", icon: linkedinIcon },
  { key: "x", label: "X", icon: xIcon },
  { key: "facebook", label: "Facebook", icon: facebookIcon },
  { key: "instagram", label: "Instagram", icon: instagramIcon },
] as const;

const footerNavHrefs = [
  { href: "/about", labelKey: "navAbout" },
  { href: "/services", labelKey: "navServices" },
  { href: "/insights", labelKey: "navInsights" },
  { href: "/contact", labelKey: "navContact" },
] as const;

const legalNavHrefs = [
  { href: "/privacy", labelKey: "navPrivacy" },
  { href: "/terms", labelKey: "navTerms" },
] as const;

export function Footer({ settings, footer }: { settings: SiteSettingsData; footer: FooterData }) {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark variant="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">{footer.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(
                (item) =>
                  settings[item.key] && (
                    <a
                      key={item.key}
                      href={settings[item.key]}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.label}
                      className={socialIconClasses}
                    >
                      {item.icon}
                    </a>
                  )
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/50">{footer.siteColumnLabel}</p>
            <ul className="mt-5 space-y-3">
              {footerNavHrefs.map((item) => (
                <li key={item.href}>
                  <Link href={item.href as never} className="text-sm text-ivory/80 hover:text-bronze">
                    {settings[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/50">{footer.contactColumnLabel}</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-bronze">
                  {settings.email}
                </a>
              </li>
              {settings.phone && <li className="text-ivory/50">{settings.phone}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            {" "}Registered in England &amp; Wales, company no. {siteConfig.companyNumber}.
            {" "}Registered office: {siteConfig.registeredOffice}.
          </p>
          <div className="flex gap-6">
            {legalNavHrefs.map((item) => (
              <Link key={item.href} href={item.href as never} className="hover:text-bronze">
                {settings[item.labelKey]}
              </Link>
            ))}
            <CookiePreferencesLink className="hover:text-bronze" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
