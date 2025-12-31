import React from 'react';
import { TrendingUp, DollarSign, BarChart2, Code, Building } from 'lucide-react';
export const Services = () => {
  const services = [{
    icon: <TrendingUp size={48} className="text-brand-blue" />,
    title: 'Trading',
    description: 'Equity, derivatives, and commodities trading on NSE, BSE, and MCX, built around disciplined risk management and technical analysis.',
    details: ['Intraday & Swing Trading', 'Options & Futures', 'Commodity Trading (MCX)', 'Technical Analysis Support']
  }, {
    icon: <DollarSign size={48} className="text-brand-blue" />,
    title: 'Investing',
    description: 'Strategic equity and mutual fund investments with portfolio construction for sustained growth.',
    details: ['Long-term Equity Investments', 'Mutual Fund Advisory', 'SIP Planning', 'Goal-based Investing']
  }, {
    icon: <BarChart2 size={48} className="text-brand-blue" />,
    title: 'Portfolio Management',
    description: 'Customized strategies aligned with client goals and risk profiles.',
    details: ['Risk Assessment', 'Asset Allocation', 'Regular Rebalancing', 'Performance Tracking']
  }, {
    icon: <Code size={48} className="text-brand-blue" />,
    title: 'Digital Innovation',
    description: 'Proprietary mobile app development, automated trading systems, and real-time market analytics.',
    details: ['Custom Trading Apps', 'Algorithmic Trading', 'Real-time Analytics', 'AI-powered Insights']
  }, {
    icon: <Building size={48} className="text-brand-blue" />,
    title: 'Axis Securities Franchise',
    description: 'Institutional-grade brokerage, demat, and investment services integrated with Axis Direct.',
    details: ['3-in-1 Accounts', 'Multi-asset Trading', 'IPO Applications', 'Research Reports']
  }];
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            What We Do
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive financial services designed to meet all your
            investment and trading needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-brand-blue group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-brand-blue">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
                    {detail}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </div>;
};