import type { WorkValue } from "@/data/values";

type ValueCardProps = {
  value: WorkValue;
};

export function ValueCard({ value }: ValueCardProps) {
  return (
    <article className="rounded-lg border border-[#e0d3bf] bg-white p-6 shadow-sm">
      <div className="mb-4 h-1 w-10 rounded-full bg-[#b6473a]" />
      <h3 className="text-lg font-semibold text-[#22211f]">{value.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#625f59]">
        {value.description}
      </p>
    </article>
  );
}
