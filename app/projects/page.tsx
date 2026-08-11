import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/config";

const description =
  "A collection of software engineering projects across backend systems, real-time applications, cloud infrastructure, and applied AI.";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${siteConfig.name}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
              Selected Work
            </p>

            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Selected Projects
            </h1>

            <p className="mt-4 text-muted">
              Backend systems, real-time applications, cloud infrastructure,
              and intelligent products. Open any project to explore the
              engineering decisions, architecture, challenges, and results
              behind it.
            </p>
          </Reveal>

          <div className="mt-12">
            <ProjectsShowcase projects={projects} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}