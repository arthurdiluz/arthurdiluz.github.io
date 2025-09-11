import {
  education,
  experience,
  personalInfo,
  projects,
} from "@/lib/content-data";
import { seoData } from "@/lib/seo-data";
import RSS from "rss";

export const dynamic = "force-static";

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
    feed.item({
      title: `Project: ${project.title}`,
      description:
        project.description ||
        `${project.title} - ${project.categories.join(", ")}`,
      url: `${seoData.siteUrl}/#portfolio`,
      guid: `project-${project.title.toLowerCase().replace(/\s+/g, "-")}`,
      categories: project.categories,
      date: new Date(),
      custom_elements: [
        {
          "content:encoded":
            project.description ||
            `<p>${project.title} - ${project.categories.join(", ")}</p>`,
        },
      ],
    });
  });

  experience.slice(0, 3).forEach((exp, index) => {
    const guid = `experience-${index}`;

    feed.item({
      title: exp.title,
      description: exp.text.substring(0, 300) + "...", //? Truncate for description
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Professional Experience"],
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000), //? Stagger dates
      custom_elements: [
        {
          "content:encoded": exp.text
            .replace(/\n\n/g, "</p><p>")
            .replace(/\n/g, "<br>"),
        },
      ],
    });
  });

  education.slice(0, 2).forEach((edu, index) => {
    const guid = `education-${index}`;

    feed.item({
      title: edu.title,
      description: edu.text,
      url: `${seoData.siteUrl}/#resume`,
      guid,
      categories: ["Education"],
      date: new Date(Date.now() - (index + 10) * 24 * 60 * 60 * 1000), //? Stagger dates
      custom_elements: [{ "content:encoded": `<p>${edu.text}</p>` }],
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
