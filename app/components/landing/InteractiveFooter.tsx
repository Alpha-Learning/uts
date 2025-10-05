"use client";

import React, { useState, useEffect } from "react";

// Minimal SVG icons to avoid extra deps
const IconLinkedIn = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.67-1.2 2.3-2.46 4.74-2.46 5.07 0 6 3.34 6 7.68V24h-5v-7.16c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24H8z" />
  </svg>
);

const IconTwitterX = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.566L23.5 22h-6.594l-5.156-6.31L5.78 22H2.5l8.023-9.167L1.5 2h6.75l4.676 5.89L18.244 2zm-1.156 18h1.77L7.06 4h-1.83l11.858 16z" />
  </svg>
);

const IconFacebook = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.02h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.311h3.59l-.467 3.686h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
  </svg>
);

const IconInstagram = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.262-2.242-1.324-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 1.567 5.8 1.28 7.166 1.218 8.432 1.16 8.812 1.148 12 1.148m0-1.148C8.741 0 8.332.013 7.052.072 5.773.131 4.66.42 3.678 1.402 2.695 2.385 2.407 3.498 2.348 4.777 2.289 6.057 2.276 6.466 2.276 9.724v4.552c0 3.258.013 3.667.072 4.947.059 1.279.347 2.392 1.33 3.375.982.982 2.095 1.27 3.375 1.329 1.28.059 1.689.072 4.947.072s3.667-.013 4.947-.072c1.279-.059 2.392-.347 3.375-1.33.982-.982 1.27-2.095 1.329-3.375.059-1.28.072-1.689.072-4.947V9.724c0-3.258-.013-3.667-.072-4.947-.059-1.279-.347-2.392-1.33-3.375C20.332.42 19.219.132 17.94.073 16.66.014 16.251 0 12 0z" />
    <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.186A4.024 4.024 0 1 1 16.024 12 4.03 4.03 0 0 1 12 16.024z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

export default function InteractiveFooter() {
  const [currentYear] = useState(new Date().getFullYear());

  const campusLinks = [
   "sample@gmail.com",
   "+1-2534-4456-345"
  ];

  const academicsLinks = [
   "About us"
  ];

  const campusLifeLinks = [
    "Accessibility",
    "Financial Aid",
    "Food Services", 
    "Housing",
    "Information Technologies",
    "Student Life"
  ];

  return (
    <footer id="contact" className="bg-[#1a0a33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section - Logo and Address */}
          <div className="space-y-6 ">
            {/* Logo */}
            <div className="flex items-start flex-col gap-y-6 space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/logo.png" alt="ALS Workflow" className="w-12 h-12 object-contain" />
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="text-sm font-medium text-white" style={{ fontFamily: 'LeBeauneNew, serif' }}>ALS WORKFLOW</div>
                <div className="space-y-1">
                  <div className="text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>OFFICE 22, BLDG 661,</div>          
                  <div className="text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>RD 1208, BLOCK 712</div>          
                  <div className="text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>SALMABAD, KINGDOM OF BAHRAIN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 ">
            {/* Logo */}
            <div className="flex items-start space-x-4">
             
              <div className="space-y-3 text-gray-300">
                <div className="text-sm font-medium text-white">ALS WORKFLOW</div>
                <div className="space-y-1">
                  <div className="text-sm">OFFICE 22, BLDG 661,</div>          
                  <div className="text-sm">RD 1208, BLOCK 712</div>          
                  <div className="text-sm">SALMABAD,</div>
                  <div className="text-sm">KINGDOM OF BAHRAIN</div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'LeBeauneNew, serif' }}>CONTACT US</h3>
            <ul className="space-y-2">
              {campusLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT US */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'LeBeauneNew, serif' }}>ABOUT US</h3>
            <ul className="space-y-2">
              {academicsLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Social Media */}
        <div className="border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>
              Copyright All Right Reserved 2025
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <IconFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <IconLinkedIn className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <IconInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <IconTwitterX className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
