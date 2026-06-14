import { profile, profileLinks } from "@/data/profile";
import { SectionContainer } from "./SectionContainer";

const contactLinks = [
  profileLinks.email,
  profileLinks.linkedin,
  profileLinks.github,
  profileLinks.resume,
];

export function ContactCTA() {
  return (
    <SectionContainer id="contact" className="bg-[#1f5c43]" narrow>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase text-[#f1cf7b]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Let&apos;s build useful systems
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f5ead8]">
          {profile.contactCta}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              title={
                link.isPlaceholder
                  ? `Placeholder ${link.label} link - replace in src/data/profile.ts`
                  : link.label
              }
              className={
                index === 0
                  ? "rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#1f5c43] hover:bg-[#fff7df]"
                  : "rounded-md border border-[#8cb39e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2b6b51]"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
