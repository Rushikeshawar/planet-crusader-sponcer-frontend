import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface RegionalImpactItem {
  region: string;
  icon: React.ReactNode;
  supported: string;
  focus?: string;
  participation?: string;
  sdgs?: Array<{ id: number; label: string; color: string }>;
  states?: string[];
}

interface RegionalImpactProps {
  regions: RegionalImpactItem[];
}

export const RegionalImpact: React.FC<RegionalImpactProps> = ({ regions }) => {
  return (
    <Card padding="md">
      <h2 className="text-base font-normal text-gray-900 mb-6">Regional Impact Overview</h2>

      <div className="grid grid-cols-3 gap-4">
        {regions.map((region, idx) => (
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
                  <Badge
                    key={sdg.id}
                    bgColor={sdg.color}
                    textColor="white"
                    size="sm"
                  >
                    {sdg.label}
                  </Badge>
                ))}
              </div>
            )}

            {region.states && (
              <div className="flex flex-wrap gap-2">
                {region.states.map((state) => (
                  <Badge
                    key={state}
                    variant="info"
                    size="sm"
                  >
                    {state}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};