"use client";

import React from "react";

interface Props {
  src: string;
  alt: string;
  size?: number;
}

export const AvatarBox = ({
  src,
  alt,
  size = 80,
}: Props): React.JSX.Element => (
  <figure className="avatar-box">
    <img src={src} alt={alt} width={size} className="rounded-2xl" />
  </figure>
);
