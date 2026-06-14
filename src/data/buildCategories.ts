export type BuildCategory = {
  title: string;
  description: string;
};

export const buildCategories: BuildCategory[] = [
  {
    title: "Business Applications",
    description:
      "Systems that support real workflows, reporting, operations, and user-facing processes.",
  },
  {
    title: "Automation Tools",
    description:
      "Utilities, worker programs, and file-processing tools that reduce manual work.",
  },
  {
    title: "Full-Stack Platforms",
    description:
      "Web applications with APIs, databases, and clean user interfaces.",
  },
  {
    title: "Community Systems",
    description:
      "Technology that supports youth sports, nonprofit work, registration, communication, and events.",
  },
];
