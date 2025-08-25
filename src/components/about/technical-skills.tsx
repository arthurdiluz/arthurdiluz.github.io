import { services } from "@/lib/content-data";
import type { JSX } from "react";
import { ServiceItem } from "./service-item";

export function TechnicalSkills(): JSX.Element {
  return (
    <section className="service">
      <h3 className="h3 service-title">{"Technical Skills"}</h3>
      <ul className="service-list">
        {services.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </ul>
    </section>
  );
}
