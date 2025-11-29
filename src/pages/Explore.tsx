// src/pages/ExploreOrganizations.tsx
import { useState } from "react";
import { Search, Users, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { organizations, sdgButtons } from "../data/organizations";

export default function ExploreOrganizations() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSDG, setSelectedSDG] = useState("All SDGs");

  const schools = organizations.filter(o => o.type === "School").length;
  const others = organizations.filter(o => o.type === "NGO" || o.type === "Club").length;

  const filteredOrgs = organizations.filter(org => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSDG = selectedSDG === "All SDGs" || org.sdg.includes(selectedSDG);
    return matchesSearch && matchesSDG;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16 px-6"> {/* Reduced top padding */}
      <div className="max-w-7xl mx-auto space-y-7"> {/* Tighter spacing between sections */}

        {/* Header - Much less top space */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">Explore Organizations</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover schools, NGOs, and clubs making a real impact. Sponsor their sustainability projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">🌐</div>
            <div>
              <p className="text-sm text-gray-600">Total Organizations</p>
              <p className="text-3xl font-bold text-gray-900">{organizations.length}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">👥</div>
            <div>
              <p className="text-sm text-gray-600">Schools</p>
              <p className="text-3xl font-bold text-gray-900">{schools}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl">🌐</div>
            <div>
              <p className="text-sm text-gray-600">NGOs & Clubs</p>
              <p className="text-3xl font-bold text-gray-900">{others}</p>
            </div>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 h-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 h-12 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition whitespace-nowrap">
              <span className="font-medium">All Categories</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {sdgButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => setSelectedSDG(btn.label)}
                className="px-5 h-9 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: selectedSDG === btn.label ? btn.color : "#F3F4F6",
                  color: selectedSDG === btn.label ? "white" : "#374151",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrgs.map((org) => (
            <div
              key={org.id}
              onClick={() => navigate(`/organization/${org.id}`)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition">
                      {org.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{org.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {org.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: org.type === "School" ? "#DBEAFE" : org.type === "NGO" ? "#D1FAE5" : "#FCE7F3",
                      color: org.type === "School" ? "#1D4ED8" : org.type === "NGO" ? "#065F46" : "#BE185D",
                    }}
                  >
                    {org.type}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{org.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {org.sdg.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: org.sdgColors[i] }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t">
                  <span>Joined {formatDate(org.joinedDate)}</span>
                  <span className="font-medium text-gray-700">{org.goals} Active Goals</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-2xl font-bold text-blue-600">{org.students}</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 text-center">
                    <Calendar className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <p className="text-2xl font-bold text-emerald-600">{org.events}</p>
                    <p className="text-xs text-gray-600">Events</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}