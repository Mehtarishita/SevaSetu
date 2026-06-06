"use client";

export function KPISkeletons() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft animate-pulse"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="mt-4 h-10 w-40 rounded bg-slate-300" />
              <div className="mt-3 h-3 w-32 rounded bg-slate-200" />
            </div>
            <div className="h-12 w-12 rounded-xl bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeatmapSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-48 rounded bg-slate-200 animate-pulse" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft animate-pulse"
          >
            <div className="h-5 w-32 rounded bg-slate-200" />
            <div className="mt-3 h-3 w-full rounded bg-slate-100" />
            <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="h-4 w-20 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecommendationSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft animate-pulse"
        >
          <div className="space-y-3">
            <div className="h-5 w-3/4 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-100" />
            <div className="h-4 w-2/3 rounded bg-slate-100" />
            <div className="flex gap-2">
              <div className="h-8 flex-1 rounded bg-slate-200" />
              <div className="h-8 flex-1 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function IncidentSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl bg-slate-100 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="h-6 w-24 rounded bg-slate-200" />
            <div className="h-8 w-8 rounded-full bg-slate-200" />
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-200" />
        </div>
      ))}
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-2/3 rounded bg-slate-200" />
            <div className="h-3 w-1/2 rounded bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
