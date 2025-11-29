import SummaryCard from "../components/ui/SummaryCard";

export default function Performance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-850 font-semibold">Performance Insights</h2>
          <p className="text-gray-600">Track your global impact and discover insights across schools and SDGs.</p>
        </div>
        <button className="bg-orange-brand text-white px-4 py-2 rounded">Download Report</button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <SummaryCard title="Schools Supported" value="5" iconBg="#E8F1FF" icon={"🏫"} trend="+50% this quarter" />
        <SummaryCard title="Activities Sponsored" value="18" iconBg="#E7F8ED" icon={"🌿"} trend="+35% this quarter" />
        <SummaryCard title="SDGs Impacted" value="10" iconBg="#EFE7FF" icon={"🎯"} trend="Across 17 goals" />
        <SummaryCard title="Students Reached" value="4,160" iconBg="#FFF3E5" icon={"👨‍🎓"} trend="+28% this quarter" />
      </div>

      <div className="space-y-3">
        <h3 className="text-gray-850 font-semibold">Top Performing Organizations</h3>
        <div className="flex gap-2">
          {["All", "Schools", "NGOs / Clubs"].map((f) => (
            <button key={f} className={`px-3 py-1 rounded border ${f==="All" ? "border-orange-brand text-orange-brand" : "border-gray-300 text-gray-700"}`}>{f}</button>
          ))}
        </div>

        {[
          { name: "Eco Warriors Academy", city: "Denver", type: "School", events: 9, progress: 88, score: 200, medal: "🥇" },
          { name: "Green Valley High School", city: "San Francisco", type: "School", events: 8, progress: 75, score: 195, medal: "🥈" },
          { name: "Clean Water Initiative", city: "Austin", type: "NGO", projects: 7, helped: 8500, score: 190, medal: "🥉" }
        ].map((o) => (
          <div key={o.name} className="bg-white border rounded p-4 shadow-card flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-850">{o.medal} {o.name}</div>
              <div className="text-sm text-gray-600">{o.city} • <span className="px-2 py-1 text-xs rounded bg-gray-100">{o.type}</span></div>
              <div className="text-sm text-gray-700 mt-1">{o.events ? `${o.events} events` : `${o.projects} projects • ${o.helped} people helped`}</div>
            </div>
            <div className="text-right">
              <div className="text-sm">Progress: <span className="font-semibold">{o.progress}%</span></div>
              <div className="text-sm">Score: <span className="font-semibold">{o.score}</span></div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-gray-850 font-semibold">Regional Impact Overview</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { region: "United States", supported: 6, focus: "Climate Action & Clean Energy", reach: 4160, participation: "92%" },
            { region: "India", supported: 4, focus: "Quality Education & Clean Water", reach: 2300, participation: "88%" },
            { region: "EU", supported: 3, focus: "Sustainable Cities", reach: 1450, participation: "85%" }
          ].map((r) => (
            <div key={r.region} className="bg-white border rounded p-4 shadow-card">
              <div className="font-semibold text-gray-850">{r.region}</div>
              <div className="text-sm text-gray-700">{r.supported} schools supported</div>
              <div className="text-sm text-gray-700">Primary Focus: {r.focus}</div>
              <div className="text-sm text-gray-700">Total Reach: {r.reach} students • {r.participation} participation</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
