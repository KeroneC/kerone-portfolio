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
    "My faith in Jesus Christ keeps me grounded, and my commitment to family, growth, and service shapes how I approach my work.",
  contactCta:
    "I'm open to software developer opportunities where I can contribute, keep growing, and help a strong team build useful systems.",
};

export const navLinks: ProfileLink[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const profileLinks = {
  // TODO: Replace with Kerone's live GitHub profile URL.
  github: {
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/replace-with-kerone",
    isPlaceholder: true,
  },
  // TODO: Replace with Kerone's live LinkedIn profile URL.
  linkedin: {
    label: "LinkedIn",
    shortLabel: "in",
    href: "https://www.linkedin.com/in/replace-with-kerone",
    isPlaceholder: true,
  },
  // TODO: Replace with Kerone's preferred contact email address.
  email: {
    label: "Email",
    shortLabel: "@",
    href: "mailto:replace-with-kerone-email@example.com",
    isPlaceholder: true,
  },
  // TODO: Add the resume PDF to public/resume.pdf when it is ready.
  resume: {
    label: "Resume",
    href: "/resume.pdf",
    isPlaceholder: true,
  },
} satisfies Record<string, ProfileLink>;

export const socialLinks: ProfileLink[] = [
  profileLinks.github,
  profileLinks.linkedin,
  profileLinks.email,
];
