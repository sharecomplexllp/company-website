import { Award, Cpu, Users, Shield, BookOpen, TrendingUp } from 'lucide-react';
export const WhyChooseUs = () => {
  const reasons = [{
    icon: <Award size={56} className="text-brand-blue" />,
    title: 'Global-level Technical Analysis',
    description: 'CMT and CFTe certified leadership with expertise in advanced market analysis and trading strategies.'
  }, {
    icon: <Cpu size={56} className="text-brand-blue" />,
    title: 'Technology Advantage',
    description: 'Custom-built apps, algorithmic trading systems, and real-time analytics powered by cutting-edge technology.'
  }, {
    icon: <Users size={56} className="text-brand-blue" />,
    title: 'Multidisciplinary Expertise',
    description: 'Team with diverse backgrounds in commerce, engineering, and finance for comprehensive solutions.'
  }, {
    icon: <Shield size={56} className="text-brand-blue" />,
    title: 'Client-Centric Approach',
    description: 'Ethical service delivery with a focus on long-term wealth creation and client satisfaction.'
  }, {
    icon: <BookOpen size={56} className="text-brand-blue" />,
    title: 'Regulatory Excellence',
    description: 'NISM-certified professionals ensuring compliance and maintaining the highest industry standards.'
  }, {
    icon: <TrendingUp size={56} className="text-brand-blue" />,
    title: 'Proven Track Record',
    description: 'Consistent performance and successful client outcomes since 2019 across multiple market cycles.'
  }];
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Why Choose Us
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what sets ShareComplex LLP apart in the financial services
            industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-blue">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-brand-light-blue p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Join hundreds of satisfied clients who trust ShareComplex LLP for
            their investment and trading needs.
          </p>
          <a href="/contact" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all text-lg font-medium">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>;
};