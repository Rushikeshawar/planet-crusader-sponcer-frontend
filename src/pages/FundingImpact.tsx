import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { 
  fundingOverview, 
  allocationCategories, 
  projects,
  type Project,
  type ImpactMetric 
} from '../data/fundingData';

// Progress Bar Component
const ProgressBar: React.FC<{ percent: number }> = ({ percent }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-sm">
      <span className="text-gray-600">Activity Progress</span>
      <span className="font-semibold text-gray-900">{percent}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500"
        style={{ 
          width: `${percent}%`,
          background: 'linear-gradient(90deg, #FF6900 0%, #00C950 100%)'
        }}
      />
    </div>
  </div>
);

// Donut Chart Component
const DonutChart: React.FC<{ used: number; remaining: number }> = ({ used, remaining }) => {
  const total = used + remaining;
  const usedPercent = (used / total) * 100;
  
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="20" />
        <circle
          cx="50" cy="50" r="40" fill="none" stroke="#56C02B" strokeWidth="20"
          strokeDasharray={`${usedPercent * 2.51327} 251.327`}
          strokeLinecap="round"
        />
        <circle
          cx="50" cy="50" r="40" fill="none" stroke="#F78C3D" strokeWidth="20"
          strokeDasharray={`${(100 - usedPercent) * 2.51327} 251.327`}
          strokeDashoffset={`-${usedPercent * 2.51327}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{Math.round(usedPercent)}%</div>
          <div className="text-sm text-gray-600">Used</div>
        </div>
      </div>
    </div>
  );
};

// Updated Centered Modal
interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fund', label: 'Fund Breakdown' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'docs', label: 'Proof Docs' },
    { id: 'transactions', label: 'Transactions' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Panel - Exactly like your Figma */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: '90vh' }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-normal text-gray-900">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.org}</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex px-8 space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Financial Summary Cards */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="text-gray-600 mb-2">Total Allocated</div>
                  <div className="text-2xl font-semibold text-blue-600">
                    ${project.allocated.toLocaleString()}
                  </div>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 text-center">
                  <div className="text-gray-600 mb-2">Amount Spent</div>
                  <div className="text-2xl font-semibold text-green-600">
                    ${project.spent.toLocaleString()}
                  </div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 text-center">
                  <div className="text-gray-600 mb-2">Remaining</div>
                  <div className="text-2xl font-semibold text-orange-600">
                    ${project.remaining.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Impact Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {project.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-2xl p-6">
                      <div className="text-gray-600 mb-3">{metric.label}</div>
                      <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {['fund', 'timeline', 'docs', 'transactions'].includes(activeTab) && (
            <div className="text-center py-24 text-gray-500 text-lg">
              {activeTab === 'fund' && 'Fund breakdown details coming soon...'}
              {activeTab === 'timeline' && 'Project timeline will appear here'}
              {activeTab === 'docs' && 'Proof documents and receipts will be uploaded here'}
              {activeTab === 'transactions' && 'Full transaction history coming soon'}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-8 py-6">
          <button
            onClick={onClose}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 rounded-2xl transition-colors text-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
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
            <button className="flex items-center gap-3 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium">
              <Download className="w-5 h-5" />
              Download Full Report
            </button>
          </div>

          {/* Funding Overview */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-normal text-gray-900 mb-8">Funding Overview</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-gray-600 mb-2">Total Amount Sponsored</div>
                  <div className="text-3xl font-semibold text-blue-600">
                    ${fundingOverview.totalSponsored.toLocaleString()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <div className="text-gray-600 mb-2">Amount Used</div>
                    <div className="text-2xl font-semibold text-green-600">
                      ${fundingOverview.used.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{fundingOverview.usedPercentage}% used</div>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-6">
                    <div className="text-gray-600 mb-2">Remaining</div>
                    <div className="text-2xl font-semibold text-orange-600">
                      ${fundingOverview.remaining.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{(100 - fundingOverview.usedPercentage).toFixed(1)}% available</div>
                  </div>
                </div>
              </div>
              <DonutChart used={fundingOverview.used} remaining={fundingOverview.remaining} />
            </div>
          </div>

          {/* Allocation Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-normal text-gray-900 mb-8">Allocation Breakdown</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allocationCategories.map((cat, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl flex items-center justify-center text-3xl">
                      {cat.icon}
                    </div>
                    <h3 className="font-medium text-gray-900">{cat.title}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Allocated</span>
                      <span className="font-semibold">${cat.allocated.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Used</span>
                      <span className="font-semibold text-green-600">${cat.used.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Remaining</span>
                      <span className="font-semibold text-orange-600">${cat.remaining.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Usage</span>
                      <span className="font-semibold">{cat.usage}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${cat.usage}%`,
                          background: 'linear-gradient(90deg, #FF6900 0%, #00C950 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects List */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-normal text-gray-900 mb-8">Activity-Level Fund Tracking</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{project.org}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.badge && (
                        <span className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-lg border border-green-200">
                          {project.badge}
                        </span>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-xl hover:bg-orange-700 transition-colors"
                      >
                        View Details
                      </button>
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

                  <ProgressBar percent={project.progress} />

                  <div className="grid grid-cols-4 gap-4 mt-6">
                    {project.impactMetrics.map((m, i) => (
                      <div key={i} className="bg-blue-50 rounded-2xl p-4 text-center">
                        <div className="text-xs text-gray-600 mb-1">{m.label}</div>
                        <div className="font-semibold text-blue-700">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Centered Modal */}
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