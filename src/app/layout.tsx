import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import GSAPScrollReset from "@/components/GSAPScrollReset";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "altIQ — Intelligence, Applied.",
    template: "%s — altIQ",
  },
  description:
    "altIQ is an AI strategy and development firm that helps businesses design, build, and deploy AI systems that solve real operational problems.",
  keywords: ["AI consulting", "AI strategy", "custom AI development", "machine learning", "AI transformation"],
  openGraph: {
    title: "altIQ — Intelligence, Applied.",
    description:
      "We help businesses design, build, and deploy AI systems that solve real operational problems.",
    siteName: "altIQ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <GSAPScrollReset />
        {children}
      </body>
    </html>
  );
}
