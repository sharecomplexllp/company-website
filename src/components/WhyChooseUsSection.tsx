import React from 'react';
import { Award, Cpu, Users, Shield, BookOpen } from 'lucide-react';
export const WhyChooseUsSection = () => {
  const reasons = [{
    icon: <Award size={48} className="text-brand-blue" />,
    title: 'Global-level technical analysis',
    description: 'CMT and CFTe certified leadership'
  }, {
    icon: <Cpu size={48} className="text-brand-blue" />,
    title: 'Technology advantage',
    description: 'Custom-built apps, automation, and analytics'
  }, {
    icon: <Users size={48} className="text-brand-blue" />,
    title: 'Multidisciplinary expertise',
    description: 'Commerce, engineering, and finance backgrounds'
  }, {
    icon: <Shield size={48} className="text-brand-blue" />,
    title: 'Client-centric',
    description: 'Ethical service and long-term wealth creation focus'
  }, {
    icon: <BookOpen size={48} className="text-brand-blue" />,
    title: 'Regulatory excellence',
    description: 'NISM-certified professionals'
  }];
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => <div key={index} className="text-center p-6 hover:bg-brand-light-blue rounded-lg transition-colors">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand-blue">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};