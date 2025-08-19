"use client";

import React from "react";

interface ProjectTitleProps {
  title: string;
}

export const ProjectTitle = React.memo<ProjectTitleProps>(
  ({ title }: ProjectTitleProps): React.JSX.Element => (
    <h3 className="project-title">{title}</h3>
  )
);

ProjectTitle.displayName = "ProjectTitle";
