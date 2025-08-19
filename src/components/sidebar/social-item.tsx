"use client";

import type { SocialLink } from "@/lib/types";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import React, { memo } from "react";

interface Props {
  social: SocialLink;
}

const SOCIAL_ICON_MAP = new Map([
  ["linkedin", LinkedinLogo],
  ["github", GithubLogo],
  ["instagram", InstagramLogo],
  ["whatsapp", WhatsappLogo],
  ["telegram", TelegramLogo],
]);

const ICON_PROPS = { size: 24, weight: "fill" } as const;

const getSocialIcon = (name: string): React.JSX.Element => {
  const IconComponent = SOCIAL_ICON_MAP.get(name.toLowerCase());

  return IconComponent ? (
    <IconComponent {...ICON_PROPS} />
  ) : (
    <span>{name.slice(0, 2).toUpperCase()}</span>
  );
};

export const SocialItem = memo(({ social }: Props): React.JSX.Element => {
  return (
    <li className="social-item">
      <a
        href={social.url}
        className="social-link"
        aria-label={social.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getSocialIcon(social.name)}
      </a>
    </li>
  );
});

SocialItem.displayName = "SocialItem";
