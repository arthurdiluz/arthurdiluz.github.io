"use client";

import type { TimelineEntry } from "@/lib/types";
import React from "react";

interface Props {
  entry: TimelineEntry;
}

export const TimelineItem = ({ entry }: Props): React.JSX.Element => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{entry.title}</h4>
    <span>{entry.span}</span>
    <div
      className="timeline-text"
      dangerouslySetInnerHTML={{
        __html: entry.text
          .replace(/\n/g, "<br />")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      }}
    />
  </li>
);
