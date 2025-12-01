import React from 'react';
import { Card } from './Card';
import { IconWrapper } from './IconWrapper';

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  trend?: string;
  trendColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconBg,
  title,
  value,
  trend,
  trendColor
}) => {
  return (
    <Card padding="md">
      <div className="space-y-4">
        <IconWrapper bgColor={iconBg} size="lg">
          {icon}
        </IconWrapper>
        
        <div>
          <p className="text-base font-normal text-[#4A5565] leading-6 mb-1">
            {title}
          </p>
          <p className="text-base font-normal text-[#101828] leading-6">
            {value}
          </p>
        </div>
        
        {trend && (
          <div className="text-sm font-normal" style={{ color: trendColor }}>
            {trend}
          </div>
        )}
      </div>
    </Card>
  );
};