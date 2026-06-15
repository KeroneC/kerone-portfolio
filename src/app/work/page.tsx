import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export const metadata = {
  title: "Featured Work",
  description:
    "Professional case studies, personal projects, and community-focused software work by Kerone Creary.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-wash">
          <div className="site-container py-14 sm:py-20">
            <p className="eyebrow mb-3">Work</p>
            <h1 className="text-4xl font-bold leading-tight text-[#22211f] sm:text-6xl">
              Featured Work
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#625f59]">
              A collection of professional case studies, personal projects, and
              community-focused software work. Some projects are fully written
              up now, while others are structured for future case studies.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="site-container">
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
