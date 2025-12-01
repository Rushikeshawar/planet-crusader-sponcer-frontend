import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { StatsCards } from '../components/explore/StatsCards';
import { SearchAndFilters } from '../components/explore/SearchAndFilters';
import { OrganizationCard } from '../components/explore/OrganizationCard';
import { organizations, sdgButtons, categoryOptions } from '../data/organizations';

export default function ExploreOrganizations() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSDG, setSelectedSDG] = useState("All SDGs");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
        <StatsCards total={total} schools={schools} ngos={ngos} />

        {/* Search & Filters */}
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categoryOptions={categoryOptions}
          selectedSDG={selectedSDG}
          onSDGChange={setSelectedSDG}
          sdgButtons={sdgButtons}
        />

        {/* Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredOrgs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12 text-lg">
              No organizations found matching your filters.
            </p>
          ) : (
            filteredOrgs.map((org) => (
              <OrganizationCard
                key={org.id}
                organization={org}
                onClick={() => handleCardClick(org)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}