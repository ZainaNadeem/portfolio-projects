// Central place to edit your personal info, links, navigation, and skills.
// Update these values and the whole site stays in sync.

export type NavLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const siteConfig = {
  name: "Zaina",
  fullName: "Zaina Nadeem",
  role: "Software Engineer",
  email: "zaina.nadem@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ZainaNadeem",
    linkedin: "https://www.linkedin.com/in/zainanadeem",
  },
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Research", href: "/#research" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "Go", "JavaScript", "SQL"],
  },
  {
    category: "Backend & Web",
    skills: [
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "React",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
      "Linux",
      "Git",
    ],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
 {
  category: "AI / ML",
  skills: [
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "FAISS",
  ],
},
];