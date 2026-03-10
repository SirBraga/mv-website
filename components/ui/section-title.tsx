import { type ReactNode } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "center",
  dark = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 lg:mb-16`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 ${
            dark
              ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
              : "bg-blue-50 text-blue-600 border border-blue-100"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
