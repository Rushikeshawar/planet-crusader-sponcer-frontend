import React from 'react';
import { Card } from '../common/Card';
import { Dropdown } from '../common/Dropdown';

interface RequestFiltersProps {
  typeFilter: string;
  statusFilter: string;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export const RequestFilters: React.FC<RequestFiltersProps> = ({
  typeFilter,
  statusFilter,
  onTypeChange,
  onStatusChange
}) => {
  return (
    <Card padding="md">
      <div className="grid grid-cols-2 gap-4">
        <Dropdown
          label="Filter by Type"
          value={typeFilter}
          onChange={onTypeChange}
          options={['all', 'incoming', 'outgoing']}
        />
        <Dropdown
          label="Filter by Status"
          value={statusFilter}
          onChange={onStatusChange}
          options={['all', 'pending', 'approved', 'rejected']}
        />
      </div>
    </Card>
  );
};