"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  FileText,
  GitPullRequest,
  Mail,
  Server,
} from "lucide-react";
import { Github, Linkedin } from "./icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const highlights = [
  {
    Icon: Award,
    label: "4.0 CGPA",
    detail: "Consistent academic standing",
  },
  {
    Icon: BrainCircuit,
    label: "AI / ML Projects",
    detail: "From research to deployment",
  },
  {
    Icon: Server,
    label: "Backend Systems",
    detail: "Scalable, reliable services",
  },
  {
    Icon: GitPullRequest,
    label: "Open Source",
    detail: "Contributing in the open",
  },
];

const socials = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    Icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border-subtle bg-background"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

        {/* Very subtle atmosphere */}
        <div className="absolute right-[15%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-accent-to/[0.05] blur-[130px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start lg:gap-8"
      >
        {/* =========================================================
            LEFT PROFILE SIDEBAR
        ========================================================== */}
        <motion.aside
          variants={reveal}
          className="border border-border-subtle bg-card p-5 lg:sticky lg:top-28"
        >
          {/* Avatar */}
          <div className="relative mx-auto aspect-square w-full max-w-[210px] overflow-hidden border border-border-subtle bg-background">
            <Image
              src="/images/profile.png"
              alt="Zaina Nadeem avatar"
              fill
              priority
              sizes="210px"
              className="object-cover"
            />
          </div>

          {/* Identity */}
          <div className="mt-6 text-center">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Zaina Nadeem
            </h1>

            <p className="mx-auto mt-3 inline-flex border border-border-subtle bg-background/60 px-3 py-1.5 text-xs text-muted">
              Student - Aspiring Software Engineer
            </p>
          </div>

          <div className="my-6 h-px bg-border-subtle" />

          {/* Availability */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to internships
          </div>

          {/* Contact links */}
          <div className="mt-6 space-y-2">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 border border-transparent px-2 py-2.5 text-sm text-muted transition-colors hover:border-border-subtle hover:bg-background/60 hover:text-foreground"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border-subtle bg-background text-accent-to">
                  <Icon size={15} />
                </span>

                <span>{label}</span>
              </Link>
            ))}
          </div>
        </motion.aside>

        {/* =========================================================
            RIGHT ABOUT PANEL
        ========================================================== */}
        <motion.div
          variants={reveal}
          className="border border-border-subtle bg-card"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            {/* About heading */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-to">
                About
              </p>

              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Turning curiosity into systems that matter.
              </h2>

              <div className="mt-4 h-px w-12 bg-accent-to" />
            </div>

            {/* Existing About copy */}
            <div className="mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a Computer Science student working toward my
                Bachelor&apos;s degree, drawn to the space where artificial
                intelligence meets thoughtful software engineering. What keeps
                me up at night isn&apos;t just getting a model to work — it&apos;s
                making it reliable, scalable, and genuinely useful to the
                people on the other end.
              </p>

              <p>
                Along the way I&apos;ve kept a{" "}
                <span className="font-medium text-foreground">4.0 CGPA</span>{" "}
                while building real AI/ML projects, designing backend systems
                that hold up under load, and contributing to open source
                because I believe the best way to learn is to build in the
                open.
              </p>

              <p>
                Whether I&apos;m training a model, debugging a distributed
                service, or sending a pull request to a project I admire, I
                care about the details that turn a prototype into something
                people can trust.
              </p>
            </div>

            {/* What I'm doing */}
            <div className="mt-12">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                What I&apos;m Doing
              </h3>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ staggerChildren: 0.08 }}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {highlights.map(({ Icon, label, detail }) => (
                  <motion.li
                    key={label}
                    variants={reveal}
                    className="rounded-2xl border border-border-subtle bg-background/50 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-from/20 to-accent-to/20 text-accent-to">
                        <Icon size={18} />
                      </span>

                      <div>
                        <h4 className="font-heading text-base font-semibold text-foreground">
                          {label}
                        </h4>

                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Bottom actions */}
            <div className="mt-10 flex flex-col gap-5 border-t border-border-subtle pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#projects"
                  className="group inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-accent-from to-accent-to px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  View Projects

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border-subtle bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  <FileText size={16} />
                  Resume
                </Link>
              </div>

              <p className="text-xs text-muted">
                Software Engineering · AI Engineering
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}