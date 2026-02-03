//import React, { lazy } from 'react';
import { MapPin, Mail, Phone, Linkedin, MessageCircle, Clock, ArrowUpRight, CheckCircle, Calendar, Users } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-24 pt-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E7E] mb-2">
            ShareComplex
          </h1>
          <p className="text-3xl font-semibold text-[#3D8B4B] mb-4">LLP</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1B5E7E] via-[#3D8B4B] to-[#1B5E7E] mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Reach out to us for any inquiries or to schedule a consultation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Company Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#3D8B4B]">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#1B5E7E]">
                    ShareComplex
                  </h3>
                  <p className="text-2xl font-semibold text-[#3D8B4B]">LLP</p>
                  <p className="text-sm text-gray-500 mt-2">Investment Excellence</p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start group cursor-pointer p-4 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all">
                      <MapPin size={22} className="text-[#1B5E7E]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1B5E7E] mb-1">Our Location</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Plot No 427, Ward 3B, Adipur - 370205, Gandhidham, Kutch,
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-4 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all">
                      <Mail size={22} className="text-[#1B5E7E]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#1B5E7E] mb-1">Email Us</p>
                      <a 
                        href="mailto:sharecomplexllp@gmail.com" 
                        className="text-gray-700 hover:text-[#1B5E7E] transition-colors text-sm font-medium flex items-center"
                      >
                        sharecomplexllp@gmail.com
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-4 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all">
                      <Phone size={22} className="text-[#1B5E7E]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#1B5E7E] mb-1">Call Us</p>
                      <a 
                        href="tel:+916357271375" 
                        className="text-gray-700 hover:text-[#1B5E7E] transition-colors text-sm font-medium flex items-center"
                      >
                        +91 63 57 271375
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-[#3D8B4B] hover:to-green-700 transition-all border-2 border-[#3D8B4B] shadow-md hover:shadow-lg">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-all shadow-sm">
                      <MessageCircle size={22} className="text-[#3D8B4B]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#3D8B4B] group-hover:text-white mb-1 transition-colors">WhatsApp Chat</p>
                      <a 
                        href="https://wa.me/message/PWZYW22GOM2SA1" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 group-hover:text-white transition-colors text-sm font-medium flex items-center"
                      >
                        Message Sharecomplexllp
                        <ArrowUpRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Connections */}
                <div className="mt-8 pt-6 border-t-2 border-gray-100">
                  <h4 className="text-lg font-bold text-[#1B5E7E] mb-5 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Users size={18} className="text-[#1B5E7E]" />
                    </div>
                    Connect With Our Team
                  </h4>
                  <div className="space-y-3">
                    <a 
                      href="https://linkedin.com/in/abhay-bhimajiani-50a223237" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-xl hover:bg-blue-50 group border border-transparent hover:border-blue-200"
                    >
                      <span className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-all shadow-sm">
                          <Linkedin size={18} className="text-[#1B5E7E]" />
                        </div>
                        <span className="font-medium">Abhay Bhimajiani</span>
                      </span>
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1B5E7E]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rinky-kanjani-1620172a4" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-xl hover:bg-blue-50 group border border-transparent hover:border-blue-200"
                    >
                      <span className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-all shadow-sm">
                          <Linkedin size={18} className="text-[#1B5E7E]" />
                        </div>
                        <span className="font-medium">Rinky Kanjani</span>
                      </span>
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1B5E7E]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/bhaviksinh-zala-511053224" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-xl hover:bg-blue-50 group border border-transparent hover:border-blue-200"
                    >
                      <span className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-all shadow-sm">
                          <Linkedin size={18} className="text-[#1B5E7E]" />
                        </div>
                        <span className="font-medium">Bhaviksinh Zala</span>
                      </span>
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#1B5E7E]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR Code */}
              <div className="bg-gradient-to-br from-[#3D8B4B] via-green-600 to-green-700 p-6 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 flex items-center justify-center">
                    <MessageCircle size={28} className="mr-2 animate-pulse" />
                    Scan to Chat on WhatsApp
                  </h4>
                  <div className="flex justify-center mb-4">
                    <div className="p-5 bg-white rounded-2xl shadow-2xl">
                      <img 
                        src="/WhatsApp Image 2026-02-03 at 1.05.22 PM.jpeg" 
                        alt="WhatsApp QR Code" 
                        className="w-56 h-56 object-contain rounded-xl" 
                      />
                    </div>
                  </div>
                  <p className="text-center text-green-100 font-medium mb-2">
                    Scan this code for instant WhatsApp access
                  </p>
                  <div className="flex items-center justify-center text-sm text-green-200">
                    <CheckCircle size={16} className="mr-1" />
                    <span>Fast & Secure Connection</span>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 border-4 border-white hover:border-[#1B5E7E] transition-all">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d70.13!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzQ4LjAiTiA3MMKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Main CTA Card */}
              <div className="bg-gradient-to-br from-[#1B5E7E] via-[#2A7A99] to-[#1B5E7E] p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#3D8B4B] opacity-10 rounded-full -mr-24 -mt-24"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3D8B4B] opacity-10 rounded-full -ml-20 -mb-20"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#3D8B4B] opacity-5 rounded-full -ml-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Let's Start a Conversation
                  </h3>
                  
                  <p className="mb-8 text-blue-100 leading-relaxed text-lg">
                    Connect with us instantly on WhatsApp for quick responses, personalized assistance, and expert investment guidance.
                  </p>

                  <a 
                    href="https://wa.me/message/PWZYW22GOM2SA1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-[#3D8B4B] text-white py-5 px-6 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center font-bold text-lg shadow-2xl hover:shadow-green-500/50 hover:scale-105 transform group"
                  >
                    <MessageCircle size={26} className="mr-3 group-hover:animate-bounce" />
                    Message Sharecomplexllp on WhatsApp
                    <ArrowUpRight size={22} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  {/* Benefits */}
                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/20 shadow-lg">
                    <h4 className="font-bold mb-5 flex items-center text-lg">
                      <CheckCircle size={22} className="mr-2 text-[#3D8B4B]" />
                      Why Choose WhatsApp Communication?
                    </h4>
                    <ul className="space-y-4 text-blue-50">
                      <li className="flex items-start group">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-xl group-hover:scale-125 transition-transform">✓</span>
                        <span className="text-base"><strong className="text-white">Lightning-fast responses</strong> to all your queries</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-xl group-hover:scale-125 transition-transform">✓</span>
                        <span className="text-base"><strong className="text-white">Seamless document sharing</strong> for quick processing</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-xl group-hover:scale-125 transition-transform">✓</span>
                        <span className="text-base"><strong className="text-white">Direct team access</strong> with personalized support</span>
                      </li>
                      <li className="flex items-start group">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-xl group-hover:scale-125 transition-transform">✓</span>
                        <span className="text-base"><strong className="text-white">Secure & convenient</strong> encrypted messaging</span>
                      </li>
                    </ul>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-100 bg-white/10 rounded-lg p-3">
                      <CheckCircle size={18} className="text-[#3D8B4B] flex-shrink-0" />
                      <span className="font-medium">100+ Happy Investors</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-blue-100 bg-white/10 rounded-lg p-3">
                      <CheckCircle size={18} className="text-[#3D8B4B] flex-shrink-0" />
                      <span className="font-medium">24/7 Support Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#3D8B4B]">
                <h4 className="font-bold text-[#1B5E7E] mb-6 flex items-center text-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock size={22} className="text-[#3D8B4B]" />
                  </div>
                  Business Hours
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl hover:shadow-md transition-all border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#3D8B4B] rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-700 font-semibold">Monday - Friday</span>
                    </div>
                    <span className="font-bold text-[#1B5E7E]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl hover:shadow-md transition-all border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#3D8B4B] rounded-full mr-3"></div>
                      <span className="text-gray-700 font-semibold">Saturday</span>
                    </div>
                    <span className="font-bold text-[#1B5E7E]">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl hover:shadow-md transition-all border border-red-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-semibold">Sunday</span>
                    </div>
                    <span className="font-bold text-red-600">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border-2 border-[#3D8B4B] shadow-sm">
                  <p className="text-sm text-gray-700 flex items-start font-medium">
                    <MessageCircle size={18} className="text-[#3D8B4B] mr-2 mt-0.5 flex-shrink-0" />
                    WhatsApp messages are actively monitored during business hours. We guarantee a response within 30 minutes!
                  </p>
                </div>
              </div>

              {/* Additional Support Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-2 border-[#3D8B4B]">
                <h4 className="font-bold text-[#1B5E7E] mb-4 flex items-center">
                  <Calendar size={20} className="mr-2 text-[#3D8B4B]" />
                  Schedule a Consultation
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Book a personalized one-on-one consultation with our investment experts to discuss your financial goals.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Expert portfolio analysis</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Customized investment strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};