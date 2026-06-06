interface PriorityBadgeProps {
  priority: string;
}

export default function PriorityBadge({
  priority,
}: PriorityBadgeProps) {
  return (
    <span className="rounded-full px-3 py-1 text-sm bg-red-100">
      {priority}
    </span>
  );
}