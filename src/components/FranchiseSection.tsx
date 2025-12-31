import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
export const FranchiseSection = () => {
  const services = ['3-in-1 Trading & Demat Accounts (Banking + Demat + Trading)', 'Multi-Asset Trading (Equities, Derivatives, Commodities, Currencies)', 'Investment Products (Mutual Funds, IPOs, ETFs, Bonds, NCDs)', 'Portfolio Management & Research Advisory', 'Digital Infrastructure (Web, Mobile, and Desktop Trading Platforms)', '24/7 Dedicated Support & Relationship Management'];
  return <section className="py-16 md:py-24 bg-brand-silver">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Axis Securities Franchise Services
              </h2>
              <div className="w-20 h-1 bg-brand-green mb-6"></div>
              <p className="text-lg mb-8">
                Through our Axis Securities Franchise, ShareComplex LLP provides
                a full suite of financial solutions:
              </p>
              <ul className="space-y-3 mb-8">
                {services.map((service, index) => <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-brand-green mr-2 mt-1 flex-shrink-0" />
                    <span>{service}</span>
                  </li>)}
              </ul>
              <a href="#" className="inline-flex items-center text-brand-blue hover:text-brand-green font-medium transition-colors">
                Visit Axis Direct Franchise Portal
                <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <img src="/logo.jpg" alt="ShareComplex LLP" className="h-16" />
              </div>
              <div className="flex justify-center mb-6">
                <img src="https://www.axissecurities.in/wp-content/uploads/2022/07/logo-axis-securities.png" alt="Axis Securities" className="h-12" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-brand-blue">
                  Authorized Franchise Partner
                </h3>
                <p className="text-gray-700 mb-6">
                  Access institutional-grade brokerage services and investment
                  solutions through our official partnership with Axis
                  Securities.
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    For franchise inquiries, please contact us at:
                  </p>
                  <p className="font-medium text-brand-blue">
                    sharecomplexllp@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};