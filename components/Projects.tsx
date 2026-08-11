"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectsShowcase from "./ProjectsShowcase";
import { featuredProject, otherProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
            Featured Work
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-muted">
            A selection of projects where I explore machine learning, backend
            systems, and developer tooling.
          </p>
        </div>

        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-white"
        >
          View all projects
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <div className="mt-12">
        <ProjectsShowcase
          featured={featuredProject}
          others={otherProjects}
        />
      </div>
    </section>
  );
}