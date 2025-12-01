// Types
export interface Message {
  sender: string;
  subject: string;
  preview: string;
  date: string;
  time: string;
  fullText: string;
  unread: boolean;
  isAdmin: boolean;
}

// Data
export const messages: Message[] = [
  {
    sender: "Platform Admin",
    subject: "Welcome to Planet Crusader!",
    preview: "Thank you for joining our mission to create a sustainable future...",
    date: "11/1/2024",
    time: "2024-11-01 10:00",
    fullText: "Welcome to Planet Crusader! We're thrilled to have you as a sponsor. Your support makes a real difference in empowering schools and students worldwide.",
    unread: false,
    isAdmin: true
  },
  {
    sender: "Green Valley High School",
    subject: "Thank you for your support!",
    preview: "We wanted to express our gratitude for sponsoring our Carbon Neutral Campus initiative...",
    date: "11/5/2024",
    time: "2024-11-05 14:30",
    fullText: "We wanted to express our gratitude for sponsoring our Carbon Neutral Campus initiative. Your contribution is making a real impact on our sustainability goals.",
    unread: true,
    isAdmin: false
  },
  {
    sender: "Platform Admin",
    subject: "New Sponsorship Request Available",
    preview: "Harmony International School has submitted a new sponsorship request...",
    date: "11/10/2024",
    time: "2024-11-10 09:15",
    fullText: "Harmony International School has submitted a new sponsorship request for their renewable energy project. Please review it at your earliest convenience.",
    unread: true,
    isAdmin: true
  }
];

export const feedbackCategories: string[] = [
  "Bug Report",
  "Feature Request",
  "Improvement Suggestion",
  "Other"
];