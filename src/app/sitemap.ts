import { education, experience, projects } from "@/lib/content-data";
import { seoData } from "@/lib/seo-data";
import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";

export const dynamic = "force-static";

// Content metrics interface for priority calculation
interface ContentMetrics {
  projectCount: number;
  aiProjectCount: number;
  experienceCount: number;
  educationCount: number;
  totalContentItems: number;
}

function calculateContentMetrics(): ContentMetrics {
  const aiProjectCount = projects.filter((p) =>
    p.categories.includes("AI Features")
  ).length;

  return {
    projectCount: projects.length,
    aiProjectCount,
    experienceCount: experience.length,
    educationCount: education.length,
    totalContentItems: projects.length + experience.length + education.length,
  };
}

function calculateDynamicPriority(
  section: "home" | "portfolio" | "about" | "resume",
  contentMetrics: ContentMetrics
): number {
  // Base priorities reflecting typical developer portfolio hierarchy
  const basePriorities = {
    home: 1.0, // Always highest - main entry point
    portfolio: 0.85, // Core showcase content
    about: 0.75, // Professional profile
    resume: 0.65, // Professional history
  };

  let priority = basePriorities[section];

  // Portfolio gets boost based on content richness and AI features
  if (section === "portfolio") {
    // Boost for having substantial project portfolio (3+ projects)
    const projectBoost = contentMetrics.projectCount >= 3 ? 0.05 : 0;

    // Additional boost for AI projects (trending/valuable content)
    const aiBoost = contentMetrics.aiProjectCount > 0 ? 0.03 : 0;

    // Boost for having diverse project categories
    const diversityBoost = contentMetrics.projectCount >= 5 ? 0.02 : 0;

    priority = Math.min(
      0.95,
      priority + projectBoost + aiBoost + diversityBoost
    );
  }

  // About page gets slight boost if portfolio is substantial (cross-traffic potential)
  if (section === "about" && contentMetrics.projectCount >= 3) {
    priority = Math.min(0.8, priority + 0.03);
  }

  // Resume gets boost for extensive experience
  if (section === "resume") {
    const experienceBoost = contentMetrics.experienceCount >= 3 ? 0.05 : 0;
    const educationBoost = contentMetrics.educationCount >= 2 ? 0.02 : 0;

    priority = Math.min(0.75, priority + experienceBoost + educationBoost);
  }

  // Ensure priority stays within SEO-safe bounds
  return Math.max(0.1, Math.min(1.0, priority));
}

async function getContentLastModified(): Promise<Date> {
  try {
    // Check content-data.ts modification time as proxy for content updates
    const contentStats = await stat("src/lib/content-data.ts");
    return contentStats.mtime;
  } catch {
    // Fallback to current date if file stats unavailable
    return new Date();
  }
}

function getProjectsLastModified(): Date {
  // Use the most recent date from projects or a reasonable fallback
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
  return projects.length > 0 ? twoWeeksAgo : now;
}

function getResumeLastModified(): Date {
  // Resume sections typically update less frequently
  const now = new Date();
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return experience.length > 0 || education.length > 0 ? oneMonthAgo : now;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = seoData.siteUrl;
  const contentLastModified = await getContentLastModified();
  const projectsLastModified = getProjectsLastModified();
  const resumeLastModified = getResumeLastModified();

  // Calculate dynamic priorities based on content metrics
  const contentMetrics = calculateContentMetrics();

  return [
    {
      url: baseUrl,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: calculateDynamicPriority("home", contentMetrics),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: calculateDynamicPriority("about", contentMetrics),
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: projectsLastModified,
      changeFrequency: "weekly",
      priority: calculateDynamicPriority("portfolio", contentMetrics),
    },
    {
      url: `${baseUrl}/#resume`,
      lastModified: resumeLastModified,
      changeFrequency: "monthly",
      priority: calculateDynamicPriority("resume", contentMetrics),
    },
  ];
}
