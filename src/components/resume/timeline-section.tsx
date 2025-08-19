"use client";

import type { TimelineEntry } from "@/lib/types";
import { IconContext } from "@phosphor-icons/react";
import React from "react";
import { TimelineIcon } from "./timeline-icon";
import { TimelineItem } from "./timeline-item";

interface Props {
  type: "experience" | "education";
  title: string;
  entries: TimelineEntry[];
}

export const TimelineSection = ({
  type,
  title,
  entries,
}: Props): React.JSX.Element => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <IconContext.Provider
          value={{
            color: "var(--highlight)",
            weight: "fill",
            mirrored: false,
          }}
        >
          <TimelineIcon type={type} />
        </IconContext.Provider>
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      {entries.map((entry) => (
        <TimelineItem key={entry.title} entry={entry} />
      ))}
    </ol>
  </section>
);
