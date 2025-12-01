import React, { useRef, useEffect } from 'react';

interface Notification {
  id: number;
  title: string;
  timestamp: string;
  isRead: boolean;
}

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
}

export default function NotificationsDropdown({ 
  isOpen, 
  onClose, 
  notifications 
}: NotificationsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 z-50"
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-200">
        <h3 className="text-lg font-normal text-gray-900 leading-7">
          Notifications
        </h3>
      </div>

      {/* Notifications List */}
      <div className="max-h-72 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">
            No notifications yet
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 pt-4 pb-2 border-b border-gray-100 flex flex-col gap-1 cursor-pointer hover:bg-gray-50 transition-colors ${
                !notification.isRead ? 'bg-orange-50' : ''
              }`}
            >
              <div className="text-base font-normal text-gray-900 leading-6">
                {notification.title}
              </div>
              <div className="text-xs font-normal text-gray-500 leading-4">
                {notification.timestamp}
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {/* {notifications.length > 0 && (
        <div className="px-4 py-3 border-t border-gray-200">
          <button className="w-full text-center text-sm font-medium text-orange-brand hover:text-orange-600 transition-colors">
            View all
          </button>
        </div>
      )} */}
    </div>
  );
}