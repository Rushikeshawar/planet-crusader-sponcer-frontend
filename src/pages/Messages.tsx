import React, { useState } from "react";
import { Send, Mail, Search, Paperclip } from "lucide-react";
import { messages, feedbackCategories } from '../data/messagesData';

const MessagesAndFeedback = () => {
  const [mode, setMode] = useState<'messages' | 'feedback'>("messages");
  const [activeMessage, setActiveMessage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [messageText, setMessageText] = useState("");

  return (
    <div className="max-w-[960px] mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-normal text-gray-900 mb-2 leading-9">
            Messages & Feedback
          </h1>
          <p className="text-base text-gray-600 leading-6">
            Communicate with schools and admin, or send feedback.
          </p>
        </div>
        <button
          onClick={() => setMode("feedback")}
          className="bg-[#FF6900] hover:bg-[#E65F00] text-white rounded-[14px] px-6 py-3 text-base font-normal flex items-center gap-2 leading-6 transition-colors"
        >
          <Mail size={20} />
          Send Feedback
        </button>
      </div>

      {mode === "messages" && (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex h-[700px]">
          {/* Left Sidebar - Message List */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative flex items-center">
                <Search 
                  size={20} 
                  className="absolute left-3 text-gray-400"
                />
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
                  onClick={() => setActiveMessage(idx)}
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

          {/* Right Panel - Message Thread */}
          <div className="flex-1 flex flex-col">
            {/* Thread Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl text-gray-900 font-normal mb-1 leading-[30px]">
                {messages[activeMessage].subject}
              </h2>
              <p className="text-base text-gray-600 leading-6">
                {messages[activeMessage].sender}
              </p>
            </div>

            {/* Message Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-base text-gray-600 leading-6">
                    {messages[activeMessage].sender}
                  </span>
                  <span className="text-xs text-gray-500 leading-4">
                    {messages[activeMessage].time}
                  </span>
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none max-w-[437px]">
                  <p className="text-base text-gray-900 leading-6 m-0">
                    {messages[activeMessage].fullText}
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
                <button className="bg-[#FF6900] hover:bg-[#E65F00] text-white rounded-[14px] px-6 py-3 text-base flex items-center gap-2 leading-6 transition-colors">
                  <Send size={20} />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === "feedback" && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          {/* Feedback Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl text-gray-900 font-normal mb-1 leading-[30px]">
                Send Feedback
              </h2>
              <p className="text-base text-gray-600 leading-6">
                Help us improve the platform with your suggestions
              </p>
            </div>
            <button
              onClick={() => setMode("messages")}
              className="bg-transparent text-gray-700 border border-gray-200 rounded-[14px] px-4 py-2 text-base cursor-pointer leading-6 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>

          {/* Feedback Form */}
          <div className="flex flex-col gap-6">
            {/* Category Dropdown */}
            <div>
              <label className="block text-base text-gray-700 mb-2 leading-6">
                Category
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full py-3 px-4 bg-white border border-gray-200 rounded-[14px] text-base text-gray-700 text-left cursor-pointer flex justify-between items-center hover:border-gray-300"
                >
                  {selectedCategory || "Select a Category"}
                  <svg width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path d="M1 1L5.5 5L10 1" stroke="#364153" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-700 rounded z-10 shadow-lg">
                    {feedbackCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setDropdownOpen(false);
                        }}
                        className="w-full py-1.5 px-5 bg-white border-none text-base text-gray-700 text-left cursor-pointer hover:bg-gray-100"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Feedback Text Area */}
            <div>
              <label className="block text-base text-gray-700 mb-2 leading-6">
                Your Feedback
              </label>
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Share your thoughts, suggestions, or report issues..."
                className="w-full py-3 px-4 border border-gray-200 rounded-[14px] text-base text-gray-900 resize-none min-h-[169.6px] outline-none focus:border-orange-600"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={() => {
                alert("Feedback submitted!");
                setFeedbackText("");
                setSelectedCategory("");
                setMode("messages");
              }}
              className="bg-[#FF6900] hover:bg-[#E65F00] text-white rounded-[14px] px-6 py-3 text-base cursor-pointer leading-6 w-full transition-colors"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesAndFeedback;