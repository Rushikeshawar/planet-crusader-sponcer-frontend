import { useParams, useNavigate } from "react-router-dom";
import { organizations } from "../data/organizations";
import { useState } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import Modal from "../components/ui/Modal";
import SponsorForm from "../components/forms/SponsorForm";
import ProgressBar from "../components/ui/ProgressBar";

export default function SchoolDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const school = organizations.find((o) => o.id === id);
  const [openSponsor, setOpenSponsor] = useState(false);

  if (!school) {
    return (
      <div className="p-6">
        <div className="text-center">
          <p className="text-gray-600">School not found</p>
          <button 
            onClick={() => navigate(-1)} 
            className="mt-4 text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* School Header */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">{school.name}</h2>
            <p className="text-gray-600 mb-3">{school.location}</p>
            <p className="text-gray-700">{school.desc}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Students</div>
          <div className="text-2xl font-semibold text-gray-900">{school.students}</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Events</div>
          <div className="text-2xl font-semibold text-gray-900">{school.events}</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">SDG Goals</div>
          <div className="text-2xl font-semibold text-gray-900">{school.goals}</div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-center">
          <button 
            onClick={() => setOpenSponsor(true)} 
            className="w-full bg-orange-brand text-white rounded-xl py-3 font-semibold hover:bg-orange-600 transition-colors shadow-sm"
          >
            Sponsor this School
          </button>
        </div>
      </div>

      {/* SDG Focus Areas */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">SDG Focus Areas</h3>
        <div className="flex gap-2 flex-wrap">
          {school.sdg.map((sdg) => (
            <span key={sdg} className="px-3 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg border border-green-200">
              {sdg}
            </span>
          ))}
        </div>
      </div>

      {/* Activity Roadmap */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Activity Roadmap (SDG 13)</h3>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
          <div className="font-semibold text-gray-900 text-lg">Carbon Neutral Campus 2025</div>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Timeline: </span>
              <span className="font-semibold text-gray-900">12 months</span>
            </div>
            <div>
              <span className="text-gray-600">Funding Needed: </span>
              <span className="font-semibold text-gray-900">$50,000</span>
            </div>
            <div>
              <span className="text-gray-600">Funding Received: </span>
              <span className="font-semibold text-gray-900">$34,000</span>
            </div>
          </div>
          
          <ProgressBar percent={68} color="#3B82F6" />
          
          <button
            onClick={() => setOpenSponsor(true)}
            className="mt-4 bg-orange-brand text-white rounded-xl px-6 py-2.5 font-medium hover:bg-orange-600 transition-colors shadow-sm"
          >
            Sponsor this Roadmap
          </button>
        </div>
      </div>

      {/* Recently Completed Activities */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">Recently completed activities</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="font-semibold text-gray-900 mb-2">Tree Plantation Drive</div>
            <p className="text-sm text-gray-700 mb-3">5000 native trees planted in the school campus and nearby community park</p>
            <div className="text-xs text-gray-500 mb-2">Completed 203 days ago</div>
            <div className="text-sm text-gray-700 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
              500 trees planted • 12 tons CO₂/year offset
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="font-semibold text-gray-900 mb-2">Waste-Free Week</div>
            <p className="text-sm text-gray-700 mb-3">Week-long campaign to eliminate single-use plastics</p>
            <div className="text-xs text-gray-500 mb-2">Completed 340 days ago</div>
            <div className="text-sm text-gray-700 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
              1,200 kg waste diverted • 420 students participated
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Modal */}
      <Modal open={openSponsor} title="Sponsor Roadmap" onClose={() => setOpenSponsor(false)}>
        <SponsorForm
          org={school.name}
          roadmap="Carbon Neutral Campus 2025"
          fundingNeeded={50000}
          fundingReceived={34000}
          suggested={25000}
          onConfirm={(amt, res) => {
            alert(`Submitted sponsorship: $${amt} | resources: ${res ?? "-"}`);
            setOpenSponsor(false);
          }}
        />
      </Modal>
    </div>
  );
}