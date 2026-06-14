import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionContainer } from "./SectionContainer";

export function FeaturedWorkSection() {
  return (
    <SectionContainer
      id="work"
      eyebrow="Featured Work"
      title="Projects with practical problems at the center"
      description="Homepage-level previews of the kinds of systems Kerone builds: private professional work, community platforms, personal tools, and the portfolio itself."
      className="section-quiet"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
