import type { FeaturedProject } from "@/data/projects";

type ProjectCardProps = {
  project: FeaturedProject;
  index: number;
};

const mockupAccents = [
  "bg-[#1f5c43]",
  "bg-[#9b6f20]",
  "bg-[#4f6f68]",
  "bg-[#b6473a]",
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = mockupAccents[index % mockupAccents.length];

  return (
    <article className="surface-card flex h-full flex-col overflow-hidden rounded-lg">
      <div className="border-b border-[#e8dfcf] bg-[#efe7d9] p-5">
        <div className="rounded-md border border-[#dccbb3] bg-[#fffdf8] p-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#b6473a]" />
              <span className="size-2.5 rounded-full bg-[#c79a38]" />
              <span className="size-2.5 rounded-full bg-[#1f5c43]" />
            </div>
            <span className="h-2 w-16 rounded-full bg-[#e8dfcf]" />
          </div>
          <div className="grid aspect-[16/9] gap-3 rounded-md bg-[#f8f3eb] p-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-3">
              <span className={`h-10 rounded-md ${accent}`} />
              <span className="h-3 w-4/5 rounded-full bg-[#d8c7ae]" />
              <span className="h-3 w-3/5 rounded-full bg-[#e4d7c3]" />
              <div className="mt-auto grid grid-cols-3 gap-2">
                <span className="h-8 rounded-md bg-white" />
                <span className="h-8 rounded-md bg-white" />
                <span className="h-8 rounded-md bg-white" />
              </div>
            </div>
            <div className="grid gap-2">
              <span className="rounded-md bg-white" />
              <span className="rounded-md bg-white" />
              <span className="rounded-md border border-dashed border-[#d8c7ae] bg-[#fbfaf7]" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold uppercase text-[#8d641b]">
            Case study frame
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-[#e8f0ea] px-3 py-1 text-xs font-bold text-[#1f5c43]">
            {project.type}
          </span>
          <span className="status-badge">
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
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          disabled
          title="Case study coming in a future phase"
          className="mt-6 rounded-md border border-[#d6c9b6] bg-[#fbfaf7] px-4 py-2 text-sm font-bold text-[#7a746a]"
        >
          View Case Study
        </button>
      </div>
    </article>
  );
}
