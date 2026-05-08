import type { MetadataRoute } from "next";

const BASE_URL = "https://ngiudidev.com";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/skills", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    // Spanish — default locale, no prefix
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          es: `${BASE_URL}${page.path}`,
          pt: `${BASE_URL}/pt${page.path}`,
        },
      },
    });

    // Portuguese — /pt prefix
    entries.push({
      url: `${BASE_URL}/pt${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          es: `${BASE_URL}${page.path}`,
          pt: `${BASE_URL}/pt${page.path}`,
        },
      },
    });
  }

  return entries;
}
