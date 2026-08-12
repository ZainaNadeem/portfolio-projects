export interface ResearchProject {
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

export const researchProjects: ResearchProject[] = [
  {
    title: "AutoEmbedding / Composite Wave Label Encoding",
    subtitle: "Machine Learning Research",

    description:
      "Research exploring whether class labels can be represented as composite wave patterns and optimized to improve how learned representations separate classes.",

    contribution:
      "Built and evaluated optimization pipelines using hill climbing, particle swarm optimization, and simulated annealing, with experiments across datasets including MNIST and CIFAR-10.",

    technologies: [
      "Python",
      "PyTorch",
      "Optimization",
      "Computer Vision",
      "Machine Learning",
    ],

    results: [
      "Built dataset-independent and data-driven optimization workflows",
      "Evaluated class-separation objectives using pairwise embedding-distance metrics",
    ],
  },
];