import Link from "next/link";
import { profile, profileLinks, socialLinks } from "@/data/profile";
import { ProfilePortrait } from "./ProfilePortrait";

export function HeroSection() {
  return (
    <section id="home" className="section-wash relative overflow-hidden">
      <div className="site-container grid min-h-[720px] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] xl:min-h-[760px]">
        <div className="w-full min-w-0 sm:max-w-3xl">
          <div className="hero-enter-copy mb-6 flex flex-wrap gap-2">
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
          <h1 className="hero-enter-title max-w-[12ch] text-5xl font-bold leading-[1.02] text-[#22211f] sm:max-w-none sm:text-7xl">
            Building{" "}
            <span className="relative inline-block">
              What Matters
              <span
                className="absolute -bottom-1 left-0 h-2 w-full bg-[#c79a38]/28"
                aria-hidden="true"
              />
            </span>
          </h1>
          <div className="hero-enter-copy">
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#3e3a34]">
              {profile.heroCopy}
            </p>
            <div className="mt-6 max-w-2xl rounded-lg border border-[#e4d7c3] bg-white/70 p-4 shadow-sm">
              <p className="border-l-4 border-[#c79a38] pl-4 text-base leading-7 text-[#625f59]">
                {profile.groundingLine}
              </p>
            </div>
          </div>

          <div className="hero-enter-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              className="button-primary w-full sm:w-auto"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="button-secondary w-full sm:w-auto"
            >
              Contact Me
            </Link>
            <a
              href={profileLinks.resume.href}
              className="button-gold w-full sm:w-auto"
            >
              Resume
            </a>
          </div>

          <div className="hero-enter-actions mt-8 flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="flex size-11 items-center justify-center rounded-full border border-[#d6c9b6] bg-white text-sm font-bold text-[#1f5c43] shadow-sm hover:border-[#1f5c43]"
              >
                {link.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-enter-portrait mx-auto w-full min-w-0 sm:max-w-md">
          <ProfilePortrait />
        </div>
      </div>
    </section>
  );
}
