"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./icons";
import SafeImage from "./SafeImage";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturedProjectCard({
  project,
}: {
  project: Project;
}) {
  const {
    slug,
    title,
    category,
    description,
    technologies,
    github,
    demo,
    coverImage,
    badge,
  } = project;

  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="group overflow-hidden rounded-sm border border-border-subtle bg-card transition-colors duration-200 hover:border-white/30"
    >
      {coverImage && (
        <SafeImage
          src={coverImage}
          alt={`${title} preview`}
          wrapperClassName="aspect-[21/9] w-full border-b border-border-subtle"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      )}

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-sm border border-accent-to/40 bg-accent-to/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent-to">
            {badge ?? "Featured"}
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent-to">
            {category}
          </span>
        </div>

        <h3 className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
          <Link
            href={`/projects/${slug}`}
            className="outline-none transition-colors hover:text-accent-to focus-visible:underline"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 rounded-sm border border-accent-to bg-accent-to px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-from"
          >
            View Project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="inline-flex items-center gap-2 rounded-sm border border-border-subtle bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-sm border border-border-subtle bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}