"use client";

import { useState } from "react";
import { FaHeart, FaRegClock, FaShare } from "react-icons/fa";
import Ctablock from "./ctablock";
import { MdKeyboardArrowDown } from "react-icons/md";

const videos = [
  {
    id: 1,
    src: "/videos/IMG_4275.MP4",
    poster: "/image copy 5.png", // ✅ ADD THIS
    caption: "Hey this is...",
  },
  {
    id: 2,
    src: "/videos/IMG_5203.MP4",
    poster: "/image copy 6.png", // ✅ ADD THIS
    caption: "I'm extremely...",
  },
];

function VideoCard({
  video,
  activeId,
  setActiveId,
}: {
  video: (typeof videos)[0];
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const isActive = activeId === video.id;

  return (
    <div
      className={`relative 
        w-[50%] sm:w-52 md:w-[320px]
        flex-shrink-0 mt-4 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 
        border-2 border-white bg-zinc-900 aspect-[9/16] 
        group cursor-pointer transition-all duration-500 
        ${isActive ? "scale-105 z-20" : ""}
      `}
      onClick={() => setActiveId(isActive ? null : video.id)}
    >
      {/* Active Video */}
      {isActive ? (
        <video
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          controls
          playsInline
        />
      ) : (
        <>
          {/* ✅ IMAGE AS THUMBNAIL (REPLACED VIDEO) */}
          <div className="absolute inset-0">
            <img
              src={video.poster}
              alt="thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay color (your existing one untouched) */}
            <div className="absolute inset-0 bg-[#f35014]/10"></div>
          </div>

          {/* ▶ Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/25 transition">
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Menu Button */}
      <div
        className="absolute top-2.5 right-2.5 z-20"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <div className="flex gap-[3px] flex-col items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/70" />
          ))}
        </div>
      </div>

      {/* Options Panel */}
      {showMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 w-[200px] sm:w-[220px] h-full bg-black/95 backdrop-blur-md z-30 p-4 border-l border-white/10"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-sm font-semibold">
              More options
            </p>
            <button
              onClick={() => setShowMenu(false)}
              className="text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 text-white/80 text-sm">
            <button className="flex items-center gap-2 hover:text-white">
              <FaHeart /> Like
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <FaRegClock /> Watch Later
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <FaShare /> Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VideoTestimonialsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white bg-[linear-gradient(rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-[size:40px_40px] pt-10 sm:pt-20 ">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">

        <h2 className="font-barlow font-[600] text-black text-xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12">
          Systems Chosen By{" "}
          <span className="text-[#f35014]">Top Performing Affiliates</span>
        </h2>

        <div className="flex justify-center gap-3 sm:gap-6 md:gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center text-[#ff4d14] sm:text-2xl animate-pulse">
            <MdKeyboardArrowDown />
            <MdKeyboardArrowDown />
            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-10">
          <Ctablock />
        </div>
      </div>
    </section>
  );
}