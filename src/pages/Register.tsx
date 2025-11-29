import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Phone, MapPin, Globe, Lock, Building2, AlertCircle } from "lucide-react";
import logo from "../assets/Planet_Crusader.png";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    orgName: "",
    sponsorType: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    password: "",
    confirm: ""
  });
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
      nav("/awaiting-approval");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="mt-[20px]">
        <img src={logo} alt="Planet Crusader" className="w-[273px] h-[90px]" />
      </div>

      {/* Registration Card */}
      <div className="mt-[40px] w-full max-w-[500px] bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
        {/* Alert Banner */}
        <div className="mb-6 bg-[#FFF8E1] border border-[#FFD54F] rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="text-[#F57C00] flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm">
            <span className="font-semibold text-[#F57C00]">Verification Required.</span>
            <span className="text-[#6A7282]"> After signup, your request will be sent to the Admin. You will be able to log in after your account is approved.</span>
          </div>
        </div>

        {/* Organization Information Header */}
        <div className="mb-6">
          <h2 className="text-base font-normal text-[#364153]">Organization Information</h2>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Organization Name */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Organization Name*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Building2 size={18} />
              </div>
              <input
                type="text"
                value={form.orgName}
                onChange={(e) => setForm({...form, orgName: e.target.value})}
                placeholder="Your company or organization name"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Sponsor Type */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Sponsor Type*
            </label>
            <div className="relative">
              <select
                value={form.sponsorType}
                onChange={(e) => setForm({...form, sponsorType: e.target.value})}
                className="w-full h-[45px] px-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent appearance-none cursor-pointer"
                required
              >
                <option value="">Select Sponsor Type</option>
                <option value="corporate">Corporate</option>
                <option value="individual">Individual</option>
                <option value="foundation">Foundation</option>
                <option value="ngo">NGO</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Information Header */}
          <div className="pt-2">
            <h2 className="text-base font-normal text-[#364153]">Contact Information</h2>
          </div>

          {/* Contact Person Name */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Contact Person Name*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={form.contactName}
                onChange={(e) => setForm({...form, contactName: e.target.value})}
                placeholder="Full name"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Email Address*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="contact@company.com"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Phone Number*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                placeholder="+1 (555) 000-0000"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Address*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <MapPin size={18} />
              </div>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({...form, address: e.target.value})}
                placeholder="Street address, City, State, ZIP"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Website (Optional)
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Globe size={18} />
              </div>
              <input
                type="url"
                value={form.website}
                onChange={(e) => setForm({...form, website: e.target.value})}
                placeholder="https://www.company.com"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
              />
            </div>
          </div>

          {/* Security Header */}
          <div className="pt-2">
            <h2 className="text-base font-normal text-[#364153]">Security</h2>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Password*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                placeholder="Minimum 8 characters"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-[#364153] mb-2">
              Confirm Password*
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={form.confirm}
                onChange={(e) => setForm({...form, confirm: e.target.value})}
                placeholder="Re-enter your password"
                className="w-full h-[45px] pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 bg-[#F9FAFB] text-sm placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#FF6B00] text-white text-base font-normal shadow-md hover:bg-[#E55F00] transition-colors mt-6"
          >
            Register as Sponsor
          </button>

          {/* Back to Login */}
          <div className="text-center text-sm pt-2">
            <span className="text-[#6A7282]">Already have an account? </span>
            <Link 
              to="/login"
              className="text-[#00A63E] hover:underline font-normal"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative bg-white w-full max-w-[448px] rounded-3xl border-2 border-[#3B82F6] shadow-2xl p-8">
            <div className="flex flex-col items-center text-center">
              {/* Green Circle with Checkmark */}
              <div className="w-20 h-20 bg-[#E7F8ED] rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-base font-normal text-[#101828] mb-4">
                Registration Submitted!
              </h3>
              
              {/* Description */}
              <p className="text-base text-[#4A5565] leading-6 mb-6">
                Your sponsor account request has been submitted successfully. You'll receive an email once your account is approved by the admin.
              </p>
              
              {/* Redirect Message */}
              <p className="text-base text-[#00A63E]">
                Redirecting to verification status...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}