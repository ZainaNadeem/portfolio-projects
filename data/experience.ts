/**
 * Experience timeline data. Edit these entries to keep them current — the
 * Experience section renders whatever is here (and hides itself if empty).
 */
export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  /** e.g. "2025 — Present" */
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
    {
    id: "1",
    role: "AI4ALL Ignite Fellow",
    organization: "AI4ALL",
    period: "Summer 2026",
    location: "Remote",
    description:
      "Selected for AI4ALL Ignite, a competitive portfolio-based program focused on applied AI, responsible AI, and collaborative software development.",
    highlights: [
      "Collaborated on AccessMap, a machine learning system that predicts public accessibility using structured and geospatial data.",
      "Built and evaluated machine learning models, including transformer-based approaches and vector search, while improving prediction quality and reducing geographic feature bias.",
      "Applied responsible AI principles throughout model development, evaluation, and feature engineering."
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Transformers",
      "FAISS"
    ]
  },
  {
    id: "2",
    role: "Machine Learning Research (Independent)",
    organization: "AutoEmbedding Project",
    period: "2025 — Present",
    location: "Remote",
    description:
      "Investigating dataset-independent embedding generation using optimization algorithms, with a focus on representations that transfer across tasks.",
    highlights: [
      "Formulated embedding generation as an optimization problem",
      "Built a reproducible evaluation harness for downstream transfer",
      "Compared results against conventionally trained baselines",
    ],
    technologies: ["Python", "Optimization", "Machine Learning"],
  },
  {
    id: "3",
    role: "Open Source Contributor",
    organization: "Various Projects",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Contributing bug fixes and developer-experience improvements to open-source projects across the Python ecosystem.",
    highlights: [
      "Shipped focused, well-tested pull requests",
      "Improved CI reliability and local developer workflows",
      "Communicated clearly through issues and code review",
    ],
    technologies: ["Python", "Git", "CI/CD"],
  },
  {
    id: "4",
    role: "Computer Science Student",
    organization: "Bachelor's Degree",
    period: "2023 — Present",
    location: "On campus",
    description:
      "Pursuing a Bachelor's in Computer Science while maintaining a 4.0 CGPA and building AI/ML and backend projects on the side.",
    highlights: [
      "Maintaining a 4.0 CGPA",
      "Coursework across algorithms, systems, artificial intelligence and machine learning",
      "Applying classroom fundamentals to real projects",
    ],
    technologies: ["Python", "Java", "C++"],
  },
];
