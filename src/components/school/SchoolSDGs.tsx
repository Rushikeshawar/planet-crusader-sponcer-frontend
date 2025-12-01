import React from 'react';
import { Card } from '../common/Card';

interface SDG {
  id: number;
  name: string;
  color: string;
}

interface SchoolSDGsProps {
  sdgs: SDG[];
}

export const SchoolSDGs: React.FC<SchoolSDGsProps> = ({ sdgs }) => {
  return (
    <Card padding="md">
      <h2 className="text-base font-normal text-gray-900 mb-4">SDG Focus Areas</h2>
      <div className="grid grid-cols-3 gap-4">
        {sdgs.map((sdg) => (
          <div
            key={sdg.id}
            className="p-4 rounded-xl text-white"
            style={{ backgroundColor: sdg.color }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-normal">{sdg.id}</span>
              </div>
              <div>
                <div className="text-sm opacity-90">SDG {sdg.id}</div>
                <div className="font-normal">{sdg.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};