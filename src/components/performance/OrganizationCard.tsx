import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';
import { Badge } from '../common/Badge';
import { type Organization } from '../../data/performanceData';

interface OrganizationCardProps {
  organization: Organization;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  const {
    name,
    location,
    type,
    medal,
    events,
    projects,
    progress,
    peopleHelped,
    score
  } = organization;

  const medalBgColors: { [key: string]: string } = {
    '🥇': '#FEF9C2',
    '🥈': '#E5E7EB',
    '🥉': '#FFEDD4'
  };

  const typeConfig = {
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
            <Badge
              bgColor={typeConfig[type].bg}
              textColor={typeConfig[type].text}
              size="sm"
            >
              {type}
            </Badge>
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
              <span>{progress}% progress</span>
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