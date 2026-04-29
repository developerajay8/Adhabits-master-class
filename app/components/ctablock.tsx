
"use client";
import { useEffect, useState } from "react";
import { FaChair } from "react-icons/fa";
import LeadFormPopup from "./leadformpopup";

export default function Ctablock() {

    const [open, setOpen] = useState(false);

        const totalSeats = 10;
  const seatsLeft = 7; // change dynamically if needed

    const [seats, setSeats] = useState(26);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeats((prev) => {
        if (prev <= 3) return prev;

        // random decrease (1 to 3)
        const decrease = Math.floor(Math.random() * 3) + 1;
        const newValue = Math.max(prev - decrease, 3);

        // trigger animation
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);

        return newValue;
      });
    }, 30000); // 30 sec

    return () => clearInterval(interval);
  }, []);

  return (
   <div className='md:px-0 z-20'>
      
  {/* CTA BUTTON */}
  
    <button
     onClick={() => setOpen(true)}
      className="animate-bounce w-full max-w-2xl bg-[#f35014] text-white rounded-xl border-[#ff7e4f] border-b-4 border-r-4 px-4 sm:px-10 py-4 sm:py-5
                 shadow-[0_0_40px_rgba(250,87,28,0.35)] cursor-pointer
                 transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_60px_rgba(250,87,28,0.5)]
                 active:scale-95 select-none"
    >
      <p className="font-barlow font-[600] text-base sm:text-[22px] tracking-wide leading-tight">
        Join The Free Affiliate Growth Masterclass
      </p>

      <p className="font-nunito font-semibold text-white/80 text-xs sm:text-sm md:text-base mt-1">
        Start Building Your Income System — 100% Free
      </p>
    </button>

{/* 🔥 POPUP */}
      <LeadFormPopup open={open} setOpen={setOpen} />

  {/* SEAT COUNTER */}
  <div className="w-full flex items-center justify-center pt-6 pb-12 ">
    <div className="md:flex items-center gap-4">
      
      {/* Seats Icons */}
      <div className="flex items-center gap-1 md:pb-0 pb-3">
        {Array.from({ length: totalSeats }).map((_, index) => (
          <FaChair
            key={index}
            className={`text-lg ${
              index < seatsLeft
                ? "text-[#f35014] drop-shadow-[0_0_6px_rgba(255,0,0,0.8)]"
                : "text-gray-700 animate-pulse"
            }`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 md:block hidden bg-gray-700" />

      {/* Seats Left Text */}
      <div
        className={`px-4 py-1 border border-[#f35014] rounded-full text-[#f35014] text-sm font-semibold tracking-wider bg-red-500/10 inline-block transition-all duration-500 ${
          animate ? "scale-110 bg-red-500/20" : "scale-100"
        }`}
      >
        {seats} SEATS LEFT
      </div>
    </div>
  </div>
</div>
  )
}






