import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { contact, type Lang } from "@/content";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], axes: ["opsz"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], display: "swap" });

const SITE = "https://www.arsyalavina.web.id";
const TITLE = "Lavina Arsya Aryanto | Full-Stack Developer & AI/ML Enthusiast";
const DESCRIPTION: Record<Lang, string> = {
    en: "Portfolio of Lavina Arsya Aryanto, Informatics student and Software Engineer Intern in Yogyakarta, building full-stack web apps, AI tools, and machine learning prototypes.",
    id: "Portofolio Lavina Arsya Aryanto, mahasiswa Informatika dan Software Engineer Intern di Yogyakarta yang membangun aplikasi web full-stack, tools AI, dan prototipe machine learning.",
};

export const viewport: Viewport = { themeColor: "#172d55" };

export function pageMetadata(lang: Lang): Metadata {
    const path = lang === "id" ? "/id" : "/";
    return {
        metadataBase: new URL(SITE),
        title: TITLE,
        description: DESCRIPTION[lang],
        authors: [{ name: "Lavina Arsya Aryanto", url: contact.github }],
        alternates: { canonical: path, languages: { en: "/", id: "/id", "x-default": "/" } },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION[lang],
            url: path,
            siteName: "Lavina Arsya Aryanto",
            images: [{ url: "/portrait.webp", width: 1122, height: 1402, alt: "Lavina Arsya Aryanto" }],
            locale: lang === "id" ? "id_ID" : "en_US",
            alternateLocale: lang === "id" ? "en_US" : "id_ID",
            type: "profile",
        },
        twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION[lang], images: ["/portrait.webp"] },
        icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }], apple: "/apple-icon.png" },
    };
}

const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lavina Arsya Aryanto",
    jobTitle: "Full-Stack Developer",
    url: SITE,
    image: `${SITE}/portrait.webp`,
    email: `mailto:${contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Amikom Yogyakarta" },
    sameAs: [contact.github, contact.linkedin],
};

export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
    return (
        <html lang={lang}>
            <body className={`${bricolage.variable} ${hanken.variable}`}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
                {children}
            </body>
        </html>
    );
}
