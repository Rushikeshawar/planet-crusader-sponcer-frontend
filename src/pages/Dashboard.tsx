import React from "react";
import { ChevronRight, Sprout, Users } from "lucide-react";

// ✅ Import all external data
import {
  dashboardSummaryCards,
  activeSponsorships,
  featuredSchools,
} from "../data/dashboard";

// Progress Bar Component
interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[#4A5565] text-base font-normal leading-6">
        Progress
      </span>
      <span className="text-[#101828] text-base font-normal leading-6">
        {percent}%
      </span>
    </div>
    <div className="w-full h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-500"
        style={{
          width: `${percent}%`,
          background: "linear-gradient(90deg, #FF6900 0%, #00C950 100%)",
        }}
      />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl font-normal text-[#101828] leading-9">
          Welcome back! 👋
        </h1>
        <p className="text-base font-normal text-[#4A5565] leading-6">
          Track your impact and discover new opportunities to support schools.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dashboardSummaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#E5E7EB]"
            style={{ padding: "24.8px 24.8px 0.8px" }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center h-12">
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl"
                  style={{ backgroundColor: card.bg }}
                >
                  {card.icon}
                </div>
                <div className="px-2 py-1 bg-[#F0FDF4] rounded-[10px]">
                  <span className="text-xs font-normal text-[#00A63E] leading-4">
                    {card.trend}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-base font-normal text-[#4A5565] leading-6 mb-1">
                  {card.title}
                </p>
                <p className="text-base font-normal text-[#101828] leading-6">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Sponsorships */}
      <div
        className="bg-white rounded-2xl border border-[#E5E7EB] space-y-6"
        style={{ padding: "24.8px 24.8px 0.8px" }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-normal text-[#101828] leading-7 mb-1">
              Active Sponsorships
            </h2>
            <p className="text-base font-normal text-[#4A5565] leading-6">
              Track progress on your current commitments
            </p>
          </div>

          <button className="h-10 px-4 bg-[#F1833F] text-white rounded-[14px] hover:bg-[#e5762e] transition-colors flex items-center gap-2">
            <span className="text-base font-normal leading-6">View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 pb-6">
          {activeSponsorships.map((item, idx) => (
            <div
              key={idx}
              className="border border-[#E5E7EB] rounded-[14px] space-y-3"
              style={{ padding: "16.8px 16.8px 0.8px" }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-normal text-[#101828] leading-6 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-[#4A5565] leading-6">
                    {item.school}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <div
                      className="h-8 px-2.5 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: "rgba(217, 255, 220, 0.70)",
                        border: "0.5px solid black",
                      }}
                    >
                      <span className="text-sm font-normal text-black leading-5">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="h-8 px-3 bg-[#F0FDF4] rounded-[10px] flex items-center">
                    <span className="text-base font-normal text-[#00A63E] leading-6">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <ProgressBar percent={item.progress} />

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pb-3">
                <div className="flex items-center gap-2 text-base font-normal text-[#4A5565] leading-6">
                  <Sprout className="w-4 h-4" />
                  <span>CO₂ Reduction: {item.co2}</span>
                </div>

                <div className="flex items-center gap-2 text-base font-normal text-[#4A5565] leading-6">
                  <Users className="w-4 h-4" />
                  <span>Students Engaged: {item.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Schools */}
      <div
        className="bg-white rounded-2xl border border-[#E5E7EB] space-y-6"
        style={{ padding: "24.8px 24.8px 0.8px" }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-normal text-[#101828] leading-7 mb-1">
              Featured Schools
            </h2>
            <p className="text-base font-normal text-[#4A5565] leading-6">
              Top-performing schools making an impact
            </p>
          </div>

        <button className="h-10 px-4 bg-[#F1833F] text-white rounded-[14px] hover:bg-[#e5762e] transition-colors flex items-center gap-2">
          <span className="text-base font-normal leading-6">Explore All</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {featuredSchools.map((school, idx) => (
          <div
            key={idx}
            className="border border-[#E5E7EB] rounded-[14px] space-y-3"
            style={{ padding: "16.8px 16.8px 0.8px" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FF8904 0%, #05DF72 100%)",
                }}
              >
                🌍
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-normal text-[#101828] leading-6 truncate">
                  {school.name}
                </h3>
                <p className="text-base font-normal text-[#4A5565] leading-6">
                  {school.city}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[school.score, school.sdg1, school.sdg2].map((badge, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-[#DCFCE7] rounded-[10px] flex items-center justify-center"
                >
                  <span className="text-xs font-normal text-[#008236] leading-4">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-base font-normal text-[#4A5565] leading-6 pb-3">
              <span>{school.students} students</span>
              <span>{school.events} events</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
