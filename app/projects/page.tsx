import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Reveal from "@/components/Reveal";
import { featuredProject, otherProjects } from "@/data/projects";
import { siteConfig } from "@/lib/config";

const description =
  "A collection of projects across AI engineering, machine learning infrastructure, software engineering, and research.";

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
        <section className="mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
              Featured Work
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-muted">
              A selection of work spanning AI engineering, machine learning
              infrastructure, software engineering, and research. Each one is a
              place I went deep &mdash; open any project to read the problem, the
              approach, and the architecture behind it.
            </p>
          </Reveal>

          <div className="mt-12">
            <ProjectsShowcase featured={featuredProject} others={otherProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
