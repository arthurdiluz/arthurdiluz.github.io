"use client";

import { services } from "@/lib/data";
import React from "react";
import { ServiceItem } from "./service-item";

export const TechnicalSkills = React.memo(
  (): React.JSX.Element => (
    <section className="service">
      <h3 className="h3 service-title">{"Technical Skills"}</h3>
      <ul className="service-list">
        {services.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </ul>
    </section>
  )
);

TechnicalSkills.displayName = "TechnicalSkills";
