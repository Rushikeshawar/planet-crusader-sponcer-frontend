import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { PerformanceStatsCards } from '../components/performance/PerformanceStatsCards';
import { OrganizationCard } from '../components/performance/OrganizationCard';
import { RegionalImpact } from '../components/performance/RegionalImpact';
import {
  performanceStats,
  topOrganizations,
  regionalImpact
} from '../data/performanceData';

const PerformanceInsights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Schools' | 'NGOs / Clubs'>('All');

  const filters: ('All' | 'Schools' | 'NGOs / Clubs')[] = ['All', 'Schools', 'NGOs / Clubs'];

  const filteredOrganizations = topOrganizations.filter(org => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Schools') return org.type === 'School';
    if (activeFilter === 'NGOs / Clubs') return org.type === 'NGO';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-normal text-gray-900 mb-2">Performance Insights</h1>
            <p className="text-gray-600">
              Track your global impact and discover insights across schools and SDGs.
            </p>
          </div>
          <Button variant="primary" icon={Download} iconPosition="left">
            Download Report
          </Button>
        </div>

        {/* Stats Cards */}
        <PerformanceStatsCards stats={performanceStats} />

        {/* Top Performing Organizations */}
        <Card padding="md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-normal text-gray-900">Top Performing Organizations</h2>

            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredOrganizations.map((org) => (
              <OrganizationCard key={org.id} organization={org} />
            ))}
          </div>
        </Card>

        {/* Regional Impact Overview */}
        <RegionalImpact regions={regionalImpact} />
      </div>
    </div>
  );
};

export default PerformanceInsights;