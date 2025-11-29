import ProgressBar from "../ui/ProgressBar";

export default function SponsorForm({
  org,
  roadmap,
  fundingNeeded,
  fundingReceived,
  suggested = 25000,
  onConfirm
}: {
  org: string;
  roadmap: string;
  fundingNeeded: number;
  fundingReceived: number;
  suggested?: number;
  onConfirm: (amount: number, resources?: string) => void;
}) {
  const percent = Math.round((fundingReceived / fundingNeeded) * 100);
  const [amount, setAmount] = useState<number>(suggested);
  const [resources, setResources] = useState<string>("");

  return (
    <div className="space-y-4">
      <div className="text-gray-850 font-semibold">
        Sponsor Roadmap: {roadmap}
      </div>
      <div className="text-gray-600">
        Help {org} achieve their {roadmap} goals.
      </div>

      <div className="border rounded p-3">
        <div className="text-sm text-gray-600">Funding Status</div>
        <div className="font-semibold text-gray-850">
          ${fundingReceived.toLocaleString()} / ${fundingNeeded.toLocaleString()} ({percent}%)
        </div>
        <div className="mt-2">
          <ProgressBar percent={percent} color="#3B82F6" />
        </div>
      </div>

      <label className="block">
        <span className="text-sm text-gray-600">Sponsorship Amount (USD)</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-1 w-full border rounded px-3 py-2"
        />
        <div className="text-xs text-gray-500 mt-1">Suggested: ${suggested.toLocaleString()}</div>
      </label>

      <label className="block">
        <span className="text-sm text-gray-600">Additional Resources (Optional)</span>
        <textarea
          value={resources}
          onChange={(e) => setResources(e.target.value)}
          placeholder="e.g., Materials, Equipment, Volunteering"
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </label>

      <button
        onClick={() => onConfirm(amount, resources)}
        className="w-full bg-orange-brand text-white rounded py-2 font-semibold"
      >
        Confirm
      </button>
    </div>
  );
}

import { useState } from "react";
