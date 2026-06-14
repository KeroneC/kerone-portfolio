import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="border-y border-[#e8dfcf] bg-[#efe7d9]">
      <div className="site-container grid gap-4 py-7 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="surface-card-quiet relative overflow-hidden rounded-lg p-5"
          >
            <span
              className="absolute left-0 top-0 h-full w-1 bg-[#1f5c43]"
              aria-hidden="true"
            />
            <p className="text-3xl font-bold text-[#1f5c43]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#625f59]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
