// src/components/layout/Sidebar.tsx

import { NavLink } from "react-router-dom";
import { Home, Globe, Heart, DollarSign, TrendingUp, MessageSquare, User } from "lucide-react";


const items = [
  { to: "/dashboard",      label: "Dashboard Overview",     icon: Home },
  { to: "/explore",        label: "Explore Organizations",  icon: Globe },
  { to: "/sponsorships",   label: "Sponsorships",           icon: Heart },
  { to: "/funding-impact", label: "Funding & Impact",       icon: DollarSign, divider: true },
  { to: "/performance",    label: "Performance Insights",   icon: TrendingUp },
  { to: "/messages",       label: "Messages & Feedback",    icon: MessageSquare },
  { to: "/profile",        label: "Profile & Settings",     icon: User },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[63px] bottom-0 w-64 bg-white border-r border-gray-200 z-40 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Logo - exact spacing from Figma */}
        {/* <div className="px-6 pt-8 pb-10">
          <img src={logo} alt="Planet Crusader" className="h-10 w-auto" />
        </div> */}

        {/* Navigation Links */}
        <nav className=" px-6 pt-8 pb-10 flex-1 px-4 pb-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.to}>
                {item.divider && <div className="h-px bg-gray-200 my-6 mx-4" />}
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 mb-1 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-orange-50 text-orange-600 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}