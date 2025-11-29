type Props = { variant: "incoming" | "pending" | "approved"; label: string };
export default function Tag({ variant, label }: Props) {
  const map = {
    incoming: { bg: "bg-[--incomingBg]", text: "text-[--incomingText]" },
    pending: { bg: "bg-[--pendingBg]", text: "text-[--pendingText]" },
    approved: { bg: "bg-[--approvedBg]", text: "text-[--approvedText]" }
  };
  const style = {
    incomingBg: "#E8F1FF",
    incomingText: "#3B82F6",
    pendingBg: "#FFF3E5",
    pendingText: "#F59E0B",
    approvedBg: "#E7F8ED",
    approvedText: "#10B981"
  } as Record<string, string>;
  return (
    <span
      className="text-xs px-2 py-1 rounded"
      style={{
        backgroundColor: style[`${variant}Bg`],
        color: style[`${variant}Text`]
      }}
    >
      {label}
    </span>
  );
}