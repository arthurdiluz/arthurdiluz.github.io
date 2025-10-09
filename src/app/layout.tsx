import "../styles/main.css";
import "./globals.css";

import { generateStructuredData } from "@/lib/schemas/structured-data";
import { seoData } from "@/lib/seo-data";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import type { JSX, ReactNode } from "react";
import type { Thing, WithContext } from "schema-dts";

export async function generateMetadata(): Promise<Metadata> {
  const { performance } = seoData;
  const preloadHints: string[] = [];

  if (performance.fontPreload) {
    preloadHints.push(
      `<${performance.fontPreload}>; rel=preload; as=font; type=font/woff2; crossorigin`
    );
  }

  preloadHints.push(
    ...performance.resourceHints.preload.map(
      (asset) => `<${asset}>; rel=preload; as=image`
    )
  );

  const prefetchHints = performance.resourceHints.prefetch.map(
    (asset) => `<${asset}>; rel=prefetch; as=image`
  );

  const other: Record<string, string> = {};

  if (performance.dnsPrefetch) {
    other["dns-prefetch"] = performance.dnsPrefetch;
  }

  if (performance.preconnect) {
    other.preconnect = performance.preconnect;
  }

  if (preloadHints.length > 0) {
    other.preload = preloadHints.join(", ");
  }

  if (prefetchHints.length > 0) {
    other.prefetch = prefetchHints.join(", ");
  }

  return {
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
    other: Object.keys(other).length > 0 ? other : undefined,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  const schemas: WithContext<Thing>[] = generateStructuredData();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased bg-smoky-black text-white-2 font-poppins">
        {children}
      </body>
    </html>
  );
}
