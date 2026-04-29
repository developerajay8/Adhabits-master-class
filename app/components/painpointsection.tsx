"use client";

import {
  FaChartLine,
  FaQuestion,
  FaRandom,
  FaMoneyBillWave,
  FaFileAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import Ctablock from "./ctablock";
import { MdKeyboardArrowDown } from "react-icons/md";

const items = [
  {
    icon: <FaFileAlt />,
    text: "Leads aa rahi hain but sales nahi ho rahi",
  },
  {
    icon: <FaChartLine />,
    text: "High-ticket closing samajh nahi aa rahi",
  },
  {
    icon: <FaQuestion />,
    text: "Random kaam kar rahe ho, koi clear system nahi hai",
  },
  {
    icon: <FaRandom />,
    text: "Dusro ko copy kar rahe ho but results nahi aa rahe",
  },
  {
    icon: <FaExclamationCircle />,
    text: "Daily income nahi ban pa rahi affiliate se",
  },
  {
    icon: <FaMoneyBillWave />,
    text: "Samajh nahi aa raha kaunsi leads best hoti hain",
  },
];

export default function PainPointsSection() {
  return (
    <section className="w-full bg-black sm:pt-16 pt-16 px-4">
      <div className="max-w-[1080px] mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[#111] to-[#0a0a0a] p-6 sm:p-6 shadow-[0_0_60px_rgba(255,80,0,0.08)]">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-[600] mb-10 ">
          <span className="text-[#ff5a1f]">
           Do You Relate 
          </span>{" "}
          <span className="text-white">
           To This In Your Affiliate Journey?
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 rounded-xl border border-[#ff5a1f]/20 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#ff5a1f]/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,80,0,0.05)]"
            >
              {/* Icon Box */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-[#ff5a1f]/30 flex items-center justify-center text-[#ff5a1f] text-lg sm:text-xl bg-[#ff5a1f]/5 group-hover:bg-[#ff5a1f]/10 transition">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-white/90 text-sm sm:text-base leading-snug font-medium">
                {item.text}
              </p>
            </div>
          ))}
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