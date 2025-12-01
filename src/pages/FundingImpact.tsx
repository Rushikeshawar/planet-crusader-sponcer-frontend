import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { FundingOverview } from '../components/funding/FundingOverview';
import { AllocationCard } from '../components/funding/AllocationCard';
import { ProjectCard } from '../components/funding/ProjectCard';
import { ProjectDetailModal } from '../components/funding/ProjectDetailModal';
import {
  fundingOverview,
  allocationCategories,
  projects,
  type Project
} from '../data/fundingData';

const FundingImpact: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-normal text-gray-900 mb-2">
                Funding & Impact Tracking
              </h1>
              <p className="text-gray-600">
                Track how your funds are being used and the real-world impact they create.
              </p>
            </div>
            <Button variant="primary" icon={Download} iconPosition="left">
              Download Full Report
            </Button>
          </div>

          {/* Funding Overview */}
          <FundingOverview {...fundingOverview} />

          {/* Allocation Breakdown */}
          <Card padding="lg">
            <h2 className="text-xl font-normal text-gray-900 mb-8">Allocation Breakdown</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allocationCategories.map((cat, i) => (
                <AllocationCard key={i} category={cat} />
              ))}
            </div>
          </Card>

          {/* Projects List */}
          <Card padding="lg">
            <h2 className="text-xl font-normal text-gray-900 mb-8">Activity-Level Fund Tracking</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default FundingImpact;