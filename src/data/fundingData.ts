// Types
export interface ImpactMetric {
  label: string;
  value: string | number;
}

export interface FundBreakdown {
  category: string;
  amount: number;
}

export interface TimelineItem {
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Document {
  title: string;
  date: string;
  type: 'image' | 'pdf';
}

export interface Transaction {
  title: string;
  date: string;
  amount: number;
  status: 'verified' | 'pending';
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
  fundBreakdown?: FundBreakdown[];
  timeline?: TimelineItem[];
  documents?: Document[];
  transactions?: Transaction[];
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
    ],
    fundBreakdown: [
      { category: 'Solar Panels', amount: 8500 },
      { category: 'Energy Audit', amount: 3000 },
      { category: 'LED Lighting', amount: 4000 },
      { category: 'Training & Materials', amount: 2000 }
    ],
    timeline: [
      {
        title: 'Project Kickoff',
        date: '8/15/2024',
        status: 'completed'
      },
      {
        title: 'Energy Audit Complete',
        date: '9/20/2024',
        status: 'completed'
      },
      {
        title: 'Solar Panel Installation',
        date: '10/10/2024',
        status: 'completed'
      },
      {
        title: 'LED Retrofit Phase 1',
        date: '11/15/2024',
        status: 'in-progress'
      },
      {
        title: 'Training Programs',
        date: '12/20/2024',
        status: 'upcoming'
      }
    ],
    documents: [
      {
        title: 'Solar Installation Progress',
        date: '10/15/2024',
        type: 'image'
      },
      {
        title: 'Solar Panel Purchase Receipt',
        date: '10/1/2024',
        type: 'pdf'
      },
      {
        title: 'Energy Audit Report',
        date: '9/20/2024',
        type: 'pdf'
      }
    ],
    transactions: [
      {
        title: 'Solar Panel Purchase',
        date: '10/1/2024',
        amount: 8500,
        status: 'verified'
      },
      {
        title: 'Energy Audit Services',
        date: '9/20/2024',
        amount: 3000,
        status: 'verified'
      },
      {
        title: 'LED Lighting Bulk Order',
        date: '10/15/2024',
        amount: 4000,
        status: 'verified'
      },
      {
        title: 'Training Materials',
        date: '10/25/2024',
        amount: 2000,
        status: 'pending'
      }
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
    ],
    fundBreakdown: [
      { category: 'Saplings Purchase', amount: 2500 },
      { category: 'Tools & Equipment', amount: 800 },
      { category: 'Transportation', amount: 600 },
      { category: 'Student Coordination', amount: 900 }
    ],
    timeline: [
      {
        title: 'Planning & Site Selection',
        date: '7/1/2024',
        status: 'completed'
      },
      {
        title: 'Sapling Procurement',
        date: '7/15/2024',
        status: 'completed'
      },
      {
        title: 'Phase 1 Plantation',
        date: '8/5/2024',
        status: 'completed'
      },
      {
        title: 'Phase 2 Plantation',
        date: '9/10/2024',
        status: 'completed'
      },
      {
        title: 'Maintenance Program',
        date: '10/1/2024',
        status: 'in-progress'
      }
    ],
    documents: [
      {
        title: 'Plantation Day Photos',
        date: '8/5/2024',
        type: 'image'
      },
      {
        title: 'Sapling Purchase Invoice',
        date: '7/15/2024',
        type: 'pdf'
      },
      {
        title: 'Impact Assessment Report',
        date: '9/20/2024',
        type: 'pdf'
      }
    ],
    transactions: [
      {
        title: 'Saplings Purchase',
        date: '7/15/2024',
        amount: 2500,
        status: 'verified'
      },
      {
        title: 'Tools & Equipment',
        date: '7/20/2024',
        amount: 800,
        status: 'verified'
      },
      {
        title: 'Transportation Costs',
        date: '8/5/2024',
        amount: 600,
        status: 'verified'
      },
      {
        title: 'Coordination Expenses',
        date: '8/10/2024',
        amount: 900,
        status: 'verified'
      }
    ]
  }
];