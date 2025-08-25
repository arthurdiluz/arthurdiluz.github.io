"use client";

import { personalInfo } from "@/lib/content-data";
import { Calendar, Envelope, MapPin, Phone } from "@phosphor-icons/react";
import React from "react";
import { ContactItem } from "./contact-item";

export const ContactsList = (): React.JSX.Element => (
  <ul className="contacts-list">
    <ContactItem icon={<Envelope size={20} weight="fill" />} title="Email">
      <a
        href={`mailto:${personalInfo.email}`}
        className="contact-link"
        title={personalInfo.email}
      >
        {personalInfo.email}
      </a>
    </ContactItem>
    <ContactItem icon={<Phone size={20} weight="fill" />} title="Phone">
      <a href={`tel:${personalInfo.phone}`} className="contact-link">
        {personalInfo.phone}
      </a>
    </ContactItem>
    <ContactItem icon={<Calendar size={20} weight="fill" />} title="Birthday">
      <time dateTime={personalInfo.birthdayISO}>{personalInfo.birthday}</time>
    </ContactItem>
    <ContactItem icon={<MapPin size={20} weight="fill" />} title="Location">
      <address>{personalInfo.location}</address>
    </ContactItem>
  </ul>
);
