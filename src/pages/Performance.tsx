import React, { useState } from 'react';
import { Download, Activity, TrendingUp } from 'lucide-react';
import {
  performanceStats,
  topOrganizations,
  regionalImpact,
  type Organization,
  type PerformanceStat
} from '../data/performanceData';

// Stats Card Component
interface StatsCardProps extends PerformanceStat {}

const StatsCard: React.FC<StatsCardProps> = ({ icon, iconBg, title, value, trend, trendColor }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6">
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
      style={{ backgroundColor: iconBg }}
    >
      {icon}
    </div>
    <div className="text-gray-600 mb-1">{title}</div>
    <div className="text-2xl font-semibold text-gray-900 mb-2">{value}</div>
    <div className="text-sm font-normal" style={{ color: trendColor }}>
      {trend}
    </div>
  </div>
);

// Organization Card Component
interface OrganizationCardProps extends Organization {}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  name,
  location,
  type,
  medal,
  events,
  projects,
  progress,
  peopleHelped,
  score
}) => {
  const medalBgColors: { [key: string]: string } = {
    '🥇': '#FEF9C2',
    '🥈': '#E5E7EB',
    '🥉': '#FFEDD4'
  };

  const typeBgColors = {
    School: { bg: '#DBEAFE', text: '#1447E6' },
    NGO: { bg: '#F3E8FF', text: '#8200DB' }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
      {/* Left: Medal & Info */}
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: medal ? medalBgColors[medal] : '#F3F4F6' }}
        >
          {medal || '🌍'}
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-normal text-gray-900">{name}</h3>
            <span 
              className="px-2 py-0.5 rounded text-xs font-normal"
              style={{ 
                backgroundColor: typeBgColors[type].bg,
                color: typeBgColors[type].text
              }}
            >
              {type}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>

      {/* Center: Stats */}
      <div className="flex items-start gap-12">
        <div className="text-sm">
          <div className="flex items-center gap-2 text-gray-900 mb-1">
            <Activity className="w-4 h-4 text-orange-600" />
            <span>{events ? `${events} events` : `${projects} projects`}</span>
          </div>
          {progress !== undefined ? (
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span>{progress} % progress</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span>{peopleHelped?.toLocaleString()} people helped</span>
            </div>
          )}
        </div>

        {/* Right: Score */}
        <div className="text-right">
          <div className="text-gray-600 text-sm mb-1">Performance Score</div>
          <div className="text-orange-600 font-semibold text-lg">{score}</div>
        </div>
      </div>
    </div>
  );
};

// Main Component
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
          <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5" />
            Download Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          {performanceStats.map((stat, idx) => (
            <StatsCard key={idx} {...stat} />
          ))}
        </div>

        {/* Top Performing Organizations */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
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
              <OrganizationCard key={org.id} {...org} />
            ))}
          </div>
        </div>

        {/* Regional Impact Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-normal text-gray-900 mb-6">Regional Impact Overview</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {regionalImpact.map((region, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2">
                  {region.icon}
                  <h3 className="font-normal text-gray-900">{region.region}</h3>
                </div>

                <p className="text-gray-600 text-sm">{region.supported}</p>

                {region.focus && (
                  <p className="text-gray-600 text-sm">{region.focus}</p>
                )}

                {region.participation && (
                  <p className="text-green-600 text-sm font-medium">{region.participation}</p>
                )}

                {region.sdgs && (
                  <div className="flex flex-wrap gap-2">
                    {region.sdgs.map((sdg) => (
                      <span
                        key={sdg.id}
                        className="px-2 py-0.5 rounded text-white text-xs font-medium"
                        style={{ backgroundColor: sdg.color }}
                      >
                        {sdg.label}
                      </span>
                    ))}
                  </div>
                )}

                {region.states && (
                  <div className="flex flex-wrap gap-2">
                    {region.states.map((state) => (
                      <span
                        key={state}
                        className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs"
                      >
                        {state}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsights;