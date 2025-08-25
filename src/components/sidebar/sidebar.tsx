"use client";

import { personalInfo } from "@/lib/content-data";
import type { SidebarProps } from "@/lib/types";
import React from "react";
import { AvatarBox } from "./avatar-box";
import { ContactsList } from "./contacts-list";
import { ShowContactsButton } from "./show-contacts-button";
import { SocialList } from "./social-list";
import { UserNameDisplay } from "./user-name-display";

export const Sidebar = ({
  isOpen,
  onToggle,
}: SidebarProps): React.JSX.Element => (
  <aside className={`sidebar${isOpen ? " active" : ""}`} data-sidebar>
    <div className="sidebar-info">
      <AvatarBox
        src={personalInfo.avatarPath}
        alt={personalInfo.name}
        size={80}
      />
      <UserNameDisplay name={personalInfo.name} />
      <ShowContactsButton _isOpen={isOpen} onClick={onToggle} />
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ContactsList />
      <div className="separator" />
      <SocialList />
    </div>
  </aside>
);
