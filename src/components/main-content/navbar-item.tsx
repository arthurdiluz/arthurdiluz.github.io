"use client";

import type { NavbarItemProps } from "@/lib/types";
import React from "react";

const CSS_CLASSES = Object.freeze({
  navbarItem: "navbar-item",
  navbarLink: "navbar-link",
  active: " active",
} as const);

export const NavbarItem = React.memo<NavbarItemProps>(
  ({ page, isActive, onClick }: NavbarItemProps): React.JSX.Element => (
    <li className={CSS_CLASSES.navbarItem}>
      <button
        className={`${CSS_CLASSES.navbarLink}${
          isActive ? CSS_CLASSES.active : ""
        }`}
        data-nav-link
        onClick={() => onClick(page)}
      >
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </button>
    </li>
  )
);

NavbarItem.displayName = "NavbarItem";
