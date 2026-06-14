import { workValues } from "@/data/values";
import { SectionContainer } from "./SectionContainer";
import { ValueCard } from "./ValueCard";

export function ValuesSection() {
  return (
    <SectionContainer
      eyebrow="Values That Shape My Work"
      title="Personal values, professional posture"
      description="A concise view of the values behind the work: practical, steady, and grounded."
      className="section-quiet"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workValues.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
