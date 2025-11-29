type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
};

export default function Dropdown({ label, value, onChange, options }: Props) {
  return (
    <label className="text-sm text-gray-600 flex items-center gap-2">
      <span className="w-32">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 bg-white"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
