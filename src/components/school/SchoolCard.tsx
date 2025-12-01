import React from 'react';
import { Users, Calendar, Target } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface SchoolCardProps {
  logo: string;
  name: string;
  desc: string;
  students: number;
  events: number;
  goals: number;
  onSponsor: () => void;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({
  logo,
  name,
  desc,
  students,
  events,
  goals,
  onSponsor
}) => {
  return (
    <Card padding="none" className="overflow-hidden">
      {/* Header Image */}
      <div
        className="h-64 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #FFD6A7 0%, #B9F8CF 100%)' }}
      >
        <div className="text-8xl">{logo}</div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <p className="text-gray-600">{desc}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-orange-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-medium">Students</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">{students}</div>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">Active Events</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">{events}</div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5text-blue-600" />
<span className="text-blue-600 font-medium">SDG Focus</span>
</div>
<div className="text-2xl font-semibold text-gray-900">{goals} Goals</div>
</div>
</div>
    {/* Sponsor Button */}
    <Button variant="primary" onClick={onSponsor} className="w-full" icon={Calendar}>
      Sponsor this School
    </Button>
  </div>
</Card>
);
};