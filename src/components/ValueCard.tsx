import type { WorkValue } from "@/data/values";

type ValueCardProps = {
  value: WorkValue;
  index: number;
};

export function ValueCard({ value, index }: ValueCardProps) {
  return (
    <article className="surface-card relative overflow-hidden rounded-lg p-6">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-[#b6473a]"
        aria-hidden="true"
      />
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-bold text-[#9b6f20]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-10 bg-[#d8c7ae]" />
      </div>
      <h3 className="text-lg font-semibold text-[#22211f]">{value.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#625f59]">
        {value.description}
      </p>
    </article>
  );
}
