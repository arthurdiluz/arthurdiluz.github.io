"use client";

import {
  Brain,
  Cloud,
  Code,
  Database,
  DeviceMobile,
  HardDrives,
} from "@phosphor-icons/react";
import React from "react";

type IconWeight = "fill" | "regular" | "bold";

type IconComponent = React.ComponentType<{
  size: number;
  weight: IconWeight;
}>;

interface Props {
  title: string;
  size?: number;
  weight?: IconWeight;
}

const ICON_MAP = new Map<string, IconComponent>([
  ["Programming Languages", Code],
  ["Backend Development", Database],
  ["Frontend & Mobile", DeviceMobile],
  ["AI, Data & Vectors", Brain],
  ["Database & Cache", HardDrives],
  ["Cloud & DevOps", Cloud],
]);

const DEFAULT_PROPS = Object.freeze({
  size: 40,
  weight: "fill" as const,
});

const getServiceIcon = (title: string): IconComponent => {
  return ICON_MAP.get(title) ?? Code;
};

export const ServiceIcon = React.memo<Props>(
  ({
    title,
    size = DEFAULT_PROPS.size,
    weight = DEFAULT_PROPS.weight,
  }: Props): React.JSX.Element => {
    const IconComponent: IconComponent = getServiceIcon(title);
    return <IconComponent size={size} weight={weight} />;
  }
);

ServiceIcon.displayName = "ServiceIcon";
