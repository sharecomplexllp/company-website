//import React from 'react';
import { Mail, Linkedin, MapPin, Award, TrendingUp, BookOpen } from 'lucide-react';
export const Leadership = () => {
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Leadership
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the visionary founder driving ShareComplex LLP forward
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured Leader Profile */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-96 lg:h-auto overflow-hidden">
                <img src="/WhatsApp_Image_2025-12-22_at_4.56.05_PM.jpg" alt="Abhay Bhimajiani" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  Abhay Bhimajiani
                </h2>
                <p className="text-xl text-brand-green font-semibold mb-4">
                  Founder & Company Owner
                </p>
                <p className="text-lg text-gray-700 mb-6 bg-brand-light-blue p-4 rounded-lg">
                  BDS, CFTe, CMT (All 3 Levels Cleared)
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                    <span>Gandhidham, Gujarat, India</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                    <a href="mailto:sharecomplexllp@gmail.com" className="text-gray-700 hover:text-brand-blue transition-colors">
                      sharecomplexllp@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                    <a href="https://linkedin.com/in/abhay-bhimajiani-50a223237" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-blue transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Sections */}
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award size={32} className="text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold text-brand-blue">
                  Professional Excellence
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Abhay Bhimajiani is a distinguished financial professional who
                has achieved the prestigious Chartered Market Technician (CMT)
                certification across all three levels — recognized globally as
                the gold standard in technical analysis. His expertise in chart
                analysis and market behavior makes him a comprehensive leader in
                the investment and trading industry.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With his background as a BDS graduate and certifications
                including CFTe and CMT (All 3 Levels Cleared), Abhay brings a
                unique analytical perspective to financial markets, combining
                medical precision with advanced chart analysis expertise.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp size={32} className="text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold text-brand-blue">
                  Core Expertise
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Chart Analysis
                  </h4>
                  <p className="text-gray-700">
                    CMT certified across all three levels with deep expertise in
                    chart patterns, technical indicators, and market behavior
                    analysis
                  </p>
                </div>
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Technical Analysis
                  </h4>
                  <p className="text-gray-700">
                    Advanced proficiency in reading market trends, price action,
                    and volume analysis for informed trading decisions
                  </p>
                </div>
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Risk Management
                  </h4>
                  <p className="text-gray-700">
                    Advanced risk assessment and mitigation strategies for
                    portfolio protection
                  </p>
                </div>
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Portfolio Optimization
                  </h4>
                  <p className="text-gray-700">
                    Strategic asset allocation and portfolio construction for
                    maximum risk-adjusted returns
                  </p>
                </div>
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Algorithmic Trading
                  </h4>
                  <p className="text-gray-700">
                    Development and implementation of systematic trading
                    strategies
                  </p>
                </div>
                <div className="bg-brand-light-blue p-4 rounded-md">
                  <h4 className="font-bold text-brand-blue mb-2">
                    Market Research
                  </h4>
                  <p className="text-gray-700">
                    In-depth analysis of market trends, sectors, and investment
                    opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Leadership Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen size={32} className="text-brand-blue mr-3" />
                <h3 className="text-2xl font-bold text-brand-blue">
                  Vision & Leadership
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Under Abhay's leadership since 2019, ShareComplex LLP has
                established itself as a trusted name in investment and trading
                services across NSE, BSE, and MCX. His vision combines
                traditional market wisdom with cutting-edge technology to
                deliver superior results for clients.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Abhay's commitment to ethical practices, transparent advisory,
                and client-centric service has been the cornerstone of
                ShareComplex LLP's growth and reputation in the financial
                services industry.
              </p>
              <div className="bg-brand-light-green p-6 rounded-lg border-l-4 border-brand-green">
                <p className="text-gray-700 italic text-lg">
                  "My goal is to empower every investor with the knowledge,
                  tools, and strategies they need to achieve their financial
                  objectives while managing risk effectively."
                </p>
                <p className="text-brand-blue font-semibold mt-2">
                  — Abhay Bhimajiani
                </p>
              </div>
            </div>

            {/* Placeholder for Dubai Conference */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-green p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Recent International Engagement
              </h3>
              <p className="text-lg mb-4">
                Abhay recently represented ShareComplex LLP at an international
                financial conference in Dubai, where he engaged with global
                industry leaders and explored cutting-edge financial
                technologies and market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};