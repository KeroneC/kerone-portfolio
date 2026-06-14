import type { FeaturedProject } from "@/data/projects";

type ProjectCardProps = {
  project: FeaturedProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#e0d3bf] bg-white shadow-sm">
      <div className="flex aspect-[16/10] items-center justify-center border-b border-[#e8dfcf] bg-[#f4efe6] px-6 text-center">
        <div>
          <p className="text-sm font-semibold text-[#1f5c43]">
            Mockup placeholder
          </p>
          <p className="mt-2 text-xs uppercase text-[#9b6f20]">
            Image or recreated screen planned
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-[#e9f0ea] px-3 py-1 text-xs font-semibold text-[#1f5c43]">
            {project.type}
          </span>
          <span className="rounded-md bg-[#fff4d8] px-3 py-1 text-xs font-semibold text-[#7b5718]">
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[#22211f]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#625f59]">
          {project.problem}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#e8dfcf] px-2.5 py-1 text-xs font-medium text-[#5b5852]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          disabled
          title="Case study coming in a future phase"
          className="mt-6 rounded-md border border-[#d6c9b6] px-4 py-2 text-sm font-semibold text-[#8a857c]"
        >
          View Case Study
        </button>
      </div>
    </article>
  );
}
