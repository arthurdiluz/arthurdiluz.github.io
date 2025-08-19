"use client";

import React from "react";

interface ProjectCategoriesProps {
  categories: string[];
}

export const ProjectCategories = React.memo<ProjectCategoriesProps>(
  ({ categories }: ProjectCategoriesProps): React.JSX.Element => (
    <div className="project-categories">
      {categories.map((category) => (
        <span key={category} className="category-tag">
          {category}
        </span>
      ))}
    </div>
  )
);

ProjectCategories.displayName = "ProjectCategories";
