import { education, experience } from "@/lib/content-data";
import type { JSX } from "react";
import { TimelineSection } from "./timeline-section";

const RESUME_SECTIONS = Object.freeze({
  experience: {
    type: "experience" as const,
    title: "Experience",
    entries: experience,
  },
  education: {
    type: "education" as const,
    title: "Education",
    entries: education,
  },
} as const);

type ResumeSectionConfig =
  (typeof RESUME_SECTIONS)[keyof typeof RESUME_SECTIONS];

export function ResumeSection(): JSX.Element {
  return (
    <>
      <h2 className="h2 article-title">Resume</h2>
      {Object.values(RESUME_SECTIONS).map((section: ResumeSectionConfig) => (
        <TimelineSection
          key={section.type}
          type={section.type}
          title={section.title}
          entries={section.entries}
        />
      ))}
    </>
  );
}
