import { timelineItems } from "@/data/timeline";
import { SectionContainer } from "./SectionContainer";

export function JourneyTimeline() {
  return (
    <SectionContainer
      id="about"
      eyebrow="Built Through Growth"
      title="A steady path shaped by place, work, and service"
      description="A restrained snapshot of the journey behind the work, kept practical and professional."
      narrow
    >
      <div className="space-y-0 border-l border-[#d6c9b6]">
        {timelineItems.map((item) => (
          <article key={item.title} className="relative pb-8 pl-7 last:pb-0">
            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-[#1f5c43]" />
            <h3 className="text-lg font-semibold text-[#22211f]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#625f59]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
