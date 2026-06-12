import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://arsyacoo.vercel.app"),
  title: "Lavina Arsya Aryanto | Full-Stack Developer & AI/ML Enthusiast",
  description: "Portfolio of Lavina Arsya Aryanto, an Informatics undergraduate building full-stack web, AI-assisted, and data-driven projects.",
  keywords: [
    "Lavina Arsya Aryanto",
    "Full-Stack Developer",
    "AI ML Portfolio",
    "React Developer",
    "Next.js Developer",
    "FastAPI Developer",
    "Informatics Student",
  ],
  authors: [{ name: "Lavina Arsya Aryanto", url: "https://github.com/Arsyacoo" }],
  creator: "Lavina Arsya Aryanto",
  openGraph: {
    title: "Lavina Arsya Aryanto | Portfolio",
    description: "Full-stack, AI-assisted, and data-driven project portfolio.",
    url: "https://arsyacoo.vercel.app",
    siteName: "Lavina Arsya Aryanto Portfolio",
    images: [
      {
        url: "/profile-hero.webp",
        width: 760,
        height: 1013,
        alt: "Lavina Arsya Aryanto portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavina Arsya Aryanto | Portfolio",
    description: "Full-stack, AI-assisted, and data-driven project portfolio.",
    images: ["/profile-hero.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${instrument.variable} ${plexMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
