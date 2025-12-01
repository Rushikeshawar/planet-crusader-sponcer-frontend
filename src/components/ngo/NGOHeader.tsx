import React from 'react';
import { ChevronLeft, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

interface NGOHeaderProps {
  name: string;
  type: string;
  location: string;
  founded: string;
  teamMembers: number;
  logo: string;
  onSponsor: () => void;
}

export const NGOHeader: React.FC<NGOHeaderProps> = ({
  name,
  type,
  location,
  founded,
  teamMembers,
  logo,
  onSponsor
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button & Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        <div className="space-y-2 flex-1">
          <h1 className="text-2xl font-normal text-gray-900 leading-9">Organization Profile</h1>
          <p className="text-base text-gray-600 leading-6">Detailed information and sponsorship opportunities</p>
        </div>
      </div>

      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FFD6A7] to-[#B9F8CF] flex items-center justify-center text-5xl">
              {logo}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-normal text-gray-900 leading-6">{name}</h2>
                <span className="px-3 py-1 bg-[#DCFCE7] text-[#008236] rounded-[10px] text-sm font-normal">
                  {type}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-base">{location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-base">Founded in {founded}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={16} />
                  <span className="text-base">{teamMembers} team members</span>
                </div>
              </div>
            </div>
          </div>

          <Button variant="primary" onClick={onSponsor}>
            Sponsor This Organization
          </Button>
        </div>
      </div>
    </>
  );
};