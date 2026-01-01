import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
export const Home = () => {
  return <div className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6 leading-tight animate-slide-up">
            Empowering Investors Through Technology & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            Trading, Investing, and Wealth Management across India's leading
            exchanges — NSE, BSE, and MCX.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-brand-blue hover:bg-opacity-90 text-white px-8 py-4 rounded-md text-lg transition-all transform hover:translate-x-1 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            Get in Touch
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>;
};