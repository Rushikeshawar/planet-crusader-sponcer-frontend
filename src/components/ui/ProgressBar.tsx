type Props = {
  percent: number;
  color?: string;
};

export default function ProgressBar({ percent, color = "#10B981" }: Props) {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-500 rounded-full"
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
    </div>
  );
}