type Props = {
  title: string;
  value: string;
  iconBg: string;
  icon: React.ReactNode;
  trend?: string;
};

export default function SummaryCard({ title, value, iconBg, icon, trend }: Props) {
  return (
    <div className="bg-white shadow-card rounded-lg p-4 flex items-center gap-4 border border-gray-100">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{ backgroundColor: iconBg }}>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-gray-850 font-semibold text-xl">{value}</div>
        {trend && <div className="text-green-600 text-xs mt-1">{trend}</div>}
      </div>
    </div>
  );
}
