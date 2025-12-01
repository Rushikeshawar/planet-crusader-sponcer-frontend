import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../common/Button';
import { type Request } from '../../data/requestsData';

interface RequestModalProps {
  request: Request;
  onClose: () => void;
}

export const RequestModal: React.FC<RequestModalProps> = ({ request, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[672px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-6 border-b border-gray-200 space-y-1">
          <h2 className="text-xl font-normal text-gray-900 leading-[30px]">
            {request.title}
          </h2>
          <p className="text-base text-gray-600 leading-6">
            {request.organization}
          </p>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-normal text-gray-900 leading-[27px]">Description</h3>
            <p className="text-base text-gray-600 leading-6">
              {request.description}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="text-base text-gray-900 font-normal leading-6">Amount Requested</div>
              <div className="text-base text-gray-600 leading-6">{request.amount}</div>
            </div>
            <div className="space-y-1">
              <div className="text-base text-gray-900 font-normal leading-6">Timeline</div>
              <div className="text-base text-gray-600 leading-6">{request.timeline}</div>
            </div>
            <div className="space-y-1">
              <div className="text-base text-gray-900 font-normal leading-6">Type</div>
              <div className="text-base text-gray-600 leading-6">{request.category || 'N/A'}</div>
            </div>
            <div className="space-y-1">
              <div className="text-base text-gray-900 font-normal leading-6">Status</div>
              <div className="text-base text-gray-600 leading-6">
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <Button variant="primary" onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};