
import React from "react";

type TabItem = { key: string; label: string; content: React.ReactNode };

export default function Tabs({
  items,
  active,
  onChange
}: {
  items: TabItem[];
  active: string;
  onChange: (k: string) => void;
}) {
  return (
    <div>
      <div className="flex border-b">
        {items.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`px-4 py-2 text-sm ${
              active === t.key
                ? "text-orange-brand border-b-2 border-orange-brand"
                : "text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-4">
        {items.find((i) => i.key === active)?.content}
      </div>
    </div>
  );
}
