"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface PerformanceMetricProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
    label?: string;
  };
  comparison?: {
    label: string;
    value: string | number;
    type: "good" | "warning" | "critical";
  };
  sparklineData?: number[];
  isLoading?: boolean;
}

export default function PerformanceMetric({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  comparison,
  sparklineData,
  isLoading = false,
}: PerformanceMetricProps) {
  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-4 w-24 rounded bg-slate-200" />
        <div className="h-8 w-32 rounded bg-slate-300" />
        <div className="h-3 w-full rounded bg-slate-200" />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-soft hover:shadow-soft-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs md:text-sm font-medium text-slate-600 uppercase tracking-wide">
            {title}
          </p>
          <p className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            {value}
          </p>
          {subtitle && (
            <p className="mt-1 text-xs md:text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className="flex-shrink-0 rounded-lg bg-slate-100 p-2 md:p-3">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-slate-600" />
          </div>
        )}
      </div>

      {/* Trend */}
      {trend && (
        <div className="mt-4 flex items-center gap-2 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1">
            {trend.isPositive ? (
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600" />
            )}
            <span
              className={`text-sm font-semibold ${
                trend.isPositive ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}%
            </span>
          </div>
          {trend.label && (
            <span className="text-xs text-slate-500">{trend.label}</span>
          )}
        </div>
      )}

      {/* Comparison */}
      {comparison && (
        <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
          <span className="text-xs font-medium text-slate-600">
            {comparison.label}
          </span>
          <span
            className={`text-sm font-bold ${
              comparison.type === "good"
                ? "text-emerald-600"
                : comparison.type === "warning"
                ? "text-amber-600"
                : "text-red-600"
            }`}
          >
            {comparison.value}
          </span>
        </div>
      )}

      {/* Sparkline */}
      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-4 flex items-end gap-1 pt-4 border-t border-slate-100 h-12">
          {sparklineData.map((point, idx) => {
            const maxValue = Math.max(...sparklineData);
            const minValue = Math.min(...sparklineData);
            const range = maxValue - minValue || 1;
            const height = ((point - minValue) / range) * 100;

            return (
              <div
                key={idx}
                className="flex-1 rounded-t bg-gradient-to-t from-orange-400 to-orange-600 opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${Math.max(height, 10)}%` }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
