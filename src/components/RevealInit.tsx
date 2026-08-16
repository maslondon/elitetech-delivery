"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement fade-up: adds `is-visible` to `.reveal` elements
 * as they enter the viewport. No-op (elements stay visible) if JS fails.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
