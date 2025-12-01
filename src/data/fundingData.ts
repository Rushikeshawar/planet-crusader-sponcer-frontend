// Types
export interface ImpactMetric {
  label: string;
  value: string | number;
}

export interface Project {
  id: string;
  title: string;
  org: string;
  type: string;
  allocated: number;
  spent: number;
  remaining: number;
  progress: number;
  impactMetrics: ImpactMetric[];
  badge?: string;
}

export interface AllocationCategory {
  icon: string;
  title: string;
  allocated: number;
  used: number;
  remaining: number;
  usage: number;
}

export interface FundingOverview {
  totalSponsored: number;
  used: number;
  remaining: number;
  usedPercentage: number;
}

// Data
export const fundingOverview: FundingOverview = {
  totalSponsored: 88000,
  used: 57600,
  remaining: 30400,
  usedPercentage: 65.5
};

export const allocationCategories: AllocationCategory[] = [
  {
    icon: '🎯',
    title: 'Activities',
    allocated: 20000,
    used: 15400,
    remaining: 4600,
    usage: 77
  },
  {
    icon: '🗺️',
    title: 'Roadmaps',
    allocated: 35000,
    used: 22300,
    remaining: 12700,
    usage: 64
  },
  {
    icon: '🏫',
    title: 'School Support',
    allocated: 15000,
    used: 7500,
    remaining: 7500,
    usage: 50
  },
  {
    icon: '🌍',
    title: 'NGO / Club Support',
    allocated: 18000,
    used: 12400,
    remaining: 5600,
    usage: 69
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Carbon Neutral Campus 2025',
    org: 'Green Valley High School',
    type: 'roadmap',
    allocated: 25000,
    spent: 17500,
    remaining: 7500,
    progress: 68,
    badge: 'SHVR',
    impactMetrics: [
      { label: 'Trees Planted', value: 0 },
      { label: 'Co2 Reduced', value: '45 tons/year' },
      { label: 'Students Engaged', value: 850 },
      { label: 'Activities Completed', value: '12/18' }
    ]
  },
  {
    id: '2',
    title: 'Tree Plantation Drive',
    org: 'Green Valley High School',
    type: 'activity',
    allocated: 5000,
    spent: 4800,
    remaining: 200,
    progress: 96,
    impactMetrics: [
      { label: 'Trees Planted', value: 480 },
      { label: 'Co2 Reduced', value: '12 tons/year' },
      { label: 'Students Engaged', value: 320 },
      { label: 'Waste Collected', value: '0 kg' }
    ]
  }
];