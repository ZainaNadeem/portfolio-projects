// Central place to edit your personal info, links, projects, and skills.
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
  role: "Computer Science Student",
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
    category: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "CNNs",
      "Hugging Face",
      "LangChain",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    category: "Cloud & Engineering",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Linux", "Git"],
  },
];
