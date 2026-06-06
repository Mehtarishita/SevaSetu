"use client";

import { LucideIcon } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "orange" | "emerald" | "red" | "sky";
  isLoading?: boolean;
}

const colorMap = {
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    iconBg: "bg-orange-100",
    border: "border-orange-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    iconBg: "bg-emerald-100",
    border: "border-emerald-200",
  },
  red: {
    bg: "bg-red-50",
    icon: "text-red-600",
    iconBg: "bg-red-100",
    border: "border-red-200",
  },
  sky: {
    bg: "bg-sky-50",
    icon: "text-sky-600",
    iconBg: "bg-sky-100",
    border: "border-sky-200",
  },
};

export default function KPICard({
  label,
  value,
  icon: Icon,
  trend,
  color = "orange",
  isLoading = false,
}: KPICardProps) {
  const colors = colorMap[color];

  return (
    <div
      className={`group rounded-2xl border ${colors.border} bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <div className="mt-3">
            {isLoading ? (
              <div className="h-10 w-32 animate-pulse rounded-lg bg-slate-200" />
            ) : (
              <p className="text-4xl font-bold text-slate-900">{value}</p>
            )}
          </div>
          {trend && !isLoading && (
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  trend.isPositive ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-slate-500">from last week</span>
            </div>
          )}
        </div>
        <div
          className={`${colors.iconBg} rounded-xl p-3 transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className={`${colors.icon} h-6 w-6`} />
        </div>
      </div>
    </div>
  );
}
