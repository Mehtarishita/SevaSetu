"use client";

import { Search, Bell, Settings } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount] = useState(4);
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Enter") return;

    const query = searchQuery.toLowerCase().trim();

    console.log("Searching:", query);

    if (!query) return;

    if (
      query.includes("volunteer") ||
      query.includes("volunteers") ||
      query.includes("first aid") ||
      query.includes("translator") ||
      query.includes("crowd")
    ) {
      window.location.href = "/volunteers";
      return;
    }

    if (
      query.includes("incident") ||
      query.includes("incidents") ||
      query.includes("fire") ||
      query.includes("medical") ||
      query.includes("lost")
    ) {
      window.location.href = "/incidents";
      return;
    }

    if (
      query.includes("ai") ||
      query.includes("assignment") ||
      query.includes("assign") ||
      query.includes("deployment")
    ) {
      window.location.href = "/ai-assignment";
      return;
    }

    if (
      query.includes("analytics") ||
      query.includes("report")
    ) {
      window.location.href = "/analytics";
      return;
    }

    window.location.href = "/dashboard";
  };

  const notifications = [
    {
      title: "Critical Medical Incident",
      message: "Zone 3 requires immediate assistance",
      time: "2 min ago",
    },
    {
      title: "Volunteer Shortage",
      message: "Ghat 14 below required staffing",
      time: "10 min ago",
    },
    {
      title: "AI Reassignment Complete",
      message: "5 volunteers reassigned successfully",
      time: "20 min ago",
    },
    {
      title: "Crowd Density Alert",
      message: "Zone 7 crowd density exceeds threshold",
      time: "30 min ago",
    },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-8">

        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
            Live Operations
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 truncate">
            Volunteer Command Center
          </h2>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 transition hover:bg-slate-100 flex-1 max-w-xs">
          <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />

          <input
            type="text"
            placeholder="Search volunteers, incidents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="ml-2 flex-1 bg-transparent text-sm placeholder-slate-400 outline-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition hover:bg-slate-100"
            >
              <Bell className="h-5 w-5 text-slate-600" />

              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {notificationCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl z-50 overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-slate-900">
                    Notifications
                  </h3>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="p-4 border-b hover:bg-slate-50 cursor-pointer"
                    >
                      <h4 className="font-medium text-slate-900">
                        {notification.title}
                      </h4>

                      <p className="text-sm text-slate-600 mt-1">
                        {notification.message}
                      </p>

                      <p className="text-xs text-slate-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
         <button
  onClick={() => router.push("/settings")}
  className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition hover:bg-slate-100"
>
  <Settings className="h-5 w-5 text-slate-600" />
</button>

          {/* User Profile */}
<div
  onClick={() => router.push("/profile")}
  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 px-3 py-2 md:px-4 md:py-2.5 cursor-pointer hover:shadow-md transition"
>
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm md:text-base font-bold text-white shadow-md">
              R
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                Riya
              </p>
              <p className="text-xs text-slate-600">
                Coordinator
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}