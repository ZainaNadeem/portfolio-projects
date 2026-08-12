export interface IndustryProject {
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  technologies: string[];
  results: string[];
  image?: string;
  publication?: string;
  github?: string;
}

export const industryProjects: IndustryProject[] = [
  {
    title: "ESD Risk Prediction & Safety Analysis System",
    subtitle: "Industry-Sponsored Project",

    description:
      "An industry-sponsored machine learning and statistical analysis project focused on identifying critical factors contributing to electrostatic discharge (ESD) hazards.",

    contribution:
      "Developed machine learning and statistical analysis workflows, engineered data visualizations and pattern-recognition models to validate findings and improve risk detection, and contributed to documenting the system architecture and results.",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
    ],

    results: [
      "Identified critical factors contributing to ESD hazards",
      "Authored a formal journal manuscript detailing the system architecture and results; currently undergoing peer review",
    ],
  },
];