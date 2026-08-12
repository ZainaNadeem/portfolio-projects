"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <motion.aside
      id="about"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {/* PROFILE IMAGE */}
      <div className="relative aspect-[1/1.08] w-full overflow-hidden bg-card">
        <Image
          src="/images/profile.png"
          alt="Zaina Nadeem"
          fill
          priority
          sizes="300px"
          className="object-cover object-[center_38%]"
        />
      </div>

      {/* IDENTITY */}
      <div className="mt-5">
        <h1 className="font-heading text-[1.75rem] font-bold tracking-tight text-foreground">
          Zaina Nadeem
        </h1>

        <p className="mt-1.5 text-sm font-medium text-accent-to">
          Computer Science Student
        </p>

        <p className="mt-2 text-xs text-muted">
          Open to internships
        </p>
      </div>

      {/* ABOUT */}
      <div className="mt-6">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          About
        </h2>

        <p className="mt-3 text-sm leading-[1.7] text-muted">
          Computer Science student focused on software engineering, backend
          systems, full-stack development, cloud infrastructure, and applied
          AI. I enjoy building reliable systems and taking projects from
          implementation through deployment.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="mt-6">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          Education
        </h2>

        <div className="mt-3">
          <p className="text-sm font-semibold leading-5 text-foreground">
            Minnesota State University
          </p>

          <p className="mt-1.5 text-sm leading-[1.6] text-muted">
            B.S. Computer Science
            <br />
            Minor in Mathematics
          </p>

          <p className="mt-2 text-xs leading-[1.7] text-muted">
            Expected December 2027
            <br />
            GPA: 4.0 / 4.0
          </p>
        </div>
      </div>

      {/* CONTACT */}
      <div className="mt-6">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
          Contact
        </h2>

        <div className="mt-3 space-y-2">
          <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Github size={14} />
            GitHub
          </Link>

          <Link
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Linkedin size={14} />
            LinkedIn
          </Link>

          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Mail size={14} />
            Email
          </Link>

          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <FileText size={14} />
            Resume
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}