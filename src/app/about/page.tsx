import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { currentFocusItems } from "@/data/currentFocus";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kerone Creary, a software developer focused on .NET, SQL, and full-stack applications.",
};

const approachItems = [
  "Build practical systems that make work clearer and more manageable.",
  "Keep learning while staying accountable to the details.",
  "Use software to support people, processes, and real business needs.",
];

const groundingItems = [
  "Based in Western Pennsylvania, with a Jamaican background that remains part of the story.",
  "A husband, believer in Jesus Christ, and family-centered person.",
  "Connected to youth track and community involvement through steady service.",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-wash">
          <div className="site-container grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow mb-3">About</p>
              <h1 className="text-4xl font-bold leading-tight text-[#22211f] sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl leading-8 text-[#44413c]">
                {profile.identity}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#625f59]">
                I&apos;m a software developer focused on building practical
                systems that help people and teams work better. My path has
                shaped how I approach work: stay grounded, keep learning, and
                build with purpose.
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <ProfilePortrait />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="site-container grid gap-6 lg:grid-cols-2">
            <article className="surface-card rounded-lg p-6 sm:p-8">
              <p className="eyebrow mb-3">How I Approach Software</p>
              <h2 className="text-2xl font-semibold text-[#22211f]">
                Practical work, clear systems, steady improvement
              </h2>
              <div className="mt-5 grid gap-3">
                {approachItems.map((item) => (
                  <p
                    key={item}
                    className="rounded-md border border-[#e0d3bf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#625f59]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="surface-card rounded-lg p-6 sm:p-8">
              <p className="eyebrow mb-3">What Keeps Me Grounded</p>
              <h2 className="text-2xl font-semibold text-[#22211f]">
                Faith, family, service, and discipline
              </h2>
              <div className="mt-5 grid gap-3">
                {groundingItems.map((item) => (
                  <p
                    key={item}
                    className="rounded-md border border-[#e0d3bf] bg-[#fbfaf7] p-4 text-sm leading-6 text-[#625f59]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-quiet py-14 sm:py-20">
          <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-3">Beyond Code</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#22211f] sm:text-4xl">
                A professional story with personal grounding
              </h2>
              <p className="mt-4 text-base leading-7 text-[#625f59]">
                Outside of day-to-day software work, I care about family,
                community, and the kind of discipline that carries into both
                technical growth and personal life. Track club involvement and
                community work are part of that rhythm.
              </p>
            </div>

            <div className="surface-card rounded-lg p-6 sm:p-8">
              <p className="eyebrow mb-3">Currently Building Toward</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentFocusItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-md border border-[#e0d3bf] bg-[#fffdf8] p-4"
                  >
                    <span className="mt-1 size-2.5 rounded-full bg-[#b6473a]" />
                    <p className="text-sm font-medium leading-6 text-[#44413c]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
