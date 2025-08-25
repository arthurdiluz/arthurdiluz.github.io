import { faqs } from "@/lib/content-data";
import type { JSX } from "react";

export function FAQSection(): JSX.Element {
  return (
    <section className="faq">
      <h2 className="h2 article-title">{"Frequently Asked Questions"}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
