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
    <SectionContainer id="contact" className="bg-[#173f2f]" narrow>
      <div className="relative overflow-hidden rounded-lg border border-[#3b7359] bg-[#1f5c43] p-8 text-center shadow-[0_24px_55px_rgba(20,63,46,0.22)] sm:p-12">
        <div
          className="absolute inset-x-0 top-0 h-1 bg-[#c79a38]"
          aria-hidden="true"
        />
        <p className="text-sm font-bold uppercase text-[#f1cf7b]">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Ready to contribute to useful software
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f5ead8]">
          {profile.contactCta}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              title={link.label}
              className={
                index === 0
                  ? "button-secondary border-white bg-white text-[#1f5c43] hover:bg-[#fff7df]"
                  : "button-secondary border-[#8cb39e] bg-transparent text-white hover:bg-[#2b6b51] hover:text-white"
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
