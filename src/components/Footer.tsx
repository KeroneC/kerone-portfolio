import { profile, socialLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[#e8dfcf] bg-[#f6f0e6]">
      <div className="site-container flex flex-col gap-5 py-8 text-sm text-[#625f59] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-[#22211f]">{profile.name}</p>
          <p>{profile.identity}</p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={
                link.isPlaceholder
                  ? `Placeholder ${link.label} link - replace in src/data/profile.ts`
                  : link.label
              }
              className="font-medium text-[#1f5c43] hover:text-[#173f2f]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
