import Link from "next/link";
import { Github, Linkedin } from "./icons";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Zaina Nadeem
        </p>

        <div className="flex items-center gap-5">
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={15} />
          </Link>

          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Linkedin size={15} />
          </Link>

          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}