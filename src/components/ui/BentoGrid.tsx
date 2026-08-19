import type { ReactNode } from "react";
import Link from "next/link";
import { clsx } from "@/lib/clsx";

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  );
}

type BentoCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  accent?: boolean;
  span?: "wide" | "full" | "normal";
};

export function BentoCard({ title, description, href, icon, accent = false, span = "normal" }: BentoCardProps) {
  const horizontal = span === "full";

  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex overflow-hidden rounded-2xl p-7 sm:p-8 transition-all duration-300",
        horizontal
          ? "flex-col justify-between gap-6 sm:flex-row sm:items-center sm:justify-between"
          : "min-h-[220px] flex-col justify-between sm:min-h-[260px]",
        span === "wide" && "lg:col-span-2",
        span === "full" && "lg:col-span-4",
        accent
          ? "bg-white/60 text-ink ring-1 ring-ink/10 hover:bg-bronze hover:ring-bronze"
          : "bg-white/60 text-ink ring-1 ring-ink/10 hover:ring-bronze/50 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_rgba(11,11,12,0.25)]"
      )}
    >
      <div className={clsx(horizontal && "flex items-center gap-5")}>
        {icon && (
          <div
            className={clsx(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
              horizontal ? "" : "mb-6",
              accent ? "bg-bronze/15 text-bronze-dark group-hover:bg-ink group-hover:text-bronze" : "bg-bronze/15 text-bronze-dark"
            )}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          <p
            className={clsx(
              "leading-relaxed transition-colors duration-300",
              accent ? "text-stone group-hover:text-ink/80" : "text-stone",
              horizontal ? "mt-1.5 max-w-md text-[15px]" : "mt-3 text-[15px]"
            )}
          >
            {description}
          </p>
        </div>
      </div>
      <span
        className={clsx(
          "inline-flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors duration-300",
          accent ? "text-bronze-dark group-hover:text-ink" : "text-bronze-dark",
          horizontal ? "" : "mt-6"
        )}
      >
        Learn more
        <svg
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
