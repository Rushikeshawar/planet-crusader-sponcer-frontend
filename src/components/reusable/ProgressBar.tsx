// src/components/reusable/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Progress</span>
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