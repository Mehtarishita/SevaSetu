import Link from "next/link";
import { getIncidents } from "@/services/incidentService";

export default function IncidentsPage(){
  const incidents = getIncidents();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Incidents</h1>
        <Link href="/incidents/new" className="bg-orange-500 text-white px-4 py-2 rounded">Report</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {incidents.map(i=> (
          <div key={i.id} className="bg-white p-4 rounded-2xl shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-500">{i.location.address}</div>
              </div>
              <div className="text-sm text-gray-600">{i.priority}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
