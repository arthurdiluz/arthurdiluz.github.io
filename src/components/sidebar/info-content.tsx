"use client";

import React from "react";

interface Props {
  name: string;
}

export const InfoContent = ({ name }: Props): React.JSX.Element => (
  <div className="info-content">
    <h1 className="name">{name}</h1>
  </div>
);
