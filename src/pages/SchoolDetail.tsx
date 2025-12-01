// src/pages/SchoolDetail.tsx
import React, { useState } from 'react';
import { SchoolHeader } from '../components/school/SchoolHeader';
import { SchoolCard } from '../components/school/SchoolCard';
import { SchoolSDGs } from '../components/school/SchoolSDGs';
import { SchoolRoadmap } from '../components/school/SchoolRoadmap';
import { SchoolActivities } from '../components/school/SchoolActivities';
import { Modal } from '../components/reusable/Modal';
import { SponsorForm } from '../components/reusable/SponsorForm';
import { schoolData } from '../data/schoolData';

const SchoolDetail: React.FC = () => {
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
      <div className="max-w-5xl mx-auto p-6 pt-4 space-y-5">
        {/* School Header */}
        <SchoolHeader name={school.name} location={school.location} />

        {/* School Card */}
        <SchoolCard
          logo={school.logo}
          name={school.name}
          desc={school.desc}
          students={school.students}
          events={school.events}
          goals={school.goals}
          onSponsor={() => openSponsorModal('school')}
        />

        {/* SDG Focus Areas */}
        <SchoolSDGs sdgs={school.sdg} />

        {/* Active Roadmaps */}
        <SchoolRoadmap
          roadmap={school.roadmap}
          onSponsor={(title) => openSponsorModal('roadmap', title)}
        />

        {/* Recent Completed Activities */}
        <SchoolActivities
          activities={school.activities}
          sdgColors={school.sdg}
        />
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