"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hydrated, threshold]);

  const style: React.CSSProperties = hydrated && !isVisible
    ? { opacity: 0 }
    : isVisible
    ? { animation: `var(--animate-${animation})`, animationDelay: `${delay}ms` }
    : {};

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
