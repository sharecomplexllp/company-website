import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start bg-white overflow-hidden pt-12">

      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-light-blue/20 to-white"></div>
        
        {/* Rising green bars animation - inspired by logo */}
        <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center gap-8 opacity-10">
          <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-1" style={{ height: '30%' }}></div>
          <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-2" style={{ height: '45%' }}></div>
          <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-3" style={{ height: '60%' }}></div>
          <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-4" style={{ height: '75%' }}></div>
          <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-5" style={{ height: '90%' }}></div>
        </div>
        
        {/* Upward arrow subtle overlay */}
        <div className="absolute bottom-20 right-20 opacity-5">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M100 180L100 40M100 40L60 80M100 40L140 80" stroke="#004d71" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ORIGINAL VIBRANT LOGO - Larger Size - Only Edges Dissolved - Appears First */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none w-full">
        
        {/* Very subtle ambient glow */}
        <div 
          className="absolute w-[750px] h-[750px] top-0 opacity-0"
          style={{
            background: 'radial-gradient(circle, rgba(0,77,113,0.05) 0%, rgba(76,175,80,0.03) 50%, transparent 70%)',
            animation: 'fadeIn 1.2s ease-out forwards',
            animationDelay: '0s',
            filter: 'blur(60px)'
          }}
        />

        {/* Logo container with mask for edge dissolution - LARGER SIZE */}
        <div 
          className="relative opacity-0 mb-12"
          style={{
            animation: 'logoRevealOriginal 1.5s ease-out forwards',
            animationDelay: '0.3s',
            maskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 45%, black 60%, transparent 100%)'
          }}
        >
          <img
            src="/logo.jpg"
            alt="ShareComplex LLP"
            className="w-[450px]"
          />
        </div>
      </div>

      {/* CONTENT - Positioned Below Logo - Appears Second */}
      <div className="relative z-30 text-center px-6 max-w-4xl mt-8">

        {/* Premium badge */}
        <div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 backdrop-blur-sm border border-brand-blue/20 rounded-full px-5 py-2 mb-6 opacity-0"
          style={{
            animation: 'contentSlideUp 0.8s ease-out forwards',
            animationDelay: '2s'
          }}
        >
          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-slow" />
          <span className="text-sm font-semibold text-brand-blue">India's Trusted Investment Partner</span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0"
          style={{
            animation: 'contentSlideUp 0.8s ease-out forwards',
            animationDelay: '2.2s'
          }}
        >
          <span className="bg-gradient-to-r from-brand-blue via-brand-blue to-[#005580] bg-clip-text text-transparent">
            Empowering Investors Through
          </span>
          <br />
          <span className="text-brand-blue">
            Technology & Expertise
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed opacity-0"
          style={{
            animation: 'contentSlideUp 0.8s ease-out forwards',
            animationDelay: '2.5s'
          }}
        >
          Trading, Investing, and Wealth Management across India's leading
          exchanges — <span className="font-semibold text-brand-blue">NSE</span>, <span className="font-semibold text-brand-blue">BSE</span>, and <span className="font-semibold text-brand-green">MCX</span>.
        </p>

        {/* BUTTONS - Appear Last (Third) */}
        <div
          className="flex justify-center gap-4 flex-wrap opacity-0"
          style={{
            animation: 'contentSlideUp 0.8s ease-out forwards',
            animationDelay: '2.8s'
          }}
        >
          {/* Primary CTA with shine effect */}
          <button
            onClick={scrollToContact}
            className="group relative bg-brand-blue text-white px-10 py-4 rounded-md text-lg flex items-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5"
          >
            {/* Shine animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            
            <span className="relative z-10">Get in Touch</span>
            <ChevronRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-md text-lg flex items-center hover:bg-brand-blue hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            Learn More
          </button>
        </div>

        {/* Trust indicators - fade in last */}
        <div
          className="mt-12 flex justify-center items-center gap-6 flex-wrap text-sm text-gray-600 opacity-0"
          style={{
            animation: 'contentSlideUp 0.8s ease-out forwards',
            animationDelay: '3.1s'
          }}
        >
          </div>
      </div>

      {/* Subtle ambient orbs in background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-blue/4 blur-3xl rounded-full opacity-0"
          style={{
            animation: 'fadeIn 1.5s ease-out forwards',
            animationDelay: '1.8s'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-green/4 blur-3xl rounded-full opacity-0"
          style={{
            animation: 'fadeIn 1.5s ease-out forwards',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Subtle bottom fade decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 to-transparent z-5" />

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes logoRevealOriginal {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes contentSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Animated background bar animations */
        @keyframes grow-bar {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        .animate-grow-bar-1 {
          animation: grow-bar 2s ease-out infinite;
          transform-origin: bottom;
        }

        .animate-grow-bar-2 {
          animation: grow-bar 2s ease-out 0.2s infinite;
          transform-origin: bottom;
        }

        .animate-grow-bar-3 {
          animation: grow-bar 2s ease-out 0.4s infinite;
          transform-origin: bottom;
        }

        .animate-grow-bar-4 {
          animation: grow-bar 2s ease-out 0.6s infinite;
          transform-origin: bottom;
        }

        .animate-grow-bar-5 {
          animation: grow-bar 2s ease-out 0.8s infinite;
          transform-origin: bottom;
        }
      `}</style>
    </section>
  );
};