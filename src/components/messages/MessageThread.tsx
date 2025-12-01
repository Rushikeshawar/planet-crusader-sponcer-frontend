import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { Button } from '../common/Button';

interface Message {
  sender: string;
  subject: string;
  fullText: string;
  time: string;
}

interface MessageThreadProps {
  message: Message;
}

export const MessageThread: React.FC<MessageThreadProps> = ({ message }) => {
  const [messageText, setMessageText] = useState("");

  return (
    <div className="flex-1 flex flex-col">
      {/* Thread Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl text-gray-900 font-normal mb-1 leading-[30px]">
          {message.subject}
        </h2>
        <p className="text-base text-gray-600 leading-6">
          {message.sender}
        </p>
      </div>

      {/* Message Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base text-gray-600 leading-6">
              {message.sender}
            </span>
            <span className="text-xs text-gray-500 leading-4">
              {message.time}
            </span>
          </div>
          <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none max-w-[437px]">
            <p className="text-base text-gray-900 leading-6 m-0">
              {message.fullText}
            </p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex gap-3 items-center">
          <button className="w-11 h-12 border-none bg-transparent cursor-pointer flex items-center justify-center rounded-[14px] hover:bg-gray-100">
            <Paperclip size={20} className="text-gray-700" />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="flex-1 py-3 px-4 border border-gray-200 rounded-[14px] text-base text-gray-600 outline-none focus:border-orange-600"
          />
          <Button variant="primary" icon={Send} iconPosition="left">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};