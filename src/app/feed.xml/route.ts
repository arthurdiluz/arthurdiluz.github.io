import {
  education,
  experience,
  personalInfo,
  projects,
} from "@/lib/content-data";
import { seoData } from "@/lib/seo-data";
import type { ProjectItem } from "@/lib/types";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import RSS from "rss";

export const dynamic = "force-static";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

// RSS Feed enhancement functions
function getProjectPublicationDate(project: ProjectItem, index: number): Date {
  // Create meaningful staggered dates based on project importance
  // More important projects (AI Features, Web Apps) get more recent dates
  const baseDate = new Date("2024-01-01"); // Portfolio baseline

  // AI Features and Web Apps get priority (more recent dates)
  const isPriority =
    project.categories.includes("AI Features") ||
    project.categories.includes("Web App");

  const daysOffset = isPriority ? index * 20 : index * 30; // Priority projects closer together
  return new Date(baseDate.getTime() + daysOffset * 24 * 60 * 60 * 1000);
}

function getExperiencePublicationDate(index: number): Date {
  // Experience entries get dates from 6 months ago, staggered
  const baseDate = new Date();
  baseDate.setMonth(baseDate.getMonth() - 6); // 6 months ago

  const daysOffset = index * 45; // 45 days between experience items
  return new Date(baseDate.getTime() + daysOffset * 24 * 60 * 60 * 1000);
}

function getEducationPublicationDate(index: number): Date {
  // Education entries from 1 year ago
  const baseDate = new Date();
  baseDate.setFullYear(baseDate.getFullYear() - 1); // 1 year ago

  const daysOffset = index * 60; // 60 days between education items
  return new Date(baseDate.getTime() + daysOffset * 24 * 60 * 60 * 1000);
}

function getEnhancedCategories(project: ProjectItem): string[] {
  // Create meaningful categories for RSS readers
  const categories: string[] = [];

  // Add primary category based on project type
  if (project.categories.includes("AI Features")) {
    categories.push("Artificial Intelligence");
  }
  if (project.categories.includes("Web App")) {
    categories.push("Web Development");
  }
  if (project.categories.includes("Mobile App")) {
    categories.push("Mobile Development");
  }
  if (project.categories.includes("API")) {
    categories.push("Backend Development");
  }

  // Add technology categories
  categories.push("Software Development");

  // Add original categories (first 2 to avoid spam)
  categories.push(...project.categories.slice(0, 2));

  return [...new Set(categories)]; // Remove duplicates
}

function sanitizeHTML(html: string): string {
  return purify.sanitize(html, {
    ALLOWED_TAGS: ["p", "br", "strong", "em", "u", "i", "ul", "ol", "li"],
    ALLOWED_ATTR: [],
  });
}

function validateFeedItem(item: {
  title?: string;
  description?: string;
  text?: string;
}): { title: string; description: string } {
  const title = (item.title?.trim() ?? "") || "Untitled";
  const description =
    (item.description?.trim() ?? "") ||
    (item.text?.substring(0, 300).trim() ?? "") ||
    "No description available";

  return {
    title: sanitizeHTML(title),
    description: sanitizeHTML(description),
  };
}

export async function GET(): Promise<Response> {
  const feed = new RSS({
    title: `${seoData.name} Portfolio`,
    description: seoData.description,
    feed_url: `${seoData.siteUrl}/feed.xml`,
    site_url: seoData.siteUrl,
    image_url: seoData.fullProfileImageUrl,
    managingEditor: `${personalInfo.email} (${personalInfo.name})`,
    webMaster: `${personalInfo.email} (${personalInfo.name})`,
    copyright: `${new Date().getFullYear()} ${personalInfo.name}`,
    language: "en",
    categories: seoData.keywords,
    pubDate: new Date().toUTCString(),
    ttl: 1440, //? 24 hours
  });

  const featuredProjects = projects
    .filter(
      (project) =>
        project.categories.includes("AI Features") ||
        project.categories.includes("Web App")
    )
    .slice(0, 5); //? Limit to top 5 projects

  featuredProjects.forEach((project, index) => {
    const validated = validateFeedItem({
      title: `Project: ${project.title}`,
      description:
        project.description ||
        `${project.title} - ${project.categories.join(", ")}`,
    });

    const publicationDate = getProjectPublicationDate(project, index);
    const enhancedCategories = getEnhancedCategories(project);

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#portfolio`,
      guid: `project-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
      categories: enhancedCategories,
      date: publicationDate,
      author: `${personalInfo.email} (${personalInfo.name})`,
      custom_elements: [
        {
          "content:encoded": sanitizeHTML(
            project.description ||
              `<p>${project.title} - ${project.categories.join(", ")}</p>`
          ),
        },
        {
          "dc:creator": personalInfo.name,
        },
      ],
    });
  });

  experience.slice(0, 3).forEach((exp, index) => {
    const guid = `experience-${index}`;
    const validated = validateFeedItem({
      title: exp.title,
      description: exp.text.substring(0, 300) + "...",
    });

    const publicationDate = getExperiencePublicationDate(index);

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Professional Experience", "Career", "Software Development"],
      date: publicationDate,
      author: `${personalInfo.email} (${personalInfo.name})`,
      custom_elements: [
        {
          "content:encoded": sanitizeHTML(
            exp.text.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")
          ),
        },
        {
          "dc:creator": personalInfo.name,
        },
      ],
    });
  });

  education.slice(0, 2).forEach((edu, index) => {
    const guid = `education-${index}`;
    const validated = validateFeedItem({
      title: edu.title,
      description: edu.text,
    });

    const publicationDate = getEducationPublicationDate(index);

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Education", "Academic", "Computer Science"],
      date: publicationDate,
      author: `${personalInfo.email} (${personalInfo.name})`,
      custom_elements: [
        { "content:encoded": sanitizeHTML(`<p>${edu.text}</p>`) },
        {
          "dc:creator": personalInfo.name,
        },
      ],
    });
  });

  const xml = feed.xml({ indent: true });

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600", //? Cache for 1 hour
    },
  });
}
