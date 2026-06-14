export type FeaturedProject = {
  title: string;
  type: string;
  status: string;
  problem: string;
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Image Quality Audit Tool",
    type: "Professional Case Study",
    status: "Private / Recreated Mockups Planned",
    problem:
      "Used OCR, feature matching, image processing, and machine learning techniques to flag collectible image crops that may need flipping, rotation, or manual review.",
    tags: [
      ".NET",
      "OCR",
      "Computer Vision",
      "Machine Learning",
      "Image Processing",
      "Automation",
    ],
  },
  {
    title: "El1te Spr1nt Athlet1cs Platform",
    type: "Community Platform",
    status: "In Progress",
    problem:
      "A modern website and future admin platform for a youth track club, supporting content, communication, registration, events, and community growth.",
    tags: ["Next.js", "React", ".NET API", "SQL", "Tailwind"],
  },
  {
    title: "Job Search Tracker",
    type: "Personal Productivity Tool",
    status: "Planned / In Progress",
    problem:
      "A tool to organize job applications, recruiter conversations, interview notes, statuses, and follow-ups.",
    tags: ["Next.js", "TypeScript", "SQL", "Full-Stack"],
  },
  {
    title: "Portfolio Website",
    type: "Personal Brand Project",
    status: "In Progress",
    problem:
      "A personal developer portfolio designed to show technical ability, professional growth, values, and real-world software work.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
];
