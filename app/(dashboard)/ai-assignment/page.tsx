"use client";

import { useState } from "react";
import { getVolunteers } from "@/services/volunteerService";
import { scoreVolunteerForIncident } from "@/services/aiMock";

export default function AIAssignmentPage() {
  const [input, setInput] = useState<string>(
    "Lost elderly woman near Ram Ghat. Speaks Marathi. Needs wheelchair assistance."
  );

  const volunteers = getVolunteers();

  const results = volunteers.map((v) => ({
    volunteer: v,
    score: scoreVolunteerForIncident(v, input),
  }))
  .sort((a,b)=>b.score-a.score)
  .slice(0,8);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Assignment</h1>

      <p className="text-gray-600 mb-4">Enter an incident description to get recommended volunteers.</p>

      <textarea className="w-full p-4 rounded-xl border mb-4" value={input} onChange={(e)=>setInput(e.target.value)} rows={4} />

      <div className="grid md:grid-cols-2 gap-4">
        {results.map((r)=> (
          <div key={r.volunteer.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{r.volunteer.firstName} {r.volunteer.lastName}</h3>
                <p className="text-sm text-gray-500">{r.volunteer.skills.map(s=>s.name).join(", ")}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-orange-600">{r.score}</div>
                <div className="text-xs text-gray-500">Match Score</div>
              </div>
            </div>

            <div className="mt-3 text-sm text-gray-600">
              <div>Distance: ~{(Math.random()*5).toFixed(1)} km</div>
              <div>Language Match: {r.volunteer.languages.join(", ")}</div>
              <div>Fatigue: {r.volunteer.fatigueScore}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
