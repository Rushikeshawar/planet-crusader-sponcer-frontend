import React from 'react';
import { FileText, Inbox, Send, Clock } from 'lucide-react';
import { Card } from '../common/Card';

interface Stat {
  label: string;
  value: number | string;
  iconType: string;
  bg: string;
  iconColor: string;
}

interface RequestStatsCardsProps {
  stats: Stat[];
}

export const RequestStatsCards: React.FC<RequestStatsCardsProps> = ({ stats }) => {
  const getIcon = (iconType: string, iconColor: string) => {
    const iconProps = { size: 24, style: { color: iconColor } };
    
    switch (iconType) {
      case 'fileText':
        return <FileText {...iconProps} />;
      case 'inbox':
        return <Inbox {...iconProps} />;
      case 'send':
        return <Send {...iconProps} />;
      case 'clock':
        return <Clock {...iconProps} />;
      default:
        return <FileText {...iconProps} />;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} padding="md">
          <div
            className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-10"
            style={{ backgroundColor: stat.bg }}
          >
            {getIcon(stat.iconType, stat.iconColor)}
          </div>
          <div className="text-base text-gray-600 mb-2 leading-6">{stat.label}</div>
          <div className="text-base text-gray-900 font-normal leading-6">{stat.value}</div>
        </Card>
      ))}
    </div>
  );
};