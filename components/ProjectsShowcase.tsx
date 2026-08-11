import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectGrid from "./ProjectGrid";
import type { Project } from "@/data/projects";

/**
 * Composes the featured project (larger, full-width) above a grid of the
 * remaining standard cards. Shared by the homepage Projects section and the
 * /projects page so both stay in sync from the same data.
 */
export default function ProjectsShowcase({
  featured,
  others,
}: {
  featured?: Project;
  others: Project[];
}) {
  return (
    <div className="space-y-6">
      {featured && <FeaturedProjectCard project={featured} />}
      {others.length > 0 && <ProjectGrid projects={others} />}
    </div>
  );
}
