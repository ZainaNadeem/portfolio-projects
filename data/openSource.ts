export interface OpenSourceContribution {
  title: string;
  repository: string;
  description: string;
  contribution: string;
  technologies: string[];
  results: string[];
  github: string;
  pullRequest: string;
  image?: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    title: "PathReview",
    repository: "ascherj/pathreview",

    description:
      "Contributed to an open-source RAG and agent system by fixing stale vector embeddings that remained after documents were re-ingested.",

    contribution:
      "Diagnosed the vector deletion path, corrected the document_id filter used during re-ingestion, and updated unit tests to verify stale embeddings are removed before new vectors are added.",

    technologies: [
      "Python",
      "Vector Databases",
      "RAG",
      "Pytest",
      "Git",
      "GitHub",
    ],

    results: [
      "Fixed stale embeddings caused by an incorrect vector-store deletion filter",
      "Targeted ingestion pipeline tests pass 10/10",
    ],

    github: "https://github.com/ascherj/pathreview",

    pullRequest:
      "https://github.com/ascherj/pathreview/pull/1020",
  },
];