"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "./icons";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectHero({ project }: { project: Project }) {
  const { title, category, technologies, github, demo, badge } = project;

  return (
    <section className="relative overflow-hidden border-b border-border-subtle">
      {/* Animated gradient background — consistent with the homepage hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-from/20 blur-[120px] animate-aurora" />
        <div className="absolute right-1/4 top-24 h-[22rem] w-[22rem] rounded-full bg-accent-to/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl px-5 pt-28 pb-16 sm:px-8"
      >
        <motion.div variants={item}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent-to">
            {category}
          </span>
          {badge && (
            <span className="rounded-full border border-accent-to/40 bg-accent-to/10 px-2.5 py-0.5 text-xs font-medium text-accent-to">
              {badge}
            </span>
          )}
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.ul variants={item} className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </motion.ul>

        {(github || demo) && (
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-to/25 transition-transform hover:scale-105"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
