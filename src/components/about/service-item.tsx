"use client";

import type { ServiceItem as ServiceItemType } from "@/lib/types";
import { IconContext } from "@phosphor-icons/react";
import type { JSX } from "react";
import { ServiceIcon } from "./service-icon";

interface ServiceItemProps {
  service: ServiceItemType;
}

const ICON_CONTEXT_VALUE = Object.freeze({
  color: "var(--highlight)",
  weight: "fill" as const,
  mirrored: false,
} as const);

export function ServiceItem({ service }: ServiceItemProps): JSX.Element {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <IconContext.Provider value={ICON_CONTEXT_VALUE}>
          <ServiceIcon title={service.title} />
        </IconContext.Provider>
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{service.title}</h4>
        <p className="service-item-text">{service.text}</p>
      </div>
    </li>
  );
}
