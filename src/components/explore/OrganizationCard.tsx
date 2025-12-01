import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface Organization {
  id: string;
  name: string;
  location: string;
  type: 'School' | 'NGO';
  logo: string;
  sdgTags: string[];
  sdgColors: string[];
  students: string;
  events: string;
}

interface OrganizationCardProps {
  organization: Organization;
  onClick: () => void;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
  onClick
}) => {
  const { name, location, type, logo, sdgTags, sdgColors, students, events } = organization;

  return (
    <Card
      padding="md"
      onClick={onClick}
      hover={true}
      className="cursor-pointer"
    >
      <div className="space-y-4 pb-6">
        <div className="flex justify-between items-start">
          <div
            className="w-16 h-16 rounded-[14px] flex items-center justify-center text-3xl shadow-md"
            style={{ background: 'linear-gradient(135deg, #FFD6A7 0%, #B9F8CF 100%)' }}
          >
            {logo}
          </div>
          <Badge variant={type === 'School' ? 'info' : 'custom'} size="sm">
            {type}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-[#101828]">{name}</h3>

        <div className="flex items-center gap-2 text-[#4A5565]">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div>
          <p className="text-sm text-[#4A5565] mb-2">SDG Focus</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {sdgTags.map((tag, i) => (
              <Badge
                key={i}
                bgColor={sdgColors[i]}
                textColor="white"
                size="sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-[#EFF6FF] rounded-[14px] p-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#155DFC]" />
              <span className="text-xs text-[#4A5565]">Students</span>
            </div>
            <p className="text-lg font-bold text-[#155DFC]">{students}</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-[14px] p-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00A63E]" />
              <span className="text-xs text-[#4A5565]">Events</span>
            </div>
            <p className="text-lg font-bold text-[#00A63E]">{events}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};