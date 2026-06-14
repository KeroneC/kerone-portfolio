import { profile, profileLinks, socialLinks } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="home" className="bg-[#fbfaf7]">
      <div className="site-container grid min-h-[680px] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="w-full min-w-0 sm:max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase leading-5 text-[#9b6f20] sm:text-sm">
            {profile.identity}
          </p>
          <h1 className="max-w-[12ch] text-4xl font-semibold leading-tight text-[#22211f] sm:max-w-none sm:text-6xl">
            {profile.theme}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#44413c]">
            {profile.heroCopy}
          </p>
          <p className="mt-5 max-w-2xl border-l-4 border-[#c79a38] pl-4 text-base leading-7 text-[#625f59]">
            {profile.groundingLine}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="w-full rounded-md bg-[#1f5c43] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#174934] sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full rounded-md border border-[#d6c9b6] px-5 py-3 text-center text-sm font-semibold text-[#22211f] hover:border-[#1f5c43] hover:text-[#1f5c43] sm:w-auto"
            >
              Contact Me
            </a>
            <a
              href={profileLinks.resume.href}
              title="Placeholder resume link - replace with public/resume.pdf"
              className="w-full rounded-md border border-[#c79a38] px-5 py-3 text-center text-sm font-semibold text-[#7b5718] hover:bg-[#fff7df] sm:w-auto"
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
                className="flex size-11 items-center justify-center rounded-full border border-[#d6c9b6] bg-white text-sm font-semibold text-[#1f5c43] hover:border-[#1f5c43]"
              >
                {link.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full min-w-0 sm:max-w-md">
          <div className="rounded-lg border border-[#e0d3bf] bg-white p-4 shadow-sm">
            <div className="flex aspect-[4/5] items-center justify-center rounded-md border border-dashed border-[#cdbfaa] bg-[#f4efe6] text-center">
              <div className="px-8">
                <div className="mx-auto mb-5 size-16 rounded-full border border-[#c79a38] bg-[#fbfaf7]" />
                <p className="text-sm font-semibold text-[#22211f]">
                  Semi-professional headshot placeholder
                </p>
                <p className="mt-2 text-sm leading-6 text-[#625f59]">
                  Portrait image slot
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase text-[#9b6f20]">
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
