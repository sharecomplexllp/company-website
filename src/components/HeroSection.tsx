import React from 'react';
import { ChevronRight } from 'lucide-react';
export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-silver opacity-40"></div>
        <div className="market-graph"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <img src="/logo.jpg" alt="ShareComplex LLP" className="h-20 md:h-24" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-4 leading-tight">
            Empowering Investors Through Technology & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Trading, Investing, and Wealth Management across India's leading
            exchanges — NSE, BSE, and MCX.
          </p>
          <button onClick={scrollToContact} className="bg-brand-blue hover:bg-opacity-90 text-white px-8 py-3 rounded-md flex items-center text-lg transition-all transform hover:translate-x-1">
            Get in Touch
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L1440,0L1440,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};