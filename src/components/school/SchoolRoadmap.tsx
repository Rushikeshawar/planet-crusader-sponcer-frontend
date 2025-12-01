import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';

interface Roadmap {
  title: string;
  desc: string;
  badge: string;
  timeline: string;
  fundingNeeded: number;
  fundingReceived: number;
  progress: number;
}

interface SchoolRoadmapProps {
  roadmap: Roadmap;
  onSponsor: (title: string) => void;
}

export const SchoolRoadmap: React.FC<SchoolRoadmapProps> = ({ roadmap, onSponsor }) => {
  return (
    <Card padding="md">
      <h2 className="text-base font-normal text-gray-900 mb-4">Active Roadmaps</h2>

      <div className="border border-gray-200 rounded-xl p-4 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base font-normal text-gray-900 mb-1">{roadmap.title}</h3>
            <p className="text-gray-600 text-sm">{roadmap.desc}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge bgColor="rgba(220, 252, 231, 0.7)" textColor="#000" size="md">
              {roadmap.badge}
            </Badge>
            <Badge bgColor="#3F7E44" textColor="white" size="md">
              SDG 13
            </Badge>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-gray-600 text-sm mb-1">Timeline</div>
            <div className="font-semibold text-gray-900">{roadmap.timeline}</div>
          </div>
          <div>
            <div className="text-gray-600 text-sm mb-1">Funding Needed</div>
            <div className="font-semibold text-gray-900">${roadmap.fundingNeeded.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-gray-600 text-sm mb-1">Funding Received</div>
            <div className="font-semibold text-green-600">${roadmap.fundingReceived.toLocaleString()}</div>
          </div>
        </div>

        {/* Progress */}
        <ProgressBar percent={roadmap.progress} />

        {/* Sponsor Button */}
        <Button variant="primary" onClick={() => onSponsor(roadmap.title)} className="w-full">
          Sponsor this Roadmap
        </Button>
      </div>
    </Card>
  );
};