import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AwaitingApproval from "../pages/AwaitingApproval";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import SchoolDetail from "../pages/SchoolDetail";
import NGODetail from "../pages/NGODetail"; // NEW IMPORT
import Sponsorships from "../pages/Sponsorships";
import RequestsApprovals from "../pages/RequestsApprovals";
import FundingImpact from "../pages/FundingImpact";
import Performance from "../pages/Performance";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/awaiting-approval", element: <AwaitingApproval /> },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/explore", element: <Explore /> },
      { path: "/school/:id", element: <SchoolDetail /> },
      { path: "/ngo/:id", element: <NGODetail /> }, // NEW ROUTE
      { path: "/sponsorships", element: <Sponsorships /> },
      { path: "/requests-approvals", element: <RequestsApprovals /> },
      { path: "/funding-impact", element: <FundingImpact /> },
      { path: "/performance", element: <Performance /> },
      { path: "/messages", element: <Messages /> },
      { path: "/profile", element: <Profile /> }
    ]
  }
]);

export default router;