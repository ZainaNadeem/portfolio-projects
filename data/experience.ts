/**
 * Experience timeline data.
 * Edit these entries to keep them current — the Experience section renders
 * whatever is here and hides itself if empty.
 */

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    role: "Open Source Contributor",
    organization: "PathReview",
    period: "2026",
    location: "Remote",
    description:
      "Contributed to an open-source RAG and agent system by debugging a stale-vector issue in the document ingestion pipeline and submitting a focused production fix.",
    highlights: [
      "Investigated stale embeddings returned after document re-ingestion and traced the issue to an incorrect vector-store deletion filter.",
      "Updated the deletion query to use the vector database's equality operator, ensuring previous embeddings are removed before re-ingestion.",
      "Added and updated unit tests covering ingestion behavior; targeted pipeline tests passed 10/10.",
      "Submitted the fix through pull request #1020 with documented reproduction, verification, and failure analysis.",
    ],
    technologies: ["Python", "Vector Databases", "Git", "Testing"],
  },

  {
    id: "2",
    role: "AI4ALL Ignite Fellow",
    organization: "AI4ALL",
    period: "Summer 2026",
    location: "Remote",
    description:
      "Selected for AI4ALL Ignite, a portfolio-based program focused on applied AI, responsible AI, and collaborative software development.",
    highlights: [
      "Collaborated on AccessMap, an end-to-end accessibility application combining data pipelines, machine learning, semantic retrieval, and deployment.",
      "Built and evaluated Random Forest and transformer-based workflows while investigating geographic feature bias and data-quality limitations.",
      "Implemented semantic address retrieval using ModernBERT embeddings and FAISS and contributed to a deployed Streamlit application.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "ModernBERT",
      "FAISS",
      "Streamlit",
    ],
  },

  {
    id: "3",
    role: "Python Teaching Assistant",
    organization: "Minnesota State University",
    period: "2026",
    location: "On campus",
    description:
      "Supported students learning Python, object-oriented programming, debugging, and foundational software-development concepts.",
    highlights: [
      "Mentored 100+ students through programming exercises, debugging sessions, and technical problem solving.",
      "Led weekly labs covering Python fundamentals and object-oriented programming.",
      "Created walkthroughs and practice exercises to reinforce core programming concepts.",
    ],
    technologies: ["Python", "OOP", "Debugging"],
  },

  {
    id: "4",
    role: "IT / Lab Systems Support",
    organization: "Minnesota State University",
    period: "2024 — Present",
    location: "On campus",
    description:
      "Supported university computing environments while automating repetitive technical tasks and troubleshooting software and system issues.",
    highlights: [
      "Resolved 300+ technical support issues across university lab environments.",
      "Maintained approximately 95% lab-system uptime through troubleshooting and preventative support.",
      "Used Python scripts to automate recurring system-administration tasks and improve support efficiency.",
    ],
    technologies: ["Python", "Linux", "Automation", "Technical Support"],
  },
];