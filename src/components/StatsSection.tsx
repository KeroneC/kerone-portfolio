import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="border-y border-[#e8dfcf] bg-[#f6f0e6]">
      <div className="site-container grid gap-px py-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="py-5 sm:px-4">
            <p className="text-2xl font-semibold text-[#1f5c43]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-[#625f59]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
