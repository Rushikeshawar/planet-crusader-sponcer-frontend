import React from 'react';
import { ChevronLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SchoolHeaderProps {
  name: string;
  location: string;
}

export const SchoolHeader: React.FC<SchoolHeaderProps> = ({ name, location }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-start gap-4">
      <button
        onClick={() => navigate(-1)}
        className="w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>

      <div className="flex-1">
        <h1 className="text-xl font-normal text-gray-900 mb-1">{name}</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};