import ProjectGrid from "./ProjectGrid";
import type { Project } from "@/data/projects";

/**
 * Renders all selected projects with equal visual weight.
 * Shared by the homepage Projects section and the /projects page.
 */
export default function ProjectsShowcase({
  projects,
}: {
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return <ProjectGrid projects={projects} />;
}