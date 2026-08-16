import { clsx } from "@/lib/clsx";

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-bronze" aria-hidden="true" />
      <span
        className={clsx(
          "text-xs font-medium uppercase tracking-[0.2em]",
          onDark ? "text-ivory/70" : "text-stone"
        )}
      >
        {children}
      </span>
    </div>
  );
}
