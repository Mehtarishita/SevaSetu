"use client";

import { AlertTriangle, AlertCircle, AlertOctagon, Info } from "lucide-react";

interface IncidentStats {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

interface IncidentOverviewProps {
  stats: IncidentStats;
  isLoading?: boolean;
}

const priorityConfig = {
  critical: {
    icon: AlertOctagon,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    label: "Critical",
  },
  high: {
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    label: "High",
  },
  medium: {
    icon: AlertCircle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    label: "Medium",
  },
  low: {
    icon: Info,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    label: "Low",
  },
};

export default function IncidentOverview({
  stats,
  isLoading = false,
}: IncidentOverviewProps) {
  const totalIncidents = stats.critical + stats.high + stats.medium + stats.low;

  const priorityEntries = (
    Object.entries(stats) as [
      "critical" | "high" | "medium" | "low",
      number
    ][]
  ).sort((a, b) => b[1] - a[1]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Incident Overview
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Active incidents by priority level
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 animate-pulse rounded-lg bg-slate-200" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {priorityEntries.map(([priority, count]) => {
            const config = priorityConfig[priority];
            const Icon = config.icon;
            const percentage = totalIncidents > 0 ? (count / totalIncidents) * 100 : 0;

            return (
              <div
                key={priority}
                className={`group rounded-xl border-2 ${config.border} ${config.bg} p-4 transition-all duration-300 hover:shadow-md cursor-pointer`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex-shrink-0">
                      <Icon className={`${config.color} h-6 w-6`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">
                        {config.label} Priority
                      </p>
                      <div className="h-1.5 w-24 rounded-full bg-slate-200 overflow-hidden mt-1">
                        <div
                          className={`h-full ${config.color.replace("text-", "bg-")} transition-all duration-500`}
                          style={{ width: `${Math.max(percentage, 20)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className={`text-2xl font-bold ${config.color}`}>
                      {count}
                    </p>
                    <p className="text-xs text-slate-500">
                      {percentage.toFixed(0)}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Total Summary */}
          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Total Incidents</span>
              <span className="text-2xl font-bold text-orange-600">
                {totalIncidents}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
