import React from 'react';
import { Building2, Activity, Target, Users } from 'lucide-react';


// Types
export interface Organization {
  id: string;
  name: string;
  location: string;
  type: 'School' | 'NGO';
  icon: string;
  medal?: string;
  events?: number;
  projects?: number;
  progress?: number;
  peopleHelped?: number;
  score: number;
}

export interface PerformanceStat {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  trend: string;
  trendColor: string;
}

export interface SDG {
  id: number;
  color: string;
  label: string;
}

export interface RegionalImpactItem {
  region: string;
  icon: React.ReactNode;
  supported: string;
  focus: string;
  sdgs?: SDG[];
  states?: string[];
  participation?: string;
}

// Data
export const performanceStats: PerformanceStat[] = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    iconBg: '#DBEAFE',
    title: 'Schools Supported',
    value: '5',
    trend: '+50% this quarter',
    trendColor: '#00A63E'
  },
  {
    icon: <Activity className="w-6 h-6 text-green-600" />,
    iconBg: '#DCFCE7',
    title: 'Activities Sponsored',
    value: '18',
    trend: '+35% this quarter',
    trendColor: '#00A63E'
  },
  {
    icon: <Target className="w-6 h-6 text-purple-600" />,
    iconBg: '#F3E8FF',
    title: 'SDGs Impacted',
    value: '10',
    trend: 'Across 17 goals',
    trendColor: '#00A63E'
  },
  {
    icon: <Users className="w-6 h-6 text-orange-600" />,
    iconBg: '#FFEDD4',
    title: 'Students Reached',
    value: '4,160',
    trend: '+28% this quarter',
    trendColor: '#00A63E'
  }
];

export const topOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Eco Warriors Academy',
    location: 'Denver',
    type: 'School',
    icon: '🥇',
    medal: '🥇',
    events: 9,
    progress: 88,
    score: 200
  },
  {
    id: '2',
    name: 'Green Valley High School',
    location: 'San Francisco',
    type: 'School',
    icon: '🥈',
    medal: '🥈',
    events: 8,
    progress: 75,
    score: 195
  },
  {
    id: '3',
    name: 'Clean Water Initiative',
    location: 'Denver',
    type: 'NGO',
    icon: '🥉',
    medal: '🥉',
    projects: 7,
    peopleHelped: 8500,
    score: 190
  },
  {
    id: '4',
    name: 'Harmony International School',
    location: 'Seattle',
    type: 'School',
    icon: '🌍',
    events: 7,
    progress: 60,
    score: 186
  },
  {
    id: '5',
    name: 'Green Earth Alliance',
    location: 'Portland',
    type: 'NGO',
    icon: '🌍',
    projects: 8,
    peopleHelped: 3500,
    score: 155
  }
];

export const regionalImpact: RegionalImpactItem[] = [
  {
    region: 'United States',
    icon: <Building2 className="w-5 h-5 text-blue-600" />,
    supported: '6 schools supported',
    focus: 'Climate Action & Clean Energy',
    sdgs: [
      { id: 13, color: '#3F7E44', label: 'SDG 13' },
      { id: 7, color: '#FCC30B', label: 'SDG 7' },
      { id: 15, color: '#56C02B', label: 'SDG 15' }
    ],
    states: ['California', 'Oregon', 'Texas']
  },
  {
    region: 'Primary Focus',
    icon: <Target className="w-5 h-5 text-green-600" />,
    supported: 'Climate Action & Clean Energy',
    focus: '',
    sdgs: [
      { id: 13, color: '#3F7E44', label: 'SDG 13' },
      { id: 7, color: '#FCC30B', label: 'SDG 7' },
      { id: 15, color: '#56C02B', label: 'SDG 15' }
    ]
  },
  {
    region: 'Total Reach',
    icon: <Users className="w-5 h-5 text-purple-600" />,
    supported: '4,160 students engaged',
    focus: '',
    participation: '92% participation rate'
  }
];