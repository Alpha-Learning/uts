"use client";

import React from 'react'

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute  w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/final.mp4" type="video/mp4" className='w-1/2' />
          <source src="/videos/background-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Overlay */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience the future of education and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div> */}

      {/* Controls overlay removed per requirement (video remains muted) */}
      
      {/* Bottom Blur Overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80  backdrop-blur-sm"></div> */}
    </section>
  )
}
