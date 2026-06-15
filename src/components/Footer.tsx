import { navLinks, profile, profileLinks, socialLinks } from "@/data/profile";

const footerLinks = [
  ...socialLinks,
  profileLinks.resume,
];

export function Footer() {
  return (
    <footer className="border-t border-[#e8dfcf] bg-[#f6f0e6]">
      <div className="site-container grid gap-8 py-10 text-sm text-[#625f59] lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-semibold text-[#22211f]">{profile.name}</p>
          <p className="mt-1 font-medium text-[#9b6f20]">{profile.theme}</p>
          <p className="mt-3 max-w-xl leading-6">{profile.identity}</p>
          <p className="mt-4 text-xs font-medium">
            Built with Next.js, TypeScript, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-3 text-xs font-bold uppercase text-[#9b6f20]">
            Pages
          </p>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-[#1f5c43] hover:text-[#173f2f]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav aria-label="Profile links">
          <p className="mb-3 text-xs font-bold uppercase text-[#9b6f20]">
            Connect
          </p>
          <div className="grid gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-[#1f5c43] hover:text-[#173f2f]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
