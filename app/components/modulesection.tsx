"use client";

import { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Ctablock from "./ctablock";

const modules = [
  {
    title: "Build A Profitable Affiliate System",
    points: [
      "Affiliate mindset vs income mindset",
      "High-ticket affiliate model kaise kaam karta hai",
      "Kaunsi niche & offer select kare",
      "Cold vs warm vs hot leads samajhna",
      "Demand create kaise kare market me",
    ],
  },
  {
    title: "High-Quality Lead Generation Strategy",
    points: [
      "Kaunsi leads aapke liye best hongi",
      "Audience psychology kaise kaam karti hai",
      "Content + funnel ka combination",
      "Consistent lead inflow system",
      "Real strategy jo top affiliates use karte hain",
    ],
  },
  {
    title: "High-Ticket Closing System",
    points: [
      "Leads ko buyers me convert kaise kare",
      "WhatsApp closing framework",
      "Follow-up system (jo sales laata hai)",
      "Real case studies (lead -> sale)",
      "Scaling mindset & execution",
    ],
  },
];

export default function ModulesSections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#f3f3f3] sm:pt-16 pt-16 px-4">
      <div className="max-w-[1080px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            <span className="text-black">Inside This Invite Only </span>
            <span className="text-[#ff4d14]">
              1 Hour Closed-Room Mastermind
            </span>
          </h2>
          <p className="text-gray-600 text-sm mt-3">
            You'll Learn & Build Live With Other Serious Affiliate Marketers,
            Ad Experts & Top Earners.
          </p>
        </div>

        {/* Sticky Section */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT IMAGE (STICKY) */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/image copy.png" // replace
                  alt="mastermind"
                  className="w-full md:h-[600px]  object-cover"
                />
              </div>
            </div>

            {/* RIGHT SCROLL AREA */}
            <div
              ref={scrollRef}
              className="md:h-[600px] overflow-y-auto no-scrollbar  pr-2 space-y-6"
            >
              {modules.map((module, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] 
                  text-white rounded-2xl p-5  sm:p-6 
                  border border-neutral-800 
                  "
                >
                  {/* Badge */}
                  <span className="inline-block bg-[#ff4d14] text-white text-xs px-3 py-1 rounded-md mb-3">
                    MODULE {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold mb-4">
                    {module.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2 text-sm text-white/80">
                    {module.points.map((point, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-[#ff4d14]">➜</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
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