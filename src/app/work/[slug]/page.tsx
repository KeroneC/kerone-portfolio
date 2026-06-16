import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { featuredProjects } from "@/data/projects";

type CaseStudyRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  const project = featuredProjects.find((item) => item.slug === slug);

  if (caseStudy) {
    return {
      title: caseStudy.title,
      description: caseStudy.subtitle,
      openGraph: {
        title: `${caseStudy.title} | Kerone Creary`,
        description: caseStudy.subtitle,
      },
      twitter: {
        title: `${caseStudy.title} | Kerone Creary`,
        description: caseStudy.subtitle,
      },
    };
  }

  if (project) {
    return {
      title: `${project.title} | Coming Soon`,
      description: project.problem,
      openGraph: {
        title: `${project.title} | Coming Soon`,
        description: project.problem,
      },
      twitter: {
        title: `${project.title} | Coming Soon`,
        description: project.problem,
      },
    };
  }

  return {
    title: "Case Study Not Found | Kerone Creary",
  };
}

export default async function CaseStudyPage({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (caseStudy) {
    return (
      <>
        <Header />
        <CaseStudyLayout caseStudy={caseStudy} />
        <Footer />
      </>
    );
  }

  const project = featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="py-10 sm:py-14">
          <div className="site-container">
            <Reveal className="section-panel p-7 sm:p-10">
              <Link
                href="/work"
                className="text-sm font-bold text-[#1f5c43] hover:text-[#143f2e]"
              >
                Back to Work
              </Link>
              <div className="mt-8 max-w-3xl">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-[#e8f0ea] px-3 py-1 text-xs font-bold text-[#1f5c43]">
                    {project.type}
                  </span>
                  <span className="status-badge">{project.status}</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight text-[#22211f] sm:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-[#625f59]">
                  This case study is structured for a future phase. For now, the
                  Work page includes a clear project preview and coming-soon
                  status.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
