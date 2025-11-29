import Dropdown from "../components/ui/Dropdown";
import SummaryCard from "../components/ui/SummaryCard";
import SponsorshipCard from "../components/sponsorships/SponsorshipCard";
import { sponsorships } from "../data/sponsorships";
import { useState } from "react";

export default function Sponsorships() {
  const [type, setType] = useState("All Types");
  const [status, setStatus] = useState("All Statuses");

  const filtered = sponsorships.filter((s) => {
    const t = type === "All Types" || s.type === type.slice(0, -1); // crude normalization
    const st = status === "All Statuses" || s.status === status.replace("In ", "");
    return t && st;
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard title="Total Sponsorships" value="5" iconBg="#EFE7FF" icon="Box" />
        <SummaryCard title="Active" value="4" iconBg="#E8F1FF" icon="Gear" />
        <SummaryCard title="Completed" value="1" iconBg="#E7F8ED" icon="Checkmark" />
        <SummaryCard title="Total Invested" value="$93K" iconBg="#FFF3E5" icon="Money" />
      </div>

      <div className="flex flex-wrap gap-4">
        <Dropdown
          label="Filter by Type"
          value={type}
          onChange={setType}
          options={[
            { label: "All Types", value: "All Types" },
            { label: "Roadmaps", value: "Roadmaps" },
            { label: "Activities", value: "Activities" },
            { label: "Events", value: "Events" },
            { label: "School sponsorships", value: "School sponsorships" }
          ]}
        />
        <Dropdown
          label="Filter by Status"
          value={status}
          onChange={setStatus}
          options={[
            { label: "All Statuses", value: "All Statuses" },
            { label: "Active", value: "Active" },
            { label: "Completed", value: "Completed" },
            { label: "In Progress", value: "In Progress" },
            { label: "Pending", value: "Pending" }
          ]}
        />
      </div>

      <div className="grid gap-4">
        {filtered.map((s) => (
          <SponsorshipCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
}