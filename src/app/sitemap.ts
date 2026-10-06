import type { MetadataRoute } from "next";

const SITE = "https://www.arsyalavina.web.id";
const languages = { en: SITE, id: `${SITE}/id` };

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE}/id`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
