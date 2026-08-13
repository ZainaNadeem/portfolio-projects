"use client";

import Image from "next/image";
import type { ResearchProject as ResearchProjectType } from "@/data/researchProjects";

export default function ResearchProject({
  project,
}: {
  project: ResearchProjectType;
}) {
  return (
    <article className="pb-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[210px_minmax(0,1fr)] sm:items-start sm:gap-5">
        {/* LEFT VISUAL */}
        <div className="overflow-hidden bg-card">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} research visual`}
                fill
                sizes="210px"
                className="object-cover"
              />
            ) : (
              <>
                {/* Background grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:22px_22px]"
                />

                {/* Compact workflow */}
                <div className="relative flex h-full -translate-y-2 flex-col justify-center px-4 py-2">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-accent-to">
                    Research Workflow
                  </p>

                  <div className="mt-1.5 space-y-0.5">
                    {/* Wave Encoding */}
                    <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                      <p className="text-[8px] leading-tight text-muted">
                        Input
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                        Wave Encoding
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="text-center text-[9px] leading-none text-accent-to">
                      ↓
                    </div>

                    {/* Optimization */}
                    <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                      <p className="text-[8px] leading-tight text-muted">
                        Search
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                        Optimization
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="text-center text-[9px] leading-none text-accent-to">
                      ↓
                    </div>

                    {/* Evaluation */}
                    <div className="border border-border-subtle bg-background/90 px-2.5 py-1">
                      <p className="text-[8px] leading-tight text-muted">
                        Evaluation
                      </p>

                      <p className="mt-0.5 text-[10px] font-medium leading-tight text-foreground">
                        Embedding Analysis
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-bold leading-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-1 text-sm italic text-muted">
            {project.subtitle}
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            {project.description}
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            {project.contribution}
          </p>

          <div className="mt-3 space-y-1">
            {project.results.map((result) => (
              <p
                key={result}
                className="text-sm leading-5 text-foreground/85"
              >
                {result}
              </p>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {project.technologies.map((tech, index) => (
              <span key={tech} className="text-xs text-muted">
                {tech}

                {index < project.technologies.length - 1 && (
                  <span className="ml-2 text-border-subtle">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}