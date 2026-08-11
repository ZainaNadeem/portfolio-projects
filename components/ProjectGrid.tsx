"use client";

import { motion, type Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/**
 * Staggered grid of ProjectCards. Shared by the homepage section and the
 * /projects page so the animation and layout stay identical.
 */
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
