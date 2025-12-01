import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { Card } from '../common/Card';

interface Coordinator {
  name: string;
  email: string;
  phone: string;
}

interface NGOContactProps {
  coordinator: Coordinator;
}

export const NGOContact: React.FC<NGOContactProps> = ({ coordinator }) => {
  return (
    <Card padding="md">
      <h3 className="text-base font-normal text-gray-900 leading-6 mb-4">Coordinator Contact</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-900">
          <User size={20} className="text-gray-400" />
          <span className="text-base">{coordinator.name}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-900">
          <Mail size={20} className="text-gray-400" />
          <span className="text-base">{coordinator.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-900">
          <Phone size={20} className="text-gray-400" />
          <span className="text-base">{coordinator.phone}</span>
        </div>
      </div>
    </Card>
  );
};