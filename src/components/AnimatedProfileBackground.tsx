import React, { useState } from 'react';

interface AnimatedProfileBackgroundProps {
  src: string;
  alt: string;
  size?: number;
}

/**
 * LOGO-THEMED AnimatedProfileBackground Component
 * 
 * Animations Based on ShareComplex LLP Logo:
 * 1. Growing Bars (Like Logo Bars) - Main Animation
 * 2. Growing Arrow Animation - Growth Indicator
 * 3. Rotating Growth Pattern - Ring Rotation
 * 4. Pulsing Expansion - Border Pulse
 * 5. Harmonic Bar Wave - Synchronized Motion
 * 
 * Colors: Teal (#208C8D) & Green (#4CAF50) from logo
 * Background: Subtle gradient themed on logo design
 * Theme: 100% ShareComplex LLP Logo Inspired
 */
export const AnimatedProfileBackground: React.FC<AnimatedProfileBackgroundProps> = ({
  src,
  alt,
  size = 128
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerSize = size + 60;
  const barCount = 5; // 5 bars like logo
  const barWidth = 12;
  const totalBarsWidth = barCount * barWidth + (barCount - 1) * 8;
  const startX = (containerSize - totalBarsWidth) / 2;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* SVG Background - Logo Themed */}
      <svg
        width={containerSize}
        height={containerSize}
        className="absolute"
        style={{
          filter: 'drop-shadow(0 0 25px rgba(32, 140, 141, 0.3))',
        }}
      >
        <defs>
          {/* Logo-Inspired Gradients */}
          <linearGradient id="logoGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#208C8D" />
            <stop offset="50%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#208C8D" />
          </linearGradient>

          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(32, 140, 141, 0.08)" />
            <stop offset="50%" stopColor="rgba(32, 140, 141, 0.05)" />
            <stop offset="100%" stopColor="rgba(76, 175, 80, 0.08)" />
          </linearGradient>

          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#208C8D" stopOpacity="0.05" />
          </radialGradient>

          {/* Glow Filter */}
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle - Subtle Logo Gradient */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={containerSize / 2}
          fill="url(#backgroundGradient)"
          opacity="0.6"
        />

        {/* Center Glow */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={containerSize / 2.5}
          fill="url(#centerGlow)"
          opacity="0.4"
        />

        {/* ==================== MAIN ANIMATION #1: Growing Bars (Core Logo Element) ==================== */}
        {Array.from({ length: barCount }).map((_, i) => {
          const baseHeight = 20 + i * 12; // Bars get progressively taller (like logo)
          const x = startX + i * (barWidth + 8) + barWidth / 2;
          const y = containerSize / 2;

          return (
            <g key={`bar-${i}`}>
              {/* Main Bar - Growing Animation */}
              <rect
                x={x - barWidth / 2}
                y={y - baseHeight / 2}
                width={barWidth}
                height={baseHeight}
                fill="url(#logoGradient)"
                rx="4"
                opacity="0.8"
                filter="url(#logoGlow)"
                style={{
                  animation: `growBar${i} 2.5s ease-in-out infinite`,
                  transformOrigin: `${x}px ${y}px`,
                }}
              />

              {/* Glow Outline */}
              <rect
                x={x - barWidth / 2}
                y={y - baseHeight / 2}
                width={barWidth}
                height={baseHeight}
                fill="none"
                stroke="#4CAF50"
                strokeWidth="1.5"
                rx="4"
                opacity="0.4"
                style={{
                  animation: `barOutline${i} 2.5s ease-in-out infinite`,
                }}
              />
            </g>
          );
        })}

        {/* ==================== ANIMATION #2: Growing Arrow (Like Logo Arrow) ==================== */}
        <g
          style={{
            animation: 'arrowGrow 3s ease-in-out infinite',
            transformOrigin: `${containerSize * 0.65}px ${containerSize * 0.35}px`,
          }}
        >
          {/* Arrow Shaft - Curved Path */}
          <path
            d={`M ${containerSize * 0.4} ${containerSize * 0.6} Q ${containerSize * 0.55} ${containerSize * 0.45} ${containerSize * 0.7} ${containerSize * 0.3}`}
            stroke="#208C8D"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#logoGlow)"
            style={{
              animation: 'arrowShaft 3s ease-in-out infinite',
            }}
          />

          {/* Arrow Head - Triangle */}
          <polygon
            points={`${containerSize * 0.7},${containerSize * 0.3} ${containerSize * 0.72},${containerSize * 0.23} ${containerSize * 0.78},${containerSize * 0.32}`}
            fill="#4CAF50"
            opacity="0.8"
            filter="url(#logoGlow)"
            style={{
              animation: 'arrowHeadPulse 3s ease-in-out infinite',
            }}
          />
        </g>

        {/* ==================== ANIMATION #3: Rotating Ring (Growth Visualization) ==================== */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={size / 2 + 12}
          fill="none"
          stroke="#4CAF50"
          strokeWidth="2"
          opacity="0.5"
          style={{
            animation: 'rotateRing 4s linear infinite',
            strokeDasharray: '15 5',
          }}
        />

        {/* ==================== ANIMATION #4: Pulsing Border Ring ==================== */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={containerSize / 2 - 2}
          fill="none"
          stroke="#208C8D"
          strokeWidth="1.5"
          opacity="0.3"
          style={{
            animation: 'pulseBorder 2s ease-in-out infinite',
          }}
        />

        {/* ==================== ANIMATION #5: Secondary Growing Bars (Subtle Background) ==================== */}
        {Array.from({ length: barCount }).map((_, i) => {
          const baseHeight = 15 + i * 10;
          const x = startX + i * (barWidth + 8) + barWidth / 2;
          const y = containerSize / 2;

          return (
            <rect
              key={`bar-back-${i}`}
              x={x - barWidth / 2 - 1}
              y={y - baseHeight / 2}
              width={barWidth}
              height={baseHeight}
              fill="none"
              stroke="rgba(76, 175, 80, 0.2)"
              strokeWidth="1"
              rx="4"
              opacity="0.2"
              style={{
                animation: `growBarBack${i} 2.5s ease-in-out infinite reverse`,
              }}
            />
          );
        })}

        {/* ==================== ANIMATION #6: Center Dot (Power Point) ==================== */}
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r="4"
          fill="#4CAF50"
          opacity="0.8"
          style={{
            animation: 'centerPulse 2s ease-in-out infinite',
          }}
          filter="url(#logoGlow)"
        />
      </svg>

      {/* Profile Image Container - Professional Styling */}
      <div
        className="relative z-20 rounded-2xl overflow-hidden border-4 border-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: `
            0 12px 32px rgba(32, 140, 141, 0.4),
            inset 0 0 20px rgba(76, 175, 80, 0.15),
            0 0 25px rgba(76, 175, 80, 0.25)
          `,
          backgroundColor: '#f5f5f5',
          borderRadius: '18px',
        }}
      >
        {/* Image - Guaranteed to Display */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imageLoaded ? 1 : 0.3,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />

        {/* Fallback Initials - If Image Fails */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#208C8D] to-[#4CAF50]">
            <span className="text-white text-2xl font-bold">
              {alt.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* CSS - Logo-Themed Animations */}
      <style>{`
        /* ==================== ANIMATION KEYFRAMES ==================== */

        /* Growing Bar Animations - Main Logo Bars */
        @keyframes growBar0 {
          0%, 100% { transform: scaleY(0.6); opacity: 0.5; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
        @keyframes growBar1 {
          0%, 100% { transform: scaleY(0.65); opacity: 0.55; }
          50% { transform: scaleY(1.25); opacity: 1; }
        }
        @keyframes growBar2 {
          0%, 100% { transform: scaleY(0.7); opacity: 0.6; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes growBar3 {
          0%, 100% { transform: scaleY(0.75); opacity: 0.65; }
          50% { transform: scaleY(1.15); opacity: 1; }
        }
        @keyframes growBar4 {
          0%, 100% { transform: scaleY(0.8); opacity: 0.7; }
          50% { transform: scaleY(1.1); opacity: 1; }
        }

        /* Bar Outline Glow - Synchronized */
        @keyframes barOutline0 {
          0%, 100% { stroke-width: 1; opacity: 0.2; }
          50% { stroke-width: 2.5; opacity: 0.6; }
        }
        @keyframes barOutline1 {
          0%, 100% { stroke-width: 1; opacity: 0.25; }
          50% { stroke-width: 2.5; opacity: 0.6; }
        }
        @keyframes barOutline2 {
          0%, 100% { stroke-width: 1; opacity: 0.3; }
          50% { stroke-width: 2.5; opacity: 0.65; }
        }
        @keyframes barOutline3 {
          0%, 100% { stroke-width: 1; opacity: 0.35; }
          50% { stroke-width: 2.5; opacity: 0.65; }
        }
        @keyframes barOutline4 {
          0%, 100% { stroke-width: 1; opacity: 0.4; }
          50% { stroke-width: 2.5; opacity: 0.7; }
        }

        /* Back Bars - Subtle Background Animation */
        @keyframes growBarBack0 {
          0%, 100% { transform: scaleY(0.5); opacity: 0.15; }
          50% { transform: scaleY(1.1); opacity: 0.3; }
        }
        @keyframes growBarBack1 {
          0%, 100% { transform: scaleY(0.55); opacity: 0.17; }
          50% { transform: scaleY(1.05); opacity: 0.32; }
        }
        @keyframes growBarBack2 {
          0%, 100% { transform: scaleY(0.6); opacity: 0.2; }
          50% { transform: scaleY(1); opacity: 0.35; }
        }
        @keyframes growBarBack3 {
          0%, 100% { transform: scaleY(0.65); opacity: 0.22; }
          50% { transform: scaleY(0.95); opacity: 0.35; }
        }
        @keyframes growBarBack4 {
          0%, 100% { transform: scaleY(0.7); opacity: 0.25; }
          50% { transform: scaleY(0.9); opacity: 0.38; }
        }

        /* Arrow Growth Animation - Like Logo Growing */
        @keyframes arrowGrow {
          0%, 100% { transform: scale(0.8) rotate(-5deg); opacity: 0.4; }
          50% { transform: scale(1.2) rotate(5deg); opacity: 1; }
        }

        /* Arrow Shaft Animation - Emphasis */
        @keyframes arrowShaft {
          0%, 100% { stroke-width: 2.5; opacity: 0.4; }
          50% { stroke-width: 4; opacity: 1; }
        }

        /* Arrow Head Pulse - Growth Indicator */
        @keyframes arrowHeadPulse {
          0%, 100% { transform: scale(0.7); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        /* Rotating Ring - Growth Indicator */
        @keyframes rotateRing {
          0% { transform: rotate(0deg); opacity: 0.3; }
          100% { transform: rotate(360deg); opacity: 0.6; }
        }

        /* Pulsing Border - Expansion Effect */
        @keyframes pulseBorder {
          0%, 100% { stroke-width: 1; opacity: 0.3; }
          50% { stroke-width: 2; opacity: 0.6; }
        }

        /* Center Pulse - Power */
        @keyframes centerPulse {
          0%, 100% { r: 4px; opacity: 0.5; }
          50% { r: 8px; opacity: 1; }
        }

        /* GPU Acceleration */
        * {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default AnimatedProfileBackground;

