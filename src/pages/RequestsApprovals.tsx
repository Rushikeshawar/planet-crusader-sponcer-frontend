import React, { useState } from 'react';
import { Check, X, ChevronDown, FileText, Inbox, Send, Clock } from 'lucide-react';
import { stats, requests, type Request } from '../data/requestsData';

// Helper function to get icon component
const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'fileText':
      return FileText;
    case 'inbox':
      return Inbox;
    case 'send':
      return Send;
    case 'clock':
      return Clock;
    default:
      return FileText;
  }
};

const RequestsApprovals = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const filteredRequests = requests.filter(req => {
    if (typeFilter !== 'all' && req.type !== typeFilter) return false;
    if (statusFilter !== 'all' && req.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="max-w-[960px] mx-auto p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-normal text-gray-900 leading-9">Requests & Approvals</h1>
        <p className="text-base text-gray-600 leading-6">
          Manage incoming sponsorship requests and track your outgoing proposals.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = getIcon(stat.iconType);
          return (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div 
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-10"
                style={{ backgroundColor: stat.bg }}
              >
                <Icon size={24} style={{ color: stat.iconColor }} />
              </div>
              <div className="text-base text-gray-600 mb-2 leading-6">{stat.label}</div>
              <div className="text-base text-gray-900 font-normal leading-6">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Type Filter */}
          <div className="space-y-2">
            <label className="block text-base text-gray-700 leading-6">Filter by Type</label>
            <div className="relative">
              <button
                onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[14px] text-base text-gray-600 text-left flex justify-between items-center hover:border-gray-300"
              >
                {typeFilter === 'all' ? 'All Types' : typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)}
                <ChevronDown size={16} className="text-gray-600" />
              </button>
              {typeDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-700 rounded z-10 shadow-lg">
                  {['all', 'incoming', 'outgoing'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setTypeFilter(type);
                        setTypeDropdownOpen(false);
                      }}
                      className="w-full py-2 px-5 bg-white text-base text-gray-700 text-left hover:bg-gray-100"
                    >
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <label className="block text-base text-gray-700 leading-6">Filter by Status</label>
            <div className="relative">
              <button
                onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[14px] text-base text-gray-600 text-left flex justify-between items-center hover:border-gray-300"
              >
                {statusFilter === 'all' ? 'All Statuses' : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                <ChevronDown size={16} className="text-gray-600" />
              </button>
              {statusDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-700 rounded z-10 shadow-lg">
                  {['all', 'pending', 'approved', 'rejected'].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setStatusDropdownOpen(false);
                      }}
                      className="w-full py-2 px-5 bg-white text-base text-gray-700 text-left hover:bg-gray-100"
                    >
                      {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Request Cards */}
      <div className="space-y-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            {/* Header with badges */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-[10px] text-base font-normal leading-6 flex items-center gap-2 ${
                    request.type === 'incoming'
                      ? 'bg-[#DBEAFE] text-[#1447E6]'
                      : 'bg-[#DCFCE7] text-[#008236]'
                  }`}>
                    {request.type === 'incoming' ? (
                      <Inbox size={16} />
                    ) : (
                      <Send size={16} />
                    )}
                    {request.type.charAt(0).toUpperCase() + request.type.slice(1)}
                  </span>
                  {request.category && (
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700 leading-4">
                      {request.category}
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-[10px] text-base font-normal leading-6 ${
                    request.status === 'pending'
                      ? 'bg-[#FEF9C2] text-[#A65F00]'
                      : request.status === 'approved'
                      ? 'bg-[#DCFCE7] text-[#008236]'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
                {request.schoolBadge && (
                  <div className="px-2.5 py-1 bg-green-100 border border-black rounded-[10px] text-sm">
                    {request.schoolBadge}
                  </div>
                )}
              </div>
              <h3 className="text-base text-gray-900 font-normal leading-6">{request.title}</h3>
              <p className="text-base text-gray-600 leading-6">{request.organization}</p>
              <p className="text-base text-gray-600 leading-6">{request.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-base text-gray-600 leading-6">Amount Requested</div>
                <div className="text-base text-gray-900 font-normal leading-6">{request.amount}</div>
              </div>
              <div className="space-y-2">
                <div className="text-base text-gray-600 leading-6">Timeline</div>
                <div className="text-base text-gray-900 font-normal leading-6">{request.timeline}</div>
              </div>
              <div className="space-y-2">
                <div className="text-base text-gray-600 leading-6">Date Submitted</div>
                <div className="text-base text-gray-900 font-normal leading-6">{request.dateSubmitted}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-200">
              {request.status === 'pending' && request.type === 'incoming' ? (
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 bg-[#00C950] hover:bg-[#00B048] text-white rounded-[14px] text-base font-normal leading-6 flex items-center justify-center gap-2 transition-colors">
                    <Check size={16} />
                    Approve
                  </button>
                  <button className="flex-1 py-2.5 bg-[#FB2C36] hover:bg-[#E02830] text-white rounded-[14px] text-base font-normal leading-6 flex items-center justify-center gap-2 transition-colors">
                    <X size={16} />
                    Reject
                  </button>
                  <button 
                    onClick={() => setSelectedRequest(request)}
                    className="px-4 py-2.5 border border-gray-200 rounded-[14px] text-base text-gray-700 font-normal leading-6 hover:bg-gray-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setSelectedRequest(request)}
                  className="w-full py-2.5 bg-[#F1833F] hover:bg-[#E67336] text-white rounded-[14px] text-base font-normal leading-6 text-center transition-colors"
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRequest && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedRequest(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-[672px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-6 border-b border-gray-200 space-y-1">
              <h2 className="text-xl font-normal text-gray-900 leading-[30px]">
                {selectedRequest.title}
              </h2>
              <p className="text-base text-gray-600 leading-6">
                {selectedRequest.organization}
              </p>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-normal text-gray-900 leading-[27px]">Description</h3>
                <p className="text-base text-gray-600 leading-6">
                  {selectedRequest.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="text-base text-gray-900 font-normal leading-6">Amount Requested</div>
                  <div className="text-base text-gray-600 leading-6">{selectedRequest.amount}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-base text-gray-900 font-normal leading-6">Timeline</div>
                  <div className="text-base text-gray-600 leading-6">{selectedRequest.timeline}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-base text-gray-900 font-normal leading-6">Type</div>
                  <div className="text-base text-gray-600 leading-6">{selectedRequest.category || 'N/A'}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-base text-gray-900 font-normal leading-6">Status</div>
                  <div className="text-base text-gray-600 leading-6">
                    {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedRequest(null)}
                className="w-full py-3 bg-[#FF6900] hover:bg-[#E65F00] text-white rounded-[14px] text-base font-normal leading-6 text-center transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestsApprovals;