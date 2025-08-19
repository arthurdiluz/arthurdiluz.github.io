"use client";

import { IconContext } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
}

const ICON_CONTEXT_VALUE = Object.freeze({
  color: "white",
  weight: "regular" as const,
  mirrored: false,
} as const);

export const IconProvider = React.memo<Props>(
  ({ children }: Props): React.JSX.Element => (
    <IconContext.Provider value={ICON_CONTEXT_VALUE}>
      {children}
    </IconContext.Provider>
  )
);

IconProvider.displayName = "IconProvider";
