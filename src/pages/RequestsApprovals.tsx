import React, { useState } from 'react';
import { RequestStatsCards } from '../components/requests/RequestStatsCards';
import { RequestFilters } from '../components/requests/RequestFilters';
import { RequestCard } from '../components/requests/RequestCard';
import { RequestModal } from '../components/requests/RequestModal';
import { requests, type Request } from '../data/requestsData';

const RequestsApprovals = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [requestsList, setRequestsList] = useState<Request[]>(requests);

  const filteredRequests = requestsList.filter(req => {
    if (typeFilter !== 'all' && req.type !== typeFilter) return false;
    if (statusFilter !== 'all' && req.status !== statusFilter) return false;
    return true;
  });

  const handleApprove = (requestId: number) => {
    setRequestsList(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: 'approved' as const } : req
      )
    );
  };

  const handleReject = (requestId: number) => {
    setRequestsList(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: 'rejected' as const } : req
      )
    );
  };

  // Calculate dynamic stats
  const dynamicStats = [
    { 
      iconType: 'fileText' as const, 
      bg: '#F3E8FF', 
      iconColor: '#9810FA', 
      label: 'Total Requests', 
      value: requestsList.length.toString() 
    },
    { 
      iconType: 'inbox' as const, 
      bg: '#DBEAFE', 
      iconColor: '#155DFC', 
      label: 'Incoming', 
      value: requestsList.filter(r => r.type === 'incoming').length.toString() 
    },
    { 
      iconType: 'send' as const, 
      bg: '#DCFCE7', 
      iconColor: '#00A63E', 
      label: 'Outgoing', 
      value: requestsList.filter(r => r.type === 'outgoing').length.toString() 
    },
    { 
      iconType: 'clock' as const, 
      bg: '#FFEDD4', 
      iconColor: '#F54900', 
      label: 'Pending', 
      value: requestsList.filter(r => r.status === 'pending').length.toString() 
    }
  ];

  return (
    <div className="max-w-[960px] mx-auto p-3 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-normal text-gray-900 leading-9">Requests & Approvals</h1>
        <p className="text-base text-gray-600 leading-6">
          Manage incoming sponsorship requests and track your outgoing proposals.
        </p>
      </div>

      {/* Stats Cards */}
      <RequestStatsCards stats={dynamicStats} />

      {/* Filters */}
      <RequestFilters
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        onTypeChange={setTypeFilter}
        onStatusChange={setStatusFilter}
      />

      {/* Request Cards */}
      <div className="space-y-6">
        {filteredRequests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onViewDetails={() => setSelectedRequest(request)}
            onApprove={() => handleApprove(request.id)}
            onReject={() => handleReject(request.id)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedRequest && (
        <RequestModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
};

export default RequestsApprovals;