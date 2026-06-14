import { profile, profileLinks, socialLinks } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="home" className="section-wash relative overflow-hidden">
      <div className="site-container grid min-h-[720px] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="w-full min-w-0 sm:max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {["Practical software", "Automation", "Full-stack systems"].map(
              (item) => (
                <span key={item} className="tag bg-white/70">
                  {item}
                </span>
              ),
            )}
          </div>

          <p className="eyebrow mb-4">
            {profile.identity}
          </p>
          <h1 className="max-w-[12ch] text-5xl font-bold leading-[1.02] text-[#22211f] sm:max-w-none sm:text-7xl">
            Building{" "}
            <span className="relative inline-block">
              What Matters
              <span
                className="absolute -bottom-1 left-0 h-2 w-full bg-[#c79a38]/28"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[#3e3a34]">
            {profile.heroCopy}
          </p>
          <div className="mt-6 max-w-2xl rounded-lg border border-[#e4d7c3] bg-white/70 p-4 shadow-sm">
            <p className="border-l-4 border-[#c79a38] pl-4 text-base leading-7 text-[#625f59]">
              {profile.groundingLine}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="button-primary w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="button-secondary w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href={profileLinks.resume.href}
              title="Placeholder resume link - replace with public/resume.pdf"
              className="button-gold w-full sm:w-auto"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={
                  link.isPlaceholder
                    ? `Placeholder ${link.label} link - replace in src/data/profile.ts`
                    : link.label
                }
                className="flex size-11 items-center justify-center rounded-full border border-[#d6c9b6] bg-white text-sm font-bold text-[#1f5c43] shadow-sm hover:border-[#1f5c43]"
              >
                {link.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 sm:max-w-md">
          <div className="surface-card rounded-lg bg-white p-4">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-md border border-[#d8c7ae] bg-[#f4efe6] text-center">
              <div
                className="absolute inset-x-0 top-0 h-20 bg-[#1f5c43]/8"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-8 left-8 right-8 h-px bg-[#d8c7ae]"
                aria-hidden="true"
              />
              <div
                className="absolute left-8 top-8 h-16 w-px bg-[#c79a38]"
                aria-hidden="true"
              />
              <div className="px-8">
                <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-[#c79a38] bg-[#fffdf8] text-xl font-bold text-[#1f5c43]">
                  KC
                </div>
                <p className="text-sm font-bold text-[#22211f]">
                  Portrait frame
                </p>
                <p className="mt-2 text-sm leading-6 text-[#625f59]">
                  Professional image planned
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase text-[#9b6f20]">
              <span>Practical systems</span>
              <span className="size-2 rounded-full bg-[#b6473a]" />
              <span>Built with care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
