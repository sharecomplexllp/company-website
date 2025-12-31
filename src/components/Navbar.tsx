import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    path: '/home',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About Us'
  }, {
    path: '/services',
    label: 'What We Do'
  }, {
    path: '/leadership',
    label: 'Leadership'
  }, {
    path: '/team',
    label: 'Our Team'
  }, {
    path: '/axis-franchise',
    label: 'Axis Franchise'
  }, {
    path: '/why-choose-us',
    label: 'Why Choose Us'
  }, {
    path: '/testimonials',
    label: 'Testimonials'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/home" className="flex items-center">
            <img src="/logo.jpg" alt="ShareComplex LLP" className="h-20 md:h-24 transition-transform hover:scale-105 shadow-md rounded-md" />
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-gray-800 hover:text-brand-blue transition-colors font-medium ${location.pathname === link.path ? 'text-brand-blue' : ''}`}>
                {link.label}
              </Link>)}
            <Link to="/contact" className="bg-brand-blue text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-all font-medium">
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-gray-800 hover:text-brand-blue transition-colors py-2 ${location.pathname === link.path ? 'text-brand-blue font-medium' : ''}`}>
                {link.label}
              </Link>)}
            <Link to="/contact" className="bg-brand-blue text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-all text-center">
              Contact Us
            </Link>
          </div>
        </div>}
    </nav>;
};