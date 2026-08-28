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
        // gap rather than line-height: the two lines are different sizes, so
        // leading would space them unevenly
        "group inline-flex flex-col gap-[3px] text-[18px] font-semibold uppercase leading-[1.06] tracking-tight sm:gap-[5px] sm:text-[22px]",
        className
      )}
    >
      <span className={primaryColor}>Elite Tech</span>
      {/* four points down — enough to read as a deliberate hierarchy rather
          than an accident, while colour keeps "Delivery" part of the name
          rather than demoting it to a descriptor */}
      <span className="text-[15px] text-bronze sm:text-[18px]">Delivery</span>
    </Link>
  );
}
