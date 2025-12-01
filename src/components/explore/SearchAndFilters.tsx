import React from 'react';
import { Search } from 'lucide-react';
import { Card } from '../common/Card';
import { Input } from '../common/Input';
import { Dropdown } from '../common/Dropdown';
import { Button } from '../common/Button';

interface SDGButton {
  label: string;
  color: string;
}

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categoryOptions: Array<{ label: string; value: string }>;
  selectedSDG: string;
  onSDGChange: (value: string) => void;
  sdgButtons: SDGButton[];
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categoryOptions,
  selectedSDG,
  onSDGChange,
  sdgButtons
}) => {
  return (
    <Card padding="md">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99A1AF]" />
          <input
            type="text"
            placeholder="Search organizations by name or city..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-[49.6px] pl-10 pr-4 rounded-[14px] border border-[#E5E7EB] text-base text-[#6A7282] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <Dropdown
          value={selectedCategory}
          onChange={onCategoryChange}
          options={categoryOptions}
          className="min-w-[200px]"
        />
      </div>

      {/* SDG Buttons */}
      <div className="flex flex-wrap gap-2 pt-4 pb-2">
        {sdgButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => onSDGChange(btn.label)}
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
    </Card>
  );
};