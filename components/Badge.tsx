import type { ReactNode } from "react";

export function Badge({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return <span className={`badge${muted ? " badge--muted" : ""}`}>{children}</span>;
}
