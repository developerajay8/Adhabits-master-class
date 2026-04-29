"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Ctablock from "./ctablock";

const faqs = [
  {
    q: "Is This For Beginners?",
    a: "Yes. Even if you're just starting, the system is simple to understand and apply. Rahman breaks everything down step-by-step so anyone can follow along.",
  },
  {
    q: "Do I Need Any Experience In Affiliate Marketing?",
    a: "No. This will help you understand what works and why. Whether you've never done affiliate marketing or you've been trying for months - you'll learn the exact system that top affiliates use.",
  },
  {
    q: "Will This Help Me Earn Money?",
    a: "It will show you the system to convert leads into affiliate income. Execution depends on you. But if you follow the system, you'll have a clear path to Rs.2-3L/month.",
  },
  {
    q: "Do I Need Any Tools Or Setup Before Joining?",
    a: "No. Just attend live, take notes, and focus for this 1 hour. You'll get everything you need during the workshop itself.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black sm:pt-16 pt-16 px-4">
      <div className="max-w-[800px] mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          <span className="text-white">Frequently Asked </span>
          <span className="text-[#ff4d14]">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">

          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden
                ${
                  isActive
                    ? "border-[#ff4d14] bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_40px_rgba(255,77,20,0.2)]"
                    : "border-neutral-800 bg-gradient-to-b from-[#1a1a1a] to-black"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left  px-5 py-4"
                >
                  <span
                    className={`text-sm sm:text-base md:text-lg font-medium ${
                      isActive ? "text-[#ff4d14]" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300  ${
                      isActive ? "rotate-180 text-[#ff4d14]" : "text-white/70"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 transition-all duration-300 ${
                    isActive
                      ? "max-h-[200px] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Icon */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center text-[#ff4d14] sm:text-2xl animate-pulse">
            <MdKeyboardArrowDown />
            <MdKeyboardArrowDown />
            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className="relative pb-20 z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-10">
                <Ctablock/>
                </div>



      </div>
    </section>
  );
}