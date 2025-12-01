import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { NGOHeader } from '../components/ngo/NGOHeader';
import { NGOStats } from '../components/ngo/NGOStats';
import { NGOPastImpact } from '../components/ngo/NGOPastImpact';
import { NGORoadmaps } from '../components/ngo/NGORoadmaps';
import { NGOActivities } from '../components/ngo/NGOActivities';
import { NGOContact } from '../components/ngo/NGOContact';
import { Modal } from '../components/reusable/Modal';
import { SponsorForm } from '../components/reusable/SponsorForm';
import { ngoData } from '../data/ngoData';

interface NGODetailProps {
  onBack?: () => void;
}

const NGODetail: React.FC<NGODetailProps> = ({ onBack }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sponsorType, setSponsorType] = useState<'org' | 'roadmap'>('org');
  const [selectedRoadmap, setSelectedRoadmap] = useState<string | null>(null);

  const ngo = ngoData;

  const openModal = (type: 'org' | 'roadmap', roadmapTitle?: string) => {
    setSponsorType(type);
    setSelectedRoadmap(roadmapTitle || null);
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-[960px] mx-auto space-y-6">
          {/* Header */}
          <NGOHeader
            name={ngo.name}
            type={ngo.type}
            location={ngo.location}
            founded={ngo.founded}
            teamMembers={ngo.teamMembers}
            logo={ngo.logo}
            onSponsor={() => openModal('org')}
          />

          {/* Mission Statement */}
          <Card padding="md">
            <h3 className="text-lg font-normal text-gray-900 leading-[27px] mb-3">Mission Statement</h3>
            <p className="text-base text-gray-700 leading-6">{ngo.mission}</p>
          </Card>

          {/* Stats Grid */}
          <NGOStats
            activeProjects={ngo.activeProjects}
            impactScore={ngo.impactScore}
            peopleHelped={ngo.peopleHelped}
            communities={ngo.communities}
          />

          {/* Focus Areas & SDG Alignment */}
          <div className="grid grid-cols-2 gap-6">
            <Card padding="md">
              <h3 className="text-base font-normal text-gray-900 leading-6 mb-4">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {ngo.focusAreas.map((area) => (
                  <Badge key={area} variant="default" size="md">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card padding="md">
              <h3 className="text-base font-normal text-gray-900 leading-6 mb-4">SDG Alignment</h3>
              <div className="flex flex-wrap gap-3">
                {ngo.sdgs.map((sdg) => (
                  <Badge
                    key={sdg.label}
                    bgColor={sdg.color}
                    textColor="white"
                    size="md"
                  >
                    {sdg.label}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Past Impact */}
          <NGOPastImpact impacts={ngo.pastImpact} />

          {/* Active Roadmaps */}
          <NGORoadmaps
            roadmaps={ngo.roadmaps}
            onSponsorRoadmap={(title) => openModal('roadmap', title)}
            onSponsorGeneral={() => openModal('roadmap')}
          />

          {/* Recent Activities */}
          <NGOActivities
            activities={ngo.activities}
            onSponsorActivity={() => openModal('org')}
          />

          {/* Coordinator Contact */}
          <NGOContact coordinator={ngo.coordinator} />
        </div>
      </div>

      {/* Modal */}
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