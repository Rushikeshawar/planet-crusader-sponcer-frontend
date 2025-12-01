// src/data/schoolData.ts

export interface SDG {
  id: number;
  name: string;
  color: string;
}

export interface Activity {
  title: string;
  desc: string;
  participants: number;
  date: string;
  impact: string;
  sdg: number;
}

export interface School {
  id: string;
  name: string;
  location: string;
  logo: string;
  desc: string;
  students: number;
  events: number;
  goals: number;
  sdg: SDG[];
  roadmap: {
    title: string;
    desc: string;
    timeline: string;
    fundingNeeded: number;
    fundingReceived: number;
    progress: number;
    badge: string;
  };
  activities: Activity[];
}

export const schoolData: School = {
  id: 'green-valley-high',
  name: 'Green Valley High School',
  location: 'San Francisco, USA',
  logo: '🌳',
  desc: 'A pioneer in sustainability education with a strong focus on climate action and environmental conservation.',
  students: 850,
  events: 8,
  goals: 3,
  sdg: [
    { id: 13, name: 'Climate Action', color: '#3F7E44' },
    { id: 15, name: 'Life on Land', color: '#56C02B' },
    { id: 12, name: 'Responsible Consumption', color: '#BF8B2E' }
  ],
  roadmap: {
    title: 'Carbon Neutral Campus 2025',
    desc: 'Comprehensive plan to achieve carbon neutrality',
    timeline: '12 months',
    fundingNeeded: 50000,
    fundingReceived: 34000,
    progress: 68,
    badge: 'SHVR'
  },
  activities: [
    {
      title: 'Tree Plantation Drive',
      desc: '500 native trees planted in the school campus and nearby community park',
      participants: 320,
      date: '10/15/2024',
      impact: '500 trees planted, 12 tons CO₂/year offset',
      sdg: 15
    },
    {
      title: 'Plastic-Free Week',
      desc: 'Week-long campaign to eliminate single-use plastics',
      participants: 650,
      date: '9/20/2024',
      impact: '2,300 plastic items replaced with alternatives',
      sdg: 12
    }
  ]
};