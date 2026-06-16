import Link from "next/link";
import { navLinks, profile, profileLinks } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e8dfcf] bg-[#fbfaf7]/92 backdrop-blur">
      <div className="site-container grid grid-cols-1 items-center gap-4 py-4 md:grid-cols-[1fr_auto_auto]">
        <Link
          href="/"
          className="min-w-0 text-base font-bold text-[#22211f]"
          aria-label="Go to homepage"
        >
          {profile.name}
        </Link>

        <nav
          className="grid w-full grid-cols-4 gap-2 text-center text-sm font-medium text-[#5b5852] md:w-auto md:flex md:items-center md:justify-start md:gap-6"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 hover:bg-[#eef3ee] hover:text-[#1f5c43]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={profileLinks.resume.href}
          className="button-secondary w-full border-[#1f5c43] text-[#1f5c43] md:w-auto md:justify-self-end"
        >
          View Resume
        </a>
      </div>
    </header>
  );
}
