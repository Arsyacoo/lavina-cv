import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], axes: ["opsz"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], display: "swap" });

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
        url: "/portrait.webp",
        width: 1122,
        height: 1402,
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
    images: ["/portrait.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#172d55",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${hanken.variable}`}>
        {children}
      </body>
    </html>
  );
}

