import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile, profileLinks } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kerone Creary for software developer opportunities focused on .NET, backend, full-stack, and workflow automation work.",
};

const contactCards = [
  profileLinks.email,
  profileLinks.linkedin,
  profileLinks.github,
  profileLinks.resume,
];

const openToCopy =
  "Open to .NET, backend, full-stack, and software developer roles focused on practical systems, internal tools, business applications, and workflow automation. I'm especially interested in teams building software that helps people work better.";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-wash">
          <div className="site-container py-14 sm:py-20">
            <p className="eyebrow mb-3">Contact</p>
            <h1 className="text-4xl font-bold leading-tight text-[#22211f] sm:text-6xl">
              Let&apos;s talk about useful software
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#625f59]">
              {profile.contactCta}
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="surface-card rounded-lg p-6 sm:p-8">
              <p className="eyebrow mb-3">Open To</p>
              <h2 className="text-2xl font-semibold text-[#22211f]">
                Software developer roles with practical impact
              </h2>
              <p className="mt-4 text-base leading-7 text-[#625f59]">
                {openToCopy}
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="surface-card group rounded-lg p-5"
                  aria-label={`Open ${link.label}`}
                >
                  <p className="text-xs font-bold uppercase text-[#9b6f20]">
                    {link.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#22211f]">
                    {link.label === "Email"
                      ? "Send an email"
                      : link.label === "Resume"
                        ? "View resume"
                        : `Visit ${link.label}`}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#625f59]">
                    {link.label === "Email"
                      ? "Best for direct conversations about roles, projects, or next steps."
                      : link.label === "Resume"
                        ? "PDF resume ready for recruiter and hiring manager review."
                        : `Connect with Kerone on ${link.label}.`}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-bold text-[#1f5c43] group-hover:text-[#143f2e]">
                    Open {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
