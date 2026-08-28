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
 * Two-line, left-aligned lockup. "Elite Tech" carries the weight; "Delivery"
 * is smaller, wide-tracked and set in bronze to read as a descriptor rather
 * than a second name.
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
      className={clsx("inline-flex flex-col leading-none group", className)}
    >
      <span
        className={clsx(
          "text-[23px] sm:text-[26px] font-semibold uppercase tracking-tight",
          primaryColor
        )}
      >
        Elite Tech
      </span>
      <span
        className={clsx(
          "mt-1 text-[11px] sm:text-[12px] uppercase text-bronze",
          variant === "header" ? "font-normal tracking-[4px]" : "font-medium tracking-[0.25em]"
        )}
      >
        Delivery
      </span>
    </Link>
  );
}
