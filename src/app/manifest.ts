import { seoData } from "@/lib/seo-data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${seoData.name} Portfolio`,
    short_name: seoData.name,
    description: seoData.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f23",
    theme_color: "#2ecc71",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/assets/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
