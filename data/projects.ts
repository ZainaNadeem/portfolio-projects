/**
 * Single source of truth for all project information.
 *
 * To add or replace a project, edit ONE object in the `projects` array below.
 * Every detailed section on the project detail page is optional and only
 * renders when the corresponding field is present — so a project can be as
 * minimal as {slug, title, category, description, technologies} or as rich as
 * AccessMap. Components never hardcode project content.
 */

/** A single node/card within an architecture diagram. */
export interface ArchitectureNode {
  label: string;
  /** One concise supporting sentence. */
  description?: string;
  /** Optional lucide-react icon name (see ArchitectureDiagram's icon map). */
  icon?: string;
  /** Optional sub-components listed inside the card (e.g. a replica's contents). */
  items?: string[];
}

/**
 * One horizontal level of a diagram. A single node renders centered; multiple
 * nodes render side-by-side to express parallelism (e.g. replicas).
 */
export interface ArchitectureLayer {
  nodes: ArchitectureNode[];
}

/** A titled diagram made of stacked layers, connected top-to-bottom. */
export interface ArchitectureDiagram {
  title: string;
  description?: string;
  layers: ArchitectureLayer[];
}

/** A titled block of prose (e.g. an engineering challenge). */
export interface ContentSection {
  title: string;
  body: string;
}

/** An optional project image rendered with next/image. */
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

/** An external link (repository, poster, etc.). */
export interface ExternalLink {
  label: string;
  href: string;
}

export interface Project {
  // --- Required core ---
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];

  // --- Optional meta ---
  badge?: string;
  featured?: boolean;
  github?: string;
  demo?: string;
  /** Path under /public. Only rendered if the file loads (see SafeImage). */
  coverImage?: string;

  // --- Optional narrative sections ---
  longDescription?: string;
  problem?: string;
  solution?: string;

  // --- Optional structured sections ---
  architecture?: ArchitectureDiagram[];
  technicalHighlights?: string[];
  challenges?: ContentSection[];
  results?: string[];
  learnings?: string[];
  futureWork?: string[];
  gallery?: ProjectImage[];

  // --- Optional research-oriented sections ---
  researchQuestion?: string;
  methods?: string[];

  // --- Optional links ---
  repositoryLabel?: string;
  externalLinks?: ExternalLink[];
}

export const projects: Project[] = [
  {
    slug: "accessmap",
    title: "AccessMap: Machine Learning for Public Accessibility",
    category: "AI Engineering",
    description:
      "Built an end-to-end accessibility intelligence system combining machine learning, transformer models, vector search, and geographic data to identify barriers in public infrastructure.",
    technologies: [
      "Python",
      "Random Forest",
      "Transformers",
      "ModernBERT",
      "DeBERTa",
      "FAISS",
      "Streamlit",
    ],
    featured: true,
    github: "https://github.com/zhang-systems/ai4all-accessmap",
    demo: "https://accessmap-13a.streamlit.app/",
    coverImage: "/projects/accessmap.png",
    longDescription:
      "AccessMap is an accessibility intelligence system that combines machine learning, transformer models, and vector search over geographic and infrastructure data to identify accessibility barriers in public spaces.",
    problem:
      "Accessibility information for public infrastructure is fragmented, inconsistent, and often missing. People who depend on accessible routes have no reliable way to know whether a location is navigable, and the crowdsourced records that do exist are noisy and hard to turn into trustworthy signals.",
    solution:
      "Random Forest and Transformer pipelines (ModernBERT / DeBERTa) were trained and evaluated on more than 1,000 infrastructure records, predicting location accessibility with 84% accuracy. Automated ADA compliance checks and custom label-generation logic reduce noise in crowdsourced records, and high-dimensional vector embeddings indexed with FAISS enable sub-second semantic location search.",
    architecture: [
      {
        title: "System Overview",
        description: "How a request flows through AccessMap.",
        layers: [
          {
            nodes: [
              {
                label: "Client",
                description:
                  "Streamlit app where users search locations and request accessibility insights.",
                icon: "Monitor",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Data Layer",
                description:
                  "Infrastructure records and crowdsourced accessibility data.",
                icon: "Database",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Feature Engineering",
                description:
                  "Automated ADA compliance checks and custom label generation to reduce noise.",
                icon: "Filter",
              },
            ],
          },
          {
            nodes: [
              {
                label: "ML Pipelines",
                description:
                  "Random Forest and Transformer models (ModernBERT / DeBERTa) predict accessibility.",
                icon: "Cpu",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Vector Search",
                description:
                  "High-dimensional embeddings indexed with FAISS for sub-second semantic search.",
                icon: "Search",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Predictions",
                description: "Accessibility scoring surfaced back to the user.",
                icon: "Map",
              },
            ],
          },
        ],
      },
    ],
    technicalHighlights: [
      "84% accuracy predicting urban location accessibility",
      "Random Forest and Transformer pipelines (ModernBERT / DeBERTa)",
      "Trained and evaluated on 1,000+ infrastructure records",
      "FAISS vector search for sub-second semantic location lookup",
      "Automated ADA compliance checks and custom label generation",
    ],
    challenges: [
      {
        title: "Geographic feature bias",
        body: "Early models leaned heavily on spatial features and overfit to location — an 89% geographic feature bias. I redesigned the model's feature inputs to prevent spatial overfitting, forcing the model to learn from genuine accessibility signals rather than where a location happened to be.",
      },
    ],
    results: [
      "84% accuracy on urban location accessibility prediction",
      "Sub-second semantic location search via FAISS",
      "Reduced an 89% geographic feature bias through feature redesign",
      "Trained and evaluated on 1,000+ infrastructure records",
    ],
    learnings: [
      "Feature design can matter as much as model choice — spatial features silently drove overfitting until they were reworked.",
      "Cleaning and labeling crowdsourced data was essential before the modeling could be trusted.",
    ],
    futureWork: [
      "Expand coverage to additional cities and data sources.",
      "Feed more crowdsourced records through the automated labeling pipeline.",
      "Broaden the semantic search to more location and facility types.",
    ],
    gallery: [
      {
        src: "/projects/accessmap-accessible.png",
        alt: "AccessMap assessment result marking a sidewalk segment as accessible, with the model vote and a feature-importance breakdown.",
        caption:
          "An accessible result, with transparent supporting factors and feature importance.",
      },
      {
        src: "/projects/accessmap-not-accessible.png",
        alt: "AccessMap assessment result marking a sidewalk segment as not accessible because a measurement falls outside the criteria.",
        caption:
          "A not-accessible result when a measurement falls outside the criteria.",
      },
    ],
  },
  {
    slug: "scalable-ml-inference-infrastructure",
    title: "Scalable ML Inference Infrastructure",
    category: "Software Engineering · ML Infrastructure",
    description:
      "A containerized PyTorch inference service served with FastAPI and deployed to Kubernetes with autoscaling and automated build-and-deploy tooling.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes", "Bash"],
    github: "https://github.com/ZainaNadeem/AI-Model-Deployment-on-Kubernetes",
    coverImage: "/projects/ml-inference.png",
    longDescription:
      "A hands-on ML infrastructure project: packaging a PyTorch model as a containerized inference service and running it on Kubernetes with room to scale under load.",
    problem:
      "Moving a trained model out of a notebook and into something that can serve requests reliably means solving a different class of problems — reproducible environments, request serving, resource limits, and scaling as load increases.",
    solution:
      "I built a containerized PyTorch inference service with Docker, served the model through FastAPI, and deployed it to a local Kubernetes cluster running three replicas. I configured resource limits and horizontal pod autoscaling, and automated image build, push, and deployment updates with Bash scripts.",
    architecture: [
      {
        title: "Inference Request Flow",
        description: "How a single inference request travels through the service.",
        layers: [
          {
            nodes: [
              {
                label: "Client",
                description: "Sends a text input for sentiment inference.",
                icon: "Monitor",
              },
            ],
          },
          {
            nodes: [
              {
                label: "LoadBalancer",
                description: "Routes traffic to an available replica.",
                icon: "Network",
              },
            ],
          },
          {
            nodes: [
              {
                label: "FastAPI API",
                description: "Validates requests and exposes inference endpoints.",
                icon: "Server",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Pydantic Validation",
                description: "Checks and parses the request payload.",
                icon: "Braces",
              },
            ],
          },
          {
            nodes: [
              {
                label: "DistilBERT Runtime",
                description:
                  "Processes sentiment predictions using a shared model instance.",
                icon: "Cpu",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Prediction Response",
                description: "Returns the sentiment result to the client.",
                icon: "Send",
              },
            ],
          },
        ],
      },
      {
        title: "Runtime Infrastructure",
        description: "Deployment topology on Kubernetes.",
        layers: [
          {
            nodes: [
              {
                label: "Kubernetes Cluster",
                description: "Hosts and orchestrates the deployment.",
                icon: "Boxes",
              },
            ],
          },
          {
            nodes: [
              {
                label: "LoadBalancer",
                description: "Distributes requests across replicas.",
                icon: "Network",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Replica 1",
                icon: "Container",
                items: ["FastAPI", "DistilBERT Runtime"],
              },
              {
                label: "Replica 2",
                icon: "Container",
                items: ["FastAPI", "DistilBERT Runtime"],
              },
              {
                label: "Replica 3",
                icon: "Container",
                items: ["FastAPI", "DistilBERT Runtime"],
              },
            ],
          },
          {
            nodes: [
              {
                label: "Horizontal Pod Autoscaler",
                description:
                  "Maintains replica count based on CPU and memory utilization.",
                icon: "Gauge",
              },
            ],
          },
        ],
      },
      {
        title: "Deployment Workflow",
        description: "Operational automation driven by deploy.sh.",
        layers: [
          {
            nodes: [
              {
                label: "Developer",
                description: "Runs the deployment script.",
                icon: "Terminal",
              },
            ],
          },
          {
            nodes: [
              {
                label: "deploy.sh",
                description: "Orchestrates the build and deploy steps.",
                icon: "FileCode",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Build Docker Image",
                description: "Packages the service into a container image.",
                icon: "Package",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Deploy to Kubernetes",
                description: "Applies manifests to the cluster.",
                icon: "Boxes",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Verify Deployment",
                description: "Checks pod health and readiness.",
                icon: "CircleCheck",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Rollback on Failure",
                description: "Reverts to the last working release if checks fail.",
                icon: "RotateCcw",
              },
            ],
          },
        ],
      },
    ],
    technicalHighlights: [
      "Containerized PyTorch inference service (Docker)",
      "FastAPI model serving over REST",
      "Kubernetes deployment with three replicas",
      "Resource limits and horizontal pod autoscaling",
      "Automated build, push, and deploy with Bash",
    ],
    results: [
      "Tested workloads of 500+ requests per minute",
      "Ran three replicas with horizontal pod autoscaling",
    ],
    learnings: [
      "Kubernetes autoscaling and resource limits behave very differently under real load than in a single-container setup.",
      "Automating the build-push-deploy loop removed most of the friction from iterating on the service.",
    ],
  },
  {
    slug: "open-source-contributions",
    title: "Open Source Contributions",
    category: "Software Engineering",
    description:
      "Ongoing contributions to open-source projects — debugging issues, improving developer workflows, and strengthening reliability.",
    technologies: ["Python", "Git", "Open Source"],
    longDescription:
      "An ongoing effort to contribute to open-source software by debugging issues, improving developer workflows, and strengthening project reliability. This work is in progress; specific contributions will be documented here as they land.",
  },
  {
    slug: "autoembedding",
    title: "AutoEmbedding: A Composite Wave Embedding Approach for Forward-Forward Learning",
    category: "ML Research",
    badge: "Research",
    description:
      "Research into dataset-independent embedding generation using optimization algorithms for machine learning applications.",
    technologies: ["Python", "Optimization", "Embeddings", "Machine Learning"],
    coverImage: "/projects/autoembedding.png",
    longDescription:
      "AutoEmbedding is an ongoing research project exploring whether high-quality embeddings can be generated directly through optimization, rather than being learned from a specific labeled dataset — aiming for representations that transfer across tasks.",
    researchQuestion:
      "Can useful, transferable embeddings be produced in a dataset-independent way, driven by an optimization objective rather than supervised training on a single corpus?",
    methods: [
      "Formulating embedding generation as an optimization problem.",
      "Studying optimization algorithms that search the representation space against a chosen objective.",
      "Evaluating how well the resulting embeddings transfer to downstream tasks.",
    ],
    futureWork: [
      "Benchmark across more downstream tasks and modalities.",
      "Release a reproducible evaluation harness.",
    ],
  },
];

/** The single featured project (or undefined if none is flagged). */
export const featuredProject: Project | undefined = projects.find(
  (p) => p.featured,
);

/** All non-featured projects, in declared order. */
export const otherProjects: Project[] = projects.filter((p) => !p.featured);

/** Look up a single project by its slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All slugs — used for static generation. */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
