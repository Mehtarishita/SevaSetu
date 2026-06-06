"use client";

import React from "react";

type StatusVariant = "active" | "busy" | "offline" | "injured" | "success" | "warning" | "error" | "info";

interface StatusBadgeProps {
  variant: StatusVariant;
  label: string;
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
}

const variantStyles: Record<StatusVariant, { bg: string; text: string; dot: string }> = {
  active: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-600",
  },
  busy: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    dot: "bg-orange-600",
  },
  offline: {
    bg: "bg-slate-100",
    text: "text-slate-700",
    dot: "bg-slate-400",
  },
  injured: {
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-600",
  },
  success: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-600",
  },
  warning: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-600",
  },
  error: {
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-600",
  },
  info: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    dot: "bg-blue-600",
  },
};

const sizeStyles = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export default function StatusBadge({
  variant,
  label,
  size = "md",
  showDot = true,
}: StatusBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold rounded-full ${styles.bg} ${styles.text} ${sizeStyles[size]} transition-all duration-200`}
    >
      {showDot && (
        <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
      )}
      {label}
    </span>
  );
}
