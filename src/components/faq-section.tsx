"use client";

import { faqs } from "@/lib/content-data";
import type { JSX } from "react";
import React, { useState } from "react";

export function FAQSection(): JSX.Element {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const handleClick = (
    index: number,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    event.preventDefault();
    event.stopPropagation();
    toggleItem(index);
  };

  const handleTouchStart = (index: number, event: React.TouchEvent) => {
    event.preventDefault();
    toggleItem(index);
  };

  return (
    <section className="faq">
      <h2 className="h2 article-title">{"Frequently Asked Questions"}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(index);
          return (
            <div key={index} className="faq-item">
              <button
                className="faq-question-button"
                onClick={(event) => handleClick(index, event)}
                onTouchStart={(event) => handleTouchStart(index, event)}
                onTouchEnd={(event) => handleClick(index, event)}
                data-index={index}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                type="button"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="faq-question">{faq.question}</span>
                <span
                  className={`faq-chevron ${isOpen ? "rotated" : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              <div
                className={`faq-answer-container ${isOpen ? "open" : ""}`}
                id={`faq-answer-${index}`}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
