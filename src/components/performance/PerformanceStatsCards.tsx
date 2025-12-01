import React from 'react';
import { StatCard } from '../common/StatCard';
import { type PerformanceStat } from '../../data/performanceData';

interface PerformanceStatsCardsProps {
  stats: PerformanceStat[];
}

export const PerformanceStatsCards: React.FC<PerformanceStatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <StatCard
          key={idx}
          icon={stat.icon}
          iconBg={stat.iconBg}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          trendColor={stat.trendColor}
        />
      ))}
    </div>
  );
};