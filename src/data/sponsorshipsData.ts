// Types
export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Sponsorship {
  id: string;
  title: string;
  org: string;
  type: 'Roadmap' | 'Activity' | 'School' | 'NGO';
  status: 'In Progress' | 'Completed' | 'Pending';
  amount: number;
  startDate: string;
  progress: number;
  impactMetrics: ImpactMetric[];
  note?: string;
  badge?: string;
}

export interface SummaryStatConfig {
  iconType: 'building' | 'checkCircle' | 'clock' | 'dollarSign';
  iconBg: string;
  iconColor: string;
  label: string;
}

// Data
export const sponsorshipsData: Sponsorship[] = [
  {
    id: '1',
    title: 'Carbon Neutral Campus 2025',
    org: 'Green Valley High School',
    type: 'Roadmap',
    status: 'In Progress',
    amount: 25000,
    startDate: '8/1/2024',
    progress: 68,
    badge: 'SHVR',
    impactMetrics: [
      { label: 'CO₂ Reduction', value: '45 tons/year' },
      { label: 'Students Engaged', value: '850' },
      { label: 'Activities Completed', value: '12/18' }
    ],
    note: 'Excited to support your journey to carbon neutrality!'
  },
  {
    id: '2',
    title: 'River Clean-Up Drive',
    org: 'Riverside Community School',
    type: 'Activity',
    status: 'Completed',
    amount: 5000,
    startDate: '9/1/2024',
    progress: 100,
    impactMetrics: [
      { label: 'Waste Collected', value: '450 kg' },
      { label: 'Volunteers', value: '180' },
      { label: 'River Length Cleaned', value: '3.2 km' }
    ]
  },
  {
    id: '3',
    title: 'Sunshine Elementary',
    org: 'Sunshine Elementary',
    type: 'School',
    status: 'In Progress',
    amount: 40000,
    startDate: '7/15/2024',
    progress: 55,
    impactMetrics: [
      { label: 'Total Events', value: '6' },
      { label: 'Student Participation', value: '92%' },
      { label: 'SDGs Addressed', value: '3' }
    ]
  },
  {
    id: '4',
    title: 'Urban Forestry Initiative 2025',
    org: 'Green Earth Alliance',
    type: 'NGO',
    status: 'In Progress',
    amount: 15000,
    startDate: '9/15/2024',
    progress: 65,
    impactMetrics: [
      { label: 'Trees Planted', value: '6,500' },
      { label: 'Volunteers', value: '250' },
      { label: 'Communities Reached', value: '12' }
    ],
    note: 'Supporting urban greening for a sustainable future!'
  },
  {
    id: '5',
    title: 'Zero Waste Campus Initiative',
    org: 'Campus Green Club',
    type: 'NGO',
    status: 'In Progress',
    amount: 8000,
    startDate: '10/1/2024',
    progress: 48,
    impactMetrics: [
      { label: 'Waste Diverted', value: '1,200 kg' },
      { label: 'Students Engaged', value: '420' },
      { label: 'Recycling Stations', value: '15' }
    ]
  }
];

export const summaryStatsConfig: SummaryStatConfig[] = [
  {
    iconType: 'building',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    label: 'Total Sponsorships'
  },
  {
    iconType: 'checkCircle',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    label: 'Active'
  },
  {
    iconType: 'clock',
    iconBg: '#DBEAFE',
    iconColor: '#2563EB',
    label: 'Completed'
  },
  {
    iconType: 'dollarSign',
    iconBg: '#FFEDD4',
    iconColor: '#EA580C',
    label: 'Total Invested'
  }
];