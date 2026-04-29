"use client";

export default function LeadFormPopup({ open, setOpen }: any) {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      platform: form.platform.value,
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    await fetch("https://script.google.com/macros/s/AKfycbwtRqcgS5ogb46xf_9mPDEADusRMSy1fAKjVDVn6aIiinGGRapnTm1otdKFGdU7eb6H/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">

      {/* POPUP CARD */}
      <div className="w-full max-w-md bg-[#0b0f1a] border border-[#f35014]/40 rounded-2xl p-6 sm:p-8 relative shadow-[0_0_60px_rgba(243,80,20,0.25)]">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="mb-6 text-center">
          <h2 className="text-white text-xl sm:text-2xl font-bold">
            🚀 Start Your Affiliate Journey
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Limited Seats — Apply Now For Free Access
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Platform */}
          <div>
            <label className="text-white/70 text-sm mb-1 block">
              Select Platform *
            </label>
            <select
              name="platform"
              required
              className="w-full bg-[#020617] border border-[#f35014]/40 rounded-lg px-4 py-3 text-white focus:border-[#f35014] focus:ring-1 focus:ring-[#f35014] outline-none"
            >
              <option value="">Choose your platform</option>
              <option>Instagram</option>
              <option>YouTube</option>
              <option>Facebook</option>
              <option>Other</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="text-white/70 text-sm mb-1 block">
              Your Name *
            </label>
            <input
              name="name"
              required
              placeholder="Enter your name"
              className="w-full bg-[#020617] border border-[#f35014]/40 rounded-lg px-4 py-3 text-white focus:border-[#f35014] focus:ring-1 focus:ring-[#f35014] outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/70 text-sm mb-1 block">
              Phone Number *
            </label>
            <input
              name="phone"
              required
              placeholder="Enter 10-digit number"
              className="w-full bg-[#020617] border border-[#f35014]/40 rounded-lg px-4 py-3 text-white focus:border-[#f35014] focus:ring-1 focus:ring-[#f35014] outline-none"
            />
          </div>

          {/* Earnings */}
          <div>
            <label className="text-white/70 text-sm mb-1 block">
              Your Current Earnings
            </label>
            <textarea
              name="message"
              placeholder="e.g. 0 / 5k / 10k+ per month"
              className="w-full bg-[#020617] border border-[#f35014]/40 rounded-lg px-4 py-3 text-white focus:border-[#f35014] focus:ring-1 focus:ring-[#f35014] outline-none resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-[#f35014] hover:bg-[#ff6a2f] text-white py-3 rounded-xl font-semibold tracking-wide shadow-[0_0_30px_rgba(243,80,20,0.4)] transition-all duration-300 active:scale-95"
          >
            🚀 Apply Now — It’s Free
          </button>
        </form>

        {/* FOOTER TRUST LINE */}
        <p className="text-center text-xs text-white/40 mt-4">
          🔒 Your data is safe. No spam.
        </p>
      </div>
    </div>
  );
}