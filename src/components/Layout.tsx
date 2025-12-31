import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from './AnimatedBackground';
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({
  children
}: LayoutProps) => {
  return <div className="min-h-screen bg-white font-inter text-gray-800 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>;
};