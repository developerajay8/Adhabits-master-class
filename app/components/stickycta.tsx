"use client";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 w-full px-4 z-[9999]">
      
      <div className="max-w-[1080px] mx-auto">
        <div className="flex items-center border-[2] justify-between gap-4 
        bg-gradient-to-r from-black via-[#1a1a1a] to-black 
        border border-[#ff4d14] 
        rounded-2xl px-4 sm:px-6 py-3 sm:py-4
        shadow-[0_0_40px_rgba(255,77,20,0.25)]">

          {/* LEFT TEXT */}
          <div className="flex flex-col">
            <p className="text-[#ff4d14] font-semibold text-lg sm:text-xl">
              free access{" "}
              <span className="text-white/40 line-through text-sm sm:text-base ml-2">
                 ₹1999
              </span>
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
             <span className="animate-bounce text-[#ff4d14]"> Hurry Up!! </span>  Limited Seats — Join Free Now
            </p>
          </div>

          {/* BUTTON */}
             {/* ── CTA BUTTON — shakes every few seconds ── */}
      
          <button className="bg-[#ff4d14] cursor-pointer animate-pulse  hover:bg-[#ff6a3d] text-white font-semibold 
          px-5 sm:px-8 py-2 sm:py-3 rounded-xl 
          shadow-[0_0_20px_rgba(255,77,20,0.6)] 
          transition-all duration-300 whitespace-nowrap">
            Join Free Now
          </button>

        </div>
      </div>

    </div>
  );
}