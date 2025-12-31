import React from 'react';
import { TrendingUp, DollarSign, BarChart2, Code, Building } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    icon: <TrendingUp size={40} className="text-brand-blue" />,
    title: 'Trading',
    description: 'Equity, derivatives, and commodities trading on NSE, BSE, and MCX, built around disciplined risk management and technical analysis.'
  }, {
    icon: <DollarSign size={40} className="text-brand-blue" />,
    title: 'Investing',
    description: 'Strategic equity and mutual fund investments with portfolio construction for sustained growth.'
  }, {
    icon: <BarChart2 size={40} className="text-brand-blue" />,
    title: 'Portfolio Management',
    description: 'Customized strategies aligned with client goals and risk profiles.'
  }, {
    icon: <Code size={40} className="text-brand-blue" />,
    title: 'Digital Innovation',
    description: 'Proprietary mobile app development, automated trading systems, and real-time market analytics.'
  }, {
    icon: <Building size={40} className="text-brand-blue" />,
    title: 'Axis Securities Franchise',
    description: 'Institutional-grade brokerage, demat, and investment services integrated with Axis Direct.'
  }];
  return <section id="services" className="py-16 md:py-24 bg-brand-light-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-brand-blue">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-blue">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};