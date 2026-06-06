interface VolunteerTableProps {
  volunteers: any[];
}

export default function VolunteerTable({
  volunteers,
}: VolunteerTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Fatigue</th>
          </tr>
        </thead>

        <tbody>
          {volunteers.map((v) => (
            <tr key={v.id} className="border-b">
              <td className="p-4">
                {v.firstName} {v.lastName}
              </td>

              <td className="p-4">
                {v.location.address}
              </td>

              <td className="p-4">
                {v.status}
              </td>

              <td className="p-4">
                {v.fatigueScore}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}