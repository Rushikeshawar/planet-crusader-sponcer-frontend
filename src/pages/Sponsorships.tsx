import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Dropdown } from '../components/common/Dropdown';
import { SponsorshipCard } from '../components/sponsorships/SponsorshipCard';
import { SummaryStats } from '../components/sponsorships/SummaryStats';
import { sponsorshipsData } from '../data/sponsorshipsData';

const Sponsorships: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  // Calculate stats
  const totalSponsorships = sponsorshipsData.length;
  const activeSponsorships = sponsorshipsData.filter(s => s.status === 'In Progress').length;
  const completedSponsorships = sponsorshipsData.filter(s => s.status === 'Completed').length;
  const totalInvested = sponsorshipsData.reduce((sum, s) => sum + s.amount, 0);

  // Filter sponsorships
  const filteredSponsorships = sponsorshipsData.filter(s => {
    const matchesType = typeFilter === 'All Types' || s.type === typeFilter.replace('s', '');
    const matchesStatus = statusFilter === 'All Statuses' || s.status === statusFilter;
    return matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-normal text-gray-900 mb-2">My Sponsorships</h1>
          <p className="text-gray-600">
            Manage and track all your sponsorship commitments in one place.
          </p>
        </div>

        {/* Summary Stats */}
        <SummaryStats
          total={totalSponsorships}
          active={activeSponsorships}
          completed={completedSponsorships}
          invested={totalInvested}
        />

        {/* Filters */}
        <Card padding="md">
          <div className="flex gap-4">
            <Dropdown
              label="Filter by Type"
              value={typeFilter}
              onChange={setTypeFilter}
              options={['All Types', 'Roadmaps', 'Activities', 'Schools', 'NGOs']}
            />
            <Dropdown
              label="Filter by Status"
              value={statusFilter}
              onChange={setStatusFilter}
              options={['All Statuses', 'In Progress', 'Completed', 'Pending']}
            />
          </div>
        </Card>

        {/* Sponsorship Cards */}
        <div className="space-y-4">
          {filteredSponsorships.length > 0 ? (
            filteredSponsorships.map((sponsorship) => (
              <SponsorshipCard key={sponsorship.id} sponsorship={sponsorship} />
            ))
          ) : (
            <Card padding="lg">
              <p className="text-gray-500 text-center">
                No sponsorships found matching your filters.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;