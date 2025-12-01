import React from 'react';
import { Card } from '../common/Card';
import { DonutChart } from './DonutChart';

interface FundingOverviewProps {
  totalSponsored: number;
  used: number;
  remaining: number;
  usedPercentage: number;
}

export const FundingOverview: React.FC<FundingOverviewProps> = ({
  totalSponsored,
  used,
  remaining,
  usedPercentage
}) => {
  return (
    <Card padding="lg">
      <h2 className="text-xl font-normal text-gray-900 mb-8">Funding Overview</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="text-gray-600 mb-2">Total Amount Sponsored</div>
            <div className="text-3xl font-semibold text-blue-600">
              ${totalSponsored.toLocaleString()}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="text-gray-600 mb-2">Amount Used</div>
              <div className="text-2xl font-semibold text-green-600">
                ${used.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">{usedPercentage}% used</div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="text-gray-600 mb-2">Remaining</div>
              <div className="text-2xl font-semibold text-orange-600">
                ${remaining.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">{(100 - usedPercentage).toFixed(1)}% available</div>
            </div>
          </div>
        </div>
        <DonutChart used={used} remaining={remaining} />
      </div>
    </Card>
  );
};