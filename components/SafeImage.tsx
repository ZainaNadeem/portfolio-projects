"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  /** Tailwind classes for the wrapper (aspect ratio, border, rounding). */
  wrapperClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** "cover" fills the box (default); "contain" shows the whole image. */
  fit?: "cover" | "contain";
};

/**
 * next/image wrapper that renders nothing if the image fails to load. This lets
 * us reference optional project images without ever showing a broken
 * placeholder when the file hasn't been added to /public yet.
 */
export default function SafeImage({
  src,
  alt,
  wrapperClassName = "aspect-[16/9] w-full rounded-2xl border border-border-subtle",
  sizes = "(max-width: 768px) 100vw, 768px",
  priority = false,
  fit = "cover",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className={`relative overflow-hidden bg-card ${wrapperClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
