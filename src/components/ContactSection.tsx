import React from 'react';
import { MapPin, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Reach out to us for any inquiries or to schedule a consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-brand-silver p-8 rounded-lg shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">
                  ShareComplex LLP
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-brand-blue mr-4 mt-1 flex-shrink-0" />
                    <p>
                      Plot No 427, Ward 3B, Adipur - 370205, Gandhidham, Kutch,
                      Gujarat, India
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Mail size={24} className="text-brand-blue mr-4 flex-shrink-0" />
                    <a href="mailto:sharecomplexllp@gmail.com" className="hover:text-brand-blue transition-colors">
                      sharecomplexllp@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone size={24} className="text-brand-blue mr-4 flex-shrink-0" />
                    <a href="tel:+919099246666" className="hover:text-brand-blue transition-colors">
                      +91 90992 46666
                    </a>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle size={24} className="text-brand-green mr-4 flex-shrink-0" />
                    <a href="https://wa.me/message/S3NMOOUBT3TWH1" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors font-medium">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-xl font-bold text-brand-blue mb-4">
                    Connect With Us
                  </h4>
                  <div className="space-y-2">
                    <a href="https://linkedin.com/in/abhay-bhimajiani-50a223237" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-blue transition-colors">
                      <Linkedin size={20} className="mr-2" />
                      Abhay Bhimajiani
                    </a>
                    <a href="https://www.linkedin.com/in/rinky-kanjani-1620172a4" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-blue transition-colors">
                      <Linkedin size={20} className="mr-2" />
                      Rinky Kanjani
                    </a>
                    <a href="https://www.linkedin.com/in/bhaviksinh-zala-511053224" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand-blue transition-colors">
                      <Linkedin size={20} className="mr-2" />
                      Bhaviksinh Zala
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR Code */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h4 className="text-lg font-bold text-brand-blue mb-3">
                  Scan to Chat on WhatsApp
                </h4>
                <div className="flex justify-center mb-3">
                  <img src="/WhatsApp_Image_2025-12-22_at_4.43.31_PM.jpg" alt="WhatsApp QR Code" className="w-48 h-48 object-contain rounded-lg" />
                </div>
                <p className="text-sm text-gray-600">
                  Scan this code to start a conversation
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-700 mb-6">
                  Click the button below to start a conversation with us on
                  WhatsApp.
                </p>

                <a href="https://wa.me/message/S3NMOOUBT3TWH1" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center font-medium">
                  <MessageCircle size={20} className="mr-2" />
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};