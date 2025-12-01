import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Calendar, Bell, Lock } from 'lucide-react';

type NotificationKey = 'emailUpdates' | 'schoolMessages' | 'impactReports' | 'newRequests';

interface NotificationState {
  emailUpdates: boolean;
  schoolMessages: boolean;
  impactReports: boolean;
  newRequests: boolean;
}

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile');
  const [notifications, setNotifications] = useState<NotificationState>({
    emailUpdates: true,
    schoolMessages: true,
    impactReports: true,
    newRequests: true
  });

  const toggleNotification = (key: NotificationKey) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[960px] mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-normal text-gray-900">Profile & Settings</h1>
          <p className="text-gray-600">Manage your sponsor profile and preferences.</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 text-base relative ${
                activeTab === 'profile'
                  ? 'text-orange-600 font-normal'
                  : 'text-gray-600 font-normal'
              }`}
            >
              Profile Information
              {activeTab === 'profile' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 text-base relative ${
                activeTab === 'settings'
                  ? 'text-orange-600 font-normal'
                  : 'text-gray-600 font-normal'
              }`}
            >
              Settings
              {activeTab === 'settings' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
              )}
            </button>
          </div>
        </div>

        {/* Profile Information Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 flex items-start justify-between">
              <div className="flex items-start gap-9">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#FF8904] to-[#F54900] flex items-center justify-center">
                    <span className="text-white text-[30px] font-normal leading-9">GC</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#F1833F] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-8 pt-0">
                  <h2 className="text-base font-normal text-gray-900">GreenCorp Foundation</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-base">Corporate</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-base">United States</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="text-base">jane.smith@greencorp.org</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="px-6 py-2.5 bg-[#F1833F] hover:bg-[#E67336] text-white rounded-[14px] font-normal text-base transition-colors">
                Edit Profile
              </button>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-lg font-normal text-gray-900">About</h3>
              <p className="text-gray-600 text-base">
                A leading corporate foundation dedicated to environmental sustainability and education.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-base font-normal text-gray-900">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2.5 rounded-[14px] bg-[#FFF7ED] text-[#F54900] text-base font-normal">
                  Climate Action
                </span>
                <span className="px-4 py-2.5 rounded-[14px] bg-[#FFF7ED] text-[#F54900] text-base font-normal">
                  Clean Energy
                </span>
                <span className="px-4 py-2.5 rounded-[14px] bg-[#FFF7ED] text-[#F54900] text-base font-normal">
                  Quality Education
                </span>
              </div>
            </div>

            {/* Contribution Summary */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
              <h3 className="text-base font-normal text-gray-900">Contribution Summary</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="7" y="2" width="6" height="16" stroke="#4A5565" strokeWidth="1.67"/>
                        <rect x="2" y="8" width="5" height="10" stroke="#4A5565" strokeWidth="1.67"/>
                      </svg>
                    </div>
                    <span className="text-base">Total Invested</span>
                  </div>
                  <p className="text-gray-900 text-base font-normal">$70,000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 3L12 8H17L13 11L14 16L10 13L6 16L7 11L3 8H8L10 3Z" stroke="#4A5565" strokeWidth="1.67"/>
                      </svg>
                    </div>
                    <span className="text-base">Schools Supported</span>
                  </div>
                  <p className="text-gray-900 text-base font-normal">3</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="text-base">Member Since</span>
                  </div>
                  <p className="text-gray-900 text-base font-normal">June 2024</p>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button className="px-10 py-3 bg-[#CA000E] hover:bg-[#B0000C] text-white rounded-[14px] font-bold text-base transition-colors">
              Log Out
            </button>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Notification Preferences */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-[#F54900]" />
                <h3 className="text-base font-normal text-gray-900">Notification Preferences</h3>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'emailUpdates' as NotificationKey, label: 'Email Updates', desc: 'Receive general platform updates via email' },
                  { key: 'schoolMessages' as NotificationKey, label: 'School Messages', desc: 'Get notified when schools send you messages' },
                  { key: 'impactReports' as NotificationKey, label: 'Impact Reports', desc: 'Monthly impact reports from sponsored schools' },
                  { key: 'newRequests' as NotificationKey, label: 'New Requests', desc: 'Alerts for new sponsorship requests' }
                ].map(({ key, label, desc }) => (
                  <div key={key} className="bg-[#F9FAFB] rounded-[14px] p-5 flex items-center justify-between min-h-[84px]">
                    <div className="space-y-1">
                      <h4 className="text-base font-normal text-gray-900">{label}</h4>
                      <p className="text-gray-600 text-base">{desc}</p>
                    </div>
                    <button
                      onClick={() => toggleNotification(key)}
                      className={`relative w-[52px] h-8 rounded-full transition-colors ${
                        notifications[key] ? 'bg-[#F1833F]' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-sm transition-transform ${
                          notifications[key] ? 'translate-x-[22px]' : 'translate-x-0.5'
                        }`}
                        style={{
                          boxShadow: '0px 3px 1px rgba(0, 0, 0, 0.06)',
                          border: '0.5px solid rgba(0, 0, 0, 0.04)'
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Password & Security */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
              <div className="flex items-center gap-3">
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
            </div>

            {/* Save Settings Button */}
            <button className="px-6 py-3 bg-[#FF6900] hover:bg-[#E65F00] text-white rounded-[14px] font-normal text-base transition-colors">
              Save Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;