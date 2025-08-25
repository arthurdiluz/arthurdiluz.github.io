import type { Metadata } from "next";
import { seoData } from "./seo-data";

export const metadata: Metadata = {
  title: `${seoData.name} - ${seoData.jobTitle}`,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: seoData.name, url: seoData.siteUrl }],
  creator: seoData.name,
  publisher: seoData.name,
  metadataBase: new URL(seoData.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${seoData.name} - ${seoData.jobTitle}`,
    description: seoData.description,
    url: seoData.siteUrl,
    siteName: `${seoData.name} Portfolio`,
    images: [
      {
        url: seoData.profileImage,
        width: 1200,
        height: 630,
        alt: `${seoData.name} - Software Engineer and Co-founder of iOHub Digital`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${seoData.name} - ${seoData.jobTitle}`,
    description: seoData.description,
    images: [seoData.profileImage],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  other: {
    "dns-prefetch": seoData.performance.dnsPrefetch,
    preconnect: seoData.performance.preconnect,
    preload: seoData.performance.fontPreload,
  },
};
