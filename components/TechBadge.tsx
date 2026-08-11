import type { ReactNode } from "react";

type TechBadgeProps = {
  children: ReactNode;
  /** Visual weight. "solid" adds a faint card fill; "ghost" is transparent. */
  variant?: "solid" | "ghost";
};

/**
 * Small, reusable technology chip. Matches the existing badge styling used
 * across the site so cards, hero, and detail pages stay consistent.
 */
export default function TechBadge({
  children,
  variant = "solid",
}: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-subtle px-3 py-1 text-xs text-muted ${
        variant === "solid" ? "bg-background/60" : "bg-transparent"
      }`}
    >
      {children}
    </span>
  );
}
