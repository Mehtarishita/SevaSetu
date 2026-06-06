import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export default function Card({
  children,
  className = "",
  glass = false,
}: CardProps) {
  return (
    <div
      className={`
        ${glass
          ? "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
          : "bg-white shadow-lg"}
        rounded-3xl p-6 sm:p-8
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}

