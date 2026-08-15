// Central place to edit personal information, links, navigation, and skills.

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
  { label: "Industry", href: "/#industry-projects" },
  { label: "Open Source", href: "/#open-source" },
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