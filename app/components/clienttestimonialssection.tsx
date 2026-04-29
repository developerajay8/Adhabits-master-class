import React from 'react';
import Marquee from 'react-fast-marquee';
import Ctablock from './ctablock';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Mock data for the testimonials
// Replace the 'image' paths with your actual screenshot paths
const testimonials = [
  { id: 1, image: "/image 7.png" },
  { id: 2, image: "image 8.png" },
  { id: 3, image: "image 9.png" },
  { id: 4, image: "image 10.png" },
  { id: 4, image: "image 11.png" },
  // { id: 4, image: "image 12.png" },
  // { id: 4, image: "image 13.png" },
  // { id: 4, image: "image 14.png" },
  // Add more to make the loop seamless
];

const ClientTestimonials = () => {
  return (
    <section className="bg-[#0a0a0a] sm:pt-16 pt-16 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Title Section */}
       
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-[600] pb-3 ">
          <span className="text-[#ff5a1f]">
           Client
          </span>{" "}
          <span className="text-white">
          Testimonials
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Real WhatsApp screenshots from happy clients
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for "Fade" effect on sides */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 hidden md:block"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 hidden md:block"></div>

        <Marquee
          gradient={false}
          speed={50}
          autoFill
          pauseOnHover={true}
          className="py-4"
        >
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="mx-3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className=" rounded-[14px] overflow-hidden border border-gray-800 shadow-2xl shadow-black/50">
                <img 
                  src={item.image} 
                  alt={`Client Testimonial ${item.id}`}
                  className=" w-[225px] h-[440px] object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
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
};

export default ClientTestimonials;