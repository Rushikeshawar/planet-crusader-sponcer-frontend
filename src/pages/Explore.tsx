import React, { useState } from 'react';
import { Search, Users, Calendar, MapPin, ChevronDown, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { organizations, sdgButtons, categoryOptions } from '../data/organizations';

export default function ExploreOrganizations() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSDG, setSelectedSDG] = useState("All SDGs");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const schools = organizations.filter(o => o.type === "School").length;
  const ngos = organizations.filter(o => o.type === "NGO").length;
  const total = organizations.length;

  const filteredOrgs = organizations.filter(org => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSDG = selectedSDG === "All SDGs" || org.sdgTags.includes(selectedSDG);

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "School" && org.type === "School") ||
      (selectedCategory === "NGO" && org.type === "NGO");

    return matchesSearch && matchesSDG && matchesCategory;
  });

  const handleCardClick = (org: typeof organizations[0]) => {
    if (org.type === "School") {
      navigate(`/school/${org.id}`);
    } else {
      navigate(`/ngo/${org.id}`);
    }
  };

  const currentCategoryLabel = categoryOptions.find(opt => opt.value === selectedCategory)?.label || "All Categories";

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="max-w-[960px] mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-[#101828] leading-9">
              Explore Organizations
            </h1>
            <p className="text-base font-normal text-[#4A5565] leading-6">
              Discover schools, NGOs, and clubs making a difference and find opportunities to sponsor their initiatives.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-colors ${
                viewMode === 'grid' ? 'bg-[#FF6900]' : 'bg-[#F3F4F6]'
              }`}
            >
              <Grid className={`w-5 h-5 ${viewMode === 'grid' ? 'text-white' : 'text-gray-600'}`} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-colors ${
                viewMode === 'list' ? 'bg-[#FF6900]' : 'bg-[#F3F4F6]'
              }`}
            >
              <List className={`w-5 h-5 ${viewMode === 'list' ? 'text-white' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-[#E5E7EB]" style={{ padding: '24.8px 24.8px 0.8px' }}>
            <div className="flex items-start gap-3 pb-6">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-[14px] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#155DFC]" />
              </div>
              <div>
                <p className="text-base font-normal text-[#4A5565]">Total Organizations</p>
                <p className="text-lg font-normal text-[#101828]">{total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E7EB]" style={{ padding: '24.8px 24.8px 0.8px' }}>
            <div className="flex items-start gap-3 pb-6">
              <div className="w-10 h-10 bg-[#F3E8FF] rounded-[14px] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#9810FA]" />
              </div>
              <div>
                <p className="text-base font-normal text-[#4A5565]">Schools</p>
                <p className="text-lg font-normal text-[#101828]">{schools}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E5E7EB]" style={{ padding: '24.8px 24.8px 0.8px' }}>
            <div className="flex items-start gap-3 pb-6">
              <div className="w-10 h-10 bg-[#CBFBF1] rounded-[14px] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#009689]" />
              </div>
              <div>
                <p className="text-base font-normal text-[#4A5565]">NGOs / Clubs</p>
                <p className="text-lg font-normal text-[#101828]">{ngos}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]" style={{ padding: '24.8px 24.8px 0.8px' }}>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
              <input
                type="text"
                placeholder="Search organizations by name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[49.6px] pl-10 pr-4 rounded-[14px] border border-[#E5E7EB] text-base text-[#6A7282] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="px-6 h-[49.6px] rounded-[14px] border border-[#E5E7EB] bg-white flex items-center justify-between gap-8 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                <span className="text-base font-normal text-[#6A7282]">{currentCategoryLabel}</span>
                <ChevronDown className={`w-4 h-4 text-[#6A7282] transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border border-[#E5E7EB] rounded-[14px] shadow-lg z-10 overflow-hidden">
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedCategory(option.value);
                        setIsCategoryOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-base text-[#6A7282] hover:bg-orange-50 transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SDG Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 pb-2">
            {sdgButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => setSelectedSDG(btn.label)}
                className={`h-8 px-3 rounded-[10px] text-sm font-medium transition-all hover:opacity-90 ${
                  selectedSDG === btn.label ? 'text-white' : 'text-gray-700'
                }`}
                style={{
                  backgroundColor: selectedSDG === btn.label ? btn.color : "#F3F4F6",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredOrgs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12 text-lg">
              No organizations found matching your filters.
            </p>
          ) : (
            filteredOrgs.map((org) => (
              <div
                key={org.id}
                onClick={() => handleCardClick(org)}
                className="bg-white rounded-2xl border border-[#E5E7EB] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ padding: '24.8px 24.8px 0.8px' }}
              >
                <div className="space-y-4 pb-6">
                  <div className="flex justify-between items-start">
                    <div
                      className="w-16 h-16 rounded-[14px] flex items-center justify-center text-3xl shadow-md"
                      style={{ background: 'linear-gradient(135deg, #FFD6A7 0%, #B9F8CF 100%)' }}
                    >
                      {org.logo}
                    </div>
                    <span className="px-3 py-1 bg-[#DBEAFE] text-[#1447E6] text-xs font-medium rounded-[10px]">
                      {org.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#101828]">{org.name}</h3>

                  <div className="flex items-center gap-2 text-[#4A5565]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{org.location}</span>
                  </div>

                  <div>
                    <p className="text-sm text-[#4A5565] mb-2">SDG Focus</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {org.sdgTags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs text-white rounded"
                          style={{ backgroundColor: org.sdgColors[i] }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#EFF6FF] rounded-[14px] p-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#155DFC]" />
                        <span className="text-xs text-[#4A5565]">Students</span>
                      </div>
                      <p className="text-lg font-bold text-[#155DFC]">{org.students}</p>
                    </div>
                    <div className="bg-[#F0FDF4] rounded-[14px] p-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#00A63E]" />
                        <span className="text-xs text-[#4A5565]">Events</span>
                                          </div>
                  <p className="text-lg font-bold text-[#00A63E]">{org.events}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>
);
}