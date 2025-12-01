import React from 'react';
import { Users } from 'lucide-react';
import { Card } from '../common/Card';

interface StatsCardsProps {
  total: number;
  schools: number;
  ngos: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({ total, schools, ngos }) => {
  const stats = [
    { label: 'Total Organizations', value: total, bg: '#DBEAFE', iconColor: '#155DFC' },
    { label: 'Schools', value: schools, bg: '#F3E8FF', iconColor: '#9810FA' },
    { label: 'NGOs / Clubs', value: ngos, bg: '#CBFBF1', iconColor: '#009689' }
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <Card key={idx} padding="md">
          <div className="flex items-start gap-3 pb-6">
            <div
              className="w-10 h-10 rounded-[14px] flex items-center justify-center"
              style={{ backgroundColor: stat.bg }}
            >
              <Users className="w-5 h-5" style={{ color: stat.iconColor }} />
            </div>
            <div>
              <p className="text-base font-normal text-[#4A5565]">{stat.label}</p>
              <p className="text-lg font-normal text-[#101828]">{stat.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};