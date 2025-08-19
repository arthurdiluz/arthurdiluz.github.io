"use client";

import { Briefcase, GraduationCap } from "@phosphor-icons/react";
import React from "react";

type TimelineEntryType = "experience" | "education";
type IconWeight = "fill" | "regular" | "bold";

interface TimelineIconProps {
  type: TimelineEntryType;
  size?: number;
  weight?: IconWeight;
}

const ICON_MAP = new Map<
  TimelineEntryType,
  React.ComponentType<{
    size: number;
    weight: IconWeight;
  }>
>([
  ["experience", Briefcase],
  ["education", GraduationCap],
]);

const DEFAULT_PROPS = Object.freeze({
  size: 20,
  weight: "fill" as const,
});

const getIconComponent = (
  type: TimelineEntryType
): React.ComponentType<{
  size: number;
  weight: IconWeight;
}> => {
  return ICON_MAP.get(type) ?? Briefcase;
};

export const TimelineIcon = React.memo<TimelineIconProps>(
  ({
    type,
    size = DEFAULT_PROPS.size,
    weight = DEFAULT_PROPS.weight,
  }: TimelineIconProps): React.JSX.Element => {
    const IconComponent = getIconComponent(type);

    return <IconComponent size={size} weight={weight} />;
  }
);

TimelineIcon.displayName = "TimelineIcon";
