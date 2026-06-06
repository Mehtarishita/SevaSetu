import { getVolunteers } from "@/services/volunteerService";

export default function AnalyticsPage(){
  const volunteers = getVolunteers();

  const bySkill: Record<string, number> = {};
  volunteers.forEach(v=> v.skills.forEach(s=> bySkill[s.name] = (bySkill[s.name]||0)+1));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">Skills Breakdown</h3>
          <ul className="space-y-2">
            {Object.entries(bySkill).map(([k,v])=> (
              <li key={k} className="flex justify-between">
                <div>{k}</div>
                <div className="font-semibold">{v}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold mb-3">Volunteer Distribution</h3>
          <div className="h-48 flex items-center justify-center border rounded">Chart Placeholder</div>
        </div>
      </div>
    </div>
  )
}
