"use client";

import { projects } from "@/lib/data";
import React from "react";
import { ProjectItem } from "./project-item";

export const PortfolioSection = React.memo(
  (): React.JSX.Element => (
    <>
      <h2 className="h2 article-title">Portfolio</h2>
      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </>
  )
);

PortfolioSection.displayName = "PortfolioSection";
