"use client";

import { useState } from "react";
import { getVolunteers } from "@/services/volunteerService";
import { scoreVolunteerForIncident } from "@/services/aiMock";

export default function AIAssignmentPage() {
  const [recommendation, setRecommendation] = useState("");

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

const testGemini = async () => {
  const response = await fetch("/api/ai/recommend", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    incident: input,

    volunteers: volunteers.map((v) => ({
      name: `${v.firstName} ${v.lastName}`,
      skills: v.skills.map((s) => s.name),
      fatigue: v.fatigueScore,
      languages: v.languages,
      zone: v.location.address,
      status: v.status,
    })),
  }),
});

  const data = await response.json();

  setRecommendation(data.recommendation);
};

  return (
    
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Assignment</h1>
    <button
  onClick={testGemini}
  className="bg-orange-500 text-white px-4 py-2 rounded-xl"
>
  Generate AI Recommendation
</button>
{recommendation && (
  <div className="mt-4 rounded-2xl bg-white p-6 shadow">
    <h3 className="font-bold text-lg">
      AI Recommendation
    </h3>

    <p className="mt-3 whitespace-pre-wrap">
      {recommendation}
    </p>
  </div>
)}
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
              <div>Distance: ~2.5 km</div>
              <div>Language Match: {r.volunteer.languages.join(", ")}</div>
              <div>Fatigue: {r.volunteer.fatigueScore}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
