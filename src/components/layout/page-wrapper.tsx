"use client";

import type { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
}

export const PageWrapper = React.memo<Props>(
  ({ children }: Props): React.JSX.Element => <main>{children}</main>
);

PageWrapper.displayName = "PageWrapper";
