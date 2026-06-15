import { experienceItems } from "@/data/experience";
import { SectionContainer } from "./SectionContainer";

export function ExperienceSnapshot() {
  return (
    <SectionContainer
      eyebrow="Experience Snapshot"
      title="A short view of the professional foundation"
      description="The emphasis here is impact, systems thinking, and the technologies that keep showing up in the work."
      className="section-quiet"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {experienceItems.map((item) => (
          <article
            key={item.company}
            className="surface-card interactive-card rounded-lg p-6"
          >
            <p className="eyebrow">
              {item.company}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[#22211f]">
              {item.role}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#625f59]">
              {item.focus}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
