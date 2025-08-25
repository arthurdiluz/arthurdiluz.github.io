import { projects } from "@/lib/content-data";
import type { JSX } from "react";
import { ProjectItem } from "./project-item";

export function PortfolioSection(): JSX.Element {
  return (
    <>
      <h2 className="h2 article-title">{"Portfolio"}</h2>
      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </>
  );
}
