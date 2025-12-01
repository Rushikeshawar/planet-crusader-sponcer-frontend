import React from 'react';
import { Check, X, Inbox, Send } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { type Request } from '../../data/requestsData';

interface RequestCardProps {
  request: Request;
  onViewDetails: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({
  request,
  onViewDetails,
  onApprove,
  onReject
}) => {
  const statusConfig = {
    pending: { variant: 'warning' as const },
    approved: { variant: 'success' as const },
    rejected: { variant: 'error' as const }
  };

  return (
    <Card padding="md">
      {/* Header with badges */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge
              variant={request.type === 'incoming' ? 'info' : 'success'}
              size="md"
              className="flex items-center gap-2"
            >
              {request.type === 'incoming' ? (
                <Inbox size={16} />
              ) : (
                <Send size={16} />
              )}
              {request.type.charAt(0).toUpperCase() + request.type.slice(1)}
            </Badge>
            {request.category && (
              <Badge variant="default" size="sm">
                {request.category}
              </Badge>
            )}
            <Badge variant={statusConfig[request.status].variant} size="md">
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </Badge>
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
      <div className="grid grid-cols-3 gap-6 mt-4">
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
      <div className="pt-4 mt-4 border-t border-gray-200">
        {request.status === 'pending' && request.type === 'incoming' ? (
          <div className="flex gap-3">
            <Button
              variant="success"
              onClick={onApprove}
              icon={Check}
              iconPosition="left"
              className="flex-1"
            >
              Approve
            </Button>
            <Button
              variant="danger"
              onClick={onReject}
              icon={X}
              iconPosition="left"
              className="flex-1"
            >
              Reject
            </Button>
            <Button
              variant="ghost"
              onClick={onViewDetails}
              className="px-4 border border-gray-200"
            >
              View Details
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={onViewDetails} className="w-full">
            View Details
          </Button>
        )}
      </div>
    </Card>
  );
};