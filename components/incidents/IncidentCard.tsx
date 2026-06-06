interface IncidentCardProps {
  title: string;
  priority: string;
  status: string;
}

export default function IncidentCard({
  title,
  priority,
  status,
}: IncidentCardProps) {
  return (
    <div className="rounded-2xl border p-4 bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
    </div>
  );
}