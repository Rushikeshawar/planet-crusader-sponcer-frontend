import React, { useState } from 'react';
import { X, Download, CheckCircle, Clock, Circle, FileText, Image as ImageIcon } from 'lucide-react';
import { type Project } from '../../data/fundingData';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fund', label: 'Fund Breakdown' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'docs', label: 'Proof Docs' },
    { id: 'transactions', label: 'Transactions' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-white" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-white" />;
      case 'upcoming':
        return <Circle className="w-3 h-3 bg-white rounded-full" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-orange-500';
      case 'upcoming':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-600';
      case 'in-progress':
        return 'bg-orange-50 text-orange-600';
      case 'upcoming':
        return 'bg-gray-100 text-gray-600';
      case 'verified':
        return 'bg-green-50 text-green-600';
      case 'pending':
        return 'bg-yellow-50 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="absolute inset-0" onClick={onClose} />

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

          {activeTab === 'fund' && project.fundBreakdown && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Expenditure Breakdown</h3>
              <div className="space-y-4">
                {project.fundBreakdown.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl px-4 py-5 flex justify-between items-center">
                    <span className="text-gray-900">{item.category}</span>
                    <span className="text-green-600 font-semibold">${item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                <span className="text-gray-900 font-medium">Total Spent</span>
                <span className="text-gray-900 font-semibold text-lg">${project.spent.toLocaleString()}</span>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && project.timeline && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Project Timeline</h3>
              <div className="space-y-0">
                {project.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </div>
                      {idx < project.timeline!.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-gray-900 font-medium">{item.title}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getStatusBadge(item.status)}`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="text-gray-600">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'docs' && project.documents && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Proof Documents & Photos</h3>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" />
                  Download All
                </button>
              </div>
              <div className="space-y-4">
                {project.documents.map((doc, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-4 flex items-center gap-4 hover:border-gray-300 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                      {doc.type === 'image' ? (
                        <ImageIcon className="w-6 h-6 text-orange-600" />
                      ) : (
                        <FileText className="w-6 h-6 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium">{doc.title}</div>
                      <div className="text-gray-600 text-sm">{doc.date}</div>
                    </div>
                    <Download className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'transactions' && project.transactions && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Transaction History</h3>
              <div className="space-y-4">
                {project.transactions.map((transaction, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-gray-900 font-medium">{transaction.title}</div>
                        <div className="text-gray-600 text-sm">{transaction.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900 font-semibold">${transaction.amount.toLocaleString()}</div>
                        <span className={`inline-block px-2 py-1 rounded text-xs mt-1 ${getStatusBadge(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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