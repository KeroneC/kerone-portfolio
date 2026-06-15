import { timelineItems } from "@/data/timeline";
import { SectionContainer } from "./SectionContainer";

export function JourneyTimeline() {
  return (
    <SectionContainer
      id="about"
      eyebrow="Built Through Growth"
      title="A steady path shaped by place, work, and service"
      description="A restrained snapshot of the journey behind the work: enough context to feel human, without turning the portfolio into a memoir."
      narrow
    >
      <div className="rounded-lg border border-[#e0d3bf] bg-[#fffdf8] p-4 shadow-sm sm:p-6">
        <div className="space-y-0 border-l border-[#d6c9b6]">
          {timelineItems.map((item, index) => (
            <article
              key={item.title}
              className="timeline-item relative pb-8 pl-7 last:pb-0"
            >
              <span className="timeline-dot absolute -left-[6px] top-1 flex size-3 items-center justify-center rounded-full bg-[#fffdf8] ring-1 ring-[#1f5c43]">
                <span
                  className="size-1.5 rounded-full bg-[#1f5c43]"
                  aria-hidden="true"
                />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <p className="text-xs font-bold text-[#9b6f20]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-[#22211f]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#625f59]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
