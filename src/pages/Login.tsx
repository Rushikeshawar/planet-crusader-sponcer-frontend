import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import logo from "../assets/Planet_Crusader.png";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mt-[20px]">
        <img src={logo} alt="Planet Crusader" className="w-[273px] h-[90px]" />
      </div>

      {/* Login Card */}
      <div className="mt-[40px] w-full max-w-[448px] bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-normal text-[#101828] mb-2">
            Sponsor Login
          </h1>
          <p className="text-base text-[#6A7282]">
            Access your sponsorship dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-base text-[#364153]">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sponsor@company.com"
                className="w-full h-[49.6px] pl-11 pr-4 py-3 rounded-[14px] border border-gray-300 bg-[#F9FAFB] text-base placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-base text-[#364153]">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-[49.6px] pl-11 pr-4 py-3 rounded-[14px] border border-gray-300 bg-[#F9FAFB] text-base placeholder:text-[#0A0A0A80] focus:outline-none focus:ring-2 focus:ring-[#00A63E] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link 
              to="/forgot-password"
              className="text-base text-[#00A63E] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-[14px] bg-gradient-to-r from-[#00C950] to-[#00A63E] text-white text-base font-normal shadow-md hover:shadow-lg transition-shadow"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#6A7282]">or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-base">
            <span className="text-[#6A7282]">Don't have an account? </span>
            <Link 
              to="/register"
              className="text-[#F54900] hover:underline font-normal"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-base text-center text-[#6A7282] max-w-md">
        Join us in making a sustainable impact on education and environment
      </p>
    </div>
  );
}