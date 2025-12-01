import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';
import { type Project } from '../../data/fundingData';
import shvrBadge from '../../assets/shvr_badge.png';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card padding="md" className="hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
            <Badge bgColor="#FFF7ED" textColor="#F97316" size="sm">
              {project.type}
            </Badge>
          </div>
          <p className="text-gray-600">{project.org}</p>
        </div>
        <div className="flex items-center gap-3">
          {project.badge && (
            <div className="h-8 flex items-center justify-center">
              <img 
                src={shvrBadge} 
                alt={project.badge}
                className="h-8 w-auto object-contain"
              />
            </div>
          )}
          <Button variant="primary" size="sm" onClick={onViewDetails}>
            View Details
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-sm mb-1">Allocated</div>
          <div className="font-semibold text-gray-900">${project.allocated.toLocaleString()}</div>
        </div>
        <div className="bg-green-50 rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-sm mb-1">Spent</div>
          <div className="font-semibold text-green-600">${project.spent.toLocaleString()}</div>
        </div>
        <div className="bg-orange-50 rounded-2xl p-4 text-center">
          <div className="text-gray-600 text-sm mb-1">Remaining</div>
          <div className="font-semibold text-orange-600">${project.remaining.toLocaleString()}</div>
        </div>
      </div>

      <ProgressBar percent={project.progress} label="Activity Progress" />

      <div className="grid grid-cols-4 gap-4 mt-6">
        {project.impactMetrics.map((m, i) => (
          <div key={i} className="bg-blue-50 rounded-2xl p-4 text-center">
            <div className="text-xs text-gray-600 mb-1">{m.label}</div>
            <div className="font-semibold text-blue-700">{m.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};