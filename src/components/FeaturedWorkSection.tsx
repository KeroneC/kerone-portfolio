import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionContainer } from "./SectionContainer";

export function FeaturedWorkSection() {
  return (
    <SectionContainer
      id="work"
      eyebrow="Featured Work"
      title="Projects with practical problems at the center"
      description="These are the homepage-level previews. Full case studies and detail pages will come later, after the foundation is in place."
      className="bg-[#f9f5ed]"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
