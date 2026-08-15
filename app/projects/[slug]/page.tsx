import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import SafeImage from "@/components/SafeImage";
import Reveal from "@/components/Reveal";

import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ============================================================
   STATIC GENERATION
============================================================ */

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

/* ============================================================
   PROJECT METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

/* ============================================================
   REUSABLE SECTION
============================================================ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      as="section"
      className="border-t border-border-subtle"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

/* ============================================================
   BULLET LIST
============================================================ */

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-muted"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-to" />

          <span className="leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   PROJECT PAGE
============================================================ */

export default async function ProjectDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* =====================================================
            PROJECT HERO
        ====================================================== */}

        <ProjectHero project={project} />

        {/* =====================================================
            COVER IMAGE
        ====================================================== */}

        {project.coverImage && (
          <Reveal as="section">
            <div className="mx-auto max-w-3xl px-5 pt-12 sm:px-8">
              <SafeImage
                src={project.coverImage}
                alt={`${project.title} preview`}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </Reveal>
        )}

        {/* =====================================================
            OVERVIEW
        ====================================================== */}

        {project.longDescription && (
          <Reveal as="section">
            <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
              <p className="text-lg leading-relaxed text-muted">
                {project.longDescription}
              </p>
            </div>
          </Reveal>
        )}

        {/* =====================================================
            PROBLEM
        ====================================================== */}

        {project.problem && (
          <Section title="Problem">
            <p className="leading-relaxed text-muted">
              {project.problem}
            </p>
          </Section>
        )}

        {/* =====================================================
            SOLUTION
        ====================================================== */}

        {project.solution && (
          <Section title="Solution">
            <p className="leading-relaxed text-muted">
              {project.solution}
            </p>
          </Section>
        )}

        {/* =====================================================
            RESEARCH QUESTION
        ====================================================== */}

        {project.researchQuestion && (
          <Section title="Research Question">
            <p className="leading-relaxed text-foreground">
              {project.researchQuestion}
            </p>
          </Section>
        )}

        {/* =====================================================
            METHODS
        ====================================================== */}

        {project.methods &&
          project.methods.length > 0 && (
            <Section title="Methods">
              <BulletList items={project.methods} />
            </Section>
          )}

        {/* =====================================================
            ARCHITECTURE
        ====================================================== */}

        {project.architecture &&
          project.architecture.length > 0 && (
            <Section title="Architecture">
              <div className="space-y-14">
                {project.architecture.map(
                  (diagram) => (
                    <ArchitectureDiagram
                      key={diagram.title}
                      diagram={diagram}
                    />
                  )
                )}
              </div>
            </Section>
          )}

        {/* =====================================================
            TECHNICAL HIGHLIGHTS
        ====================================================== */}

        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <Section title="Technical Highlights">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.technicalHighlights.map(
                  (highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl border border-border-subtle bg-card p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-background text-accent-to">
                        <Check size={14} />
                      </span>

                      <span className="text-sm text-foreground">
                        {highlight}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </Section>
          )}

        {/* =====================================================
            ENGINEERING CHALLENGES
        ====================================================== */}

        {project.challenges &&
          project.challenges.length > 0 && (
            <Section title="Engineering Challenges">
              <div className="space-y-6">
                {project.challenges.map(
                  (challenge) => (
                    <div
                      key={challenge.title}
                      className="rounded-xl border border-border-subtle bg-card p-6"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {challenge.title}
                      </h3>

                      <p className="mt-2 leading-relaxed text-muted">
                        {challenge.body}
                      </p>
                    </div>
                  )
                )}
              </div>
            </Section>
          )}

        {/* =====================================================
            RESULTS
        ====================================================== */}

        {project.results &&
          project.results.length > 0 && (
            <Section title="Results">
              <BulletList items={project.results} />
            </Section>
          )}

        {/* =====================================================
            KEY LEARNINGS
        ====================================================== */}

        {project.learnings &&
          project.learnings.length > 0 && (
            <Section title="Key Learnings">
              <BulletList items={project.learnings} />
            </Section>
          )}

        {/* =====================================================
            FUTURE WORK
        ====================================================== */}

        {project.futureWork &&
          project.futureWork.length > 0 && (
            <Section title="Future Work">
              <BulletList items={project.futureWork} />
            </Section>
          )}

        {/* =====================================================
            GALLERY
        ====================================================== */}

        {project.gallery &&
          project.gallery.length > 0 && (
            <Section title="Gallery">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {project.gallery.map((image) => (
                  <figure key={image.src}>
                    <SafeImage
                      src={image.src}
                      alt={image.alt}
                      fit="contain"
                      wrapperClassName="aspect-[4/3] w-full rounded-2xl border border-border-subtle"
                      sizes="(max-width: 640px) 100vw, 384px"
                    />

                    {image.caption && (
                      <figcaption className="mt-2 text-sm text-muted">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Section>
          )}

        {/* =====================================================
            EXTERNAL LINKS
        ====================================================== */}

        {project.externalLinks &&
          project.externalLinks.length > 0 && (
            <Section
              title={
                project.repositoryLabel ??
                "Links"
              }
            >
              <ul className="flex flex-wrap gap-3">
                {project.externalLinks.map(
                  (link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
                      >
                        {link.label}

                        <ExternalLink size={14} />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </Section>
          )}

        {/* =====================================================
            BACK TO PROJECTS
        ====================================================== */}

        <div className="border-t border-border-subtle">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}