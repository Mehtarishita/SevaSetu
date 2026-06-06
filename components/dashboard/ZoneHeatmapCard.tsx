"use client";

import { Users, AlertCircle } from "lucide-react";
import { useState } from "react";

interface ZoneData {
  id: string;
  name: string;
  totalVolunteers: number;
  activeVolunteers: number;
  incidents: number;
  capacity: number;
}

interface ZoneHeatmapCardProps {
  zone: ZoneData;
  isLoading?: boolean;
}

export default function ZoneHeatmapCard({
  zone,
  isLoading = false,
}: ZoneHeatmapCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const utilizationPercent = (zone.activeVolunteers / zone.capacity) * 100;
  const getCapacityColor = () => {
    if (utilizationPercent > 90) return "bg-red-500";
    if (utilizationPercent > 70) return "bg-orange-500";
    if (utilizationPercent > 40) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getCapacityLabel = () => {
    if (utilizationPercent > 90) return "Critical";
    if (utilizationPercent > 70) return "High";
    if (utilizationPercent > 40) return "Moderate";
    return "Optimal";
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative p-5">
        {isLoading ? (
          <div className="space-y-3">
            <div className="h-6 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
            <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">{zone.name}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Deployment capacity
                </p>
              </div>
              {zone.incidents > 0 && (
                <div className="flex-shrink-0 rounded-full bg-red-100 p-2">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
              )}
            </div>

            {/* Capacity Bar */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">
                  {zone.activeVolunteers}/{zone.capacity}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    utilizationPercent > 70
                      ? "text-red-600"
                      : "text-emerald-600"
                  }`}
                >
                  {getCapacityLabel()}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full ${getCapacityColor()} transition-all duration-500`}
                  style={{ width: `${Math.min(utilizationPercent, 100)}%` }}
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Total</p>
                  <p className="font-semibold text-slate-900">
                    {zone.totalVolunteers}
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
                  zone.incidents > 0 ? "bg-red-50" : "bg-slate-50"
                }`}
              >
                <AlertCircle
                  className={`h-4 w-4 ${
                    zone.incidents > 0 ? "text-red-600" : "text-slate-400"
                  }`}
                />
                <div>
                  <p className="text-xs text-slate-500">Issues</p>
                  <p
                    className={`font-semibold ${
                      zone.incidents > 0
                        ? "text-red-600"
                        : "text-slate-900"
                    }`}
                  >
                    {zone.incidents}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
