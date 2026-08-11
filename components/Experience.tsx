"use client";

import { motion, type Variants } from "framer-motion";
import TechBadge from "./TechBadge";
import { experiences } from "@/data/experience";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  if (experiences.length === 0) return null;

  return (
    <div className="min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-to">
          Journey
        </p>

        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>

        <p className="mt-4 text-base leading-relaxed text-muted">
          Where I&apos;ve been building, learning, and contributing.
        </p>
      </motion.div>

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
        className="relative mt-12 border-l border-border-subtle pl-6 sm:pl-8"
      >
        {experiences.map((exp) => (
          <motion.li
            key={exp.id}
            variants={reveal}
            className="relative pb-10 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+1px)] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-br from-accent-from to-accent-to ring-4 ring-background sm:-left-[calc(2rem+1px)]"
            />

            <div className="rounded-2xl border border-border-subtle bg-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>

                <span className="shrink-0 text-sm text-muted">
                  {exp.period}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-accent-to">
                {exp.organization}

                {exp.location && (
                  <span className="text-muted"> · {exp.location}</span>
                )}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-to" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies && exp.technologies.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <li key={tech}>
                      <TechBadge>{tech}</TechBadge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}