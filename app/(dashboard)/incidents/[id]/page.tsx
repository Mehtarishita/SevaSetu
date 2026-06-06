import { getIncidentById } from "@/services/incidentService";

export default async function IncidentDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const i = getIncidentById(id);
  if(!i) return <div>Incident not found</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">{i.title}</h1>
      <p className="text-gray-600">{i.description}</p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Priority</h3>
          <p>{i.priority}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Status</h3>
          <p>{i.status}</p>
        </div>
      </div>
    </div>
  )
}
