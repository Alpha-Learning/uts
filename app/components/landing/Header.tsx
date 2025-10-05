"use client";

import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Simple logic: hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down past 100px - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrollY > 100 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-center h-20">
        <nav className="w-full max-w-7xl px-6">
          <div className="flex justify-center gap-x-18 items-center">
            {/* Left links */}
            <ul className={`flex items-center gap-10 justify-center transition-colors duration-300 ${
              scrollY > 100 ? 'text-gray-800' : 'text-white'
            }`}>
              <li>
                <a className={`font-semibold transition-colors duration-300 ${
                  scrollY > 100 ? 'text-teal-600' : 'text-teal-200'
                }`} href="#">Home</a>
              </li>
              <li>
                <a className={`transition-colors duration-300 ${
                  scrollY > 100 ? 'hover:text-teal-600' : 'hover:text-white'
                }`} href="#">Mission</a>
              </li>
             
            </ul>

            {/* Center logo */}
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-22 h-16" />
             
            </div>

            {/* Right links + search */}
            <div className={`flex items-center gap-8 justify-start transition-colors duration-300 ${
              scrollY > 100 ? 'text-gray-800' : 'text-white'
            }`}>
              <ul className="flex items-center gap-10">
                <li>
                  <a className={`transition-colors duration-300 ${
                    scrollY > 100 ? 'hover:text-teal-600' : 'hover:text-white'
                  }`} href="#">Waiting List</a>
                </li>
                <li>
                  <a className={`transition-colors duration-300 ${
                    scrollY > 100 ? 'hover:text-teal-600' : 'hover:text-white'
                  }`} href="#">Contact Us</a>
                </li>
               
              </ul>
             
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="h-16 px-4 flex items-center justify-between">
          <button
            aria-label="Toggle menu"
            className={`transition-colors duration-300 ${scrollY > 100 ? 'text-gray-800/80' : 'text-white/80'}`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-colors duration-300 ${scrollY > 100 ? 'text-gray-800' : 'text-white'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <img src="/logo.png" alt="logo" className="w-14 h-10" />

         <div></div>
        </div>
        {mobileOpen && (
          <div className="px-4 pb-4">
            <ul className="grid grid-cols-1 gap-3 text-white">
              <li><a className="text-teal-600 font-semibold" href="#">Home</a></li>
              <li className='text-black font-medium'><a href="#">Mission</a></li>
              <li className='text-black font-medium'><a href="#">Waiting List</a></li>
              <li className='text-black font-medium'><a href="#">Contact Us</a></li>
             
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
