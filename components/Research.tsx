"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

// Research content is driven by the AutoEmbedding project data — no duplication,
// and only verified fields render.
const research = getProjectBySlug("autoembedding");

export default function Research() {
  if (!research) return null;

  const { title, badge, longDescription, researchQuestion, methods, slug } =
    research;

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
            Current Research Focus
          </h2>
          <p className="mt-4 text-muted">
            An ongoing exploration into how embeddings can be generated more
            flexibly.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 border border-border-subtle bg-card p-6 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-background text-accent-to">
              <FlaskConical size={18} />
            </span>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {title}
            </h3>
            {badge && (
              <span className="border border-accent-to/40 bg-accent-to/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-to">
                {badge}
              </span>
            )}
          </div>

          {longDescription && (
            <p className="mt-5 leading-relaxed text-muted">{longDescription}</p>
          )}

          {researchQuestion && (
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-accent-to">
                Research question
              </p>
              <p className="mt-2 leading-relaxed text-foreground">
                {researchQuestion}
              </p>
            </div>
          )}

          {methods && methods.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-accent-to">
                Methods
              </p>
              <ul className="mt-2 space-y-2">
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
          )}

          <Link
            href={`/projects/${slug}`}
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-white"
          >
            View project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.article>
      </div>
    </section>
  );
}