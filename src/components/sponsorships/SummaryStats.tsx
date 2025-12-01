import React from 'react';
import { Building2, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { StatCard } from '../common/StatCard';

interface SummaryStatsProps {
  total: number;
  active: number;
  completed: number;
  invested: number;
}

export const SummaryStats: React.FC<SummaryStatsProps> = ({
  total,
  active,
  completed,
  invested
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard
        icon={<Building2 className="w-6 h-6 text-orange-600" />}
        iconBg="#FFF7ED"
        title="Total Sponsorships"
        value={total.toString()}
      />
      
      <StatCard
        icon={<Clock className="w-6 h-6 text-blue-600" />}
        iconBg="#DBEAFE"
        title="Active"
        value={active.toString()}
      />
      
      <StatCard
        icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
        iconBg="#DCFCE7"
        title="Completed"
        value={completed.toString()}
      />
      
      <StatCard
        icon={<DollarSign className="w-6 h-6 text-purple-600" />}
        iconBg="#F3E8FF"
        title="Total Invested"
        value={`$${(invested / 1000).toFixed(0)}K`}
      />
    </div>
  );
};