import {
  education,
  experience,
  personalInfo,
  projects,
} from "@/lib/content-data";
import { seoData } from "@/lib/seo-data";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import RSS from "rss";

export const dynamic = "force-static";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

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

  featuredProjects.forEach((project) => {
    const validated = validateFeedItem({
      title: `Project: ${project.title}`,
      description:
        project.description ||
        `${project.title} - ${project.categories.join(", ")}`,
    });

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#portfolio`,
      guid: `project-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
      categories: project.categories,
      date: new Date(),
      custom_elements: [
        {
          "content:encoded": sanitizeHTML(
            project.description ||
              `<p>${project.title} - ${project.categories.join(", ")}</p>`
          ),
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

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Professional Experience"],
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000), //? Stagger dates
      custom_elements: [
        {
          "content:encoded": sanitizeHTML(
            exp.text.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>")
          ),
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

    feed.item({
      title: validated.title,
      description: validated.description,
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Education"],
      date: new Date(Date.now() - (index + 10) * 24 * 60 * 60 * 1000), //? Stagger dates
      custom_elements: [
        { "content:encoded": sanitizeHTML(`<p>${edu.text}</p>`) },
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
