"use client";

import type { AvatarBoxProps } from "@/lib/types";
import Image from "next/image";
import type { JSX } from "react";

export function AvatarBox({
  src,
  alt,
  size = 80,
}: AvatarBoxProps): JSX.Element {
  return (
    <figure className="avatar-box">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority
        sizes={`${size}px`}
        className="rounded-2xl"
      />
    </figure>
  );
}
