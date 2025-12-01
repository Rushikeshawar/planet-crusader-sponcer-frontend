import React from 'react';
import { Building2 } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';
import { IconWrapper } from '../common/IconWrapper';
import { type Sponsorship } from '../../data/sponsorshipsData';
import shvrBadge from '../../assets/shvr_badge.png';

interface SponsorshipCardProps {
  sponsorship: Sponsorship;
}

export const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ sponsorship }) => {
  const {
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
  } = sponsorship;

  const statusConfig = {
    'In Progress': { variant: 'success' as const },
    'Completed': { variant: 'default' as const },
    'Pending': { variant: 'warning' as const }
  };

  return (
    <Card padding="md">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <IconWrapper 
              bgColor="linear-gradient(to bottom right, #fb923c, #4ade80)"
              size="md"
            >
              <Building2 className="w-6 h-6 text-white" />
            </IconWrapper>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-normal text-gray-900">{title}</h3>
                <Badge bgColor="#FFF7ED" textColor="#F54900" size="sm">
                  {type}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm">{org}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {badge && (
              <div className="h-8 flex items-center justify-center">
                <img 
                  src={shvrBadge} 
                  alt={badge}
                  className="h-8 w-auto object-contain"
                />
              </div>
            )}
            <Badge variant={statusConfig[status].variant} size="md">
              {status}
            </Badge>
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
        <ProgressBar percent={progress} label="Overall Progress" />

        {/* Impact Metrics */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-gray-600 mb-3">Impact Metrics</h4>
          <div className="grid grid-cols-3 gap-4">
            {impactMetrics.map((metric, idx) => (
              <Card key={idx} padding="sm" className="bg-green-50">
                <div className="text-gray-600 text-sm mb-1">{metric.label}</div>
                <div className="text-green-600 font-semibold">{metric.value}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Note */}
        {note && (
          <Card padding="sm" className="bg-gray-50">
            <p className="text-gray-600 italic text-sm">"{note}"</p>
          </Card>
        )}
      </div>
    </Card>
  );
};