import "./globals.css";

import { Inter } from "next/font/google";
import type { JSX, ReactNode } from "react";

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
      <head>
        <link rel="icon" href="/assets/images/logo.ico" sizes="any" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
