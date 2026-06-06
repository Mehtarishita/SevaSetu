"use client";

interface StatItem {
  label: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  backgroundColor?: string;
  valueColor?: string;
}

interface StatGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  isLoading?: boolean;
}

export default function StatGrid({
  stats,
  columns = 4,
  isLoading = false,
}: StatGridProps) {
  const columnClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  if (isLoading) {
    return (
      <div className={`grid gap-4 ${columnClass[columns]}`}>
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 animate-pulse"
          >
            <div className="h-4 w-20 rounded bg-slate-200 mb-3" />
            <div className="h-8 w-16 rounded bg-slate-300 mb-2" />
            <div className="h-3 w-12 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${columnClass[columns]}`}>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-xl border border-slate-200 ${
            stat.backgroundColor || "bg-white"
          } p-4 md:p-5 shadow-soft hover:shadow-soft-md transition-shadow duration-300`}
        >
          <p className="text-xs md:text-sm font-medium text-slate-600 uppercase tracking-wide">
            {stat.label}
          </p>
          <p
            className={`mt-2 text-2xl md:text-3xl font-bold ${
              stat.valueColor || "text-slate-900"
            }`}
          >
            {stat.value}
          </p>
          {stat.change && (
            <p
              className={`mt-2 text-xs md:text-sm font-semibold ${
                stat.change.isPositive ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {stat.change.isPositive ? "↑" : "↓"} {Math.abs(stat.change.value)}%
              <span className="text-slate-500 font-normal ml-1">
                from last week
              </span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
