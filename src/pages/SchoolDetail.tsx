

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, Users, Calendar, Target } from 'lucide-react';
import { schoolData } from '../data/schoolData';
import { Modal } from '../components/reusable/Modal';
import { ProgressBar } from '../components/reusable/ProgressBar';
import { SponsorForm } from '../components/reusable/SponsorForm';

const SchoolDetail: React.FC = () => {
  const navigate = useNavigate();
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [sponsorType, setSponsorType] = useState<'school' | 'roadmap'>('school');
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);
  
  const school = schoolData;

  const openSponsorModal = (type: 'school' | 'roadmap', roadmapTitle?: string) => {
    setSponsorType(type);
    setSelectedRoadmap(roadmapTitle || null);
    setSponsorModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* School Header */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <div className="flex-1">
            <h1 className="text-xl font-normal text-gray-900 mb-1">{school.name}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{school.location}</span>
            </div>
          </div>
        </div>

        {/* School Card */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header Image */}
          <div 
            className="h-64 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FFD6A7 0%, #B9F8CF 100%)' }}
          >
            <div className="text-8xl">{school.logo}</div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <p className="text-gray-600">{school.desc}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-orange-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 font-medium">Students</span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">{school.students}</div>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">Active Events</span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">{school.events}</div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-medium">SDG Focus</span>
                </div>
                <div className="text-2xl font-semibold text-gray-900">{school.goals} Goals</div>
              </div>
            </div>

            {/* Sponsor Button */}
            <button
              onClick={() => openSponsorModal('school')}
              className="w-full bg-orange-600 text-white rounded-xl py-3 font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Sponsor this School
            </button>
          </div>
        </div>

        {/* SDG Focus Areas */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-normal text-gray-900 mb-4">SDG Focus Areas</h2>
          <div className="grid grid-cols-3 gap-4">
            {school.sdg.map((sdg) => (
              <div
                key={sdg.id}
                className="p-4 rounded-xl text-white"
                style={{ backgroundColor: sdg.color }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white font-normal">{sdg.id}</span>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">SDG {sdg.id}</div>
                    <div className="font-normal">{sdg.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Roadmaps */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-normal text-gray-900 mb-4">Active Roadmaps</h2>
          
          <div className="border border-gray-200 rounded-xl p-4 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-normal text-gray-900 mb-1">
                  {school.roadmap.title}
                </h3>
                <p className="text-gray-600 text-sm">{school.roadmap.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-green-100 border border-black/10 rounded-lg text-sm">
                  {school.roadmap.badge}
                </div>
                <div className="px-3 py-1.5 bg-[#3F7E44] text-white rounded-lg text-sm">
                  SDG 13
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-gray-600 text-sm mb-1">Timeline</div>
                <div className="font-semibold text-gray-900">{school.roadmap.timeline}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-1">Funding Needed</div>
                <div className="font-semibold text-gray-900">${school.roadmap.fundingNeeded.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-1">Funding Received</div>
                <div className="font-semibold text-green-600">${school.roadmap.fundingReceived.toLocaleString()}</div>
              </div>
            </div>

            {/* Progress */}
            <ProgressBar percent={school.roadmap.progress} />

            {/* Sponsor Button */}
            <button
              onClick={() => openSponsorModal('roadmap', school.roadmap.title)}
              className="w-full bg-orange-600 text-white rounded-xl py-2.5 font-medium hover:bg-orange-700 transition-colors"
            >
              Sponsor this Roadmap
            </button>
          </div>
        </div>

        {/* Recent Completed Activities */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-normal text-gray-900 mb-4">Recent Completed Activities</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {school.activities.map((activity, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-normal text-gray-900">{activity.title}</h3>
                  <span 
                    className="px-2 py-0.5 text-white text-xs rounded"
                    style={{ backgroundColor: school.sdg.find(s => s.id === activity.sdg)?.color }}
                  >
                    SDG {activity.sdg}
                  </span>
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
        </div>
      </div>

      {/* Sponsor Modal */}
      <Modal
        isOpen={sponsorModalOpen}
        onClose={() => setSponsorModalOpen(false)}
        title={sponsorType === 'school' ? `Sponsor ${school.name}` : `Sponsor Roadmap: ${selectedRoadmap}`}
      >
        <SponsorForm 
          type={sponsorType}
          organizationName={school.name}
          organizationLogo={school.logo}
          organizationLocation={school.location}
          roadmapTitle={selectedRoadmap || undefined}
        />
      </Modal>
    </div>
  );
};

export default SchoolDetail;
