import { getIncidents } from "@/services/incidentService";
import { getVolunteers } from "@/services/volunteerService";

export default function CommandCenterPage(){
  const incidents = getIncidents().slice(0,6);
  const volunteers = getVolunteers().slice(0,6);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white border border-orange-100 p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-orange-500 font-semibold">Command Center</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">Live Incident & Volunteer Response</h1>
          </div>
          <div className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">Real-time operations</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
          <p className="text-sm text-gray-500">Live Incidents</p>
          <p className="mt-4 text-3xl font-bold text-slate-900">{getIncidents().filter(i=>i.status==='open').length}</p>
          <p className="mt-2 text-sm text-gray-500">Currently requiring response</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
          <p className="text-sm text-gray-500">Available Volunteers</p>
          <p className="mt-4 text-3xl font-bold text-emerald-600">{getVolunteers().filter(v=>v.status==='available').length}</p>
          <p className="mt-2 text-sm text-gray-500">Ready for deployment</p>
        </div>
        <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
          <p className="text-sm text-gray-500">Assignment Queue</p>
          <p className="mt-4 text-3xl font-bold text-orange-600">{Math.floor(Math.random()*22)+8}</p>
          <p className="mt-2 text-sm text-gray-500">Pending AI recommendations</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Incidents</h2>
          <ul className="space-y-3">
            {incidents.map((item)=> (
              <li key={item.id} className="rounded-3xl bg-orange-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.location.address}</p>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">{item.priority}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-white border border-slate-200 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Available Volunteers</h2>
          <ul className="space-y-3">
            {volunteers.map((vol)=> (
              <li key={vol.id} className="rounded-3xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{vol.firstName} {vol.lastName}</p>
                    <p className="text-sm text-gray-600">{vol.location.address}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">{vol.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
