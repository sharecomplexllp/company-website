import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
export const AxisFranchise = () => {
  const services = ['3-in-1 Trading & Demat Accounts (Banking + Demat + Trading)', 'Multi-Asset Trading (Equities, Derivatives, Commodities, Currencies)', 'Investment Products (Mutual Funds, IPOs, ETFs, Bonds, NCDs)', 'Portfolio Management & Research Advisory', 'Digital Infrastructure (Web, Mobile, and Desktop Trading Platforms)', '24/7 Dedicated Support & Relationship Management'];
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Axis Securities Franchise Services
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg mb-8 text-gray-700">
                Through our Axis Securities Franchise, ShareComplex LLP provides
                a full suite of financial solutions:
              </p>

              <ul className="space-y-4 mb-8">
                {services.map((service, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-brand-green mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>)}
              </ul>

              <a href="#" className="inline-flex items-center text-brand-blue hover:text-brand-green font-medium text-lg transition-colors">
                Visit Axis Direct Franchise Portal
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-2xl border-4 border-brand-blue/20">
              <div className="flex justify-center mb-8">
                <img src="/logo.jpg" alt="ShareComplex LLP" className="h-32 md:h-40 shadow-xl rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                  Authorized Franchise Partner
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Access institutional-grade brokerage services and investment
                  solutions through our official partnership with Axis
                  Securities.
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    For franchise inquiries, please contact us at:
                  </p>
                  <p className="font-medium text-brand-blue text-lg">
                    sharecomplexllp@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-light-blue p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Why Choose Axis Securities?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">
                  25+
                </div>
                <p className="text-gray-700">Years of Trust</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">
                  10L+
                </div>
                <p className="text-gray-700">Active Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">
                  500+
                </div>
                <p className="text-gray-700">Franchise Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};