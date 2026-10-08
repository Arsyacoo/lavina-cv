import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { contact, type Lang } from "@/content";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], axes: ["opsz"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], display: "swap" });

const SITE = "https://www.arsyalavina.web.id";
const TITLE = "Arsyacoo | Applied AI products from Yogyakarta";
const DESCRIPTION: Record<Lang, string> = {
    en: "Arsyacoo builds focused AI products that turn documents, data, and complex workflows into clear next steps.",
    id: "Arsyacoo membangun produk AI yang fokus, mengubah dokumen, data, dan alur kerja yang rumit menjadi langkah berikutnya yang jelas.",
};

export const viewport: Viewport = { themeColor: "#0b1220" };

export function pageMetadata(lang: Lang): Metadata {
    const path = lang === "id" ? "/id" : "/";
    return {
        metadataBase: new URL(SITE),
        title: TITLE,
        description: DESCRIPTION[lang],
        authors: [{ name: "Arsyacoo", url: contact.github }],
        alternates: { canonical: path, languages: { en: "/", id: "/id", "x-default": "/" } },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION[lang],
            url: path,
            siteName: "Arsyacoo",
            images: [{ url: "/portrait.webp", width: 1122, height: 1402, alt: "Lavina Arsya Aryanto" }],
            locale: lang === "id" ? "id_ID" : "en_US",
            alternateLocale: lang === "id" ? "en_US" : "id_ID",
            type: "website",
        },
        twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION[lang], images: ["/portrait.webp"] },
        icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }], apple: "/apple-icon.png" },
    };
}

const person = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arsyacoo",
    description: DESCRIPTION.en,
    url: SITE,
    founder: { "@type": "Person", name: "Lavina Arsya Aryanto", jobTitle: "Founder" },
    email: `mailto:${contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
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
