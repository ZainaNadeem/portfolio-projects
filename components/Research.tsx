"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { research } from "@/data/research";

export default function Research() {
  const {
    title,
    badge,
    longDescription,
    researchQuestion,
    methods,
  } = research;

  return (
    <section
      id="research"
      className="border-t border-border-subtle bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
            Research
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Current Research
          </h2>

          <p className="mt-4 text-muted">
            Exploring alternative representation learning methods.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 border border-border-subtle bg-card p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border-subtle bg-background text-accent-to">
              <FlaskConical size={18} />
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {title}
                </h3>

                {badge && (
                  <span className="border border-accent-to/40 bg-accent-to/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-to">
                    {badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-muted">
            {longDescription}
          </p>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-to">
              Research question
            </p>

            <p className="mt-2 leading-relaxed text-foreground">
              {researchQuestion}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-to">
              Methods
            </p>

            <ul className="mt-3 space-y-3">
              {methods.map((method) => (
                <li
                  key={method}
                  className="flex items-start gap-3 text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-to" />
                  <span className="leading-relaxed">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}