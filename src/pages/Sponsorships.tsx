import React, { useState } from 'react';
import { Building2, CheckCircle2, Clock, DollarSign, ChevronDown } from 'lucide-react';
import { sponsorshipsData, summaryStatsConfig, type Sponsorship } from '../data/sponsorshipsData';

// Helper function to get icon component
const getIcon = (iconType: string, className: string) => {
  switch (iconType) {
    case 'building':
      return <Building2 className={className} />;
    case 'checkCircle':
      return <CheckCircle2 className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'dollarSign':
      return <DollarSign className={className} />;
    default:
      return null;
  }
};

// Progress Bar Component
const ProgressBar: React.FC<{ percent: number }> = ({ percent }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-600">Overall Progress</span>
      <span className="font-semibold text-gray-900">{percent}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500"
        style={{ 
          width: `${percent}%`,
          background: 'linear-gradient(90deg, #FF6900 0%, #00C950 100%)'
        }}
      />
    </div>
  </div>
);

// Summary Card Component
interface SummaryCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, iconBg, label, value }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4`} style={{ backgroundColor: iconBg }}>
      {icon}
    </div>
    <div className="text-gray-600 mb-1">{label}</div>
    <div className="text-2xl font-semibold text-gray-900">{value}</div>
  </div>
);

// Dropdown Component
interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, onChange, options }) => (
  <div className="flex-1 space-y-2">
    <label className="block text-gray-700">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
    </div>
  </div>
);

// Sponsorship Card Component
interface SponsorshipCardProps extends Sponsorship {}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({
  title,
  org,
  type,
  status,
  amount,
  startDate,
  progress,
  impactMetrics,
  note,
  badge
}) => {
  const statusColors = {
    'In Progress': { bg: '#DCFCE7', text: '#008236' },
    'Completed': { bg: '#F3F4F6', text: '#364153' },
    'Pending': { bg: '#FEF3C7', text: '#F59E0B' }
  };

  const typeColors = {
    'Roadmap': { bg: '#FFF7ED', text: '#F54900' },
    'Activity': { bg: '#FFF7ED', text: '#F54900' },
    'School': { bg: '#FFF7ED', text: '#F54900' },
    'NGO': { bg: '#FFF7ED', text: '#F54900' }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-green-400 rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-normal text-gray-900">{title}</h3>
              <span 
                className="px-2 py-0.5 rounded text-xs font-normal"
                style={{ 
                  backgroundColor: typeColors[type].bg, 
                  color: typeColors[type].text 
                }}
              >
                {type}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{org}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <div className="px-3 py-1.5 bg-green-100 border border-black/10 rounded-lg text-sm">
              {badge}
            </div>
          )}
          <div 
            className="px-3 py-1.5 rounded-lg text-sm font-normal"
            style={{ 
              backgroundColor: statusColors[status].bg, 
              color: statusColors[status].text 
            }}
          >
            {status}
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="text-gray-600 text-sm mb-1">Amount</div>
          <div className="font-semibold text-gray-900">${amount.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-600 text-sm mb-1">Start Date</div>
          <div className="font-semibold text-gray-900">{startDate}</div>
        </div>
        <div>
          <div className="text-gray-600 text-sm mb-1">Progress</div>
          <div className="font-semibold text-gray-900">{progress}%</div>
        </div>
        <div>
          <div className="text-gray-600 text-sm mb-1">Impact Metrics</div>
          <div className="font-semibold text-gray-900">{impactMetrics.length} tracked</div>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar percent={progress} />

      {/* Impact Metrics */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-gray-600 mb-3">Impact Metrics</h4>
        <div className="grid grid-cols-3 gap-4">
          {impactMetrics.map((metric, idx) => (
            <div key={idx} className="bg-green-50 rounded-xl p-3">
              <div className="text-gray-600 text-sm mb-1">{metric.label}</div>
              <div className="text-green-600 font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      {note && (
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-gray-600 italic text-sm">"{note}"</p>
        </div>
      )}
    </div>
  );
};

// Main Sponsorships Page Component
const Sponsorships: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  // Calculate stats
  const totalSponsorships = sponsorshipsData.length;
  const activeSponsorships = sponsorshipsData.filter(s => s.status === 'In Progress').length;
  const completedSponsorships = sponsorshipsData.filter(s => s.status === 'Completed').length;
  const totalInvested = sponsorshipsData.reduce((sum, s) => sum + s.amount, 0);

  const statsValues = [
    totalSponsorships.toString(),
    activeSponsorships.toString(),
    completedSponsorships.toString(),
    `$${(totalInvested / 1000).toFixed(0)}K`
  ];

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
          <p className="text-gray-600">Manage and track all your sponsorship commitments in one place.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4">
          {summaryStatsConfig.map((config, idx) => (
            <SummaryCard
              key={idx}
              icon={getIcon(config.iconType, `w-6 h-6`)}
              iconBg={config.iconBg}
              label={config.label}
              value={statsValues[idx]}
            />
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
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
        </div>

        {/* Sponsorship Cards */}
        <div className="space-y-4">
          {filteredSponsorships.length > 0 ? (
            filteredSponsorships.map((sponsorship) => (
              <SponsorshipCard key={sponsorship.id} {...sponsorship} />
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <p className="text-gray-500">No sponsorships found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsorships;