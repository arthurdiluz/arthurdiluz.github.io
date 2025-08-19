"use client";

import { socialLinks } from "@/lib/data";
import type { SocialLink } from "@/lib/types";
import React from "react";
import { SocialItem } from "./social-item";

export const SocialList = (): React.JSX.Element => (
  <ul className="social-list">
    {socialLinks.map((social: SocialLink) => (
      <SocialItem key={social.name} social={social} />
    ))}
  </ul>
);
