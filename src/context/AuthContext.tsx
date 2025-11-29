import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isApproved: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  approve: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn") === "true";
    const approved = localStorage.getItem("isApproved") === "true";
    setIsLoggedIn(logged);
    setIsApproved(approved);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    // Keep approval flag unless explicitly reset elsewhere
  };

  const approve = () => {
    setIsApproved(true);
    localStorage.setItem("isApproved", "true");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isApproved, login, logout, approve }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
