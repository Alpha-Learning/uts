"use client";

import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeId, setActiveId] = useState<string>('top');
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveId(targetId);
    setMobileOpen(false);
  };

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

      // Determine active section based on scroll position
      const sectionIds = ['top', 'services', 'waiting-list', 'contact'];
      let currentActiveId = 'top';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Consider a section active once its top passes 30% of the viewport height
        if (rect.top <= window.innerHeight * 0.3) {
          currentActiveId = id;
        }
      }
      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeId]);

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
                  activeId === 'top' ? 'text-[#192951]' : (scrollY > 100 ? 'text-[#192951] font-semibold' : 'text-white hover:text-white')
                } nav-link`} href="#top" onClick={(e) => handleNavClick(e, 'top')}>Home</a>
              </li>
              <li>
                <a className={`transition-colors duration-300 ${
                  activeId === 'services' ? 'text-[#192951]' : (scrollY > 100 ? 'text-[#192951] font-semibold' : 'text-white hover:text-white')
                } nav-link`} href="#services" onClick={(e) => handleNavClick(e, 'services')}>Mission</a>
              </li>
             
            </ul>

            {/* Center logo */}
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-18 h-12" />
             
            </div>

            {/* Right links + search */}
            <div className={`flex items-center gap-8 justify-start transition-colors duration-300 ${
              scrollY > 100 ? 'text-gray-800' : 'text-white'
            }`}>
              <ul className="flex items-center gap-10">
                <li>
                  <a className={`transition-colors duration-300 ${
                    activeId === 'waiting-list' ? 'text-[#192951]' : (scrollY > 100 ? 'text-[#192951] font-semibold' : 'text-white hover:text-white')
                  } nav-link`} href="#waiting-list" onClick={(e) => handleNavClick(e, 'waiting-list')}>Waiting List</a>
                </li>
                <li>
                  <a className={`transition-colors duration-300 ${
                    activeId === 'contact' ? 'text-[#192951]' : (scrollY > 100 ? 'text-[#192951] font-semibold' : 'text-white hover:text-white')
                  } nav-link`} href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
                </li>
               
              </ul>
             
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile */}
      <div className="lg:hidden ">
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


          <img src="/logo.png" alt="logo" className="w-16 h-12  mr-5"  />
         <div>

         </div>
        </div>
        {mobileOpen && (
          <div className="px-4 pb-4">
            <ul className="grid grid-cols-1 gap-3">
              <li><a className={`${activeId === 'top' ? 'text-[#192951] font-semibold' : 'font-semibold'} nav-link`} href="#top" onClick={(e) => handleNavClick(e, 'top')}>Home</a></li>
              <li><a className={`font-medium transition-colors duration-300 ${
                activeId === 'services' ? 'text-[#192951]' : (scrollY > 100 ? 'text-gray-800' : 'text-white')
              } nav-link`} href="#services" onClick={(e) => handleNavClick(e, 'services')}>Mission</a></li>
              <li><a className={`font-medium transition-colors duration-300 ${
                activeId === 'waiting-list' ? 'text-[#192951]' : (scrollY > 100 ? 'text-gray-800' : 'text-white')
              } nav-link`} href="#waiting-list" onClick={(e) => handleNavClick(e, 'waiting-list')}>Waiting List</a></li>
              <li><a className={`font-medium transition-colors duration-300 ${
                activeId === 'contact' ? 'text-[#192951]' : (scrollY > 100 ? 'text-gray-800' : 'text-white')
              } nav-link`} href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
             
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
