import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyLayoutProps = {
  caseStudy: CaseStudy;
};

function TextSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="surface-card rounded-lg p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-[#22211f]">{title}</h2>
      <div className="mt-4 text-base leading-7 text-[#625f59]">{children}</div>
    </section>
  );
}

const qualityBadges = [
  "Possible Flip",
  "Rotation Needed",
  "Crop Warning",
  "OCR Mismatch",
  "Needs Review",
  "Approved",
];

function ReviewQueueMockup() {
  const rows = [
    { id: "IMG-2048", flag: "OCR mismatch", priority: "High" },
    { id: "IMG-2071", flag: "Crop warning", priority: "Medium" },
    { id: "IMG-2105", flag: "Rotation needed", priority: "High" },
  ];

  return (
    <article className="overflow-hidden rounded-lg border border-[#e0d3bf] bg-[#fffdf8]">
      <div className="border-b border-[#e8dfcf] bg-[#efe7d9] p-4">
        <p className="text-xs font-bold uppercase text-[#9b6f20]">
          Recreated mockup
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[#22211f]">
          Review Queue Dashboard
        </h3>
      </div>
      <div className="grid gap-3 p-4">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid gap-3 rounded-md border border-[#e0d3bf] bg-white p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center"
          >
            <div>
              <p className="text-sm font-bold text-[#22211f]">{row.id}</p>
              <p className="mt-1 text-xs text-[#625f59]">{row.flag}</p>
            </div>
            <span className="rounded-md bg-[#fff4d8] px-2 py-1 text-xs font-bold text-[#8d641b]">
              {row.priority}
            </span>
            <span className="rounded-md bg-[#e8f0ea] px-2 py-1 text-xs font-bold text-[#1f5c43]">
              Needs Review
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

function FlaggedImageMockup() {
  return (
    <article className="overflow-hidden rounded-lg border border-[#e0d3bf] bg-[#fffdf8]">
      <div className="border-b border-[#e8dfcf] bg-[#efe7d9] p-4">
        <p className="text-xs font-bold uppercase text-[#9b6f20]">
          Recreated mockup
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[#22211f]">
          Flagged Image Card
        </h3>
      </div>
      <div className="p-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#dccbb3] bg-[#f4efe6]">
          <div
            className="absolute inset-6 rounded-md border border-dashed border-[#d8c7ae] bg-white/70"
            aria-hidden="true"
          />
          <div
            className="absolute left-8 top-8 h-14 w-20 rounded-md bg-[#1f5c43]/18"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-8 right-8 h-20 w-16 rounded-md bg-[#c79a38]/24"
            aria-hidden="true"
          />
          <p className="absolute bottom-4 left-4 text-xs font-bold uppercase text-[#625f59]">
            Fake collectible crop
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {qualityBadges.slice(0, 4).map((badge) => (
            <span key={badge} className="tag">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function WorkflowPipelineMockup({ steps }: { steps: string[] }) {
  return (
    <article className="rounded-lg border border-[#e0d3bf] bg-[#fffdf8] p-5">
      <p className="text-xs font-bold uppercase text-[#9b6f20]">
        Recreated mockup
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#22211f]">
        Workflow Pipeline
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-md border border-[#e0d3bf] bg-white p-3"
          >
            <p className="text-xs font-bold text-[#1f5c43]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#22211f]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function getResultBadgeClass(index: number) {
  if (index === qualityBadges.length - 1) {
    return "border-[#1f5c43] bg-[#e8f0ea] text-[#1f5c43]";
  }

  if (index === qualityBadges.length - 2) {
    return "border-[#b6473a]/35 bg-[#fff1ef] text-[#8f362c]";
  }

  return "border-[#e0d3bf] bg-white text-[#625f59]";
}

function ResultBadgesMockup() {
  return (
    <article className="rounded-lg border border-[#e0d3bf] bg-[#fffdf8] p-5">
      <p className="text-xs font-bold uppercase text-[#9b6f20]">
        Recreated mockup
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#22211f]">
        Quality Result Badges
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {qualityBadges.map((badge, index) => (
          <span
            key={badge}
            className={[
              "rounded-md border px-3 py-2 text-xs font-bold",
              getResultBadgeClass(index),
            ].join(" ")}
          >
            {badge}
          </span>
        ))}
      </div>
    </article>
  );
}

export function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  return (
    <main>
      <section className="section-wash">
        <div className="site-container py-10 sm:py-16">
          <Link
            href="/work"
            className="text-sm font-bold text-[#1f5c43] hover:text-[#143f2e]"
          >
            Back to Work
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-[#e8f0ea] px-3 py-1 text-xs font-bold text-[#1f5c43]">
                  {caseStudy.type}
                </span>
                <span className="status-badge">{caseStudy.status}</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#22211f] sm:text-6xl">
                {caseStudy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#44413c]">
                {caseStudy.subtitle}
              </p>
            </div>

            <div className="surface-card rounded-lg p-5">
              <p className="eyebrow mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="site-container grid gap-6 py-14 sm:py-20">
        <TextSection title="Summary">
          <p>{caseStudy.summary}</p>
        </TextSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <TextSection title="Problem">
            <p>{caseStudy.problem}</p>
          </TextSection>
          <TextSection title="Goal">
            <p>{caseStudy.goal}</p>
          </TextSection>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TextSection title="My Role">
            <p>{caseStudy.role}</p>
          </TextSection>
          <TextSection title="Solution">
            <p>{caseStudy.solution}</p>
          </TextSection>
        </div>

        <section className="surface-card rounded-lg p-6 sm:p-8">
          <div className="mb-6">
            <p className="eyebrow mb-3">Architecture / Workflow</p>
            <h2 className="text-2xl font-semibold text-[#22211f]">
              From image batch to prioritized review
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.architectureSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-lg border border-[#e0d3bf] bg-[#fffdf8] p-4"
              >
                <p className="text-xs font-bold text-[#9b6f20]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#22211f]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="surface-card rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#22211f]">
              Key Features
            </h2>
            <ul className="mt-5 grid gap-3">
              {caseStudy.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-md border border-[#e0d3bf] bg-[#fbfaf7] p-3 text-sm leading-6 text-[#625f59]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="surface-card rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#22211f]">
              Technical Decisions
            </h2>
            <div className="mt-5 grid gap-4">
              {caseStudy.technicalDecisions.map((decision) => (
                <article
                  key={decision.title}
                  className="rounded-md border border-[#e0d3bf] bg-[#fffdf8] p-4"
                >
                  <h3 className="text-base font-semibold text-[#22211f]">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#625f59]">
                    {decision.explanation}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TextSection title="Impact">
            <p>{caseStudy.impact}</p>
          </TextSection>
          <TextSection title="What I Learned">
            <p>{caseStudy.lessonsLearned}</p>
          </TextSection>
        </div>

        <section className="surface-card rounded-lg p-6 sm:p-8">
          <div className="mb-6">
            <p className="eyebrow mb-3">Recreated Mockups</p>
            <h2 className="text-2xl font-semibold text-[#22211f]">
              Portfolio visuals without proprietary data
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#625f59]">
              These visuals are recreated placeholders intended to communicate
              the workflow without exposing private systems or source images.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <ReviewQueueMockup />
            <FlaggedImageMockup />
            <WorkflowPipelineMockup steps={caseStudy.architectureSteps} />
            <ResultBadgesMockup />
          </div>
        </section>

        {caseStudy.links && caseStudy.links.length > 0 && (
          <section className="surface-card rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#22211f]">Links</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {caseStudy.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="button-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
