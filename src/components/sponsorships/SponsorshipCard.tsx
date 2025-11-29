import ProgressBar from "../ui/ProgressBar";

export default function SponsorshipCard({
  title,
  org,
  type,
  status,
  amount,
  startDate,
  progress,
  impactMetrics,
  note
}: {
  title: string;
  org: string;
  type: string;
  status: string;
  amount: number;
  startDate: string;
  progress: number;
  impactMetrics: { label: string; value: string }[];
  note: string;
}) {
  const statusColor =
    status === "Completed" ? "#10B981" : status === "Pending" ? "#F59E0B" : "#3B82F6";

  return (
    <div className="bg-white border border-gray-100 shadow-card rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-gray-850 font-semibold">{title}</div>
          <div className="text-gray-600 text-sm">{org}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{type}</span>
          <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: statusColor + "22", color: statusColor }}>
            {status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="text-gray-500">Amount</div>
        <div className="font-semibold text-gray-850">${amount.toLocaleString()}</div>
        <div className="text-gray-500">Start Date</div>
        <div className="font-semibold text-gray-850">{new Date(startDate).toLocaleDateString()}</div>
        <div className="text-gray-500">Progress</div>
        <div className="font-semibold text-gray-850">{progress}%</div>
        <div className="text-gray-500">Impact Metrics Tracked</div>
        <div className="font-semibold text-gray-850">{impactMetrics.length}</div>
      </div>

      <ProgressBar percent={progress} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        {impactMetrics.map((m) => (
          <div key={m.label} className="bg-gray-50 rounded p-3">
            <div className="text-xs text-gray-500">{m.label}</div>
            <div className="text-gray-850 font-semibold">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-700 italic">“{note}”</div>
    </div>
  );
}
