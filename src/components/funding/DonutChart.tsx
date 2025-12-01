import React from 'react';

interface DonutChartProps {
  used: number;
  remaining: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({ used, remaining }) => {
  const total = used + remaining;
  const usedPercent = (used / total) * 100;
  
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="20" />
        <circle
          cx="50" cy="50" r="40" fill="none" stroke="#56C02B" strokeWidth="20"
          strokeDasharray={`${usedPercent * 2.51327} 251.327`}
          strokeLinecap="round"
        />
        <circle
          cx="50" cy="50" r="40" fill="none" stroke="#F78C3D" strokeWidth="20"
          strokeDasharray={`${(100 - usedPercent) * 2.51327} 251.327`}
          strokeDashoffset={`-${usedPercent * 2.51327}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{Math.round(usedPercent)}%</div>
          <div className="text-sm text-gray-600">Used</div>
        </div>
      </div>
    </div>
  );
};