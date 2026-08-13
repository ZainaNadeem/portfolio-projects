"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./icons";
import type { OpenSourceContribution } from "@/data/openSource";

export default function OpenSourceProject({
  contribution,
}: {
  contribution: OpenSourceContribution;
}) {
  return (
    <article className="pb-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[210px_minmax(0,1fr)] sm:items-start sm:gap-5">
        {/* LEFT VISUAL */}
        <div className="relative aspect-[4/3] overflow-hidden bg-card">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:22px_22px]"
          />
            <div className="relative flex h-full -translate-y-2 flex-col justify-center px-4 py-2">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-accent-to">
              Open Source Contribution
            </p>

            <div className="mt-1.5 space-y-0.5">
              {/* Issue */}
              <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                <p className="text-[8px] leading-tight text-muted">
                  Issue
                </p>

                <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                  Stale embeddings
                </p>
              </div>

              {/* Arrow */}
              <div className="text-center text-[9px] leading-none text-accent-to">
                ↓
              </div>

              {/* Fix */}
              <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                <p className="text-[8px] leading-tight text-muted">
                  Fix
                </p>

                <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                  Vector deletion filter
                </p>
              </div>

              {/* Arrow */}
              <div className="text-center text-[9px] leading-none text-accent-to">
                ↓
              </div>

              {/* Validation */}
              <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                <p className="text-[8px] leading-tight text-muted">
                  Validation
                </p>

                <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                  10 / 10 tests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-bold leading-tight text-foreground">
            {contribution.title}
          </h3>

          <p className="mt-1 text-sm italic text-muted">
            {contribution.repository}
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            {contribution.description}
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            {contribution.contribution}
          </p>

          <div className="mt-3 space-y-1">
            {contribution.results.map((result) => (
              <p
                key={result}
                className="text-sm leading-5 text-foreground/85"
              >
                {result}
              </p>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {contribution.technologies.map((tech, index) => (
              <span key={tech} className="text-xs text-muted">
                {tech}

                {index < contribution.technologies.length - 1 && (
                  <span className="ml-2 text-border-subtle">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={contribution.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-to transition-colors hover:text-foreground"
            >
              <Github size={13} />
              Repository
            </a>

            <a
              href={contribution.pullRequest}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-to transition-colors hover:text-foreground"
            >
              <ExternalLink size={13} />
              Pull Request
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}