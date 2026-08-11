"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { siteConfig } from "@/lib/config";

const links = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: Github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail },
];

const isExternal = (href: string) => href.startsWith("http");

// Contact CTA buttons: GitHub, LinkedIn, Email, Resume.
const contactButtons = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    Icon: Github,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    Icon: Linkedin,
    primary: false,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
    primary: true,
  },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    Icon: FileText,
    primary: false,
  },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border-subtle">
      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
            Contact
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together.
          </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              I&apos;m currently looking for software engineering internships.
              My inbox is always open &mdash; feel free to reach out.
            </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {contactButtons.map(({ label, href, Icon, primary }) => (
              <a
                key={label}
                href={href}
                target={isExternal(href) ? "_blank" : undefined}
                rel={isExternal(href) ? "noopener noreferrer" : undefined}
                className={
                  primary
                    ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-to/25 transition-transform hover:scale-105"
                    : "inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
                }
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
          <a
            href="#about"
            className="font-heading text-lg font-bold tracking-tight text-foreground"
          >
            {siteConfig.name}
            <span className="gradient-text">.</span>
          </a>

          <div className="flex items-center gap-3">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-card text-muted transition-colors hover:border-white/25 hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted">
            &copy; {year} {siteConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
