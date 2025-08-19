"use client";

import type { MainContentProps, PageKey } from "@/lib/types";
import React from "react";
import { NavbarItem } from "./navbar-item";

const NAVIGATION_PAGES: PageKey[] = ["about", "resume", "portfolio"];

export const Navbar = React.memo<MainContentProps>(
  ({ activePage, onPageChange }: MainContentProps): React.JSX.Element => (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAVIGATION_PAGES.map((page) => (
          <NavbarItem
            key={page}
            page={page}
            isActive={activePage === page}
            onClick={onPageChange}
          />
        ))}
      </ul>
    </nav>
  )
);

Navbar.displayName = "Navbar";
