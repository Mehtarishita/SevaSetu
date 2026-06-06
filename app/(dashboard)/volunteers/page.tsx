"use client";

import { useState } from "react";
import { getVolunteers, searchVolunteers } from "@/services/volunteerService";
import Link from "next/link";

export default function VolunteersPage(){
  const all = getVolunteers();
  const [q,setQ] = useState("");

  const list = q ? searchVolunteers(q) : all;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-orange-500 font-semibold">Volunteer Management</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Volunteers</h1>
        </div>
        <Link href="/volunteers/register" className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
          Register Volunteer
        </Link>
      </div>

      <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
        <div className="grid gap-4 lg:grid-cols-[1fr_320px] items-center">
          <div>
            <p className="text-sm text-slate-600">Search or filter volunteers by name, skills, and availability.</p>
          </div>
          <div>
            <input
              placeholder="Search by name or skill"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              value={q}
              onChange={(e)=>setQ(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((v)=> (
          <div key={v.id} className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft transition hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-slate-900">{v.firstName} {v.lastName}</p>
                <p className="mt-1 text-sm text-gray-500">{v.location.address}</p>
                <p className="mt-3 text-sm text-slate-600">Skills: {v.skills.map((s)=>s.name).join(", ")}</p>
              </div>
              <div className="text-sm font-semibold rounded-full bg-slate-100 px-3 py-1 text-slate-700">{v.status}</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-2xl bg-orange-50 px-3 py-1">{v.languages.join(", ")}</span>
              <span className="rounded-2xl bg-slate-50 px-3 py-1">{v.totalHoursToday}h today</span>
            </div>
            <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
              <span>Fatigue {v.fatigueScore}%</span>
              <Link href={`/volunteers/${v.id}`} className="text-orange-600 font-semibold">View profile</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
