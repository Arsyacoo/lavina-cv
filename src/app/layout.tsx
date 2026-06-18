import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Inter_Tight } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arsyalavina.web.id"),
  title: "Lavina Arsya Aryanto | Full-Stack Developer & AI/ML Enthusiast",
  description: "Portfolio of Lavina Arsya Aryanto, an Informatics undergraduate focused on AI-assisted applications, machine learning, and full-stack web development.",
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
    title: "Lavina Arsya Aryanto | Full-Stack Developer & AI/ML Enthusiast",
    description: "Portfolio of Lavina Arsya Aryanto, an Informatics undergraduate focused on AI-assisted applications, machine learning, and full-stack web development.",
    url: "https://www.arsyalavina.web.id",
    siteName: "Lavina Arsya Aryanto Portfolio",
    images: [
      {
        url: "/profile.webp",
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
    title: "Lavina Arsya Aryanto | Full-Stack Developer & AI/ML Enthusiast",
    description: "Portfolio of Lavina Arsya Aryanto, an Informatics undergraduate focused on AI-assisted applications, machine learning, and full-stack web development.",
    images: ["/profile.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${interTight.variable} ${plexMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

