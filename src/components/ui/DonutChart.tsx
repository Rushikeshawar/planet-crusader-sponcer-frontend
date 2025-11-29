// Simple CSS donut representation (no external chart lib)
export default function DonutChart({
  used,
  remaining
}: {
  used: number;
  remaining: number;
}) {
  const total = used + remaining;
  const usedPct = Math.round((used / total) * 100);
  const remPct = 100 - usedPct;

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-32 h-32 rounded-full bg-gray-200">
        {/* Fake donut bars (for mock only) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              `conic-gradient(#3B82F6 ${usedPct}%, #10B981 ${usedPct}% ${usedPct + remPct}%)`
          }}
        />
        <div className="absolute inset-4 rounded-full bg-white" />
      </div>
      <div>
        <div className="text-sm text-gray-600">Used</div>
        <div className="font-semibold text-gray-850">${used.toLocaleString()}</div>
        <div className="text-sm text-gray-600 mt-2">Remaining</div>
        <div className="font-semibold text-gray-850">${remaining.toLocaleString()}</div>
      </div>
    </div>
  );
}
