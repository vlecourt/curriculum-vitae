import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/secret/",
    },
    sitemap: "https://curriculum-vitae-production-9f0a.up.railway.app/sitemap.xml",
  };
}
