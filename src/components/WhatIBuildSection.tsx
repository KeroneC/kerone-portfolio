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
        {buildCategories.map((category, index) => (
          <article
            key={category.title}
            className="surface-card group relative overflow-hidden rounded-lg p-6"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 bg-[#1f5c43]"
              aria-hidden="true"
            />
            <div className="mb-6 flex size-11 items-center justify-center rounded-md bg-[#e8f0ea] text-sm font-bold text-[#1f5c43]">
              {String(index + 1).padStart(2, "0")}
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
