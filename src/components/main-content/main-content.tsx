"use client";

import type { MainContentProps } from "@/lib/types";
import React from "react";
import { AboutSection } from "../about/about-section";
import { PortfolioSection } from "../portfolio/portfolio-section";
import { ResumeSection } from "../resume/resume-section";
import { Navbar } from "./navbar";
import { PageArticle } from "./page-article";

export const MainContent = React.memo<MainContentProps>(
  ({ activePage, onPageChange }: MainContentProps): React.JSX.Element => (
    <div className="main-content">
      <Navbar activePage={activePage} onPageChange={onPageChange} />

      <PageArticle pageKey="about" isActive={activePage === "about"}>
        <AboutSection />
      </PageArticle>

      <PageArticle pageKey="resume" isActive={activePage === "resume"}>
        <ResumeSection />
      </PageArticle>

      <PageArticle pageKey="portfolio" isActive={activePage === "portfolio"}>
        <PortfolioSection />
      </PageArticle>
    </div>
  )
);

MainContent.displayName = "MainContent";
