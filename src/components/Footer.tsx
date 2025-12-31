import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Linkedin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-brand-blue text-white py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/logo.jpg" alt="ShareComplex LLP" className="h-20 mb-4 bg-white p-3 rounded-lg shadow-md" />
            <p className="mb-4">
              Specialized investment and trading firm operating across NSE, BSE,
              and MCX.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/team" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="flex items-center hover:text-brand-light-blue transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Trading
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Investing
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Portfolio Management
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Digital Innovation
              </li>
              <li className="flex items-center">
                <ChevronRight size={16} className="mr-2" />
                Axis Securities Franchise
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              Plot No 427, Ward 3B,
              <br />
              Adipur - 370205, Gandhidham,
              <br />
              Kutch, Gujarat, India
            </address>
            <p className="mt-4">
              <a href="mailto:sharecomplexllp@gmail.com" className="hover:text-brand-light-blue transition-colors">
                sharecomplexllp@gmail.com
              </a>
            </p>
            <p className="mt-1">
              <a href="tel:+919099246666" className="hover:text-brand-light-blue transition-colors">
                +91 90992 46666
              </a>
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://linkedin.com/in/abhay-bhimajiani-50a223237" target="_blank" rel="noopener noreferrer" className="hover:text-brand-light-blue transition-colors" title="Abhay Bhimajiani">
                <Linkedin size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rinky-kanjani-1620172a4" target="_blank" rel="noopener noreferrer" className="hover:text-brand-light-blue transition-colors" title="Rinky Kanjani">
                <Linkedin size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhaviksinh-zala-511053224" target="_blank" rel="noopener noreferrer" className="hover:text-brand-light-blue transition-colors" title="Bhaviksinh Zala">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2025 ShareComplex LLP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>;
};