import { workValues } from "@/data/values";
import { SectionContainer } from "./SectionContainer";
import { ValueCard } from "./ValueCard";

export function ValuesSection() {
  return (
    <SectionContainer
      eyebrow="Values That Shape My Work"
      title="Personal values, professional posture"
      description="These values are part of how Kerone approaches the work: steady, accountable, and focused on usefulness."
      className="bg-[#f9f5ed]"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workValues.map((value) => (
          <ValueCard key={value.title} value={value} />
        ))}
      </div>
    </SectionContainer>
  );
}
