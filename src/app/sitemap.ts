import { education, experience, projects } from "@/lib/content-data";
import { seoData } from "@/lib/seo-data";
import type { MetadataRoute } from "next";
import { stat } from "node:fs/promises";

export const dynamic = "force-static";

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

  return [
    {
      url: baseUrl,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: projectsLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#resume`,
      lastModified: resumeLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
