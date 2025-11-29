/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          brand: "#FF6B00"
        },
        gray: {
          850: "#111827"
        },
        tag: {
          incomingBg: "#E8F1FF",
          incomingText: "#3B82F6",
          pendingBg: "#FFF3E5",
          pendingText: "#F59E0B",
          approvedBg: "#E7F8ED",
          approvedText: "#10B981"
        }
      },
      boxShadow: {
        card: "0 1px 6px rgba(0,0,0,0.07)",
        popup: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
