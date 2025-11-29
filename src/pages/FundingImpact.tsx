import DonutChart from "../components/ui/DonutChart";
import { fundingOverview, allocations, projects } from "../data/funding";
import Tabs from "../components/ui/Tabs";
import { useState } from "react";

export default function FundingImpact() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [tab, setTab] = useState("overview");

  const selected = projects.find((p) => p.id === activeProject);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-850 font-semibold">Funding & Impact Tracking</h2>
          <p className="text-gray-600">Access reports and global navigation</p>
        </div>
        <button className="bg-orange-brand text-white px-4 py-2 rounded">Download Full Report</button>
      </div>

      <div className="bg-white border rounded p-4 shadow-card">
        <div className="text-gray-600 text-sm mb-2">Overview</div>
        <DonutChart used={fundingOverview.used} remaining={fundingOverview.remaining} />
        <div className="mt-3 text-sm text-gray-700">
          Total Sponsored: ${fundingOverview.totalSponsored.toLocaleString()} • Used: ${fundingOverview.used.toLocaleString()} • Remaining: ${fundingOverview.remaining.toLocaleString()}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {allocations.map((a) => {
          const usage = Math.round((a.used / a.allocated) * 100);
          return (
            <div key={a.title} className="bg-white border rounded p-4 shadow-card">
              <div className="font-semibold text-gray-850">{a.title}</div>
              <div className="text-sm text-gray-700 mt-1">Allocated: ${a.allocated.toLocaleString()}</div>
              <div className="text-sm text-gray-700">Used: ${a.used.toLocaleString()}</div>
              <div className="text-sm text-gray-700">Remaining: ${(a.allocated - a.used).toLocaleString()}</div>
              <div className="mt-2 h-2 bg-gray-200 rounded">
                <div className="h-2 bg-green-500 rounded" style={{ width: `${usage}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <h3 className="text-gray-850 font-semibold">Project Fund Tracking</h3>
        <div className="grid gap-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white border rounded p-4 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-850">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.org}</div>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mt-1 inline-block">{p.status}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveProject(p.id);
                    setTab("overview");
                  }}
                  className="px-3 py-2 border rounded text-blue-600 hover:bg-gray-50"
                >
                  View Details
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm mt-3">
                <div>Allocated: <span className="font-semibold">${p.allocated.toLocaleString()}</span></div>
                <div>Spent: <span className="font-semibold">${p.spent.toLocaleString()}</span></div>
                <div>Remaining: <span className="font-semibold">${p.remaining.toLocaleString()}</span></div>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded">
                <div className="h-2 bg-green-500 rounded" style={{ width: `${p.progress}%` }} />
              </div>
              <div className="grid md:grid-cols-4 gap-3 text-sm mt-3">
                <div>Trees Planted: <span className="font-semibold">{p.impact.treesPlanted}</span></div>
                <div>CO₂ Reduced: <span className="font-semibold">{p.impact.co2Reduced}</span></div>
                <div>Students Engaged: <span className="font-semibold">{p.impact.studentsEngaged}</span></div>
                <div>Activities Completed: <span className="font-semibold">{p.impact.activitiesCompleted}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right-side modal imitation */}
      {selected && (
        <div className="fixed top-0 right-0 w-full md:w-[480px] h-full bg-white shadow-popup border-l border-gray-200 z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <div className="font-semibold text-gray-850">{selected.title}</div>
              <div className="text-sm text-gray-600">{selected.org}</div>
            </div>
            <button onClick={()=>setActiveProject(null)} className="px-3 py-1 bg-orange-brand text-white rounded">Close</button>
          </div>
          <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
            <Tabs
              items={[
                {
                  key: "overview",
                  label: "Overview",
                  content: (
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-xs text-gray-600">Total Allocated</div>
                        <div className="font-semibold">${selected.allocated.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-xs text-gray-600">Amount Spent</div>
                        <div className="font-semibold">${selected.spent.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-xs text-gray-600">Remaining</div>
                        <div className="font-semibold">${selected.remaining.toLocaleString()}</div>
                      </div>
                      <div className="col-span-3 mt-2 text-sm">
                        Impact: Trees {selected.impact.treesPlanted}, CO₂ {selected.impact.co2Reduced}, Students {selected.impact.studentsEngaged}, Activities {selected.impact.activitiesCompleted}
                      </div>
                    </div>
                  )
                },
                {
                  key: "fund",
                  label: "Fund Breakdown",
                  content: (
                    <div className="space-y-2">
                      {[
                        { name: "Energy Audit", amount: 3800 },
                        { name: "Cargo Logistics", amount: 2400 },
                        { name: "LED Lighting", amount: 5500 }
                      ].map((row) => (
                        <div key={row.name} className="flex items-center justify-between border-b pb-2">
                          <div className="text-sm text-gray-700">{row.name}</div>
                          <div className="text-sm font-semibold text-green-600">${row.amount.toLocaleString()}</div>
                        </div>
                      ))}
                      <div className="text-right text-sm text-gray-600">Total shown: $11,700</div>
                    </div>
                  )
                },
                {
                  key: "timeline",
                  label: "Timeline",
                  content: (
                    <ul className="space-y-2">
                      <li className="text-sm">✓ Phase 1 Completed</li>
                      <li className="text-sm">✓ ECO Audit Conducted</li>
                      <li className="text-sm">LED Installation Complete (3 locations)</li>
                    </ul>
                  )
                },
                {
                  key: "docs",
                  label: "Proof Docs",
                  content: (
                    <div className="space-y-2">
                      {["Invoice_001.pdf", "Receipt_203.png", "Audit_Report.pdf"].map((f) => (
                        <div key={f} className="flex items-center justify-between border-b pb-2">
                          <div className="text-sm text-gray-700">{f}</div>
                          <button className="text-sm px-3 py-1 bg-orange-brand text-white rounded">Download</button>
                        </div>
                      ))}
                    </div>
                  )
                },
                {
                  key: "transactions",
                  label: "Transactions",
                  content: (
                    <div className="space-y-2">
                      {[
                        { title: "Vendor Payment", vendor: "EcoAudit LLC", amount: 8200, date: "2024-09-12" },
                        { title: "Materials Purchase", vendor: "GreenSupply Co.", amount: 3500, date: "2024-10-02" }
                      ].map((t) => (
                        <div key={t.title + t.date} className="grid grid-cols-4 gap-2 border-b pb-2 text-sm">
                          <div>{t.title}</div>
                          <div className="text-gray-600">{t.vendor}</div>
                          <div className="text-green-600 font-semibold">${t.amount.toLocaleString()}</div>
                          <div className="text-gray-600">{new Date(t.date).toLocaleDateString()}</div>
                        </div>
                      ))}
                    </div>
                  )
                }
              ]}
              active={tab}
              onChange={setTab}
            />
          </div>
        </div>
      )}
    </div>
  );
}
