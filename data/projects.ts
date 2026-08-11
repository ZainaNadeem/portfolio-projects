/**
 * Single source of truth for all project information.
 *
 * Every detailed section on a project page is optional.
 */

export interface ArchitectureNode {
  label: string;
  description?: string;
  icon?: string;
  items?: string[];
}

export interface ArchitectureLayer {
  nodes: ArchitectureNode[];
}

export interface ArchitectureDiagram {
  title: string;
  description?: string;
  layers: ArchitectureLayer[];
}

export interface ContentSection {
  title: string;
  body: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];

  badge?: string;
  github?: string;
  demo?: string;
  coverImage?: string;

  longDescription?: string;
  problem?: string;
  solution?: string;

  architecture?: ArchitectureDiagram[];
  technicalHighlights?: string[];
  challenges?: ContentSection[];
  results?: string[];
  learnings?: string[];
  futureWork?: string[];
  gallery?: ProjectImage[];

  researchQuestion?: string;
  methods?: string[];

  repositoryLabel?: string;
  externalLinks?: ExternalLink[];
}

export const projects: Project[] = [
  // ============================================================
  // 1. DISASTER RELIEF
  // ============================================================
  {
    slug: "disaster-relief-coordination",
    title: "Disaster Relief Coordination Platform",
    category: "Real-Time Systems",
    description:
      "A real-time coordination platform for managing disaster incidents, volunteer tasks, and relief resources through live maps, WebSockets, and role-based workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Docker",
    ],
    github:
      "https://github.com/ZainaNadeem/Disaster-Relief-Coordination-Platform",

    longDescription:
      "A full-stack disaster-response platform that gives responders a shared, continuously updated view of incidents, tasks, volunteers, and relief resources instead of relying on disconnected spreadsheets and phone-based coordination.",

    problem:
      "Disaster-response teams can lose critical time when incident information, volunteer assignments, and resource availability are distributed across disconnected tools. Static records also become outdated quickly as conditions change.",

    solution:
      "I built a Next.js client backed by an Express REST API and PostgreSQL database, then added authenticated WebSocket subscriptions so task and resource updates are broadcast instantly to everyone viewing the same incident. JWT-based roles separate administrative actions from volunteer workflows.",

    architecture: [
      {
        title: "System Architecture",
        description:
          "REST handles persistent application state while WebSockets distribute real-time incident updates.",
        layers: [
          {
            nodes: [
              {
                label: "Next.js Client",
                description:
                  "Interactive map, incident dashboard, task board, and resource views.",
                icon: "Monitor",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Express REST API",
                description:
                  "Handles authenticated incident, task, resource, and user operations.",
                icon: "Server",
              },
              {
                label: "WebSocket Server",
                description:
                  "Broadcasts task and resource changes to incident subscribers.",
                icon: "Network",
              },
            ],
          },
          {
            nodes: [
              {
                label: "PostgreSQL + Prisma",
                description:
                  "Stores users, incidents, tasks, assignments, and relief resources.",
                icon: "Database",
              },
            ],
          },
        ],
      },
    ],

    technicalHighlights: [
      "Real-time task updates using authenticated WebSocket subscriptions",
      "Interactive Mapbox incident map with geospatial visualization",
      "JWT authentication with ADMIN and VOLUNTEER authorization",
      "Drag-and-drop task workflow across OPEN, IN_PROGRESS, and DONE states",
      "Resource dispatch tracking from AVAILABLE to DISPATCHED",
      "Containerized client, API, and PostgreSQL services with Docker Compose",
    ],

    results: [
      "Reduced modeled dispatch workflow time from 8 minutes to 45 seconds",
      "Eliminated duplicate dispatches during stress testing",
      "Kept task and resource state synchronized across connected incident clients",
    ],

    learnings: [
      "Real-time applications require careful coordination between persistent REST state and event-driven updates.",
      "Role-based authorization is easier to reason about when permissions are enforced consistently at the API layer.",
    ],
  },

  // ============================================================
  // 2. SCALABLE INFERENCE INFRASTRUCTURE
  // ============================================================
  {
    slug: "scalable-inference-infrastructure",
    title: "Scalable Inference Infrastructure",
    category: "Cloud Infrastructure",
    description:
      "Production-style model-serving infrastructure built with FastAPI, Docker, and Kubernetes, including autoscaling, health checks, rolling deployments, and automated rollback.",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Bash",
      "PyTorch",
    ],
    github:
      "https://github.com/ZainaNadeem/AI-Model-Deployment-on-Kubernetes",

    longDescription:
      "A production-oriented inference service focused on the infrastructure required to reliably serve a machine-learning workload rather than on model training itself.",

    problem:
      "Serving a model reliably requires more than exposing a prediction function. The service needs repeatable deployment, validation, health monitoring, scaling, high availability, and a safe release process.",

    solution:
      "I packaged a DistilBERT sentiment service behind FastAPI, baked the model into a multi-stage Docker image, and deployed it to Kubernetes with three replicas behind a LoadBalancer. Kubernetes probes, rolling updates, resource limits, an HPA, and a Bash deployment workflow handle reliability and releases.",

    architecture: [
      {
        title: "Request Flow",
        description:
          "How inference requests move through the deployed service.",
        layers: [
          {
            nodes: [
              {
                label: "Client",
                description: "Sends validated sentiment-analysis requests.",
                icon: "Monitor",
              },
            ],
          },
          {
            nodes: [
              {
                label: "LoadBalancer",
                description:
                  "Distributes requests across available Kubernetes replicas.",
                icon: "Network",
              },
            ],
          },
          {
            nodes: [
              {
                label: "FastAPI",
                description:
                  "Handles routing, validation, health checks, and inference requests.",
                icon: "Server",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Pydantic",
                description:
                  "Rejects empty or malformed requests before inference.",
                icon: "Braces",
              },
            ],
          },
          {
            nodes: [
              {
                label: "DistilBERT Runtime",
                description:
                  "Model is loaded once at startup and reused across requests.",
                icon: "Cpu",
              },
            ],
          },
        ],
      },
      {
        title: "Kubernetes Runtime",
        description:
          "High-availability deployment with autoscaling and health monitoring.",
        layers: [
          {
            nodes: [
              {
                label: "Kubernetes Cluster",
                icon: "Boxes",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Replica 1",
                icon: "Container",
                items: ["FastAPI", "DistilBERT"],
              },
              {
                label: "Replica 2",
                icon: "Container",
                items: ["FastAPI", "DistilBERT"],
              },
              {
                label: "Replica 3",
                icon: "Container",
                items: ["FastAPI", "DistilBERT"],
              },
            ],
          },
          {
            nodes: [
              {
                label: "Horizontal Pod Autoscaler",
                description:
                  "Scales deployment from 3 to 10 pods using CPU and memory utilization.",
                icon: "Gauge",
              },
            ],
          },
        ],
      },
      {
        title: "Deployment Workflow",
        description:
          "Single-command release automation with deployment verification.",
        layers: [
          {
            nodes: [
              {
                label: "deploy.sh",
                description: "Starts the automated release workflow.",
                icon: "Terminal",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Build Image",
                description:
                  "Creates the multi-stage Docker image with the model included.",
                icon: "Package",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Deploy",
                description: "Applies the Kubernetes deployment.",
                icon: "Boxes",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Verify",
                description:
                  "Checks health and readiness after deployment.",
                icon: "CircleCheck",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Rollback",
                description:
                  "Restores the previous release when verification fails.",
                icon: "RotateCcw",
              },
            ],
          },
        ],
      },
    ],

    technicalHighlights: [
      "Three Kubernetes replicas behind a LoadBalancer",
      "Horizontal Pod Autoscaler configured from 3 to 10 pods",
      "Liveness and readiness probes through a health endpoint",
      "Zero-downtime rolling deployment strategy",
      "Multi-stage Docker build with model baked into the image",
      "Automated build, deploy, verification, and rollback using Bash",
    ],

    results: [
      "Configured infrastructure for workloads exceeding 500 requests per minute",
      "Deployed three continuously available application replicas",
      "Removed manual release steps through deployment automation",
    ],

    learnings: [
      "Production model serving is primarily a systems problem involving deployment, reliability, and resource management.",
      "Readiness checks and rolling-deployment configuration are essential for avoiding unavailable replicas during releases.",
    ],
    coverImage: "/projects/kubernet-inference/cover.png",
  },

  // ============================================================
  // 3. SHOPIFY-LITE
  // ============================================================
  {
    slug: "shopify-lite",
    title: "Shopify-Lite",
    category: "Backend Engineering",
    description:
      "An e-commerce backend with product and inventory APIs, Redis-backed carts and caching, PostgreSQL persistence, and Stripe payment processing.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Docker",
    ],
    github: "https://github.com/ZainaNadeem/Shopify-lite",

    longDescription:
      "A production-style e-commerce API focused on backend architecture, data persistence, caching, inventory management, and payment workflows.",

    problem:
      "An e-commerce backend needs to maintain consistent product and inventory state while keeping frequently accessed operations fast and correctly handling asynchronous payment confirmations.",

    solution:
      "I built REST APIs with FastAPI and PostgreSQL for product and inventory state, used Redis for cached product access and temporary shopping carts, and integrated Stripe PaymentIntents and webhooks for checkout confirmation.",

    architecture: [
      {
        title: "Checkout Flow",
        description:
          "How cart state moves from the API through payment confirmation.",
        layers: [
          {
            nodes: [
              {
                label: "FastAPI",
                description:
                  "Exposes product, inventory, cart, and checkout endpoints.",
                icon: "Server",
              },
            ],
          },
          {
            nodes: [
              {
                label: "PostgreSQL",
                description:
                  "Stores durable product, inventory, and order data.",
                icon: "Database",
              },
              {
                label: "Redis",
                description:
                  "Caches frequently viewed products and stores carts with a 24-hour TTL.",
                icon: "Database",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Stripe",
                description:
                  "Creates PaymentIntents and sends webhook confirmations.",
                icon: "Network",
              },
            ],
          },
        ],
      },
    ],

    technicalHighlights: [
      "Product catalog CRUD and inventory management",
      "Redis-backed shopping carts with 24-hour TTL",
      "Stripe PaymentIntent checkout workflow",
      "Webhook-based payment confirmation",
      "PostgreSQL persistence through SQLAlchemy",
      "Dockerized local infrastructure",
    ],

    results: [
      "Reduced database queries by 60% using Redis caching",
      "Achieved sub-50ms response times for frequently accessed cached data",
    ],

    learnings: [
      "Caching is most useful when its lifecycle is designed alongside the underlying source of truth.",
      "Webhook-driven payments require separating checkout initiation from final payment confirmation.",
    ],
    coverImage: "/projects/shopify-lite/cover.png",
  },

  // ============================================================
  // 4. URL SHORTENER
  // ============================================================
  {
    slug: "url-shortener-analytics",
    title: "URL Shortener with Analytics",
    category: "Backend Systems",
    description:
      "A Spring Boot URL-shortening service with Redis-backed redirects, MySQL analytics, custom expiration, and low-latency lookup paths.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "REST APIs",
    ],
    github:
      "https://github.com/ZainaNadeem/url-shortnerWithAnalytics",

    longDescription:
      "A backend service that generates compact URL identifiers, performs fast redirects, and records analytics about how shortened links are used.",

    problem:
      "URL redirection needs to remain extremely fast while analytics writes, expiration rules, and persistent link metadata are handled without slowing down the primary lookup path.",

    solution:
      "I built the service with Spring Boot and MySQL, then added Redis caching to keep frequently accessed short-code lookups out of the database. Separate API endpoints expose click analytics and expiration controls.",

    technicalHighlights: [
      "Unique short-code generation and redirect handling",
      "Redis cache for frequently accessed URL mappings",
      "MySQL persistence for links and click analytics",
      "Tracking for timestamps, referrers, and user locations",
      "Custom URL expiration support",
      "REST endpoints for analytics retrieval",
    ],

    results: [
      "Delivered redirect responses under 10ms for 95% of cached requests",
      "Separated fast redirect lookup from persistent analytics storage",
    ],

    learnings: [
      "Latency-sensitive read paths benefit from separating cache access from analytics-heavy persistence.",
      "Backend design becomes clearer when the primary user action and secondary observability data follow different paths.",
    ],
    coverImage: "/projects/url-shortnerWithAnalytics/cover.png",
  },

  // ============================================================
  // 5. AURARUN
  // ============================================================
  {
    slug: "aurarun",
    title: "AuraRun",
    category: "Product Engineering",
    description:
      "A creative data pipeline that turns Strava run biometrics into generated artwork using deterministic mapping rules, Stable Diffusion, FastAPI, and MLflow.",
    technologies: [
      "Python",
      "FastAPI",
      "Strava API",
      "Stable Diffusion",
      "MLflow",
      "PyTorch",
    ],
    github: "https://github.com/ZainaNadeem/AuraRun",

    longDescription:
      "AuraRun transforms fitness activity data into visual artwork. Heart rate, pace, elevation, and time of day are converted into deterministic aesthetic descriptors before being rendered through Stable Diffusion.",

    problem:
      "Fitness applications usually present activities as numbers and charts. AuraRun explores how the same structured biometric data can become a reproducible creative representation while keeping the transformation logic transparent and testable.",

    solution:
      "I built a pipeline that fetches Strava activities, maps biometric fields into four aesthetic dimensions using explicit threshold rules, generates artwork with Stable Diffusion, logs experiments in MLflow, exposes generation through FastAPI, and provides a Streamlit gallery for browsing results.",

    architecture: [
      {
        title: "Generation Pipeline",
        description:
          "From fitness activity data to generated artwork and experiment tracking.",
        layers: [
          {
            nodes: [
              {
                label: "Strava API",
                description:
                  "Fetches recent activity data through authenticated REST requests.",
                icon: "Network",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Descriptor Mapper",
                description:
                  "Maps heart rate, pace, elevation, and time into deterministic aesthetic descriptors.",
                icon: "Braces",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Stable Diffusion",
                description:
                  "Renders the generated prompt using CUDA, MPS, or CPU.",
                icon: "Cpu",
              },
            ],
          },
          {
            nodes: [
              {
                label: "MLflow",
                description:
                  "Tracks prompts, parameters, timing, scores, and generated artifacts.",
                icon: "Database",
              },
            ],
          },
          {
            nodes: [
              {
                label: "FastAPI + Gallery",
                description:
                  "Exposes generation functionality and presents the resulting artwork.",
                icon: "Monitor",
              },
            ],
          },
        ],
      },
    ],

    technicalHighlights: [
      "Strava OAuth and REST API ingestion",
      "Deterministic biometric-to-prompt mapping",
      "Stable Diffusion v1.5 generation across MPS, CUDA, and CPU",
      "MLflow experiment tracking for every generated artifact",
      "FastAPI generation endpoint",
      "Boundary-tested mapping logic with pytest",
    ],

    results: [
      "18/18 automated tests passing",
      "Covered 4 aesthetic dimensions across 11 mapping rules",
      "Tracked prompt and generation experiments through MLflow",
    ],

    learnings: [
      "Explicit mapping rules make generative pipelines easier to test and reason about than opaque prompt transformations.",
      "Experiment tracking is useful even for creative systems when outputs depend on many prompt and inference parameters.",
    ],
    coverImage: "/projects/aurarun/cover.png",

    gallery: [
      {
        src: "/projects/aurarun/input-data.png",
        alt: "Sample run biometric data used as input to AuraRun.",
        caption: "Structured biometric input used by the generation pipeline for tests.",
      },
      {
        src: "/projects/aurarun/generated-art-1.png",
        alt: "Artwork generated by AuraRun from run biometrics.",
        caption: "Generated artwork produced from mapped run biometrics.",
      },
      {
        src: "/projects/aurarun/generated-art-2.png",
        alt: "Mountain landscape artwork generated by AuraRun.",
        caption: "Another generated output demonstrating variation between runs.",
      },
      {
        src: "/projects/aurarun/gallery.png",
        alt: "AuraRun gallery displaying generated run artwork.",
        caption: "Gallery interface for browsing generated artwork.",
      },
    ],
  },

  // ============================================================
  // 6. ACCESSMAP
  // ============================================================
  {
    slug: "accessmap",
    title: "AccessMap",
    category: "ML Engineering",
    description:
      "An accessibility modeling and retrieval system combining geospatial data, Random Forest models, ModernBERT embeddings, FAISS search, and a deployed Streamlit application.",
    technologies: [
      "Python",
      "scikit-learn",
      "ModernBERT",
      "FAISS",
      "Streamlit",
      "GeoPandas",
    ],
    github: "https://github.com/zhang-systems/ai4all-accessmap",
    demo: "https://accessmap-13a.streamlit.app/",
    coverImage: "/projects/accessmap.png",

    longDescription:
      "AccessMap investigates whether sidewalk and infrastructure data can provide useful accessibility signals, combining supervised modeling, semantic retrieval, data-quality analysis, and deployment in a Streamlit application.",

    problem:
      "Navigation tools can show that a sidewalk exists without telling users whether it is actually usable. Public accessibility datasets are also incomplete, noisy, geographically inconsistent, and frequently lack verified ground-truth labels.",

    solution:
      "The project builds separate modeling pipelines for Amsterdam sidewalk measurements and U.S. crowdsourced address data, evaluates bias and data limitations explicitly, creates semantic embeddings with ModernBERT, indexes them with FAISS, and exposes the supported functionality through a Streamlit application.",

    architecture: [
      {
        title: "System Overview",
        description:
          "Data preparation, modeling, retrieval, and deployment remain separate so each result can be evaluated independently.",
        layers: [
          {
            nodes: [
              {
                label: "Accessibility Data",
                description:
                  "PMR sidewalk measurements and crowdsourced U.S. address records.",
                icon: "Database",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Data Pipeline",
                description:
                  "Cleaning, feature engineering, encoding, and bias analysis.",
                icon: "Filter",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Modeling",
                description:
                  "Random Forest pipelines evaluate available accessibility signals.",
                icon: "Cpu",
              },
              {
                label: "Semantic Retrieval",
                description:
                  "ModernBERT embeddings indexed through FAISS.",
                icon: "Search",
              },
            ],
          },
          {
            nodes: [
              {
                label: "Streamlit App",
                description:
                  "Provides sidewalk checks, address retrieval, and documented limitations.",
                icon: "Monitor",
              },
            ],
          },
        ],
      },
    ],

    technicalHighlights: [
      "72,274 PMR sidewalk segments processed",
      "10,104 U.S. crowdsourced address records analyzed",
      "ModernBERT embeddings indexed with FAISS",
      "Bias audit identified geographic dependence in the Housing model",
      "Streamlit deployment with cached model resources",
      "Separate modeling and retrieval workflows for datasets that do not geographically overlap",
    ],

    challenges: [
      {
        title: "Geographic feature bias",
        body:
          "The Housing model initially relied heavily on the state feature. Removing it showed that the remaining dataset did not contain enough signal to meaningfully predict sidewalk condition. Rather than hiding the result behind overall accuracy, the project reports the limitation directly.",
      },
      {
        title: "Interpreting perfect model accuracy",
        body:
          "The PMR model can reconstruct the accessibility rule because the rule-defining measurements are also included as model features. The resulting accuracy demonstrates pipeline consistency, not a novel predictive breakthrough.",
      },
    ],

    results: [
      "Deployed three user-facing workflows in Streamlit",
      "Built semantic address retrieval over 6,425 embedded records",
      "Identified and documented a major geographic-bias failure mode",
      "Validated the limits of both modeling datasets rather than presenting baseline-level accuracy as meaningful performance",
    ],

    learnings: [
      "Accuracy alone can conceal both class imbalance and data leakage.",
      "A null result can be more useful than an inflated metric when the underlying dataset lacks predictive signal.",
      "Model evaluation must account for where labels originate before performance numbers are interpreted.",
    ],

    futureWork: [
      "Validate accessibility rules against additional real-world ground-truth labels.",
      "Evaluate PMR models using features independent of the rule used to generate labels.",
      "Add location-aware features to improve retrieval ranking among tied sidewalk profiles.",
    ],

    gallery: [
      {
        src: "/projects/accessmap-accessible.png",
        alt: "AccessMap sidewalk assessment result.",
        caption: "Example sidewalk accessibility assessment.",
      },
      {
        src: "/projects/accessmap-not-accessible.png",
        alt: "AccessMap sidewalk assessment showing an accessibility limitation.",
        caption: "Example assessment where the sidewalk fails the configured criteria.",
      },
    ],
  },
];

/** Look up a project by its route slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Used by Next.js static generation. */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}