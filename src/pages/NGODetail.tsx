import React, { useState } from 'react';
import { MapPin, Calendar, Users, ChevronLeft, Target, TrendingUp, Building2, Mail, Phone, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ngoData } from '../data/ngoData';
import { Modal } from '../components/reusable/Modal';
import { SponsorForm } from '../components/reusable/SponsorForm';

interface NGODetailProps {
  onBack?: () => void;
}

const NGODetail: React.FC<NGODetailProps> = ({ onBack }) => {
  const navigate = useNavigate();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [sponsorType, setSponsorType] = useState<'org' | 'roadmap'>('org');
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

  const openModal = (type: 'org' | 'roadmap', roadmapTitle?: string) => {
    setSponsorType(type);
    setSelectedRoadmap(roadmapTitle || null);
    setModalOpen(true);
  };

  const ngo = ngoData;

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-[960px] mx-auto space-y-6">
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
                  {ngo.logo}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-normal text-gray-900 leading-6">{ngo.name}</h2>
                    <span className="px-3 py-1 bg-[#DCFCE7] text-[#008236] rounded-[10px] text-sm font-normal">
                      {ngo.type}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-base">{ngo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-base">Founded in {ngo.founded}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-base">{ngo.teamMembers} team members</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SPONSOR BUTTON */}
              <button 
                onClick={() => openModal('org')}
                className="px-6 py-3 bg-[#F1833F] hover:bg-[#E67336] text-white rounded-[14px] text-base font-normal transition-colors">
                Sponsor This Organization
              </button>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3">
            <h3 className="text-lg font-normal text-gray-900 leading-[27px]">Mission Statement</h3>
            <p className="text-base text-gray-700 leading-6">{ngo.mission}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#FFEDD4] rounded-[14px] flex items-center justify-center mb-10">
                <Target size={24} className="text-[#F54900]" />
              </div>
              <div className="text-base text-gray-600 mb-2 leading-6">Active Projects</div>
              <div className="text-base text-gray-900 font-normal leading-6">{ngo.activeProjects}</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#DCFCE7] rounded-[14px] flex items-center justify-center mb-10">
                <TrendingUp size={24} className="text-[#00A63E]" />
              </div>
              <div className="text-base text-gray-600 mb-2 leading-6">Impact Score</div>
              <div className="text-base text-gray-900 font-normal leading-6">{ngo.impactScore}</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-[14px] flex items-center justify-center mb-10">
                <Users size={24} className="text-[#155DFC]" />
              </div>
              <div className="text-base text-gray-600 mb-2 leading-6">People Helped</div>
              <div className="text-base text-gray-900 font-normal leading-6">{ngo.peopleHelped}</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#F3E8FF] rounded-[14px] flex items-center justify-center mb-10">
                <Building2 size={24} className="text-[#9810FA]" />
              </div>
              <div className="text-base text-gray-600 mb-2 leading-6">Communities</div>
              <div className="text-base text-gray-900 font-normal leading-6">{ngo.communities}</div>
            </div>
          </div>

          {/* Focus Areas & SDG Alignment */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-base font-normal text-gray-900 leading-6">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {ngo.focusAreas.map((area) => (
                  <span key={area} className="px-3 py-2.5 bg-gray-100 text-gray-700 rounded-[10px] text-base font-normal">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-base font-normal text-gray-900 leading-6">SDG Alignment</h3>
              <div className="flex flex-wrap gap-3">
                {ngo.sdgs.map((sdg) => (
                  <span
                    key={sdg.label}
                    className="px-3 py-2.5 rounded-[10px] text-white text-base font-normal"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Past Impact */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
            <h3 className="text-base font-normal text-gray-900 leading-6">Past Impact</h3>
            <div className="grid grid-cols-4 gap-6">
              {ngo.pastImpact.map((impact) => (
                <div key={impact.label} className="p-4 rounded-[14px]" style={{ backgroundColor: `${impact.color}15` }}>
                  <div className="flex items-center gap-3 mb-2">
                    {impact.icon === 'Trees' || impact.icon === 'Factory' ? (
                      <div className="text-2xl">{impact.icon}</div>
                    ) : impact.label === 'People Helped' ? (
                      <Users size={24} style={{ color: impact.color }} />
                    ) : (
                      <Building2 size={24} style={{ color: impact.color }} />
                    )}
                    <div className="text-xs text-gray-600">{impact.label}</div>
                  </div>
                  <div className="text-base font-normal" style={{ color: impact.color }}>
                    {impact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Roadmaps */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-normal text-gray-900 leading-6">Active Roadmaps & Programs</h3>
              <button 
                onClick={() => openModal('roadmap')}
                className="px-4 py-2.5 bg-[#F1833F] hover:bg-[#E67336] text-white rounded-[14px] text-base font-normal transition-colors">
                Sponsor a Roadmap
              </button>
            </div>

            <div className="space-y-4">
              {ngo.roadmaps.map((roadmap, idx) => (
                <div key={idx} className="border border-gray-200 rounded-[14px] p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h4 className="text-base font-normal text-gray-900 leading-6">{roadmap.title}</h4>
                      <p className="text-base text-gray-600 leading-6">{roadmap.description}</p>
                    </div>
                    <button 
                      onClick={() => openModal('roadmap', roadmap.title)}
                      className="px-4 py-2.5 bg-[#F0FDF4] text-[#00A63E] rounded-[14px] text-base font-normal hover:bg-green-100 transition-colors ml-4">
                      Sponsor
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Budget</div>
                      <div className="text-base text-gray-900 font-normal">{roadmap.budget}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Timeline</div>
                      <div className="text-base text-gray-900 font-normal">{roadmap.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Progress</div>
                      <div className="text-base text-gray-900 font-normal">{roadmap.progress}%</div>
                    </div>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF6900] to-[#00C950] rounded-full"
                      style={{ width: `${roadmap.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-normal text-gray-900 leading-6">Recent Activities</h3>
              <button 
                onClick={() => openModal('org')}
                className="px-4 py-2.5 bg-[#F1833F] hover:bg-[#E67336] text-white rounded-[14px] text-base font-normal transition-colors">
                Sponsor an Activity
              </button>
            </div>

            <div className="space-y-4">
              {ngo.activities.map((activity, idx) => (
                <div key={idx} className="border border-gray-200 rounded-[14px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-normal text-gray-900 leading-6">{activity.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          activity.status === 'ongoing'
                            ? 'bg-[#DBEAFE] text-[#1447E6]'
                            : 'bg-[#DCFCE7] text-[#008236]'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-base text-gray-600 leading-6">{activity.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">{activity.date}</span>
                        <span className="text-[#00A63E]">{activity.impact}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => openModal('org')}
                      className="px-4 py-2.5 bg-[#F0FDF4] text-[#00A63E] rounded-[14px] text-base font-normal hover:bg-green-100 transition-colors ml-4">
                      Sponsor
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinator Contact */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="text-base font-normal text-gray-900 leading-6">Coordinator Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-900">
                <User size={20} className="text-gray-400" />
                <span className="text-base">{ngo.coordinator.name}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-900">
                <Mail size={20} className="text-gray-400" />
                <span className="text-base">{ngo.coordinator.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-900">
                <Phone size={20} className="text-gray-400" />
                <span className="text-base">{ngo.coordinator.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE MODAL */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={sponsorType === 'org' ? `Sponsor ${ngo.name}` : `Sponsor Roadmap: ${selectedRoadmap}`}
      >
        <SponsorForm 
          type={sponsorType}
          organizationName={ngo.name}
          organizationLogo={ngo.logo}
          organizationLocation={ngo.location}
          roadmapTitle={selectedRoadmap || undefined}
        />
      </Modal>
    </>
  );
};

export default NGODetail;