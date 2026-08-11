"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in seconds. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Reusable scroll-into-view animation wrapper. Lets server components stay
 * server components while still getting the site's consistent reveal motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
