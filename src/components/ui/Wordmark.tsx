import Link from "next/link";
import { clsx } from "@/lib/clsx";

type WordmarkProps = {
  /**
   * "light" — ink text, for ivory backgrounds.
   * "dark" — ivory text, for ink backgrounds (footer).
   * "header" — pure white text, for the site header specifically (ink bg).
   */
  variant?: "light" | "dark" | "header";
  className?: string;
};

/**
 * Two-line lockup, one type size throughout. "Delivery" is distinguished by
 * colour rather than by being made smaller — "Elite Tech" on its own is shared
 * with several other firms in this sector, so the word that differentiates the
 * name has to carry equal weight.
 *
 * Stacked rather than set on one line deliberately: the nearest similarly-named
 * firm uses a wide, single-line lockup, so a compact stacked block reads as a
 * different shape before either name has been read.
 *
 * The capitals are applied with CSS rather than typed into the markup, so the
 * brand name reads as "Elite Tech Delivery" everywhere it is taken as text —
 * screen readers, copy and paste, and search results — while still rendering
 * as the uppercase lockup.
 */
export function Wordmark({ variant = "light", className }: WordmarkProps) {
  const primaryColor =
    variant === "light" ? "text-ink" : variant === "header" ? "text-white" : "text-ivory";

  return (
    <Link
      href="/"
      aria-label="Elite Tech Delivery — home"
      className={clsx(
        "group inline-flex flex-col text-[18px] font-semibold uppercase leading-[1.06] tracking-tight sm:text-[22px]",
        className
      )}
    >
      <span className={primaryColor}>Elite Tech</span>
      <span className="text-bronze">Delivery</span>
    </Link>
  );
}
