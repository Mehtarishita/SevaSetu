"use client";

import Link from "next/link";

export default function VolunteerCard({ volunteer }: any) {
  return (
    <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xl font-semibold text-slate-900">
            {volunteer.firstName} {volunteer.lastName}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {volunteer.location.address}
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Skills:{" "}
            {volunteer.skills?.map((s: any) => s.name).join(", ")}
          </p>
        </div>

        <div className="text-sm font-semibold rounded-full bg-slate-100 px-3 py-1 text-slate-700">
          {volunteer.status}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
        <span className="rounded-2xl bg-orange-50 px-3 py-1">
          {volunteer.languages?.join(", ")}
        </span>

        <span className="rounded-2xl bg-slate-50 px-3 py-1">
          {volunteer.totalHoursToday}h today
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
        <span>Fatigue {volunteer.fatigueScore}%</span>

        <Link
          href={`/volunteers/${volunteer.id}`}
          className="text-orange-600 font-semibold"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}