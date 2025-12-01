// src/data/ngoData.ts

export interface NGO {
  id: string;
  name: string;
  logo: string;
  type: string;
  location: string;
  founded: string;
  teamMembers: number;
  mission: string;
  activeProjects: number;
  impactScore: string;
  peopleHelped: string;
  communities: number;
  focusAreas: string[];
  sdgs: { label: string; color: string }[];
  pastImpact: {
    label: string;
    value: string;
    icon?: string;
    color: string;
  }[];
  roadmaps: {
    title: string;
    description: string;
    budget: string;
    timeline: string;
    progress: number;
  }[];
  activities: {
    title: string;
    description: string;
    status: string;
    date: string;
    impact: string;
  }[];
  coordinator: {
    name: string;
    email: string;
    phone: string;
  };
}

export const ngoData: NGO = {
  id: 'green-earth-alliance',
  name: 'Green Earth Alliance',
  logo: '🌐',
  type: 'NGO',
  location: 'Portland, USA',
  founded: '2015',
  teamMembers: 28,
  mission: 'Dedicated to protecting our planet through community-driven environmental initiatives, focusing on reforestation, renewable energy, and sustainable living practices.',
  activeProjects: 8,
  impactScore: '92/100',
  peopleHelped: '3,500',
  communities: 45,
  focusAreas: ['Environment', 'Climate Action', 'Renewable Energy', 'Reforestation'],
  sdgs: [
    { label: 'SDG 7', color: '#FCC30B' },
    { label: 'SDG 13', color: '#3F7E44' },
    { label: 'SDG 15', color: '#56C02B' }
  ],
  pastImpact: [
    { label: 'Trees Planted', value: '15,000', icon: 'Trees', color: '#00A63E' },
    { label: 'People Helped', value: '3,500', color: '#155DFC' },
    { label: 'CO₂ Reduced', value: '250 tons', icon: 'Factory', color: '#0092B8' },
    { label: 'Communities', value: '45', color: '#9810FA' }
  ],
  roadmaps: [
    {
      title: 'Urban Forestry Initiative 2025',
      description: 'Plant 10,000 native trees across urban areas to combat air pollution and create green spaces',
      budget: '$45,000',
      timeline: '12 months',
      progress: 65
    },
    {
      title: 'Community Solar Program',
      description: 'Install solar panels in 20 community centers to provide clean energy access',
      budget: '$85,000',
      timeline: '18 months',
      progress: 40
    }
  ],
  activities: [
    {
      title: 'River Cleanup Campaign',
      description: 'Monthly river cleanup events with local volunteers',
      status: 'ongoing',
      date: '11/20/2024',
      impact: '2,500 kg waste removed'
    },
    {
      title: 'Tree Plantation Drive',
      description: 'Community tree plantation event in city parks',
      status: 'completed',
      date: '10/15/2024',
      impact: '500 trees planted'
    }
  ],
  coordinator: {
    name: 'Michael Chen',
    email: 'michael.chen@greenearthalliance.org',
    phone: '+1 (503) 555-0167'
  }
};