import { buildCategories } from "@/data/buildCategories";
import { SectionContainer } from "./SectionContainer";

export function WhatIBuildSection() {
  return (
    <SectionContainer
      eyebrow="What I Build"
      title="Useful software for real workflows"
      description="The work is centered on practical systems, cleaner processes, and applications that support people doing important work."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {buildCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-[#e0d3bf] bg-white p-6 shadow-sm"
          >
            <div className="mb-5 size-10 rounded-md bg-[#e9f0ea] text-center text-lg font-semibold leading-10 text-[#1f5c43]">
              {category.title.slice(0, 1)}
            </div>
            <h3 className="text-lg font-semibold text-[#22211f]">
              {category.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#625f59]">
              {category.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
