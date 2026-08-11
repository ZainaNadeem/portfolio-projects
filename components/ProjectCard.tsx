"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "./icons";
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
    demo,
    coverImage,
    badge,
  } = project;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden border border-border-subtle bg-card transition-colors hover:border-white/20"
    >
      {/* Visual */}
      <Link
        href={`/projects/${slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-border-subtle bg-background"
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${title} project preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            {/* subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* subtle atmosphere */}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-to/[0.08] blur-[70px]" />

            <div className="relative px-6 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-to">
                {category}
              </p>

              <p className="mt-3 font-heading text-xl font-semibold text-foreground">
                {title}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category + badge */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent-to">
            {category}
          </span>

          {badge && (
            <span className="border border-accent-to/30 bg-accent-to/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-to">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-foreground">
          <Link
            href={`/projects/${slug}`}
            className="transition-colors hover:text-white"
          >
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-4 pt-7">
          <Link
            href={`/projects/${slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-white"
          >
            View Project
            <ArrowRight
              size={15}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>

          <div className="ml-auto flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="text-muted transition-colors hover:text-foreground"
              >
                <Github size={17} />
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="text-muted transition-colors hover:text-foreground"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}