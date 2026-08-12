"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import OpenSourceProject from "./OpenSourceProject";
import { openSourceContributions } from "@/data/openSource";
import IndustryProject from "./IndustryProject";
import { industryProjects } from "@/data/industryProjects";
import ResearchProject from "./ResearchProject";
import { researchProjects } from "@/data/researchProjects";

export default function Projects() {
  return (
    <section id="projects" className="min-w-0">
      {/* =====================================================
          SELECTED ENGINEERING PROJECTS
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground">
          Selected Engineering Projects
        </h2>
      </motion.div>

      <div className="mt-6 space-y-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.03, 0.12),
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          INDUSTRY-SPONSORED / COLLABORATIVE
      ====================================================== */}
          <section
      id="industry-projects"
      className="mt-14 border-t border-border-subtle pt-8"
    >
      <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground">
        Industry-Sponsored & Collaborative Projects
      </h2>

      <div className="mt-6 space-y-2">
        {industryProjects.map((project) => (
          <IndustryProject
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>

      {/* =====================================================
          OPEN SOURCE
      ====================================================== */}
      <section
        id="open-source"
        className="mt-14 border-t border-border-subtle pt-8"
      >
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground">
          Open Source
        </h2>

        <div className="mt-6 space-y-2">
          {openSourceContributions.map((contribution) => (
            <OpenSourceProject
              key={contribution.title}
              contribution={contribution}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          AI / ML & RESEARCH
      ====================================================== */}
        <section
          id="research"
          className="mt-14 border-t border-border-subtle pt-8"
        >
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground">
            Research
          </h2>

          <div className="mt-6 space-y-2">
            {researchProjects.map((project) => (
              <ResearchProject
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </section>
    </section>
  );
}