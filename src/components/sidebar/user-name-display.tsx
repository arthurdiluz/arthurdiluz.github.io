import type { UserNameDisplayProps } from "@/lib/types";
import type { JSX } from "react";

export function UserNameDisplay({ name }: UserNameDisplayProps): JSX.Element {
  return (
    <div className="info-content">
      <h1 className="name">{name}</h1>
    </div>
  );
}
