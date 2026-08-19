"use client";

import { useState } from "react";
import { linkedinIcon, xIcon, facebookIcon, mailIcon, linkIcon } from "@/lib/icons";

const iconButtonClasses =
  "flex h-9 w-9 items-center justify-center rounded-full text-ink ring-1 ring-ink/15 transition-colors hover:text-bronze-dark hover:ring-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const emailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-stone">Share</p>
      <div className="flex items-center gap-2">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className={iconButtonClasses}
        >
          {linkedinIcon}
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className={iconButtonClasses}
        >
          {xIcon}
        </a>
        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className={iconButtonClasses}
        >
          {facebookIcon}
        </a>
        <a href={emailHref} aria-label="Share by email" className={iconButtonClasses}>
          {mailIcon}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link"
          className={iconButtonClasses}
        >
          {linkIcon}
        </button>
        {copied && <span className="text-sm text-stone">Link copied</span>}
      </div>
    </div>
  );
}
