"use client";

import type { ProjectItem } from "@/lib/types";
import { GithubLogo } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ProjectCategories } from "./project-categories";
import { ProjectTitle } from "./project-title";

interface Props {
  project: ProjectItem;
}

const MOBILE_BREAKPOINT_PX: number = 768;

const ICON_CONFIG = Object.freeze({
  size: 20,
  weight: "fill" as const,
} as const);

const CSS_CLASSES = Object.freeze({
  projectMultipleLinks: "project-multiple-links",
  projectImg: "project-img",
  projectMultipleButtons: "project-multiple-buttons",
  mobileVisible: "mobile-visible",
  projectRepoButton: "project-repo-button",
} as const);

const isMultipleUrlsProject = (
  project: ProjectItem
): project is ProjectItem & { urls: { label: string; url: string }[] } => {
  return "urls" in project && !("url" in project);
};

export const ProjectWithMultipleLinks = React.memo<Props>(
  ({ project }: Props): React.JSX.Element | null => {
    const [showButtons, setShowButtons] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const checkMobile = useCallback(
      (): void => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT_PX),
      []
    );

    const handleClickOutside = useCallback((event: MouseEvent): void => {
      if (!(event.target as Element).closest(`.${CSS_CLASSES.projectImg}`)) {
        setShowButtons(false);
      }
    }, []);

    const handleImageClick = useCallback((): void => {
      if (isMobile) setShowButtons((prev) => !prev);
    }, [isMobile]);

    const handleMouseEnter = useCallback((): void => {
      if (!isMobile) setShowButtons(true);
    }, [isMobile]);

    const handleMouseLeave = useCallback((): void => {
      if (!isMobile) setShowButtons(false);
    }, [isMobile]);

    const buttonVisibilityClass = useMemo(
      (): string => (showButtons ? CSS_CLASSES.mobileVisible : ""),
      [showButtons]
    );

    const pointerEventsStyle = useMemo(
      (): React.CSSProperties => ({
        pointerEvents: showButtons ? "auto" : "none",
      }),
      [showButtons]
    );

    useEffect(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [checkMobile]);

    useEffect(() => {
      if (!isMobile || !showButtons) return;
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobile, showButtons, handleClickOutside]);

    if (!isMultipleUrlsProject(project)) return null;

    return (
      <div className={CSS_CLASSES.projectMultipleLinks}>
        <figure
          className={CSS_CLASSES.projectImg}
          onClick={handleImageClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={project.imagePath}
            alt={`Screenshot of ${project.title} project`}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className={`${CSS_CLASSES.projectMultipleButtons} ${buttonVisibilityClass}`}
            style={pointerEventsStyle}
          >
            {project.urls.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={CSS_CLASSES.projectRepoButton}
              >
                <GithubLogo
                  size={ICON_CONFIG.size}
                  weight={ICON_CONFIG.weight}
                />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </figure>
        <ProjectTitle title={project.title} />
        <ProjectCategories categories={project.categories} />
      </div>
    );
  }
);

ProjectWithMultipleLinks.displayName = "ProjectWithMultipleLinks";
