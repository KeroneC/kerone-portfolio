import { currentFocusItems } from "@/data/currentFocus";
import { SectionContainer } from "./SectionContainer";

export function CurrentFocusSection() {
  return (
    <SectionContainer
      eyebrow="Currently Building Toward"
      title="The next layer of technical growth"
      description="A clear view of the skills and habits Kerone is actively strengthening."
      className="section-quiet"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentFocusItems.map((item) => (
          <div
            key={item}
            className="surface-card-quiet interactive-card flex min-h-24 items-start gap-4 rounded-lg p-5"
          >
            <span className="mt-1 size-3 rounded-full bg-[#b6473a]" />
            <p className="text-sm font-medium leading-6 text-[#44413c]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
