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
 * Two-line, left-aligned lockup. "ELITE TECH" carries the weight; "DELIVERY"
 * is smaller, wide-tracked and set in bronze to read as a descriptor rather
 * than a second name.
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
          "text-[18px] sm:text-[19px] font-medium tracking-tight",
          primaryColor
        )}
      >
        ELITE TECH
      </span>
      <span
        className={clsx(
          "mt-1 text-[10px] sm:text-[11px] text-bronze",
          variant === "header" ? "font-normal tracking-[5px]" : "font-medium tracking-[0.3em]"
        )}
      >
        DELIVERY
      </span>
    </Link>
  );
}
