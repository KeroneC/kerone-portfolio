import { beyondCodeItems } from "@/data/beyondCode";
import { SectionContainer } from "./SectionContainer";

export function BeyondCodeSection() {
  return (
    <SectionContainer
      eyebrow="Beyond Code"
      title="A brief view of the person behind the work"
      description="A warm, selective glimpse at the commitments and community context that keep the work grounded."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {beyondCodeItems.map((item, index) => (
            <article
              key={item.title}
              className="surface-card-quiet rounded-lg p-5"
            >
              <p className="mb-4 text-xs font-bold text-[#9b6f20]">
                {String(index + 1).padStart(2, "0")}
              </p>
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
              className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-lg border border-[#d8c7ae] bg-[#f4efe6] p-4"
            >
              <span
                className="absolute inset-x-0 top-0 h-14 bg-[#1f5c43]/8"
                aria-hidden="true"
              />
              <p className="relative text-sm font-semibold text-[#1f5c43]">
                {label}
              </p>
              {index === 1 && (
                <div className="relative space-y-2" aria-hidden="true">
                  <span className="block h-px bg-[#b6473a]" />
                  <span className="block h-px bg-[#c79a38]" />
                  <span className="block h-px bg-[#1f5c43]" />
                </div>
              )}
              <p className="relative text-xs font-bold uppercase text-[#9b6f20]">
                Image frame
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
