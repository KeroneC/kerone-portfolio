export type FeaturedProject = {
  slug: string;
  title: string;
  type: string;
  status: string;
  problem: string;
  tags: string[];
  hasCaseStudy: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "image-quality-audit-tool",
    title: "Image Quality Audit Tool",
    type: "Professional Case Study",
    status: "Private Work / Recreated Mockups",
    problem:
      "Used OCR, feature matching, image processing, and machine learning techniques to flag collectible image crops that needed flipping, rotation, or manual review.",
    tags: [
      ".NET",
      "OCR",
      "Computer Vision",
      "Machine Learning",
      "Image Processing",
      "Automation",
    ],
    hasCaseStudy: true,
  },
  {
    slug: "el1te-spr1nt-athlet1cs-platform",
    title: "El1te Spr1nt Athlet1cs Platform",
    type: "Community Platform",
    status: "In Progress",
    problem:
      "A modern website and future admin platform for a youth track club, designed to support content, communication, registration, events, and community growth.",
    tags: ["Next.js", "React", ".NET API", "SQL", "Tailwind"],
    hasCaseStudy: false,
  },
  {
    slug: "job-search-tracker",
    title: "Job Search Tracker",
    type: "Personal Productivity Tool",
    status: "Planned / In Progress",
    problem:
      "A focused tool for organizing applications, recruiter conversations, interview notes, statuses, and follow-ups.",
    tags: ["Next.js", "TypeScript", "SQL", "Full-Stack"],
    hasCaseStudy: false,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    type: "Personal Brand Project",
    status: "In Progress",
    problem:
      "A personal developer portfolio designed to present technical ability, professional growth, values, and real-world software work.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    hasCaseStudy: false,
  },
];
