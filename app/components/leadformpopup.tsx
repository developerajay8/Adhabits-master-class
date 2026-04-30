"use client";

import { useEffect, useState } from "react";

export default function LeadFormPopup({ open, setOpen }: any) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      platform: form.platform.value,
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    const text = `🔥 Hey I'm interested 
I want to attend Masterclass ✅:
👤 Name: ${data.name}
📞 Phone: ${data.phone}
📱 Platform: ${data.platform}
💰 Earning: ${data.message}`;

    // ✅ INSTANT WhatsApp redirect (NO DELAY)
    window.open(
      `https://wa.me/919610580359?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // ✅ Background API call (user wait nahi karega)
    fetch(
      "https://script.google.com/macros/s/AKfycbwe4XOca0hL1zxVUEueULq3VD-Rh2TQy_ywruLEQyNOVe9RGc_84Pva0tzMSQs7EzeAUw/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).catch(() => {});

    // ✅ Close popup instantly
    setOpen(false);
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md">

      {/* Overlay */}
      <div
        className="absolute inset-0"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full h-full flex items-center justify-center p-4 overflow-y-auto">

        <div
          className="w-full max-w-md sm:max-w-lg bg-[#0b0f1a] border border-[#f35014]/40 rounded-2xl p-5 sm:p-8 shadow-[0_0_60px_rgba(243,80,20,0.25)] animate-popup"
          onClick={(e) => e.stopPropagation()}
        >

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-white/70 hover:text-white text-lg"
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="mb-5 text-center">
            <h2 className="text-white text-lg sm:text-2xl font-bold">
              🚀 Start Your Affiliate Journey
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Limited Seats — Apply Now For Free Access
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">

            <input name="name" required placeholder="Your Name" className="input" />

            <input
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="input"
            />

            <select name="platform" required className="input">
              <option value="">Choose your platform</option>
              <option>IDP</option>
              <option>Bizgurukul</option>
              <option>LeadsArk</option>
              <option>CareerFIXX</option>
              <option>LeadsGuru</option>
              <option>MillionaireTrack</option>
              <option>Gyankmao</option>
              <option>knowledgewaveindia</option>
              <option>Starteazy</option>
              <option>RichIND</option>
              <option>Forever</option>
              <option>Vastige</option>
            </select>

            <textarea
              name="message"
              placeholder="Your total earnings (optional)"
              className="input resize-none"
            />

            {/* ✅ BUTTON WITH LOADING */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 
              ${loading 
                ? "bg-gray-600 cursor-not-allowed animate-pulse" 
                : "bg-[#f35014] hover:bg-[#ff6a2f] cursor-pointer"
              } text-white`}
            >
              {loading ? "Submitting..." : "🚀 Apply Now — It’s Free"}
            </button>

          </form>

          <p className="text-center text-xs text-white/40 mt-3">
            🔒 Your data is safe. No spam.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          background: #020617;
          border: 1px solid rgba(243, 80, 20, 0.4);
          padding: 10px 12px;
          border-radius: 8px;
          color: white;
          font-size: 14px;
          outline: none;
        }

        .input:focus {
          border-color: #f35014;
          box-shadow: 0 0 0 1px #f35014;
        }

        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-popup {
          animation: popup 0.3s ease;
        }
      `}</style>
    </div>
  );
}