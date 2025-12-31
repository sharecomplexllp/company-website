import { Mail, Linkedin, MapPin } from 'lucide-react';
export const TeamSection = () => {
  const team = [{
    name: 'Abhay Bhimajiani',
    title: 'Founder & Company Owner',
    qualifications: 'BDS, CFTe, CMT Level 3 Cleared, NISM-Series VIII Certified',
    location: 'Gandhidham, Gujarat, India',
    email: 'sharecomplexllp@gmail.com',
    linkedin: '#',
    description: 'Chartered Market Technician (CMT) Level III cleared — global gold standard in technical analysis. Expertise in fixed-income investing, risk management, portfolio optimization, and algorithmic trading.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }, {
    name: 'Rinky Kanjani',
    title: 'Mobile Application Developer & Financial Analyst',
    qualifications: 'B.E. Computer Engineering',
    location: 'Kutch District, Gujarat, India',
    email: 'kanjanirinky@gmail.com',
    linkedin: '#',
    description: 'Full-stack developer and entrepreneur building intelligent, scalable fintech systems integrating AI and data analytics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
  }, {
    name: 'Bhaviksinh Zala',
    title: 'Branch Manager & Senior Business Development',
    qualifications: 'B.Com, Diploma in Foreign Trade',
    location: 'Gandhidham, Gujarat, India',
    email: 'bzala17@gmail.com',
    linkedin: '#',
    description: 'Experienced manager specializing in wealth management, client advisory, and mutual fund distribution.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }];
  return <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our Leadership Team
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-gray-700 mb-4">
                  {member.qualifications}
                </p>
                <div className="flex items-center mb-2 text-sm">
                  <MapPin size={16} className="text-brand-blue mr-2" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center mb-2 text-sm">
                  <Mail size={16} className="text-brand-blue mr-2" />
                  <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-brand-blue">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center mb-4 text-sm">
                  <Linkedin size={16} className="text-brand-blue mr-2" />
                  <a href={member.linkedin} className="text-gray-700 hover:text-brand-blue">
                    LinkedIn
                  </a>
                </div>
                <p className="text-gray-700 mt-4">{member.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};