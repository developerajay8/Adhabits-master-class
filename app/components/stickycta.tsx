"use client";

import { useState } from "react";
import LeadFormPopup from "./leadformpopup";

export default function StickyCTA() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 w-full px-4 z-[9999]">

        <div className="max-w-[1080px] mx-auto">
          <div className="flex items-center justify-between gap-4 
          bg-gradient-to-r from-black via-[#1a1a1a] to-black 
          border border-[#ff4d14] 
          rounded-2xl px-4 sm:px-6 py-3 sm:py-4">

            <div>
              <p className="text-[#ff4d14] font-semibold">
                free access <span className="line-through text-white/40 ml-2">₹1999</span>
              </p>
              <p className="text-white/70 text-xs">
                Hurry Up!! Limited Seats
              </p>
            </div>

            {/* ✅ CLICK FIX */}
            <button
              onClick={() => setOpen(true)}
              className="bg-[#ff4d14] cursor-pointer px-5 py-2 rounded-xl text-white font-semibold"
            >
              Join Free Now
            </button>

          </div>
        </div>
      </div>

      {/* POPUP */}
      <LeadFormPopup open={open} setOpen={setOpen} />
    </>
  );
}