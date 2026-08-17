"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent, CONSENT_CHANGED_EVENT } from "@/lib/consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads Google Analytics (gtag.js) only once the visitor has explicitly
 * accepted cookies via CookieConsent — nothing is set beforehand. Also
 * requires NEXT_PUBLIC_GA_MEASUREMENT_ID to be configured; renders nothing
 * without it.
 */
export function GoogleAnalytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    // One-off read of a browser-only store on mount — see CookieConsent for
    // why this can't be a useState initializer without an SSR mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGranted(getStoredConsent() === "granted");

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<"granted" | "denied">).detail;
      setGranted(detail === "granted");
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  if (!GA_MEASUREMENT_ID || !granted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
