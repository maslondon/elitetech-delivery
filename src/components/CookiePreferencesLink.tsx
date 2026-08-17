"use client";

import { OPEN_COOKIE_PREFERENCES_EVENT } from "@/lib/consent";

export function CookiePreferencesLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
      className={className}
    >
      Cookie preferences
    </button>
  );
}
