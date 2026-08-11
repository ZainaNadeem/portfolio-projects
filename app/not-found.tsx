import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FolderKanban } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-24 sm:px-8">
      <div className="w-full max-w-md text-center">
        <p className="font-heading text-sm font-medium uppercase tracking-widest text-accent-to">
          404
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-white/25 hover:bg-white/5"
          >
            <FolderKanban size={16} />
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
