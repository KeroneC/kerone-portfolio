import { stats } from "@/data/stats";
import { Reveal } from "./Reveal";

export function StatsSection() {
  return (
    <section className="py-8 sm:py-10">
      <div className="site-container">
        <Reveal className="section-panel grid gap-4 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="interactive-card relative overflow-hidden rounded-lg border border-[#e0d3bf] bg-[#fffdf8] p-5"
            >
              <span
                className="absolute inset-x-0 top-0 h-1 bg-[#1f5c43]"
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
        </Reveal>
      </div>
    </section>
  );
}
