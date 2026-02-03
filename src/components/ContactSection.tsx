//import React from 'react';
import { MapPin, Mail, Phone, Linkedin, MessageCircle, ArrowUpRight, Clock, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E7E] mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1B5E7E] via-[#3D8B4B] to-[#1B5E7E] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Reach out to us for any inquiries or to schedule a consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Company Info Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#3D8B4B]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#1B5E7E]">
                    ShareComplex
                  </h3>
                  <p className="text-xl font-semibold text-[#3D8B4B]">LLP</p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#1B5E7E] group-hover:scale-110 transition-all">
                      <MapPin size={20} className="text-[#1B5E7E] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1B5E7E] mb-1">Our Location</p>
                      <p className="text-gray-700 text-sm">
                        Plot No 427, Ward 3B, Adipur - 370205, Gandhidham, Kutch,
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#1B5E7E] group-hover:scale-110 transition-all">
                      <Mail size={20} className="text-[#1B5E7E] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1B5E7E] mb-1">Email Us</p>
                      <a 
                        href="mailto:sharecomplexllp@gmail.com" 
                        className="text-gray-700 hover:text-[#1B5E7E] transition-colors text-sm font-medium"
                      >
                        sharecomplexllp@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#1B5E7E] group-hover:scale-110 transition-all">
                      <Phone size={20} className="text-[#1B5E7E] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1B5E7E] mb-1">Call Us</p>
                      <a 
                        href="tel:+916357271375" 
                        className="text-gray-700 hover:text-[#1B5E7E] transition-colors text-sm font-medium"
                      >
                        +91 63 57 271375
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group cursor-pointer p-3 rounded-lg hover:bg-green-50 transition-all border-2 border-[#3D8B4B]">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#3D8B4B] group-hover:scale-110 transition-all">
                      <MessageCircle size={20} className="text-[#3D8B4B] group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#3D8B4B] mb-1">WhatsApp</p>
                      <a 
                        href="https://wa.me/message/PWZYW22GOM2SA1" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-700 hover:text-[#3D8B4B] transition-colors text-sm font-medium flex items-center"
                      >
                        Message Sharecomplexllp
                        <ArrowUpRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Connections */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-[#1B5E7E] mb-4 flex items-center">
                    <Linkedin size={20} className="mr-2 text-[#3D8B4B]" />
                    Connect With Our Team
                  </h4>
                  <div className="space-y-2">
                    <a 
                      href="https://linkedin.com/in/abhay-bhimajiani-50a223237" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-lg hover:bg-blue-50 group"
                    >
                      <span className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#1B5E7E] transition-all">
                          <Linkedin size={16} className="text-[#1B5E7E] group-hover:text-white" />
                        </div>
                        Abhay Bhimajiani
                      </span>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rinky-kanjani-1620172a4" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-lg hover:bg-blue-50 group"
                    >
                      <span className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#1B5E7E] transition-all">
                          <Linkedin size={16} className="text-[#1B5E7E] group-hover:text-white" />
                        </div>
                        Rinky Kanjani
                      </span>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/bhaviksinh-zala-511053224" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between text-gray-700 hover:text-[#1B5E7E] transition-colors p-3 rounded-lg hover:bg-blue-50 group"
                    >
                      <span className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#1B5E7E] transition-all">
                          <Linkedin size={16} className="text-[#1B5E7E] group-hover:text-white" />
                        </div>
                        Bhaviksinh Zala
                      </span>
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR Code */}
              <div className="bg-gradient-to-br from-[#3D8B4B] to-green-700 p-6 rounded-xl shadow-lg text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-3 flex items-center justify-center">
                  <MessageCircle size={24} className="mr-2" />
                  Scan to Chat on WhatsApp
                </h4>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-xl shadow-lg">
                    <img 
                      src="/WhatsApp Image 2026-02-03 at 1.05.22 PM.jpeg" 
                      alt="WhatsApp QR Code" 
                      className="w-48 h-48 object-contain rounded-lg" 
                    />
                  </div>
                </div>
                <p className="text-center text-green-50 text-sm">
                  Scan this code for instant WhatsApp access
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1B5E7E] via-[#2A7A99] to-[#1B5E7E] p-8 rounded-xl shadow-xl text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#3D8B4B] opacity-10 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3D8B4B] opacity-10 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative z-10"> 
                  <h3 className="text-2xl font-bold mb-4">
                    Let's Start a Conversation
                  </h3>
                  <p className="mb-8 text-blue-100 leading-relaxed">
                    Connect with us instantly on WhatsApp for quick responses and personalized assistance.
                  </p>

                  <a 
                    href="https://wa.me/message/PWZYW22GOM2SA1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full bg-[#3D8B4B] text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform group"
                  >
                    <MessageCircle size={24} className="mr-3 group-hover:animate-bounce" />
                    Message Sharecomplexllp on WhatsApp
                    <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  {/* Benefits */}
                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <h4 className="font-bold mb-4 flex items-center text-lg">
                      <CheckCircle size={20} className="mr-2 text-[#3D8B4B]" />
                      Why Choose WhatsApp?
                    </h4>
                    <ul className="space-y-3 text-blue-50">
                      <li className="flex items-start">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-lg">✓</span>
                        <span><strong>Instant responses</strong> to your queries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-lg">✓</span>
                        <span><strong>Easy document sharing</strong> for quick processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-lg">✓</span>
                        <span><strong>Direct team access</strong> for personalized support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3D8B4B] mr-3 font-bold text-lg">✓</span>
                        <span><strong>Secure & convenient</strong> messaging platform</span>
                      </li>
                    </ul>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-blue-100">
                    <CheckCircle size={16} className="text-[#3D8B4B]" />
                    <span>Trusted by 100+ investors</span>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#3D8B4B]">
                <h4 className="font-bold text-[#1B5E7E] mb-4 flex items-center text-lg">
                  <Clock size={20} className="mr-2 text-[#3D8B4B]" />
                  We're Here to Help
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is available during business hours to assist you with all your investment needs.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Quick response times</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Expert guidance available</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#3D8B4B] rounded-full mr-3"></div>
                    <span>Personalized solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};