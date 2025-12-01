// Types
export interface Request {
  id: number;
  type: 'incoming' | 'outgoing';
  category: string;
  status: 'pending' | 'approved' | 'rejected';
  title: string;
  organization: string;
  description: string;
  amount: string;
  timeline: string;
  dateSubmitted: string;
  schoolBadge?: string;
}

export interface Stat {
  iconType: 'fileText' | 'inbox' | 'send' | 'clock';
  bg: string;
  iconColor: string;
  label: string;
  value: string;
}

// Data
export const stats: Stat[] = [
  { iconType: 'fileText', bg: '#F3E8FF', iconColor: '#9810FA', label: 'Total Requests', value: '6' },
  { iconType: 'inbox', bg: '#DBEAFE', iconColor: '#155DFC', label: 'Incoming', value: '4' },
  { iconType: 'send', bg: '#DCFCE7', iconColor: '#00A63E', label: 'Outgoing', value: '2' },
  { iconType: 'clock', bg: '#FFEDD4', iconColor: '#F54900', label: 'Pending', value: '4' }
];

export const requests: Request[] = [
  {
    id: 1,
    type: 'incoming',
    category: 'Roadmap',
    status: 'pending',
    title: 'Digital Learning Infrastructure',
    organization: 'Harmony International School',
    description: 'Building a digital library and learning center to improve access to quality education.',
    amount: '$35,000',
    timeline: '10 months',
    dateSubmitted: '11/10/2024'
  },
  {
    id: 2,
    type: 'outgoing',
    category: 'Activity',
    status: 'approved',
    title: 'Beach Conservation Workshop',
    organization: 'Ocean View School',
    description: 'Educational workshop series on marine ecosystem protection.',
    amount: '$8,000',
    timeline: '3 months',
    dateSubmitted: '11/5/2024',
    schoolBadge: 'SHVR'
  },
  {
    id: 3,
    type: 'incoming',
    category: 'Activity',
    status: 'pending',
    title: 'Composting Initiative',
    organization: 'Eco Warriors Academy',
    description: 'Setting up composting facilities and training students in organic waste management.',
    amount: '$6,500',
    timeline: '4 months',
    dateSubmitted: '11/8/2024'
  },
  {
    id: 4,
    type: 'outgoing',
    category: 'School',
    status: 'pending',
    title: 'Annual Sustainability Partnership',
    organization: 'Green Valley High School',
    description: 'Comprehensive support for all sustainability initiatives.',
    amount: '$50,000',
    timeline: '12 months',
    dateSubmitted: '11/1/2024'
  },
  {
    id: 5,
    type: 'incoming',
    category: '',
    status: 'pending',
    title: 'Community Solar Program',
    organization: 'Green Earth Alliance',
    description: 'Install solar panels in 20 community centers to provide clean energy access to underserved areas.',
    amount: '$42,000',
    timeline: '18 months',
    dateSubmitted: '11/12/2024'
  },
  {
    id: 6,
    type: 'incoming',
    category: '',
    status: 'approved',
    title: 'Water Filter Distribution',
    organization: 'Clean Water Initiative',
    description: 'Provide clean water filters to 500 families in rural communities.',
    amount: '$12,000',
    timeline: '5 months',
    dateSubmitted: '10/28/2024'
  }
];