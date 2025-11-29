import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout } = useAuth();
  return (
    <div className="space-y-6">
      <div className="bg-white border rounded p-4 shadow-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">GC</div>
          <div>
            <div className="font-semibold text-gray-850">GreenCorp Foundation</div>
            <div className="text-sm text-gray-600">Corporate • United States</div>
            <div className="text-sm text-gray-600">hello@greencorp.org</div>
          </div>
        </div>
        <button className="bg-orange-brand text-white px-4 py-2 rounded">Edit Profile</button>
      </div>

      <div className="bg-white border rounded p-4 shadow-card">
        <div className="font-semibold text-gray-850">About</div>
        <p className="text-sm text-gray-700 mt-2">A leading corporate foundation dedicated to sustainability and education.</p>
      </div>

      <div className="bg-white border rounded p-4 shadow-card">
        <div className="font-semibold text-gray-850">Focus Areas</div>
        <div className="mt-2 flex gap-2">
          {["Climate Action", "Clean Energy", "Quality Education"].map((t) => (
            <span key={t} className="px-2 py-1 text-sm rounded border border-orange-brand text-orange-brand">{t}</span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border rounded p-4 shadow-card">
          <div className="text-sm text-gray-600">Total Invested</div>
          <div className="font-semibold text-gray-850">$70,000</div>
        </div>
        <div className="bg-white border rounded p-4 shadow-card">
          <div className="text-sm text-gray-600">Schools Supported</div>
          <div className="font-semibold text-gray-850">3</div>
        </div>
        <div className="bg-white border rounded p-4 shadow-card">
          <div className="text-sm text-gray-600">Member Since</div>
          <div className="font-semibold text-gray-850">June 2024</div>
        </div>
      </div>

      <div className="bg-white border rounded p-4 shadow-card">
        <div className="font-semibold text-gray-850 mb-2">Settings</div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded p-3">
            <div className="font-semibold text-gray-850">Notification Preferences</div>
            {["Email Updates","School Messages","Impact Reports","New Requests"].map((s) => (
              <div key={s} className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-700">{s}</div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-orange-brand relative">
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded p-3">
            <div className="font-semibold text-gray-850">Password & Security</div>
            <button className="mt-2 text-orange-brand underline">Change Password</button><br/>
            <button className="mt-2 text-orange-brand underline">Enable Two-Factor Authentication</button>
          </div>
        </div>
      </div>

      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Log Out</button>
    </div>
  );
}
