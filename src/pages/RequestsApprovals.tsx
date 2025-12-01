import React, { useState } from 'react';
import { RequestStatsCards } from '../components/requests/RequestStatsCards';
import { RequestFilters } from '../components/requests/RequestFilters';
import { RequestCard } from '../components/requests/RequestCard';
import { RequestModal } from '../components/requests/RequestModal';
import { stats, requests, type Request } from '../data/requestsData';

const RequestsApprovals = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const filteredRequests = requests.filter(req => {
    if (typeFilter !== 'all' && req.type !== typeFilter) return false;
    if (statusFilter !== 'all' && req.status !== statusFilter) return false;
    return true;
  });

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
      <RequestStatsCards stats={stats} />

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
            onApprove={() => alert('Request approved!')}
            onReject={() => alert('Request rejected!')}
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