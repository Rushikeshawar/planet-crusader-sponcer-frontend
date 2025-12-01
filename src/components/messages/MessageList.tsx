import React from 'react';
import { Search } from 'lucide-react';

interface Message {
  sender: string;
  subject: string;
  preview: string;
  date: string;
  time: string;
  fullText: string;
  unread: boolean;
}

interface MessageListProps {
  messages: Message[];
  activeMessage: number;
  onSelectMessage: (index: number) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  activeMessage,
  onSelectMessage
}) => {
  return (
    <div className="w-80 border-r border-gray-200 flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative flex items-center">
          <Search size={20} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-[14px] text-base text-gray-600 outline-none focus:border-orange-600"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            onClick={() => onSelectMessage(idx)}
            className={`p-4 border-b border-gray-200 cursor-pointer h-[172.8px] flex flex-col justify-between ${
              activeMessage === idx ? 'bg-[#FFF7ED]' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-base text-gray-900 font-normal leading-6">
                {msg.sender}
              </span>
              {msg.unread && (
                <div className="w-2 h-2 rounded-full bg-[#FF6900]" />
              )}
            </div>
            <div className="text-base text-gray-900 mb-1 leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
              {msg.subject}
            </div>
            <div className="text-base text-gray-600 leading-6 h-12 overflow-hidden line-clamp-2">
              {msg.preview}
            </div>
            <div className="text-base text-gray-500 leading-6 mt-2">
              {msg.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};