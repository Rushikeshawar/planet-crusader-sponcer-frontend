import React from 'react';

interface NotificationToggleProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}

export const NotificationToggle: React.FC<NotificationToggleProps> = ({
  label,
  description,
  enabled,
  onToggle
}) => {
  return (
    <div className="bg-[#F9FAFB] rounded-[14px] p-5 flex items-center justify-between min-h-[84px]">
      <div className="space-y-1">
        <h4 className="text-base font-normal text-gray-900">{label}</h4>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-[52px] h-8 rounded-full transition-colors ${
          enabled ? 'bg-[#F1833F]' : 'bg-gray-300'
        }`}
      >
        <div
          className={`absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-sm transition-transform ${
            enabled ? 'translate-x-[22px]' : 'translate-x-0.5'
          }`}
          style={{
            boxShadow: '0px 3px 1px rgba(0, 0, 0, 0.06)',
            border: '0.5px solid rgba(0, 0, 0, 0.04)'
          }}
        />
      </button>
    </div>
  );
};