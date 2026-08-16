import Link from "next/link";
import { clsx } from "@/lib/clsx";

type WordmarkProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Two-line, left-aligned lockup. "ELITE TECH" carries the weight; "DELIVERY"
 * is smaller, wide-tracked and set in bronze to read as a descriptor rather
 * than a second name.
 */
export function Wordmark({ variant = "light", className }: WordmarkProps) {
  const primaryColor = variant === "light" ? "text-ink" : "text-ivory";

  return (
    <Link
      href="/"
      aria-label="Elite Tech Delivery — home"
      className={clsx("inline-flex flex-col leading-none group", className)}
    >
      <span
        className={clsx(
          "text-[17px] sm:text-[19px] font-medium tracking-tight",
          primaryColor
        )}
      >
        ELITE TECH
      </span>
      <span className="mt-1 text-[10px] sm:text-[11px] font-medium tracking-[0.3em] text-bronze">
        DELIVERY
      </span>
    </Link>
  );
}
