import React, { lazy } from 'react';
import { MapPin, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
export const Contact = () => {
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Reach out to us for any inquiries or to schedule a consultation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-brand-silver p-8 rounded-lg shadow-sm mb-8">
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
                  <img src="/WhatsApp_Image_2025-12-22_at_4.43.31_PM.jpg" alt="WhatsApp QR Code" className="w-56 h-56 object-contain rounded-lg shadow-md" />
                </div>
                <p className="text-sm text-gray-600">
                  Scan this code to start a conversation with us
                </p>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 mt-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d70.13!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzQ4LjAiTiA3MMKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">
                  Send Us a Message
                </h3>
                <p className="text-gray-700 mb-6">
                  Click the button below to start a conversation with us on
                  WhatsApp. We're here to help with all your investment and
                  trading needs.
                </p>

                <a href="https://wa.me/message/S3NMOOUBT3TWH1" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-green text-white py-4 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center font-medium text-lg shadow-md hover:shadow-lg">
                  <MessageCircle size={24} className="mr-3" />
                  Message Us on WhatsApp
                </a>

                <div className="mt-8 p-6 bg-brand-light-blue rounded-lg">
                  <h4 className="font-bold text-brand-blue mb-3">
                    Why WhatsApp?
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-green mr-2">✓</span>
                      <span>Instant responses to your queries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-green mr-2">✓</span>
                      <span>Share documents and screenshots easily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-green mr-2">✓</span>
                      <span>Direct communication with our team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-green mr-2">✓</span>
                      <span>Convenient and secure messaging</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-brand-silver rounded-lg">
                  <h4 className="font-bold text-brand-blue mb-3">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * WhatsApp messages are monitored during business hours.
                    We'll respond as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};