// src/data/organizations.ts
export interface Organization {
  id: string;
  name: string;
  location: string;
  type: "School" | "NGO" | "Club";
  logo: string;
  sdg: string[];
  sdgColors: string[];
  students: number;
  events: number;
  goals: number;
  desc: string;
  joinedDate: string; // New field
}

export const organizations: Organization[] = [
  {
    id: "green-valley-high",
    name: "Green Valley High School",
    location: "San Francisco, USA",
    type: "School",
    logo: "🌳",
    sdg: ["SDG 13", "SDG 15", "SDG 12"],
    sdgColors: ["#48A14D", "#56C02B", "#BF8B2E"],
    students: 850,
    events: 8,
    goals: 3,
    desc: "A pioneer in sustainability education with a strong focus on climate action and circular practices.",
    joinedDate: "2024-03-15"
  },
  {
    id: "riverside-community",
    name: "Riverside Community School",
    location: "Portland, USA",
    type: "School",
    logo: "🏫",
    sdg: ["SDG 6", "SDG 11"],
    sdgColors: ["#26BDE2", "#FD9D24"],
    students: 620,
    events: 5,
    goals: 2,
    desc: "Community-first school focusing on clean water and marine ecosystem projects.",
    joinedDate: "2024-06-22"
  },
  {
    id: "sunshine-elementary",
    name: "Sunshine Elementary",
    location: "Austin, USA",
    type: "School",
    logo: "☀️",
    sdg: ["SDG 4", "SDG 3", "SDG 13"],
    sdgColors: ["#C5192D", "#4C9F38", "#48A14D"],
    students: 480,
    events: 6,
    goals: 3,
    desc: "Promoting quality education and health through sustainability.",
    joinedDate: "2024-01-10"
  },
  {
    id: "ocean-guardians",
    name: "Ocean Guardians NGO",
    location: "Miami, USA",
    type: "NGO",
    logo: "🌊",
    sdg: ["SDG 14", "SDG 13"],
    sdgColors: ["#0A97D9", "#48A14D"],
    students: 0,
    events: 12,
    goals: 2,
    desc: "Protecting marine life and fighting plastic pollution.",
    joinedDate: "2023-11-05"
  },
  {
    id: "future-leaders",
    name: "Future Leaders Club",
    location: "Boston, USA",
    type: "Club",
    logo: "🎯",
    sdg: ["SDG 4", "SDG 8"],
    sdgColors: ["#C5192D", "#A21942"],
    students: 320,
    events: 9,
    goals: 2,
    desc: "Empowering youth for education and decent work.",
    joinedDate: "2024-08-19"
  },
  {
    id: "eco-warriors",
    name: "Eco Warriors Academy",
    location: "Seattle, USA",
    type: "School",
    logo: "🌿",
    sdg: ["SDG 7", "SDG 11", "SDG 15"],
    sdgColors: ["#FCC30B", "#FD9D24", "#56C02B"],
    students: 930,
    events: 11,
    goals: 3,
    desc: "Champions of clean energy and sustainable cities initiatives.",
    joinedDate: "2024-02-28"
  }
];

export const sdgButtons = [
  { label: "All SDGs", color: "#FF6B00" },
  { label: "SDG 4", color: "#C5192D" },
  { label: "SDG 7", color: "#FCC30B" },
  { label: "SDG 11", color: "#FD9D24" },
  { label: "SDG 13", color: "#48A14D" },
  { label: "SDG 14", color: "#0A97D9" },
  { label: "SDG 15", color: "#56C02B" },
];