import React from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';

interface Roadmap {
  title: string;
  description: string;
  badge?: string;
  budget: string;
  timeline: string;
  progress: number;
}

interface NGORoadmapsProps {
  roadmaps: Roadmap[];
  onSponsorRoadmap: (title: string) => void;
  onSponsorGeneral: () => void;
}

export const NGORoadmaps: React.FC<NGORoadmapsProps> = ({
  roadmaps,
  onSponsorRoadmap,
  onSponsorGeneral
}) => {
  return (
    <Card padding="md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-normal text-gray-900 leading-6">Active Roadmaps & Programs</h3>
        <Button variant="primary" size="sm" onClick={onSponsorGeneral}>
          Sponsor a Roadmap
        </Button>
      </div>

      <div className="space-y-4">
        {roadmaps.map((roadmap, idx) => (
          <div key={idx} className="border border-gray-200 rounded-[14px] p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <h4 className="text-base font-normal text-gray-900 leading-6">{roadmap.title}</h4>
                <p className="text-base text-gray-600 leading-6">{roadmap.description}</p>
              </div>
              <Button
                variant="success"
                size="sm"
                onClick={() => onSponsorRoadmap(roadmap.title)}
                className="ml-4"
              >
                Sponsor
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-gray-600 mb-1">Budget</div>
                <div className="text-base text-gray-900 font-normal">{roadmap.budget}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Timeline</div>
                <div className="text-base text-gray-900 font-normal">{roadmap.timeline}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Progress</div>
                <div className="text-base text-gray-900 font-normal">{roadmap.progress}%</div>
              </div>
            </div>

            <ProgressBar percent={roadmap.progress} showPercentage={false} />
          </div>
        ))}
      </div>
    </Card>
  );
};