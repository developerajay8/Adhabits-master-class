"use client";

import { Check } from "lucide-react";
import Ctablock from "./ctablock";
import { MdKeyboardArrowDown } from "react-icons/md";

const leftItems = [
  "You stop depending on luck and start following a system",
  "You generate high-quality leads consistently",
  "You build a predictable affiliate income model",
  "You can scale towards Rs.2-3L/month income",
];

const rightItems = [
  "You understand what actually brings sales",
  "You learn how to close high-ticket offers",
  "You gain clarity, confidence & direction",
  "You stop wasting time on random strategies",
];

export default function ContentCashSystem() {
  return (
    <section className="w-full bg-white sm:pt-16 pt-16 px-4">
        <div className="bg-black max-w-[1080px] mx-auto border-4 border-[#ff4d14] rounded-[28px]  p-4">
      <div className="x bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-2xl  p-4 shadow-[0_0_60px_rgba(255,80,0,0.15)]">
            <div className="absolute w-[280px] h-[280px] bg-[#ff4d14]/30 blur-[80px] rounded-full" />

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          <span className="text-white">What Happens When You  </span>
          <span className="text-[#ff4d14]"></span>Follow The Right System
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          {/* Left */}
          <div className="flex flex-col gap-4">
            {leftItems.map((item, i) => (
              <CardItem key={i} text={item} />
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {rightItems.map((item, i) => (
              <CardItem key={i} text={item} />
            ))}
          </div>
          

        </div>
        
      </div>
      </div>

      {/* Bottom Icon */}
              <div className="flex justify-center mt-10">
                <div className="flex flex-col items-center text-[#ff4d14] sm:text-2xl animate-pulse">
                  <MdKeyboardArrowDown />
                  <MdKeyboardArrowDown />
                  <MdKeyboardArrowDown />
                </div>
              </div>
      
              <div className="relative z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-10">
                      <Ctablock/>
                      </div>
    </section>
  );
}

function CardItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 bg-gradient-to-b from-[#1a1a1a] to-black px-4 py-4 rounded-xl border border-neutral-800 hover:border-[#ff4d14] transition-all duration-300 shadow-md">

      {/* Icon */}
      <div className="min-w-[28px] h-[28px] flex items-center justify-center rounded-md bg-[#ff4d14] text-black shadow-[0_0_15px_rgba(255,77,20,0.6)]">
        <Check size={16} />
      </div>

      {/* Text */}
      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
        {text}
      </p>
    </div>
  );
}