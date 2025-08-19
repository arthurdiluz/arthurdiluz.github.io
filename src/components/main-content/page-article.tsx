"use client";

import type { PageArticleProps } from "@/lib/types";
import React from "react";

const CSS_CLASSES = Object.freeze({
  active: " active",
} as const);

export const PageArticle = React.memo<PageArticleProps>(
  ({ pageKey, isActive, children }: PageArticleProps): React.JSX.Element => (
    <article
      className={`${pageKey}${isActive ? CSS_CLASSES.active : ""}`}
      data-page={pageKey}
    >
      {children}
    </article>
  )
);

PageArticle.displayName = "PageArticle";
