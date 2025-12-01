import React from 'react';

interface ProgressBarProps {
  percent: number;
  label?: string;
  showPercentage?: boolean;
  height?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  label = 'Progress',
  showPercentage = true,
  height = 'md',
  gradient = true,
  color
}) => {
  const heightStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const barStyle = gradient
    ? { background: 'linear-gradient(90deg, #FF6900 0%, #00C950 100%)' }
    : { backgroundColor: color || '#FF6900' };
  
  return (
    <div className="space-y-2">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center">
          <span className="text-[#4A5565] text-base font-normal leading-6">
            {label}
          </span>
          {showPercentage && (
            <span className="text-[#101828] text-base font-normal leading-6">
              {percent}%
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full ${heightStyles[height]} bg-[#F3F4F6] rounded-full overflow-hidden`}>
        <div
          className={`${heightStyles[height]} rounded-full transition-all duration-500`}
          style={{
            width: `${percent}%`,
            ...barStyle
          }}
        />
      </div>
    </div>
  );
};