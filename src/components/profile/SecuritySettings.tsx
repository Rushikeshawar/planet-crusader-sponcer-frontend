import React from 'react';
import { Lock } from 'lucide-react';
import { Card } from '../common/Card';

export const SecuritySettings: React.FC = () => {
  return (
    <Card padding="md">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="w-6 h-6 text-[#F54900]" />
        <h3 className="text-base font-normal text-gray-900">Password & Security</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-[#F9FAFB] rounded-[14px] p-4 min-h-[84px] flex flex-col justify-center">
          <h4 className="text-base font-normal text-gray-900">Change Password</h4>
          <p className="text-gray-600 text-base mt-1">Update your account password</p>
        </div>
        <div className="bg-[#F9FAFB] rounded-[14px] p-4 min-h-[84px] flex flex-col justify-center">
          <h4 className="text-base font-normal text-gray-900">Two-Factor Authentication</h4>
          <p className="text-gray-600 text-base mt-1">Add an extra layer of security</p>
        </div>
      </div>
    </Card>
  );
};