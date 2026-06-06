"use client";

import { Clock, User, CheckCircle, AlertCircle, LogOut, LogIn } from "lucide-react";

export interface ActivityItem {
  id: string;
  type: "assignment" | "checkin" | "checkout" | "alert" | "completion";
  volunteer: {
    name: string;
    avatar: string;
  };
  description: string;
  timestamp: Date;
  metadata?: {
    zone?: string;
    duration?: string;
    status?: string;
  };
}

interface ActivityFeedProps {
  activities: ActivityItem[];
  isLoading?: boolean;
}

const activityConfig = {
  assignment: {
    icon: CheckCircle,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  checkin: {
    icon: LogIn,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  checkout: {
    icon: LogOut,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  alert: {
    icon: AlertCircle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  completion: {
    icon: CheckCircle,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
};

const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
};

export default function ActivityFeed({
  activities,
  isLoading = false,
}: ActivityFeedProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Activity Feed</h3>
        <p className="mt-1 text-sm text-slate-500">
          Recent volunteer movements and updates
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-slate-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      ) : activities.length === 0 ? (
        <div className="py-12 text-center">
          <Clock className="mx-auto h-12 w-12 text-slate-300" />
          <p className="mt-4 text-slate-500">No recent activity</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const config = activityConfig[activity.type];
            const Icon = config.icon;

            return (
              <div key={activity.id} className="group relative">
                {/* Timeline line */}
                {idx < activities.length - 1 && (
                  <div className="absolute left-5 top-12 h-6 w-0.5 bg-gradient-to-b from-slate-200 to-transparent" />
                )}

                <div className="flex gap-4 items-start">
                  {/* Avatar & Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 border border-slate-200">
                      {activity.volunteer.avatar}
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 rounded-full p-1.5 ${config.bg}`}
                    >
                      <Icon className={`${config.color} h-3 w-3`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900">
                          {activity.volunteer.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {activity.description}
                        </p>
                        {activity.metadata && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {activity.metadata.zone && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                                📍 {activity.metadata.zone}
                              </span>
                            )}
                            {activity.metadata.duration && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                                ⏱️ {activity.metadata.duration}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <span className="flex-shrink-0 text-xs text-slate-500 whitespace-nowrap">
                        {getTimeAgo(activity.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
