"use client";

import { useEffect } from "react";

export default function LeadFormPopup({ open, setOpen }: any) {

  // ✅ Background scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      platform: form.platform.value,
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbwe4XOca0hL1zxVUEueULq3VD-Rh2TQy_ywruLEQyNOVe9RGc_84Pva0tzMSQs7EzeAUw/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const text = `🔥 New Lead:
👤 Name: ${data.name}
📞 Phone: ${data.phone}
📱 Platform: ${data.platform}
💰 Earning: ${data.message}`;

    window.open(
      `https://wa.me/917258055245?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setOpen(false);
  };

  // ❌ Prevent duplicate render
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3">

      {/* Overlay click close */}
      <div
        className="absolute inset-0"
        onClick={() => setOpen(false)}
      />

      {/* POPUP CARD */}
      <div
        className="relative w-full max-w-md sm:max-w-lg bg-[#0b0f1a] border border-[#f35014]/40 rounded-2xl p-5 sm:p-8 shadow-[0_0_60px_rgba(243,80,20,0.25)] animate-popup"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close on inside click
      >

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white text-lg sm:text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="mb-5 sm:mb-6 text-center">
          <h2 className="text-white text-lg sm:text-2xl font-bold">
            🚀 Start Your Affiliate Journey
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1">
            Limited Seats — Apply Now For Free Access
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

          {/* Platform */}
          <div>
            <label className="text-white/70 text-xs text-left sm:text-sm mb-1 block">
              Select Platform *
            </label>
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
          </div>

          {/* Name */}
          <div>
            <label className="text-white/70 text-left text-xs sm:text-sm mb-1 block">
              Your Name *
            </label>
            <input
              name="name"
              required
              placeholder="Enter your name"
              className="input"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/70 text-left text-xs sm:text-sm mb-1 block">
              Phone Number *
            </label>
            <input
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              className="input"
            />
          </div>

          {/* Earnings */}
          <div>
            <label className="text-white/70 text-left text-xs sm:text-sm mb-1 block">
              Your Current Earnings
            </label>
            <textarea
              name="message"
              placeholder="e.g. 0 / 5k / 10k+ per month"
              className="input resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#f35014] hover:bg-[#ff6a2f] text-white py-3 rounded-xl font-semibold tracking-wide shadow-[0_0_30px_rgba(243,80,20,0.4)] transition-all duration-300 active:scale-95"
          >
            🚀 Apply Now — It’s Free
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-[10px] sm:text-xs text-white/40 mt-3 sm:mt-4">
          🔒 Your data is safe. No spam.
        </p>
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
          animation: popup 0.35s ease;
        }
      `}</style>
    </div>
  );
}