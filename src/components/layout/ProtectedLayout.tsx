// src/components/layout/ProtectedLayout.tsx

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import Header from "./Header"; // You'll create this next

export default function ProtectedLayout() {
  const { isLoggedIn, isApproved } = useAuth();

  // Redirect logic
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (!isApproved) return <Navigate to="/awaiting-approval" replace />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header - exactly 63px as in your Figma */}
      <Header />

      <div className="flex">
        {/* Fixed Sidebar - starts exactly at 63px from top */}
        <Sidebar />

        {/* Main Content Area - pushed right & below header */}
        <main className="flex-1 pt-[63px] md:ml-64 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}