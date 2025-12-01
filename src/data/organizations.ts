// src/data/organizations.ts

export interface Organization {
  id: string;
  name: string;
  location: string;
  logo: string;
  type: "School" | "NGO";
  sdgTags: string[];
  sdgColors: string[];
  students: string;
  events: string;
}

export interface SDGButton {
  label: string;
  color: string;
}

export interface CategoryOption {
  label: string;
  value: string;
}

export const organizations: Organization[] = [
  {
    id: "green-valley-high",
    name: "Green Valley High School",
    location: "San Francisco, USA",
    logo: "🌳",
    type: "School",
    sdgTags: ["SDG 13", "SDG 15", "SDG 12"],
    sdgColors: ["#3F7E44", "#56C02B", "#BF8B2E"],
    students: "850",
    events: "8",
  },
  {
    id: "riverside-community",
    name: "Riverside Community School",
    location: "Portland, USA",
    logo: "🌊",
    type: "NGO",
    sdgTags: ["SDG 6", "SDG 14", "SDG 11"],
    sdgColors: ["#26BDE2", "#0A97D9", "#FD9D24"],
    students: "620",
    events: "5",
  },
  {
    id: "sunshine-elementary",
    name: "Sunshine Elementary",
    location: "Austin, USA",
    logo: "☀️",
    type: "School",
    sdgTags: ["SDG 7", "SDG 4", "SDG 13"],
    sdgColors: ["#FCC30B", "#C5192D", "#3F7E44"],
    students: "480",
    events: "6",
  },
  {
    id: "harmony-international",
    name: "Harmony International School",
    location: "Seattle, USA",
    logo: "🌍",
    type: "School",
    sdgTags: ["SDG 4", "SDG 10", "SDG 16"],
    sdgColors: ["#C5192D", "#DD1367", "#00689D"],
    students: "920",
    events: "7",
  },
  {
    id: "eco-warriors-academy",
    name: "Eco Warriors Academy",
    location: "Denver, USA",
    logo: "♻️",
    type: "School",
    sdgTags: ["SDG 12", "SDG 13", "SDG 15"],
    sdgColors: ["#BF8B2E", "#3F7E44", "#56C02B"],
    students: "750",
    events: "9",
  },
  {
    id: "ocean-view-school",
    name: "Ocean View School",
    location: "San Diego, USA",
    logo: "🐋",
    type: "NGO",
    sdgTags: ["SDG 14", "SDG 6", "SDG 12"],
    sdgColors: ["#0A97D9", "#26BDE2", "#BF8B2E"],
    students: "540",
    events: "4",
  },
];

export const sdgButtons: SDGButton[] = [
  { label: "All SDGs", color: "#FF6900" },
  { label: "SDG 4", color: "#C5192D" },
  { label: "SDG 7", color: "#FCC30B" },
  { label: "SDG 11", color: "#FD9D24" },
  { label: "SDG 13", color: "#3F7E44" },
  { label: "SDG 15", color: "#56C02B" },
  { label: "SDG 6", color: "#26BDE2" },
  { label: "SDG 14", color: "#0A97D9" },
];

export const categoryOptions: CategoryOption[] = [
  { label: "All Categories", value: "all" },
  { label: "School", value: "School" },
  { label: "NGO / Club", value: "NGO" },
];