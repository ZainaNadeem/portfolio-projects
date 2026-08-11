"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "./icons";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const {
    slug,
    title,
    category,
    description,
    technologies,
    github,
    badge,
  } = project;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-none border border-border-subtle bg-card p-6 transition-colors hover:border-white/20"
    >
      {/* Gradient glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-from/10 to-accent-to/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Category + badge */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-accent-to">
          {category}
        </span>

        {badge && (
          <span className="rounded-none border border-accent-to/40 bg-accent-to/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-to">
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-foreground">
        <Link
          href={`/projects/${slug}`}
          className="outline-none after:absolute after:inset-0 focus-visible:underline"
        >
          {title}
        </Link>
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      {/* Technology badges */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="relative z-10 mt-6 flex items-center gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub`}
            className="inline-flex items-center gap-2 rounded-none border border-border-subtle bg-background/60 px-3 py-2 text-sm text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
          >
            <Github size={16} />
            GitHub
          </a>
        )}

        <Link
          href={`/projects/${slug}`}
          className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-white"
        >
          View Project
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}