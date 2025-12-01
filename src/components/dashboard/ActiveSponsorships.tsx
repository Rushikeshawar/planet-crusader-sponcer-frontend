
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sprout, Users } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';

interface Sponsorship {
  title: string;
  school: string;
  badge?: string;
  status: string;
  progress: number;
  co2: string;
  students: number;
}

interface ActiveSponsorshipsProps {
  sponsorships: Sponsorship[];
}

export const ActiveSponsorships: React.FC<ActiveSponsorshipsProps> = ({ sponsorships }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl border border-[#E5E7EB] space-y-6"
      style={{ padding: "24.8px 24.8px 0.8px" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-normal text-[#101828] leading-7 mb-1">
            Active Sponsorships
          </h2>
          <p className="text-base font-normal text-[#4A5565] leading-6">
            Track progress on your current commitments
          </p>
        </div>

        <Button
          variant="primary"
          icon={ChevronRight}
          iconPosition="right"
          onClick={() => navigate('/sponsorships')}
        >
          View All
        </Button>
      </div>

      <div className="space-y-4 pb-6">
        {sponsorships.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#E5E7EB] rounded-[14px] space-y-3"
            style={{ padding: "16.8px 16.8px 0.8px" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-normal text-[#101828] leading-6 mb-1">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-[#4A5565] leading-6">
                  {item.school}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {item.badge && (
                  <div
                    className="h-8 px-2.5 rounded-[10px] flex items-center justify-center"
                    style={{
                      background: "rgba(217, 255, 220, 0.70)",
                      border: "0.5px solid black",
                    }}
                  >
                    <span className="text-sm font-normal text-black leading-5">
                      {item.badge}
                    </span>
                  </div>
                )}

                <div className="h-8 px-3 bg-[#F0FDF4] rounded-[10px] flex items-center">
                  <span className="text-base font-normal text-[#00A63E] leading-6">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>

            <ProgressBar percent={item.progress} />

            <div className="grid grid-cols-2 gap-4 pb-3">
              <div className="flex items-center gap-2 text-base font-normal text-[#4A5565] leading-6">
                <Sprout className="w-4 h-4" />
                <span>CO₂ Reduction: {item.co2}</span>
              </div>

              <div className="flex items-center gap-2 text-base font-normal text-[#4A5565] leading-6">
                <Users className="w-4 h-4" />
                <span>Students Engaged: {item.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
