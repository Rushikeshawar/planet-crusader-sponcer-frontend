// src/components/reusable/SponsorForm.tsx

import React, { useState } from 'react';
import { MapPin, DollarSign, MessageSquare } from 'lucide-react';

interface SponsorFormProps {
  type: 'school' | 'roadmap' | 'org';
  organizationName: string;
  organizationLogo: string;
  organizationLocation: string;
  roadmapTitle?: string;
}

export const SponsorForm: React.FC<SponsorFormProps> = ({ 
  type, 
  organizationName, 
  organizationLogo, 
  organizationLocation,
  roadmapTitle 
}) => {
  const defaultAmount = type === 'school' ? 50000 : type === 'org' ? 50000 : 25000;
  const [amount, setAmount] = useState(defaultAmount);
  const [resources, setResources] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(
      `Sponsorship submitted!\n` +
      `Target: ${roadmapTitle || organizationName}\n` +
      `Amount: $${amount.toLocaleString()}\n` +
      `Resources: ${resources || 'None'}\n` +
      `Message: ${message || 'None'}`
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Organization Info */}
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-green-100 rounded-xl flex items-center justify-center text-3xl">
          {organizationLogo}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{organizationName}</h3>
          <p className="text-gray-600 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {organizationLocation}
          </p>
        </div>
      </div>

      {/* Amount Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          Sponsorship Amount (USD)
        </label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter amount"
          />
        </div>
        <p className="text-sm text-gray-500">
          Suggested: ${defaultAmount.toLocaleString()}
        </p>
      </div>

      {/* Resources Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          Additional Resources (Optional)
        </label>
        <input
          type="text"
          value={resources}
          onChange={(e) => setResources(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="e.g., Materials, Equipment, Volunteering"
        />
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          Message to {type === 'school' ? 'School' : 'Organization'} (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Share why you're excited to support this initiative..."
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-colors shadow-sm"
        >
          Send Sponsorship Request
        </button>
      </div>
    </div>
  );
};