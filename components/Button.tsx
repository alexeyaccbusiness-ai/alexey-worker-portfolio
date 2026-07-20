import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
