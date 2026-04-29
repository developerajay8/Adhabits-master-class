"use client";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Ctablock from "./ctablock";

export default function CoachSection() {
  return (
    <section className="w-full bg-black sm:pt-16 pt-16 px-4">
      <div className="max-w-[1080px] mx-auto border-4 border-[#ff4d14] rounded-[28px] p-6 sm:p-10 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_60px_rgba(255,80,0,0.15)]">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
          <span className="text-white">Meet Your Coach:  </span>
          <span className="text-[#ff4d14]">Rahman</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">

{/* RIGHT IMAGE */}
          <div className="sm:hidden block">
          <div className="flex-1 flex justify-center relative">

            {/* Glow background */}
            <div className="absolute w-[280px] h-[280px] bg-[#ff4d14]/30 blur-[80px] rounded-full" />

            {/* Image Placeholder (replace with your image) */}
            <div className="relative z-10 w-[220px] sm:w-[260px] md:w-[340px]">
              <img
                src="ChatGPT_Image_Apr_27__2026__02_23_39_PM-removebg-preview.png" // 👈 replace here
                alt="coach"
                className="w-full object-contain"
              />

              
            </div>
          </div>
          </div>
          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mb-6">

              {/* Instagram */}
              <div className="flex items-center gap-3 bg-gradient-to-b from-[#1a1a1a] to-black px-5 py-3 rounded-r-xl border-l-2 border-[#ff4d14] shadow-md">
                {/* <FaInstagram className="text-pink-500 text-2xl" /> */}
                <div>
                  <p className="text-[#ff4d14] font-semibold text-lg">Meta</p>
                  <p className="text-white/70 text-sm">Ads Certified</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3 bg-gradient-to-b from-[#1a1a1a] to-black px-5 py-3 rounded-r-xl border-l-2 border-[#ff4d14]  shadow-md">
                {/* <FaFacebookF className="text-blue-500 text-2xl" /> */}
                <div>
                  <p className="text-[#ff4d14] font-semibold text-lg">
                    Snapchat
                  </p>
                  <p className="text-white/70 text-sm">Ads Expert</p>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex items-center gap-3 bg-gradient-to-b from-[#1a1a1a] to-black px-5 py-3 rounded-r-xl border-l-2 border-[#ff4d14]  shadow-md">
                {/* <FaYoutube className="text-red-500 text-2xl" /> */}
                <div>
                  <p className="text-[#ff4d14] font-semibold text-lg">
                    900+
                  </p>
                  <p className="text-white/70 text-sm">Affiliates Trained</p>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-5">
              <span className="text-[#ff4d14] font-semibold">
                Rahman
              </span>{" "}
              has worked with{" "}
              <span className="text-[#ff4d14] font-semibold">
                900+ affiliate marketers 
              </span>{" "}
              and helped many of them move from random efforts to structured income systems.
            </p>

            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              His focus is simple:
              <span className="text-[#ff4d14] font-semibold">
              Not just running ads, but building a system that generates consistent leads and high-ticket sales.
              </span>{" "}
            </p>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            He now helps affiliates grow using proven strategies, personal guidance, and real execution frameworks.
            </p>
          
          </div>


          {/* RIGHT IMAGE */}
          <div className="sm:block hidden">
          <div className="flex-1 flex justify-center relative">

            {/* Glow background */}
            <div className="absolute w-[280px] h-[280px] bg-[#ff4d14]/30 blur-[80px] rounded-full" />

            {/* Image Placeholder (replace with your image) */}
            <div className="relative z-10 w-[220px] sm:w-[260px] md:w-[340px]">
              <img
                src="ChatGPT_Image_Apr_27__2026__02_23_39_PM-removebg-preview.png" // 👈 replace here
                alt="coach"
                className="w-full object-contain"
              />

              
            </div>
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