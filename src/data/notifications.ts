export interface Notification {
  id: number;
  title: string;
  timestamp: string;
  isRead: boolean;
}

export const notificationsData: Notification[] = [
  {
    id: 1,
    title: "New sponsorship request from Harmony International School",
    timestamp: "2 hours ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Green Valley High School completed milestone",
    timestamp: "5 hours ago",
    isRead: false,
  },
  {
    id: 3,
    title: "Your sponsorship request was approved",
    timestamp: "1 day ago",
    isRead: true,
  },
];