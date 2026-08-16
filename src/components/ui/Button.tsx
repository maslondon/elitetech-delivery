import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-bronze text-ink hover:bg-bronze-dark",
  secondary:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  ghost: "text-ink hover:text-bronze-dark underline-offset-4 hover:underline",
};

const variantsOnDark: Record<Variant, string> = {
  primary: "bg-bronze text-ink hover:bg-bronze-dark",
  secondary:
    "border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
  ghost: "text-ivory hover:text-bronze underline-offset-4 hover:underline",
};

type ButtonAsLink = ComponentPropsWithoutRef<typeof Link> & {
  as?: "link";
  variant?: Variant;
  onDark?: boolean;
};

type ButtonAsButton = ComponentPropsWithoutRef<"button"> & {
  as: "button";
  variant?: Variant;
  onDark?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", onDark = false, className, ...rest } = props;
  const classes = clsx(base, (onDark ? variantsOnDark : variants)[variant], className);

  if (props.as === "button") {
    const { as, ...buttonRest } = rest as ButtonAsButton;
    void as;
    return <button className={classes} {...buttonRest} />;
  }

  const { as, ...linkRest } = rest as ButtonAsLink;
  void as;
  return <Link className={classes} {...linkRest} />;
}
