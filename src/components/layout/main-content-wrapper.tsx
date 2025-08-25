"use client";

import type { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
}

export const MainContentWrapper = React.memo<Props>(
  ({ children }: Props): React.JSX.Element => <main>{children}</main>
);

MainContentWrapper.displayName = "MainContentWrapper";
