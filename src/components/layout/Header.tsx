import { useAuth } from "../../context/AuthContext";
import { Search, Bell, MessageCircle } from "lucide-react";
import logo from "../../assets/Planet_Crusader.png";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm w-full">
      <div className="flex items-center justify-between px-6 h-14">

        {/* HEADER LOGO LEFT */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Planet Crusader" className="h-8 w-auto object-contain" />
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center w-[576px] h-[38px]">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search schools, activities, roadmaps…"
              className="w-full h-[38px] pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-xl text-sm 
                         focus:ring-2 focus:ring-orange-brand focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="w-2 h-2 bg-orange-brand rounded-full absolute top-1 right-1"></span>
          </button>

          <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-orange-brand text-white font-semibold hover:bg-orange-600 transition-colors">
            GC
          </button>

          <button
            onClick={logout}
            className="text-xs border px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Log out
          </button>
        </div>

      </div>
    </header>
  );
}