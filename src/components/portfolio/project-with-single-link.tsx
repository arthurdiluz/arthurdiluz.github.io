"use client";

import type { ProjectItem } from "@/lib/types";
import { Eye } from "@phosphor-icons/react";
import React from "react";
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

export const ProjectWithSingleLink = React.memo<ProjectWithSingleLinkProps>(
  ({ project }: ProjectWithSingleLinkProps): React.JSX.Element | null => {
    if (!isSingleUrlProject(project)) return null;

    return (
      <>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <figure className="project-img">
            <div className="project-item-icon-box">
              <Eye size={ICON_CONFIG.size} weight={ICON_CONFIG.weight} />
            </div>
            <img src={project.imagePath} alt={project.title} loading="lazy" />
          </figure>
          <ProjectTitle title={project.title} />
        </a>
        <ProjectCategories categories={project.categories} />
      </>
    );
  }
);

ProjectWithSingleLink.displayName = "ProjectWithSingleLink";
