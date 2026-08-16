import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={clsx(align === "center" && "justify-center")}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={clsx(
          "mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-balance",
          onDark ? "text-ivory" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            onDark ? "text-ivory/75" : "text-stone"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
