"use client";

import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Command Center", href: "/command-center" },
  { name: "Volunteers", href: "/volunteers" },
  { name: "Incidents", href: "/incidents" },
  { name: "AI Assignment", href: "/ai-assignment" },
  { name: "Analytics", href: "/analytics" },
];

export default function Sidebar() {
  return (
    <aside className="w-80 min-h-screen border-r border-orange-100 bg-gradient-to-b from-white via-[#fff8f1] to-[#fff7ed] shadow-soft">
      <div className="p-7">
        <div className="inline-flex items-center gap-3 rounded-3xl bg-orange-500/10 px-4 py-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white text-lg font-bold">
            S
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">SevakSetu AI</p>
            <p className="text-xs text-slate-500">Volunteer operations hub</p>
          </div>
        </div>
      </div>

      <nav className="px-6 pb-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-100 hover:text-orange-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}