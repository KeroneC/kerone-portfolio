import { beyondCodeItems } from "@/data/beyondCode";
import { SectionContainer } from "./SectionContainer";

export function BeyondCodeSection() {
  return (
    <SectionContainer
      eyebrow="Beyond Code"
      title="A brief view of the person behind the work"
      description="A small, warm section for the parts of life that keep the professional story grounded."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {beyondCodeItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#e0d3bf] bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-[#22211f]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#625f59]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {["Family", "Community", "Everyday"].map((label, index) => (
            <div
              key={label}
              className="flex aspect-[4/5] flex-col justify-between rounded-lg border border-dashed border-[#cdbfaa] bg-[#f4efe6] p-4"
            >
              <p className="text-sm font-semibold text-[#1f5c43]">
                {label} placeholder
              </p>
              {index === 1 && (
                <div className="space-y-2" aria-hidden="true">
                  <span className="block h-px bg-[#b6473a]" />
                  <span className="block h-px bg-[#c79a38]" />
                  <span className="block h-px bg-[#1f5c43]" />
                </div>
              )}
              <p className="text-xs uppercase text-[#9b6f20]">Image slot</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
