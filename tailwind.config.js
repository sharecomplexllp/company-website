export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'brand-blue': '#004d71',
        'brand-green': '#3d8c40',
        'brand-light-blue': '#e6f3f7',
        'brand-light-green': '#eaf5eb',
        'brand-silver': '#f5f7fa',
      },

      keyframes: {
        'logo-pulse': {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.98)' },
          '50%': { opacity: '0.35', transform: 'scale(1.02)' },
        },
        'gradient-bg': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        // 🔥 NEW: Enhanced float animation
        'float-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
          },
          '33%': { 
            transform: 'translateY(-10px) translateX(5px) scale(1.01)',
          },
          '66%': { 
            transform: 'translateY(-5px) translateX(-4px) scale(1.01)',
          },
        },
        // 🔥 NEW: Enhanced pulse with better visibility
        'pulse-enhanced': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.04)',
          },
        },
        // 🔥 NEW: Shimmer effect for buttons
        'shimmer': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-12deg)',
          },
          '100%': { 
            transform: 'translateX(200%) skewX(-12deg)',
          },
        },
        // 🔥 NEW: Radial glow pulse
        'glow-pulse': {
          '0%, 100%': { 
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.7',
            transform: 'scale(1.1)',
          },
        },
        // 🔥 NEW: Rotation animation for gradient rings
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // 🔥 NEW: Fade in from bottom
        'fade-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'logo-pulse': 'logo-pulse 6s ease-in-out infinite',
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'slide-up': 'slide-up 0.9s ease forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        // 🔥 NEW: Enhanced animations
        'float-gentle': 'float-gentle 10s ease-in-out infinite',
        'pulse-enhanced': 'pulse-enhanced 5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },

      // 🔥 NEW: Extended utilities
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      
      // 🔥 NEW: Custom shadows for logo effects
      boxShadow: {
        'glow-blue': '0 0 60px rgba(0, 77, 113, 0.3)',
        'glow-green': '0 0 60px rgba(61, 140, 64, 0.3)',
        'brand-lg': '0 20px 40px -10px rgba(0, 77, 113, 0.3)',
      },
      
      // 🔥 NEW: Custom drop shadows
      dropShadow: {
        'logo': '0 0 60px rgba(0, 77, 113, 0.3)',
        'glow': '0 0 40px rgba(0, 77, 113, 0.4)',
      },
    },
  },
  plugins: [],
};