import React from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../common/Card';

interface ContributionSummaryProps {
  totalInvested: string;
  schoolsSupported: number;
  memberSince: string;
}

export const ContributionSummary: React.FC<ContributionSummaryProps> = ({
  totalInvested,
  schoolsSupported,
  memberSince
}) => {
  return (
    <Card padding="md">
      <h3 className="text-base font-normal text-gray-900 mb-6">Contribution Summary</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-5 h-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="7" y="2" width="6" height="16" stroke="#4A5565" strokeWidth="1.67"/>
                <rect x="2" y="8" width="5" height="10" stroke="#4A5565" strokeWidth="1.67"/>
              </svg>
            </div>
            <span className="text-base">Total Invested</span>
          </div>
          <p className="text-gray-900 text-base font-normal">{totalInvested}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-5 h-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3L12 8H17L13 11L14 16L10 13L6 16L7 11L3 8H8L10 3Z" stroke="#4A5565" strokeWidth="1.67"/>
              </svg>
            </div>
            <span className="text-base">Schools Supported</span>
          </div>
          <p className="text-gray-900 text-base font-normal">{schoolsSupported}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="text-base">Member Since</span>
          </div>
          <p className="text-gray-900 text-base font-normal">{memberSince}</p>
        </div>
      </div>
    </Card>
  );
};