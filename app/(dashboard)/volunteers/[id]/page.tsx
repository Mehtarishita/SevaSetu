import { getVolunteerById } from "@/services/volunteerService";

export default async function VolunteerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const v = getVolunteerById(id);

  if(!v) return <div>Volunteer not found</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">{v.firstName} {v.lastName}</h1>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm text-gray-600">{v.phone} • {v.email}</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Location</h3>
          <p className="text-sm text-gray-600">{v.location.address}</p>
        </div>
      </div>
    </div>
  )
}
