// src/pages/Dashboard.tsx (or wherever your Dashboard is)
import ProgressBar from "../components/ui/ProgressBar";
import { ChevronRight, Sprout, Users, Globe } from "lucide-react";
import { dashboardSummaryCards, activeSponsorships, featuredSchools } from "../data/dashboard";

export default function Dashboard() {
    return (
        <div className="space-y-6 p-6">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Welcome back👋</h1>
                <p className="text-gray-600">Track your impact and discover new opportunities to support schools.</p>
            </div>

            {/* Summary Cards - Now shows emojis perfectly */}
            <div className="flex gap-6 overflow-x-auto pb-4 mb-10 scrollbar-hide">
                {dashboardSummaryCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm flex-shrink-0"
                        style={{ width: "221.8px", height: "165.6px", padding: "24.8px 24.8px 0.8px" }}
                    >
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-3xl select-none"
                                    style={{ backgroundColor: card.bg }}
                                >
                                    {card.icon}   {/* Emojis now display perfectly */}
                                </div>
                                <span className="text-sm font-medium text-[#00A63E] bg-[#F0FDF4] px-3 py-1.5 rounded-lg">
                                    {card.trend}
                                </span>
                            </div>
                            <div>
                                <p className="text-base text-[#4A5565] mb-1">{card.title}</p>
                                <p className="text-3xl font-semibold text-[#101828]">{card.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Sponsorships */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Active Sponsorships</h2>
                        <p className="text-sm text-gray-600">Track progress on your current commitments</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-brand text-white rounded-xl hover:bg-orange-600 transition-colors text-sm font-medium">
                        View All
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    {activeSponsorships.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-[14px] shadow-sm hover:shadow-md transition-shadow"
                            style={{
                                width: "909.6px",
                                height: "173.6px",
                                padding: "16.8px",
                                paddingBottom: "0.8px",
                                gap: "12px",
                            }}
                        >
                            <div className="flex justify-between mb-3">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.school}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-green-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
                                            {item.badge[0]}
                                        </div>
                                        <span className="text-xs font-semibold text-gray-900">{item.badge}</span>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">
                                        {item.status}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Progress</span>
                                    <span className="font-semibold text-gray-900">{item.progress}%</span>
                                </div>
                                <ProgressBar percent={item.progress} />
                                <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Sprout className="w-4 h-4 text-green-600" />
                                        <span className="font-medium">CO₂ Reduction:</span>
                                        <span>{item.co2}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-blue-600" />
                                        <span className="font-medium">Students Engaged:</span>
                                        <span>{item.students}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Schools */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Featured Schools</h2>
                        <p className="text-sm text-gray-600">Top-performing schools making an impact</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-brand text-white rounded-xl hover:bg-orange-600 transition-colors text-sm font-medium">
                        Explore All
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredSchools.map((school, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5 truncate">{school.name}</h3>
                                    <p className="text-xs text-gray-600">{school.city}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-lg border border-green-200">
                                    {school.score}
                                </span>
                                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-lg border border-green-200">
                                    {school.sdg1}
                                </span>
                                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-lg border border-green-200">
                                    {school.sdg2}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
                                <span>{school.students} students</span>
                                <span>{school.events} events</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}