"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site-config";
import { clsx } from "@/lib/clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink">
      <Container className="flex h-20 items-center justify-between">
        <Wordmark variant="header" />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-[15px] font-medium transition-colors",
                  isActive ? "text-white" : "text-mist hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="px-5 py-2.5 text-sm">
            Book a consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-ink md:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive ? "text-white" : "text-mist hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button
              href="/contact"
              variant="primary"
              onClick={() => setOpen(false)}
              className="mt-3 min-h-[44px] w-full"
            >
              Book a consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
