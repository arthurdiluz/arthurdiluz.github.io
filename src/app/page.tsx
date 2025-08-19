"use client";

import { IconProvider, MainContent, PageWrapper, Sidebar } from "@/components";
import type { PageKey } from "@/lib/types";
import type { JSX } from "react";
import { useCallback, useState } from "react";

const DEFAULT_ACTIVE_PAGE: PageKey = "about";

export default function Home(): JSX.Element {
  const [activePage, setActivePage] = useState<PageKey>(DEFAULT_ACTIVE_PAGE);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarToggle = useCallback((): void => {
    setSidebarOpen((prev) => !prev);
  }, []);

  return (
    <IconProvider>
      <PageWrapper>
        <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />

        <MainContent activePage={activePage} onPageChange={setActivePage} />
      </PageWrapper>
    </IconProvider>
  );
}
