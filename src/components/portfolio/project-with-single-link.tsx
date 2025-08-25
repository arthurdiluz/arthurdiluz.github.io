"use client";

import type { ProjectItem } from "@/lib/types";
import { Eye } from "@phosphor-icons/react";
import Image from "next/image";
import type { JSX } from "react";
import { ProjectCategories } from "./project-categories";
import { ProjectTitle } from "./project-title";

const ICON_CONFIG = Object.freeze({
  size: 24,
  weight: "fill" as const,
} as const);

const isSingleUrlProject = (
  project: ProjectItem
): project is ProjectItem & { url: string } => {
  return "url" in project && !("urls" in project);
};

interface ProjectWithSingleLinkProps {
  project: ProjectItem;
}

export function ProjectWithSingleLink({
  project,
}: ProjectWithSingleLinkProps): JSX.Element | null {
  if (!isSingleUrlProject(project)) return null;

  return (
    <>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <Eye size={ICON_CONFIG.size} weight={ICON_CONFIG.weight} />
          </div>
          <Image
            src={project.imagePath}
            alt={`Screenshot of ${project.title} project`}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <ProjectTitle title={project.title} />
      </a>
      <ProjectCategories categories={project.categories} />
    </>
  );
}
