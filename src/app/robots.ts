import { seoData } from "@/lib/seo-data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = seoData.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
