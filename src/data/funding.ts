export const fundingOverview = {
  totalSponsored: 88000,
  used: 57600,
  remaining: 30400
};

export const allocations = [
  { title: "Activities", allocated: 20000, used: 15400 },
  { title: "Roadmaps", allocated: 35000, used: 22300 },
  { title: "School Support", allocated: 15000, used: 7500 },
  { title: "NGO / Club Support", allocated: 18000, used: 12600 }
];

export const projects = [
  {
    id: "cnc-2025",
    title: "Carbon Neutral Campus 2025",
    org: "Green Valley High School",
    status: "In Progress",
    allocated: 25000,
    spent: 17500,
    remaining: 7500,
    progress: 68,
    impact: {
      treesPlanted: 0,
      co2Reduced: "45 tons/year",
      studentsEngaged: 850,
      activitiesCompleted: "12/18"
    }
  },
  {
    id: "tree-plantation-drive",
    title: "Tree Plantation Drive",
    org: "Green Valley High School",
    status: "In Progress",
    allocated: 5000,
    spent: 4800,
    remaining: 200,
    progress: 92,
    impact: {
      treesPlanted: 5000,
      co2Reduced: "N/A",
      studentsEngaged: 620,
      activitiesCompleted: "5/6"
    }
  }
];
