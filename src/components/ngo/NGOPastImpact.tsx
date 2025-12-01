import React from 'react';
import { Users, Building2 } from 'lucide-react';
import { Card } from '../common/Card';

interface PastImpact {
  label: string;
  value: string;
  color: string;
  icon?: string;
}

interface NGOPastImpactProps {
  impacts: PastImpact[];
}

export const NGOPastImpact: React.FC<NGOPastImpactProps> = ({ impacts }) => {
  const getIcon = (iconType: string | undefined, color: string) => {
    if (!iconType) {
      return <Building2 size={24} style={{ color }} />;
    }
    
    if (iconType === 'Trees' || iconType === 'Factory') {
      return <div className="text-2xl">{iconType}</div>;
    }
    if (iconType === 'People Helped') {
      return <Users size={24} style={{ color }} />;
    }
    return <Building2 size={24} style={{ color }} />;
  };

  return (
    <Card padding="md">
      <h3 className="text-base font-normal text-gray-900 leading-6 mb-6">Past Impact</h3>
      <div className="grid grid-cols-4 gap-6">
        {impacts.map((impact, idx) => (
          <div
            key={idx}
            className="p-4 rounded-[14px]"
            style={{ backgroundColor: `${impact.color}15` }}
          >
            <div className="flex items-center gap-3 mb-2">
              {getIcon(impact.icon, impact.color)}
              <div className="text-xs text-gray-600">{impact.label}</div>
            </div>
            <div className="text-base font-normal" style={{ color: impact.color }}>
              {impact.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};