import type { JSX } from "react";
import { FAQSection } from "../faq-section";
import { TechnicalSkills } from "./technical-skills";

export function AboutSection(): JSX.Element {
  return (
    <>
      <h2 className="h2 article-title">{"About me"}</h2>

      <section className="about-text">
        <p>
          I&apos;m a Full-Stack Software Developer with a Bachelor&apos;s degree
          in Computer Science and over 4 years of experience transforming
          business challenges into effective technical solutions. My
          professional journey evolved from corporate projects to
          entrepreneurship, culminating in my co-founding of iOHub Digital.
        </p>
        <p>
          Today, I lead the development of a SaaS product for the national
          market and am seeking a new role as a Software Developer. My goal is
          to continue going beyond the code, using technologies like Node.js,
          React, and TypeScript to build tools that drive businesses forward and
          solve real-world problems.
        </p>
      </section>

      <TechnicalSkills />
      <FAQSection />
    </>
  );
}
