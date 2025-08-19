"use client";

import type { ReactNode } from "react";
import React from "react";

interface Props {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export const ContactItem = ({
  icon,
  title,
  children,
}: Props): React.JSX.Element => (
  <li className="contact-item">
    <div className="icon-box">{icon}</div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  </li>
);
