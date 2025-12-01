
import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface SummaryCard {
  icon: string;
  bg: string;
  title: string;
  value: string;
  trend: string;
}

interface SummaryCardsProps {
  cards: SummaryCard[];
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-[#E5E7EB]"
          style={{ padding: "24.8px 24.8px 0.8px" }}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center h-12">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl"
                style={{ backgroundColor: card.bg }}
              >
                {card.icon}
              </div>
              <div className="px-2 py-1 bg-[#F0FDF4] rounded-[10px]">
                <span className="text-xs font-normal text-[#00A63E] leading-4">
                  {card.trend}
                </span>
              </div>
            </div>

            <div>
              <p className="text-base font-normal text-[#4A5565] leading-6 mb-1">
                {card.title}
              </p>
              <p className="text-base font-normal text-[#101828] leading-6">
                {card.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};