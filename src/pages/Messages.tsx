import { useState } from "react";

export default function Messages() {
  const [mode, setMode] = useState<"messages" | "feedback">("messages");
  const [active, setActive] = useState(0);
  const inbox = [
    { sender: "Platform Admin", preview: "Welcome to Planet Crusader!", date: "2024-10-01" },
    { sender: "Green Valley High School", preview: "Thank you for your support!", date: "2024-10-12" },
    { sender: "System", preview: "New Sponsorship Request Available…", date: "2024-11-03" }
  ];
  const thread = [
    { from: "Platform Admin", text: "Welcome to Planet Crusader! We’re thrilled to have you." },
    { from: "You", text: "Thanks! Looking forward to contributing." }
  ];
  const [feedback, setFeedback] = useState({ category: "", text: "" });

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {mode === "messages" && (
        <>
          <div className="bg-white border rounded p-4 shadow-card">
            <div className="font-semibold text-gray-850 mb-2">Inbox</div>
            <div className="divide-y">
              {inbox.map((m, idx) => (
                <button
                  key={m.sender + idx}
                  className={`w-full text-left py-2 ${active===idx ? "bg-orange-50" : ""}`}
                  onClick={()=>setActive(idx)}
                >
                  <div className="font-semibold text-sm">{m.sender}</div>
                  <div className="text-xs text-gray-600">{m.preview}</div>
                  <div className="text-xs text-gray-500">{m.date}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 bg-white border rounded p-4 shadow-card flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-850">{inbox[active].sender}</div>
              <button className="px-3 py-1 border rounded" onClick={()=>setMode("feedback")}>Send Feedback</button>
            </div>
            <div className="mt-3 flex-1 space-y-2">
              {thread.map((t, i) => (
                <div key={i} className={`max-w-md rounded px-3 py-2 ${t.from==="You" ? "bg-orange-50 ml-auto" : "bg-gray-50"}`}>
                  <div className="text-xs text-gray-600">{t.from}</div>
                  <div className="text-sm text-gray-800">{t.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input className="flex-1 border rounded px-3 py-2" placeholder="Type your message…" />
              <button className="bg-orange-brand text-white px-4 py-2 rounded">Send</button>
            </div>
          </div>
        </>
      )}

      {mode === "feedback" && (
        <div className="md:col-span-3 bg-white border rounded p-4 shadow-card">
          <div className="font-semibold text-gray-850">Send Feedback</div>
          <p className="text-sm text-gray-600">Help us improve the platform with your suggestions.</p>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm text-gray-600">Category</span>
              <select
                className="mt-1 w-full border rounded px-3 py-2"
                value={feedback.category}
                onChange={(e)=>setFeedback({ ...feedback, category: e.target.value })}
              >
                <option value="">Choose category</option>
                <option>Bug report</option>
                <option>Feature request</option>
                <option>Feedback</option>
                <option>Account help</option>
                <option>Complaints</option>
              </select>
            </label>
            <div className="md:col-span-2">
              <span className="text-sm text-gray-600">Message</span>
              <textarea
                className="mt-1 w-full border rounded px-3 py-2"
                rows={6}
                placeholder="Share your thoughts, suggestions, or report issues…"
                value={feedback.text}
                onChange={(e)=>setFeedback({ ...feedback, text: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button className="text-gray-700 underline" onClick={()=>setMode("messages")}>Cancel</button>
            <button className="bg-orange-brand text-white px-4 py-2 rounded" onClick={()=>alert("Feedback submitted")}>Submit Feedback</button>
          </div>
        </div>
      )}
    </div>
  );
}
