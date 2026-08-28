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
 * Single-line lockup, one type size throughout. "Delivery" is set in bronze
 * rather than made smaller, so the full name reads as one unit — "Elite Tech"
 * on its own is shared with several other firms, so the distinguishing word
 * needs to carry equal weight.
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
        "group inline-flex items-baseline gap-2 text-[18px] font-semibold uppercase leading-none tracking-tight sm:text-[24px]",
        className
      )}
    >
      <span className={primaryColor}>Elite Tech</span>
      <span className="text-bronze">Delivery</span>
    </Link>
  );
}
