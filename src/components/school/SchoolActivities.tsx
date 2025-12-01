import React from 'react';
import { Users, Calendar, Target } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface Activity {
  title: string;
  desc: string;
  sdg: number;
  participants: number;
  date: string;
  impact: string;
}

interface SchoolActivitiesProps {
  activities: Activity[];
  sdgColors: { id: number; color: string }[];
}

export const SchoolActivities: React.FC<SchoolActivitiesProps> = ({ activities, sdgColors }) => {
  return (
    <Card padding="md">
      <h2 className="text-base font-normal text-gray-900 mb-4">Recent Completed Activities</h2>

      <div className="grid grid-cols-2 gap-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="font-normal text-gray-900">{activity.title}</h3>
              <Badge
                bgColor={sdgColors.find(s => s.id === activity.sdg)?.color}
                textColor="white"
                size="sm"
              >
                SDG {activity.sdg}
              </Badge>
            </div>

            <p className="text-sm text-gray-600">{activity.desc}</p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {activity.participants}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {activity.date}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <Target className="w-4 h-4" />
                {activity.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
  };