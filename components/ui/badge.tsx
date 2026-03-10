import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "cta" | "dark";
  className?: string;
}

const variantStyles = {
  default: "bg-navy-100 text-navy-700",
  accent: "bg-accent-500/10 text-accent-600",
  cta: "bg-cta-500/10 text-cta-600",
  dark: "bg-white/10 text-white",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
