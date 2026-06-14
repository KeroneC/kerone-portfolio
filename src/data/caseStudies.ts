export type CaseStudyLink = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type CaseStudyMockup = {
  title: string;
  description: string;
  labels?: string[];
};

export type TechnicalDecision = {
  title: string;
  explanation: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  status: string;
  summary: string;
  techStack: string[];
  problem: string;
  goal: string;
  role: string;
  solution: string;
  architectureSteps: string[];
  keyFeatures: string[];
  technicalDecisions: TechnicalDecision[];
  impact: string;
  lessonsLearned: string;
  mockups: CaseStudyMockup[];
  links?: CaseStudyLink[];
  nextSteps?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "image-quality-audit-tool",
    title: "Image Quality Audit Tool",
    subtitle:
      "A quality-control workflow for identifying collectible image crops that may need manual review.",
    type: "Professional Case Study",
    status: "Private Work / Recreated Mockups",
    summary:
      "This project supported quality control for cropped collectible images by flagging images that may have orientation issues, failed crops, or other visual problems before final review.",
    techStack: [
      ".NET",
      "OCR",
      "Computer Vision",
      "Feature Matching",
      "Machine Learning",
      "Image Processing",
      "Automation",
    ],
    problem:
      "Large batches of cropped collectible images needed to be reviewed for issues such as incorrect orientation, flipped images, failed crops, or unreadable results. Manual review alone could be slow and inconsistent, especially when working with high-volume image sets.",
    goal:
      "Create a workflow that could help prioritize manual review by surfacing images most likely to need attention.",
    role:
      "Contributed to the design and development of an audit approach that combined image-processing techniques, OCR, feature matching, and machine-learning-assisted flagging to identify image crops that may require review.",
    solution:
      "The audit workflow analyzed cropped images using multiple checks instead of relying on a single method. OCR helped detect readable text and possible orientation issues. Feature matching helped compare expected visual structure. Image-processing and machine-learning-assisted checks helped flag suspicious crops that may require manual review.",
    architectureSteps: [
      "Image batch received",
      "Cropped images scanned",
      "OCR orientation check",
      "Feature matching check",
      "Image quality / ML-assisted flagging",
      "Review queue generated",
      "Manual review prioritized",
      "Approved or fix-needed results",
    ],
    keyFeatures: [
      "Batch scanning of cropped collectible images",
      "OCR-based text/orientation checks",
      "Feature matching against expected visual structure",
      "Image quality checks for suspicious crops",
      "Machine-learning-assisted flagging",
      "Review queue for images needing attention",
      "Flag categories such as possible flip, rotation needed, crop warning, or OCR mismatch",
    ],
    technicalDecisions: [
      {
        title: "Why multiple detection methods were used",
        explanation:
          "No single technique was reliable enough on its own, so the workflow combined OCR, feature matching, image-processing checks, and ML-assisted flagging.",
      },
      {
        title: "Why the tool flagged for review instead of making final decisions",
        explanation:
          "The goal was to support quality control and prioritize human review, not fully replace judgment in uncertain cases.",
      },
      {
        title: "Why recreated mockups are used in the portfolio",
        explanation:
          "The original work involved private/professional systems, so the portfolio uses recreated visuals and generalized descriptions without exposing proprietary data.",
      },
    ],
    impact:
      "The tool supported the quality-control process by helping surface images most likely to contain crop, orientation, or visual-quality issues. This made review work easier to prioritize and helped improve consistency in the image audit workflow.",
    lessonsLearned:
      "This project strengthened my understanding of image-processing workflows, quality-control automation, and how to combine multiple technical approaches to solve practical production problems.",
    mockups: [
      {
        title: "Review queue dashboard",
        description:
          "A recreated dashboard view showing prioritized image records and review status.",
        labels: ["Queue", "Priority", "Review status"],
      },
      {
        title: "Flagged image card",
        description:
          "A recreated card pattern for images surfaced by the audit workflow.",
        labels: ["Possible Flip", "Rotation Needed", "Crop Warning", "OCR Mismatch"],
      },
      {
        title: "Workflow pipeline diagram",
        description:
          "A recreated pipeline view showing how checks move from image batch to manual review.",
        labels: ["OCR", "Feature match", "ML-assisted flagging"],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
