"use client";

import React from "react";

interface Props {
  name: string;
  title: string;
}

export const InfoContent = ({ name, title }: Props): React.JSX.Element => (
  <div className="info-content">
    <h1 className="name">{name}</h1>
    <p className="title">{title}</p>
  </div>
);
