import "./globals.css";
import "../styles/main.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Arthur Diniz",
  description: "Arthur Diniz's personal website and portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
