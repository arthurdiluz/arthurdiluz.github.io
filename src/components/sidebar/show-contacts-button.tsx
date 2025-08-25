"use client";

import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import type { ShowContactsButtonProps } from "@/lib/types";

export const ShowContactsButton = ({
  _isOpen,
  onClick,
}: ShowContactsButtonProps): React.JSX.Element => (
  <button className="info_more-btn" data-sidebar-btn onClick={onClick}>
    <div className="flex items-center space-x-2">
      <CaretDown size={20} weight="bold" />
      <span className="text-xs font-bold">{"Show Contacts"}</span>
    </div>
  </button>
);
