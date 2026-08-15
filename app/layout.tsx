import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const description =
  "Engineering portfolio featuring real-time systems, backend development, cloud infrastructure, open-source contributions, applied AI, and machine learning research.";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} — Software Engineering Portfolio`,
    template: `%s | ${siteConfig.fullName}`,
  },

  description,

  keywords: [
    siteConfig.fullName,
    "Software Engineering",
    "Backend Engineering",
    "Full-Stack Development",
    "Cloud Infrastructure",
    "Real-Time Systems",
    "Open Source",
    "Applied AI",
    "Machine Learning",
    "Computer Science",
    "Engineering Portfolio",
  ],

  authors: [
    {
      name: siteConfig.fullName,
    },
  ],

  creator: siteConfig.fullName,

  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.fullName} — Software Engineering Portfolio`,
    description,
    siteName: `${siteConfig.fullName} Portfolio`,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — Software Engineering Portfolio`,
    description,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}