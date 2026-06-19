export type ProfileLink = {
  label: string;
  href: string;
  shortLabel?: string;
  isPlaceholder?: boolean;
};

export const profile = {
  name: "Kerone Creary",
  theme: "Building What Matters",
  identity:
    "Software Developer focused on .NET, SQL, and full-stack applications",
  heroCopy:
    "I'm Kerone Creary, a software developer building practical applications, automation tools, and full-stack systems that help people and teams work better.",
  groundingLine:
    "I approach software with purpose, discipline, and a focus on building systems that are useful, maintainable, and grounded in real needs.",
  contactCta:
    "I'm open to software developer opportunities where I can contribute to practical systems, keep growing, and support a strong team.",
};

export const profileAssets = {
  profileImage: {
    src: "/images/profile/kerone-profile.png",
    alt: "Kerone Creary, software developer",
    isAvailable: true,
  },
  resume: {
    href: "/resume/Kerone-Creary-Resume.pdf",
    isAvailable: true,
  },
};

export const navLinks: ProfileLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const profileLinks = {
  github: {
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/KeroneC",
    isPlaceholder: false,
  },
  linkedin: {
    label: "LinkedIn",
    shortLabel: "in",
    href: "https://www.linkedin.com/in/kcreary/",
    isPlaceholder: false,
  },
  email: {
    label: "Email",
    shortLabel: "@",
    href: "mailto:kerone.ant.creary@hotmail.com",
    isPlaceholder: false,
  },
  resume: {
    label: "View Resume",
    href: profileAssets.resume.href,
    isPlaceholder: false,
  },
} satisfies Record<string, ProfileLink>;

export const socialLinks: ProfileLink[] = [
  profileLinks.github,
  profileLinks.linkedin,
  profileLinks.email,
];
