import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

const description =
  "Engineering projects spanning backend systems, real-time applications, cloud infrastructure, product development, and applied AI.";

export const metadata: Metadata = {
  title: "Projects",
  description,

  openGraph: {
    title: "Selected Engineering Projects",
    description,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Selected Engineering Projects",
    description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="mx-auto w-full max-w-[1120px] px-6 py-14 sm:px-8 lg:py-16">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Selected Engineering Projects
            </h1>

            <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
              Engineering work across backend systems, real-time applications,
              cloud infrastructure, product development, and applied AI. Open
              any project to explore the architecture, technical decisions,
              challenges, and results behind it.
            </p>
          </Reveal>

          <div className="mt-10 space-y-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}