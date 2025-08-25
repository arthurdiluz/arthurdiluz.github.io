import "../styles/main.css";
import "./globals.css";

import { metadata } from "@/lib";
import { generateStructuredData } from "@/lib/schemas/structured-data";
import { Inter } from "next/font/google";
import type { JSX, ReactNode } from "react";
import type { Thing, WithContext } from "schema-dts";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  const schemas: WithContext<Thing>[] = generateStructuredData();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
