import type { ReactNode } from "react";

export const serviceIcons: Record<string, ReactNode> = {
  websites: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="4" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 7.5h15" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="5.75" r="0.6" fill="currentColor" />
    </svg>
  ),
  "web-applications": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11" y="2.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="2.5" y="11" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="11" y="11" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "ai-automation": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5 11.6 8 17 10l-5.4 2L10 17.5 8.4 12 3 10l5.4-2L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "technical-delivery": (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h4l2-5 4 10 2-5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
