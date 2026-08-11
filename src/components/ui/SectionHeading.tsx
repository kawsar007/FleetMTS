import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use light text colors for placement on a dark section background. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Consistent heading block used across every section:
 * eyebrow label -> title -> supporting description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]",
            isDark
              ? "border-white/15 bg-white/5 text-live"
              : "border-signal/20 bg-signal-soft text-signal-dim"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              isDark ? "bg-live" : "bg-signal"
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          "text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            isDark ? "text-slate-dim" : "text-slate",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
