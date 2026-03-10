import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const paddingStyles = {
  none: "",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/8 hover:-translate-y-1.5 hover:border-blue-200"
          : ""
      } ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
