import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface School {
  name: string;
  city: string;
  score: number;
  sdg1: number;
  sdg2: number;
  students: number;
  events: number;
}

interface FeaturedSchoolsProps {
  schools: School[];
}

export const FeaturedSchools: React.FC<FeaturedSchoolsProps> = ({ schools }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-[#E5E7EB] space-y-6"
      style={{ padding: "24.8px 24.8px 0.8px" }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-normal text-[#101828] leading-7 mb-1">
            Featured Schools
          </h2>
          <p className="text-base font-normal text-[#4A5565] leading-6">
            Top-performing schools making an impact
          </p>
        </div>

        <Button
          variant="primary"
          icon={ChevronRight}
          iconPosition="right"
        >
          Explore All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {schools.map((school, idx) => (
          <div
            key={idx}
            className="border border-[#E5E7EB] rounded-[14px] space-y-3"
            style={{ padding: "16.8px 16.8px 0.8px" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FF8904 0%, #05DF72 100%)",
                }}
              >
                🌍
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-normal text-[#101828] leading-6 truncate">
                  {school.name}
                </h3>
                <p className="text-base font-normal text-[#4A5565] leading-6">
                  {school.city}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[school.score, school.sdg1, school.sdg2].map((badge, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-[#DCFCE7] rounded-[10px] flex items-center justify-center"
                >
                  <span className="text-xs font-normal text-[#008236] leading-4">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-base font-normal text-[#4A5565] leading-6 pb-3">
              <span>{school.students} students</span>
              <span>{school.events} events</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};