import React from 'react';
import { Card } from '../common/Card';

interface AllocationCategory {
  title: string;
  icon: string;
  allocated: number;
  used: number;
  remaining: number;
  usage: number;
}

interface AllocationCardProps {
  category: AllocationCategory;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ category }) => {
  return (
    <Card padding="md" className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl flex items-center justify-center text-3xl">
          {category.icon}
        </div>
        <h3 className="font-medium text-gray-900">{category.title}</h3>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Allocated</span>
          <span className="font-semibold">${category.allocated.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Used</span>
          <span className="font-semibold text-green-600">${category.used.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Remaining</span>
          <span className="font-semibold text-orange-600">${category.remaining.toLocaleString()}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Usage</span>
          <span className="font-semibold">{category.usage}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${category.usage}%`,
              background: 'linear-gradient(90deg, #FF6900 0%, #00C950 100%)'
            }}
          />
        </div>
      </div>
    </Card>
  );
};