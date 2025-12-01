import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[] | string[];
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select...',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const normalizedOptions: DropdownOption[] = options.map(opt => 
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );
  
  const selectedOption = normalizedOptions.find(opt => opt.value === value);
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-base text-gray-700 leading-6">
          {label}
        </label>
      )}
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[14px] text-base text-gray-600 text-left flex justify-between items-center hover:border-gray-300 transition-colors"
        >
          <span>{selectedOption?.label || placeholder}</span>
          <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-700 rounded z-10 shadow-lg max-h-60 overflow-y-auto">
            {normalizedOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="w-full py-2 px-5 bg-white text-base text-gray-700 text-left hover:bg-gray-100 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};