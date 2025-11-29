export default function Badge({ label }: { label: string }) {
  return <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{label}</span>;
}
