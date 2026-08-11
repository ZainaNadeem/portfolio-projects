"use client";

import { motion, type Variants } from "framer-motion";
import { Cloud, Code2, Cpu } from "lucide-react";
import { skillCategories } from "@/lib/config";

const iconFor: Record<string, typeof Code2> = {
  Languages: Code2,
  "AI / ML": Cpu,
  "Cloud & Engineering": Cloud,
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <div className="min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-to">
          Toolkit
        </p>

        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Skills
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Technologies I use across software and AI projects.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-8 border border-border-subtle bg-card"
      >
        {skillCategories.map(({ category, skills }, index) => {
          const Icon = iconFor[category] ?? Code2;

          return (
            <motion.div
              key={category}
              variants={reveal}
              className={[
                "p-5",
                index !== skillCategories.length - 1
                  ? "border-b border-border-subtle"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-border-subtle bg-accent-to/10 text-accent-to">
                  <Icon size={15} />
                </span>

                <h3 className="font-heading text-base font-semibold text-foreground">
                  {category}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-border-subtle bg-background/60 px-2.5 py-1 text-xs leading-5 text-muted transition-colors hover:border-white/20 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}