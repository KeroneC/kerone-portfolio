import { navLinks, profile, profileLinks } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e8dfcf] bg-[#fbfaf7]/95">
      <div className="site-container grid grid-cols-1 items-center gap-4 py-4 md:grid-cols-[1fr_auto_auto]">
        <a
          href="#home"
          className="min-w-0 text-base font-semibold text-[#22211f]"
          aria-label="Go to homepage"
        >
          {profile.name}
        </a>

        <nav
          className="grid w-full grid-cols-4 gap-2 text-center text-sm font-medium text-[#5b5852] md:w-auto md:flex md:items-center md:justify-start md:gap-6"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#1f5c43]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profileLinks.resume.href}
          title="Placeholder resume link - replace with public/resume.pdf"
          className="w-full rounded-md border border-[#1f5c43] px-4 py-2 text-center text-sm font-semibold text-[#1f5c43] hover:bg-[#1f5c43] hover:text-white md:w-auto md:justify-self-end"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
