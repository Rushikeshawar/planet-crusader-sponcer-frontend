// src/pages/Dashboard.tsx
import React from "react";
import { SummaryCards } from '../components/dashboard/SummaryCards';
import { ActiveSponsorships } from '../components/dashboard/ActiveSponsorships';
import { FeaturedSchools } from '../components/dashboard/FeaturedSchools';
import {
  dashboardSummaryCards,
  activeSponsorships,
  featuredSchools,
} from "../data/dashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-4 space-y-5">
      {/* Welcome Section */}
      <div className="space-y-1">
        <h1 className="text-2xl font-normal text-[#101828] leading-9">
          Welcome back! 👋
        </h1>
        <p className="text-base font-normal text-[#4A5565] leading-6">
          Track your impact and discover new opportunities to support schools.
        </p>
      </div>

      {/* Summary Cards */}
      <SummaryCards cards={dashboardSummaryCards} />

      {/* Active Sponsorships */}
      <ActiveSponsorships sponsorships={activeSponsorships} />

      {/* Featured Schools */}
      <FeaturedSchools schools={featuredSchools} />
    </div>
  );
}