import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "light" | "dark";

interface BaseProps {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  /** Renders a trailing arrow glyph — use for navigational CTAs. */
  withArrow?: boolean;
}

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Distributes Omit across a union so discriminated variants stay intact. */
export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    light:
      "bg-ink text-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 hover:bg-ink/90",
    dark: "bg-white text-ink hover:-translate-y-0.5 hover:bg-white/90",
  },
  secondary: {
    light:
      "border border-line bg-white text-ink hover:border-ink/30 hover:-translate-y-0.5",
    dark: "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:-translate-y-0.5",
  },
  ghost: {
    light: "text-ink hover:text-signal",
    dark: "text-white hover:text-live",
  },
};

/** Base button/link — shared styling for PrimaryButton and SecondaryButton. */
export function Button({
  variant = "primary",
  tone = "light",
  className,
  children,
  withArrow,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant][tone], className);

  const content = (
    <>
      {children}
      {withArrow ? (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const nativeProps = props as NativeButtonProps;
  return (
    <button className={classes} {...nativeProps}>
      {content}
    </button>
  );
}
