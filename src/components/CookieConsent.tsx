"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  getStoredConsent,
  setStoredConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // One-off read of a browser-only store (localStorage) on mount: starting
    // from `visible: false` keeps server and first client render identical,
    // then this syncs in the real value — deliberately not derivable via
    // useState's initializer without risking a server/client mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (getStoredConsent() === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  function decide(value: "granted" | "denied") {
    setStoredConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-ivory/10 bg-ink px-6 py-5 sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ivory/80">
          We need tracking in place to understand how visitors use this
          site, using Google Analytics — but only if you say it&apos;s OK.
          No analytics cookies are set until you accept. See our{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            as="button"
            variant="secondary"
            onDark
            onClick={() => decide("denied")}
            className="px-5 py-2.5 text-sm"
          >
            Reject
          </Button>
          <Button
            as="button"
            variant="primary"
            onClick={() => decide("granted")}
            className="px-5 py-2.5 text-sm"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
