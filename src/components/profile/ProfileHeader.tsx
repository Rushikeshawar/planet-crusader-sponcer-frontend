import React from 'react';
import { Briefcase, MapPin, Mail } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface ProfileHeaderProps {
  name: string;
  type: string;
  location: string;
  email: string;
  initials: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  type,
  location,
  email,
  initials
}) => {
  return (
    <Card padding="lg" className="flex items-start justify-between">
      <div className="flex items-start gap-9">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#FF8904] to-[#F54900] flex items-center justify-center">
            <span className="text-white text-[30px] font-normal leading-9">{initials}</span>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#F1833F] flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8 pt-0">
          <h2 className="text-base font-normal text-gray-900">{name}</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-4 h-4" />
              <span className="text-base">{type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-base">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-base">{email}</span>
            </div>
          </div>
        </div>
      </div>

      <Button variant="primary" size="sm">
        Edit Profile
      </Button>
    </Card>
  );
};