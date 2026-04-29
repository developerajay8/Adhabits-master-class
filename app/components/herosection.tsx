import Image from "next/image";
import Ctablock from "./ctablock";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Herosection() {

  return (
    <main className="relative w-full flex flex-col items-center overflow-hidden bg-black">

      {/* ── BACKGROUND LAYER ── */}
      {/*
        Replace /bg.jpg with your actual background image path.
        The image should be a wide photo (e.g., the Zoom-call grid of faces).
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bghero.png"
          alt="Background"
          fill
          className="object-cover sm:block hidden object-center opacity-40"
          priority
        />
        {/* <Image
          src="/bghero.png"
          alt="Background"
          fill
          className="object-cover sm:hidden block opacity-80"
          priority
        /> */}
        {/* Radial dark vignette from center */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,0,0,0.1),rgba(0,0,0,0.7))]" /> */}
        {/* Bottom fade to solid black */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" /> */}
        {/* Subtle grid texture */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" /> */}
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center ">

        {/* ── PRESENTER IMAGE ──
          Replace /presenter.png with your actual presenter cutout image.
          Use a PNG with a transparent background for the best result.
          The image will appear standing above the content.
        */}
        <div className="relative mt-4 sm:mt-6 sm:block hidden">
          <img
            src="ChatGPT_Image_Apr_27__2026__11_32_42_AM_1-removebg-preview.png"
            alt="Workshop Presenter"
            className=""
          />
        </div>
        <div className="relative  sm:hidden block">
          <img
            src="mee-landing-page-pic.png"
            alt="Workshop Presenter"
            className=""
          />
        </div>


        {/* ── WORKSHOP LOGO ── */}
        {/* <div className="flex flex-col items-center -mt-3 mb-4 sm:mb-5">
          <p className="font-barlow font-bold text-white/75 text-[10px] sm:text-xs tracking-[0.45em] uppercase mb-0.5">
            AI CONTENT MONEY
          </p>
          <h2 className="font-barlow font-black text-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-none uppercase">
            MACHINE
          </h2>
          <p className="font-barlow italic font-semibold text-white text-base sm:text-lg md:text-xl tracking-[0.35em] mt-1">
            Workshop
          </p>
        </div> */}

        {/* ── LIVE BADGE ── */}
        <div className="px-4 sm:px-6 lg:px-8">
        <div className=" inline-flex items-center gap-2.5 border border-[#ff4602] bg-[#0a1617] backdrop-blur-sm rounded-full px-2 sm:px-14 py-1.5 sm:py-2 mb-7 sm:mb-8">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <span className="font-nunito text-[#ff4602] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            LIVE WORKSHOP ON ZOOM: 3rd May
          </span>
        </div>

        {/* ── MAIN HEADLINE ── */}
        <h1 className="font-inter font-[600]  mb-3 sm:mb-4  lg:text-[38px] md:text-[28px] text-[26px]">
          <span className="text-[#fff] font-inter">Struggling To Get Sales In Affiliate Marketing? </span>
          <span className="text-[#ff4602] font-inter">I'll Help You Build A System That Generates High-Quality Leads & High-Ticket Closings</span>
        </h1>

        {/* ── SUB TEXT ── */}
        <p className="font-nunito text-white max-w-[800px] text-center mx-auto text-[16px] md:text-[20px] leading-relaxed mb-4">
Learn how to turn leads into consistent affiliate income using proven strategies, real guidance, and a system built from working with 900+ affiliates        </p>
        {/* Bottom Icon */}
                      <div className="flex justify-center mb-8">
                        <div className="flex flex-col items-center text-[#ff4d14] sm:text-2xl animate-pulse">
                          <MdKeyboardArrowDown />
                          
                          <MdKeyboardArrowDown />
                          <MdKeyboardArrowDown />
                        </div>
                      </div>

<Ctablock/>
</div>

      </div>
    </main>
  );
}