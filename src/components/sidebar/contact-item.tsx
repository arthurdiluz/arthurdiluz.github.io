"use client";

import type { ContactItemProps } from "@/lib/types";
import React from "react";

export const ContactItem = ({
  icon,
  title,
  children,
}: ContactItemProps): React.JSX.Element => (
  <li className="contact-item">
    <div className="icon-box">{icon}</div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  </li>
);
