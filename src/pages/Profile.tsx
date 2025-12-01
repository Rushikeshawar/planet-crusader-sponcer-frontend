import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ContributionSummary } from '../components/profile/ContributionSummary';
import { NotificationToggle } from '../components/profile/NotificationToggle';
import { SecuritySettings } from '../components/profile/SecuritySettings';

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

  const notificationSettings = [
    {
      key: 'emailUpdates' as NotificationKey,
      label: 'Email Updates',
      desc: 'Receive general platform updates via email'
    },
    {
      key: 'schoolMessages' as NotificationKey,
      label: 'School Messages',
      desc: 'Get notified when schools send you messages'
    },
    {
      key: 'impactReports' as NotificationKey,
      label: 'Impact Reports',
      desc: 'Monthly impact reports from sponsored schools'
    },
    {
      key: 'newRequests' as NotificationKey,
      label: 'New Requests',
      desc: 'Alerts for new sponsorship requests'
    }
  ];

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
            <ProfileHeader
              name="GreenCorp Foundation"
              type="Corporate"
              location="United States"
              email="jane.smith@greencorp.org"
              initials="GC"
            />

            {/* About Section */}
            <Card padding="md">
              <h3 className="text-lg font-normal text-gray-900 mb-4">About</h3>
              <p className="text-gray-600 text-base">
                A leading corporate foundation dedicated to environmental sustainability and education.
              </p>
            </Card>

            {/* Focus Areas */}
            <Card padding="md">
              <h3 className="text-base font-normal text-gray-900 mb-4">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {['Climate Action', 'Clean Energy', 'Quality Education'].map((area) => (
                  <Badge key={area} bgColor="#FFF7ED" textColor="#F54900" size="md">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Contribution Summary */}
            <ContributionSummary
              totalInvested="$70,000"
              schoolsSupported={3}
              memberSince="June 2024"
            />

            {/* Logout Button */}
            <Button variant="danger" className="bg-[#CA000E] hover:bg-[#B0000C] font-bold px-10">
              Log Out
            </Button>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Notification Preferences */}
            <Card padding="md">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-[#F54900]" />
                <h3 className="text-base font-normal text-gray-900">Notification Preferences</h3>
              </div>

              <div className="space-y-4">
                {notificationSettings.map(({ key, label, desc }) => (
                  <NotificationToggle
                    key={key}
                    label={label}
                    description={desc}
                    enabled={notifications[key]}
                    onToggle={() => toggleNotification(key)}
                  />
                ))}
              </div>
            </Card>

            {/* Password & Security */}
            <SecuritySettings />

            {/* Save Settings Button */}
            <Button variant="primary">
              Save Settings
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;