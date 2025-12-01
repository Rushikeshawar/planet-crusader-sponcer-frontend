import React from 'react';
import { Target, TrendingUp, Users, Building2 } from 'lucide-react';
import { Card } from '../common/Card';

interface NGOStatsProps {
  activeProjects: number;
  impactScore: string;
  peopleHelped: string;
  communities: number;
}

export const NGOStats: React.FC<NGOStatsProps> = ({
  activeProjects,
  impactScore,
  peopleHelped,
  communities
}) => {
  const stats = [
    {
      icon: <Target size={24} className="text-[#F54900]" />,
      bg: '#FFEDD4',
      label: 'Active Projects',
      value: activeProjects
    },
    {
      icon: <TrendingUp size={24} className="text-[#00A63E]" />,
      bg: '#DCFCE7',
      label: 'Impact Score',
      value: impactScore
    },
    {
      icon: <Users size={24} className="text-[#155DFC]" />,
      bg: '#DBEAFE',
      label: 'People Helped',
      value: peopleHelped
    },
    {
      icon: <Building2 size={24} className="text-[#9810FA]" />,
      bg: '#F3E8FF',
      label: 'Communities',
      value: communities
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} padding="md">
          <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-10" style={{ backgroundColor: stat.bg }}>
            {stat.icon}
          </div>
          <div className="text-base text-gray-600 mb-2 leading-6">{stat.label}</div>
          <div className="text-base text-gray-900 font-normal leading-6">{stat.value}</div>
        </Card>
      ))}
    </div>
  );
};