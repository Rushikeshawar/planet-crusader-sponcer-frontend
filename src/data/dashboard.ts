// src/data/dashboard.ts

import { Sprout, Users } from "lucide-react";

export const dashboardSummaryCards = [
  {
    title: "Schools Supported",
    value: "5",
    icon: "🏫",        // School building emoji
    trend: "+12%",
    bg: "#FEF3E7",
  },
  {
    title: "Active Sponsorships",
    value: "4",
    icon: "💚",        // Green heart emoji
    trend: "+8%",
    bg: "#E7F8ED",
  },
  {
    title: "SDGs Impacted",
    value: "8",
    icon: "🎯",        // Target emoji
    trend: "+15%",
    bg: "#E8F1FF",
  },
  {
    title: "Total Contribution",
    value: "$93K",
    icon: "📈",        // Trending up emoji
    trend: "+22%",
    bg: "#EFE7FF",
  },
];

export const activeSponsorships = [
  {
    title: "Carbon Neutral Campus 2025",
    school: "Green Valley High School",
    badge: "SHVR",
    progress: 68,
    co2: "45 tons/year",
    students: 850,
    status: "In Progress",
  },
  {
    title: "Waste-Free Week",
    school: "Eco Warriors Academy",
    badge: "EWA",
    progress: 54,
    co2: "12 tons/year",
    students: 620,
    status: "In Progress",
  },
  {
    title: "Solar Lab Upgrade",
    school: "Riverside Community School",
    badge: "RCS",
    progress: 32,
    co2: "8 tons/year",
    students: 410,
    status: "In Progress",
  },
];

export const featuredSchools = [
  {
    name: "Green Valley High School",
    city: "San Francisco",
    score: 13,
    sdg1: 15,
    sdg2: 12,
    students: 850,
    events: 8,
  },
  {
    name: "Eco Warriors Academy",
    city: "Denver",
    score: 7,
    sdg1: 14,
    sdg2: 11,
    students: 720,
    events: 7,
  },
  {
    name: "Riverside Community School",
    city: "Seattle",
    score: 6,
    sdg1: 4,
    sdg2: 13,
    students: 690,
    events: 7,
  },
];