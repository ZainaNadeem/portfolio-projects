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
  "Computer Science portfolio featuring AI applications, backend systems, machine learning infrastructure, open-source work, and research.";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} — Software & AI Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    siteConfig.fullName,
    "Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "ML Infrastructure",
    "Computer Science",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.fullName} — Software Engineer`,
    description,
    siteName: `${siteConfig.fullName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — Software& AI Engineer`,
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
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
