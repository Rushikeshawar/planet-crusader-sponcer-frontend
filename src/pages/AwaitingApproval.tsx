import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/Planet_Crusader.png";

export default function AwaitingApproval() {
  const { approve } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Logo */}
      <div className="mt-[20px]">
        <img src={logo} alt="Planet Crusader" className="w-[273px] h-[90px]" />
      </div>
      
      {/* Main Card */}
      <div 
        className="mt-[30px] bg-white rounded-[24px] border-[0.8px] border-[#F3F4F6]"
        style={{
          width: '526.8px',
          height: '838.8px',
          boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Clock Icon and Title */}
        <div className="flex flex-col items-center pt-[30px]">
          <div className="w-[64px] h-[64px] rounded-full bg-[#FEF3C7] flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 8V16L20 20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="12" stroke="#F59E0B" strokeWidth="2"/>
            </svg>
            <div className="absolute ml-[32px] mt-[32px] w-[12px] h-[12px] rounded-full bg-[#3B82F6] border-2 border-white"></div>
          </div>
          
          <h2 className="text-[20px] font-semibold text-[#111827] mb-3">Awaiting Approval</h2>
          
          <p className="text-center text-[14px] text-[#6B7280] px-[40px] leading-[20px]">
            Your sponsor account request is currently under review by our admin team. You'll receive an email notification once your account has been approved.
          </p>
          
          {/* Email Badge */}
          <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.66667 4L8 8L13.3333 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="3" width="12" height="10" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
            </svg>
            <span className="text-[14px] text-[#374151]">cdevs@jjww.com</span>
          </div>
        </div>
        
        {/* What happens next section */}
        <div 
          className="mx-[40.2px] mt-[32px] rounded-[16px] p-[24px]"
          style={{
            width: '446.4px',
            background: 'linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%)'
          }}
        >
          <h3 className="text-[14px] font-semibold text-[#111827] mb-4">What happens next?</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-[2px] w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold">1</span>
              </div>
              <p className="text-[13px] text-[#374151] leading-[18px]">Our admin team reviews your registration details</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-[2px] w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold">2</span>
              </div>
              <p className="text-[13px] text-[#374151] leading-[18px]">You'll receive an email confirmation once approved</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-[2px] w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[12px] font-semibold">3</span>
              </div>
              <p className="text-[13px] text-[#374151] leading-[18px]">Login with your credentials to access the sponsor dashboard</p>
            </div>
          </div>
        </div>
        
        {/* Warning box */}
        <div 
          className="mx-[40.2px] mt-[24px] rounded-[16px] border-[0.8px] border-[#FEE685] bg-[#FFFBEB] p-[16.8px]"
          style={{ width: '446.4px' }}
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[13px] text-[#92400E] leading-[18px]">
                <span className="font-semibold">Approval typically takes 24-48 hours.</span><br/>
                If you don't receive a response within this timeframe, please contact our support team at{' '}
                <a href="mailto:support@planetcrusader.com" className="text-[#F59E0B] underline">support@planetcrusader.com</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Back to Login Button */}
        <div className="mx-[40.2px] mt-[24px]">
          <Link 
            to="/login"
            className="block w-[446.4px] h-[48px] rounded-[14px] flex items-center justify-center text-white text-[15px] font-semibold"
            style={{
              background: 'linear-gradient(90deg, #00C950 0%, #00A63E 100%)',
              boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Back to Login
          </Link>
        </div>
        
        {/* Demo Approve Button (for testing) */}
        <div className="mx-[40.2px] mt-4">
          <button 
            onClick={approve}
            className="block w-[446.4px] h-[48px] rounded-[14px] flex items-center justify-center text-white text-[15px] font-semibold bg-orange-brand"
          >
            Demo: Approve Now
          </button>
        </div>
      </div>
      
      {/* Footer text */}
      <p className="mt-8 text-[13px] text-[#9CA3AF]">
        Thank you for your interest in supporting sustainable education!
      </p>
    </div>
  );
}