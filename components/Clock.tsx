import type { CSSProperties } from "react";

type ClockProps = {
  /** Resting hour hand position (0–23). */
  hour: number;
  /** Resting minute hand position (0–59). */
  minute: number;
  size?: number;
  className?: string;
};

/**
 * Minimal, original SVG clock. Monochrome and muted at rest; on the parent
 * card's hover (`group`) the face picks up the accent color and the hands
 * sweep forward — the minute hand a full turn, the hour hand one step — like
 * time passing during that chapter. Honors prefers-reduced-motion (no sweep).
 *
 * Rotation is driven by CSS classes reading `--rest` / `--hover` variables so
 * inline styles never override the group-hover transform.
 */
export default function Clock({
  hour,
  minute,
  size = 32,
  className,
}: ClockProps) {
  const restMinute = minute * 6;
  const restHour = (hour % 12) * 30 + minute * 0.5;

  const minuteStyle = {
    transformBox: "fill-box",
    transformOrigin: "bottom",
    "--rest": `${restMinute}deg`,
    "--hover": `${restMinute + 360}deg`,
  } as CSSProperties;

  const hourStyle = {
    transformBox: "fill-box",
    transformOrigin: "bottom",
    "--rest": `${restHour}deg`,
    "--hover": `${restHour + 30}deg`,
  } as CSSProperties;

  const handClasses =
    "ease-out transition-transform [transform:rotate(var(--rest))] group-hover:[transform:rotate(var(--hover))] motion-reduce:transition-none";

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      aria-hidden
      className={`shrink-0 text-muted/60 transition-colors duration-500 group-hover:text-accent-to ${
        className ?? ""
      }`}
    >
      {/* Face */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      {/* Ticks at 12 / 3 / 6 / 9 */}
      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1">
        <line x1="20" y1="3.5" x2="20" y2="6" />
        <line x1="36.5" y1="20" x2="34" y2="20" />
        <line x1="20" y1="36.5" x2="20" y2="34" />
        <line x1="3.5" y1="20" x2="6" y2="20" />
      </g>

      {/* Hour hand */}
      <rect
        x="19.2"
        y="12"
        width="1.6"
        height="8"
        rx="0.8"
        fill="currentColor"
        style={hourStyle}
        className={`${handClasses} duration-[900ms]`}
      />

      {/* Minute hand */}
      <rect
        x="19.4"
        y="7"
        width="1.2"
        height="13"
        rx="0.6"
        fill="currentColor"
        style={minuteStyle}
        className={`${handClasses} duration-700`}
      />

      {/* Center pin */}
      <circle cx="20" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}
