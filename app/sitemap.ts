import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://resepta.botfusions.com/",
      lastModified: "2026-08-07",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://resepta.botfusions.com/gizlilik-politikasi",
      lastModified: "2026-08-08",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://resepta.botfusions.com/veri-silme-talebi",
      lastModified: "2026-08-08",
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
