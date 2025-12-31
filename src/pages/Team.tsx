//import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
export const Team = () => {
  const team = [{
    name: 'Abhay Bhimajiani',
    title: 'Founder & Company Owner',
    qualifications: 'BDS, CFTe, CMT (All 3 Levels Cleared)',
    workProfile: 'Expertise in Chart Analysis',
    location: 'Gandhidham, Gujarat, India',
    email: 'sharecomplexllp@gmail.com',
    linkedin: 'https://linkedin.com/in/abhay-bhimajiani-50a223237',
    description: 'Chartered Market Technician (CMT) certified across all three levels — global gold standard in technical analysis. Expertise in chart analysis, risk management, portfolio optimization, and algorithmic trading.',
    image: "/WhatsApp_Image_2025-12-22_at_4.56.05_PM.jpg"
  }, {
    name: 'Rinky Kanjani',
    title: 'Full Stack Developer & Technology Lead',
    qualifications: 'B.Tech in Computer Science',
    workProfile: 'Full Stack Development & FinTech Innovation',
    location: 'Adipur, Kutch District, Gujarat, India',
    email: 'kanjanirinky@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rinky-kanjani-1620172a4',
    description: 'Experienced full stack developer specializing in building intelligent, scalable fintech systems. Expertise in modern web technologies, AI integration, and data analytics for financial applications.',
    image: "/WhatsApp Image 2025-12-23 at 12.49.14 PM.jpeg"
  }, {
    name: 'Bhaviksinh Zala',
    title: 'Branch Manager & Senior Business Development',
    qualifications: 'B.Com, Diploma in Foreign Trade',
    workProfile: 'Wealth Management & Client Advisory',
    location: 'Gandhidham, Gujarat, India',
    email: 'bzala17@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bhaviksinh-zala-511053224',
    description: 'Experienced manager specializing in wealth management, client advisory, and mutual fund distribution. Expert in building strong client relationships and delivering personalized financial solutions.',
    image: "/WhatsApp Image 2025-12-23 at 12.47.20 PM.jpeg"
  }];
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Our Team
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the core team behind ShareComplex LLP's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-80 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-green font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-gray-700 mb-2 bg-brand-light-blue p-3 rounded">
                  {member.qualifications}
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">
                  {member.workProfile}
                </p>

                <div className="flex items-center mb-2 text-sm">
                  <MapPin size={16} className="text-brand-blue mr-2 flex-shrink-0" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center mb-2 text-sm">
                  <Mail size={16} className="text-brand-blue mr-2 flex-shrink-0" />
                  <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-brand-blue truncate">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center mb-4 text-sm">
                  <Linkedin size={16} className="text-brand-blue mr-2 flex-shrink-0" />
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-brand-blue">
                    LinkedIn Profile
                  </a>
                </div>

                <p className="text-gray-700 mt-4 border-t pt-4">
                  {member.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};