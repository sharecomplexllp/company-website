import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'What We Do' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/team', label: 'Our Team' },
    { path: '/axis-franchise', label: 'Axis Franchise' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}
    >
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center gap-6">

        {/* BRAND NAME ONLY */}
        <Link
          to="/home"
          className="text-xl font-bold tracking-wide text-brand-blue whitespace-nowrap flex-shrink-0"
        >
          ShareComplex LLP
        </Link>

        {/* DESKTOP NAV WITH GROWTH CHART BUTTONS - BALANCED SPACING */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap justify-end">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 font-medium transition-all duration-300 group whitespace-nowrap"
            >
              {/* Growth Chart Bars Background */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center gap-[3px] px-2 overflow-hidden">
                {[30, 45, 60, 75, 90].map((height, i) => (
                  <div
                    key={i}
                    className={`w-[4px] rounded-t transition-all duration-300 ease-out
                    ${location.pathname === link.path 
                      ? 'bg-green-500' 
                      : 'bg-green-200 group-hover:bg-green-500'}`}
                    style={{
                      height: location.pathname === link.path ? `${height}%` : '0%',
                      transitionDelay: `${i * 50}ms`
                    }}
                  />
                ))}
              </div>

              {/* Upward Arrow Indicator */}
              <div className={`absolute -top-1 -right-1 transition-all duration-300
                ${location.pathname === link.path 
                  ? 'opacity-100 translate-x-0 translate-y-0' 
                  : 'opacity-0 translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'}`}>
                <svg className="w-3 h-3 text-brand-blue" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              {/* Text */}
              <span className={`relative z-10 transition-colors duration-300 text-[15px]
                ${location.pathname === link.path
                  ? 'text-brand-blue'
                  : 'text-gray-700 group-hover:text-brand-blue'}`}>
                {link.label}
              </span>

              {/* Hover Growth Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center gap-[3px] px-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {location.pathname !== link.path && [30, 45, 60, 75, 90].map((height, i) => (
                  <div
                    key={`hover-${i}`}
                    className="w-[4px] bg-green-500 rounded-t transition-all duration-300 ease-out"
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${i * 50}ms`
                    }}
                  />
                ))}
              </div>
            </Link>
          ))}
          
          {/* Contact Button with Growth Effect */}
          <Link
            to="/contact"
            className="relative bg-brand-blue text-white px-6 py-2 rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg whitespace-nowrap flex-shrink-0"
          >
            {/* Animated Growth Bars */}
            <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center gap-[3px] opacity-20">
              {[40, 55, 70, 85, 100].map((height, i) => (
                <div
                  key={i}
                  className="w-[4px] bg-green-400 rounded-t transition-all duration-500 ease-out group-hover:scale-y-100"
                  style={{
                    height: `${height}%`,
                    transform: 'scaleY(0)',
                    transformOrigin: 'bottom',
                    transitionDelay: `${i * 80}ms`
                  }}
                />
              ))}
            </div>
            
            {/* Arrow Icon */}
            <span className="absolute top-1 right-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </span>
            
            <span className="relative z-10 text-[15px]">Contact Us</span>
          </Link>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU WITH GROWTH BUTTONS */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg p-6 animate-fade-in">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative block py-3 my-1 px-4 rounded-md transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Mobile Growth Chart */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-start gap-[2px] px-2 overflow-hidden">
                {[25, 40, 55, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    className={`w-[3px] rounded-t transition-all duration-300
                    ${location.pathname === link.path 
                      ? 'bg-green-500' 
                      : 'bg-green-200 group-hover:bg-green-500'}`}
                    style={{
                      height: location.pathname === link.path ? `${height}%` : '0%',
                      transitionDelay: `${i * 40}ms`
                    }}
                  />
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-start gap-[2px] px-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                {location.pathname !== link.path && [25, 40, 55, 70, 85].map((height, i) => (
                  <div
                    key={`mobile-hover-${i}`}
                    className="w-[3px] bg-green-500 rounded-t transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      transitionDelay: `${i * 40}ms`
                    }}
                  />
                ))}
              </div>

              <span className={`relative z-10 ${location.pathname === link.path ? 'text-brand-blue font-semibold' : 'text-gray-800 group-hover:text-brand-blue'}`}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="block mt-4 bg-brand-blue text-white px-5 py-3 rounded-md text-center hover:bg-opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .group:hover .w-\\[4px\\] {
          height: var(--height);
        }
      `}</style>
    </nav>
  );
};