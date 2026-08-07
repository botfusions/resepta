import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://resepta.cenktokgoz.chatgpt.site/sitemap.xml",
  };
}
