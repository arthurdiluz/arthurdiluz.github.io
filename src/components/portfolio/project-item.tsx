"use client";

import type { ProjectItem as ProjectItemType } from "@/lib/types";
import React from "react";
import { ProjectWithMultipleLinks } from "./project-with-multiple-links";
import { ProjectWithSingleLink } from "./project-with-single-link";

const hasMultipleUrls = (
  project: ProjectItemType
): project is ProjectItemType & { urls: { label: string; url: string }[] } => {
  return (
    "urls" in project && Array.isArray(project.urls) && project.urls.length > 0
  );
};

interface ProjectItemProps {
  project: ProjectItemType;
}

export const ProjectItem = React.memo<ProjectItemProps>(
  ({ project }: ProjectItemProps): React.JSX.Element => (
    <li className="project-item active">
      {hasMultipleUrls(project) ? (
        <ProjectWithMultipleLinks project={project} />
      ) : (
        <ProjectWithSingleLink project={project} />
      )}
    </li>
  )
);

ProjectItem.displayName = "ProjectItem";
