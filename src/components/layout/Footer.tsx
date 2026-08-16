import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footerNav, legalNav, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Wordmark variant="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Websites, web applications and technical delivery consultancy for
              businesses that want modern digital work done properly.
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ivory/80 hover:text-bronze"
            >
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/50">Site</p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ivory/80 hover:text-bronze">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/50">Get in touch</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-bronze">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-ivory/50">
                {siteConfig.phone || "[PLACEHOLDER — phone number]"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            {" "}Registered in England &amp; Wales, company no. {siteConfig.companyNumber}.
            {" "}Registered office: {siteConfig.registeredOffice}.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-bronze">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
