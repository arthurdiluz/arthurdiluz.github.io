import {
  companyInfo,
  personalInfo,
  professionalInfo,
  projects,
  socialLinks,
} from "./content-data";
import type { SEOData } from "./types";

export const seoData: SEOData = {
  name: personalInfo.name,
  jobTitle: professionalInfo.jobTitle,
  email: personalInfo.email,
  phone: personalInfo.phone,
  birthDate: personalInfo.birthdayISO,
  location: personalInfo.location,
  siteUrl: "https://arthurdiluz.github.io",
  profileImage: personalInfo.avatarPath,
  fullProfileImageUrl: `https://arthurdiluz.github.io${personalInfo.avatarPath}`,
  logoUrl: "https://arthurdiluz.github.io/assets/images/iohub-logo.webp",
  company: companyInfo,
  skills: professionalInfo.skills,
  keywords: professionalInfo.keywords,
  socialLinks: socialLinks.map((link) => link.url),
  description: `Explore the professional portfolio of ${personalInfo.name}, a ${professionalInfo.jobTitle} and co-founder of ${companyInfo.name}. Specializing in AI, React, Next.js, Node.js, and full-stack development.`,
  shortDescription: `${professionalInfo.jobTitle} specializing in AI, React, Next.js, Node.js, and full-stack development.`,
  featuredProjects: projects.filter(
    (p) =>
      p.categories.includes("AI Features") || p.categories.includes("Web App")
  ),
  performance: {
    dnsPrefetch: "https://fonts.googleapis.com",
    preconnect: "https://fonts.gstatic.com",
    fontPreload: "/fonts/inter-var.woff2",
  },
};
