"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";
import type { Project } from "@/data/projects";

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
    results,
    architecture,
  } = project;

  const architectureNodes =
    architecture?.[0]?.layers.flatMap((layer) => layer.nodes) ?? [];

  return (
    <article className="pb-12">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[240px_minmax(0,1fr)] sm:items-start sm:gap-6">
        {/* LEFT VISUAL */}
        <Link
          href={`/projects/${slug}`}
          className="block w-full overflow-hidden bg-card"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={`${title} project preview`}
                fill
                sizes="240px"
                className="object-cover"
              />
            ) : (
              <div className="relative flex h-full flex-col justify-center overflow-hidden p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:22px_22px]"
                />

                <div className="relative">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-to">
                    Architecture
                  </p>

                  <div className="mt-3 space-y-2">
                    {architectureNodes.slice(0, 4).map((node, index) => (
                      <div
                        key={`${node.label}-${index}`}
                        className="border border-border-subtle bg-background/90 px-2.5 py-2"
                      >
                        <p className="truncate text-[10px] font-medium text-foreground">
                          {node.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">
          <h3 className="font-heading text-[1.35rem] font-bold leading-tight text-foreground">
            <Link
              href={`/projects/${slug}`}
              className="transition-colors hover:text-white"
            >
              {title}
            </Link>
          </h3>

          <p className="mt-1 text-[13px] italic text-muted">
            {category}
          </p>

          <p className="mt-3 text-[13px] leading-[1.7] text-muted">
            {description}
          </p>

          {results && results.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {results.slice(0, 2).map((result) => (
                <p
                  key={result}
                  className="text-[13px] leading-[1.6] text-foreground/85"
                >
                  {result}
                </p>
              ))}
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
            {technologies.slice(0, 6).map((tech, index) => (
              <span
                key={tech}
                className="text-[11px] text-muted"
              >
                {tech}

                {index < Math.min(technologies.length, 6) - 1 && (
                  <span className="ml-2 text-border-subtle">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${slug}`}
              className="text-[13px] font-medium text-accent-to transition-colors hover:text-foreground"
            >
              Project Details
            </Link>

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-accent-to transition-colors hover:text-foreground"
              >
                <Github size={13} />
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-accent-to transition-colors hover:text-foreground"
              >
                <ExternalLink size={13} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}