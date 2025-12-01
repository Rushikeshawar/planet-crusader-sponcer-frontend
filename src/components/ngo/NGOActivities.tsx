import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface Activity {
  title: string;
  description: string;
  date: string;
  status: string;
  impact: string;
}

interface NGOActivitiesProps {
  activities: Activity[];
  onSponsorActivity: () => void;
}

export const NGOActivities: React.FC<NGOActivitiesProps> = ({
  activities,
  onSponsorActivity
}) => {
  const getStatusVariant = (status: string): 'info' | 'success' | 'default' => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus === 'ongoing') return 'info';
    if (lowerStatus === 'completed') return 'success';
    return 'default';
  };

  return (
    <Card padding="md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-normal text-gray-900 leading-6">Recent Activities</h3>
        <Button variant="primary" size="sm" onClick={onSponsorActivity}>
          Sponsor an Activity
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="border border-gray-200 rounded-[14px] p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-normal text-gray-900 leading-6">{activity.title}</h4>
                  <Badge
                    variant={getStatusVariant(activity.status)}
                    size="sm"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-base text-gray-600 leading-6">{activity.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-600">{activity.date}</span>
                  <span className="text-[#00A63E]">{activity.impact}</span>
                </div>
              </div>
              <Button
                variant="success"
                size="sm"
                onClick={onSponsorActivity}
                className="ml-4"
              >
                Sponsor
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};