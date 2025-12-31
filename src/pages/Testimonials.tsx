import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedProfileBackground } from '../components/AnimatedProfileBackground';

// Testimonials Data Interface and Array
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  rating: number;
  returnPercentage?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sahil Kanjani",
    role: "Commerce Student",
    company: "",
    text: "Outstanding trading guidance and strategy. The expertise in market analysis and equity trading strategies is truly commendable. I've gained invaluable lessons that will benefit my financial journey for life.",
    image: "/images/sahil-kanjani.jpeg",
    rating: 0,
    returnPercentage: "20.48%"
  },
  {
    id: 2,
    name: "Ketan Shukla",
    role: "IT Professional",
    company: "",
    text: "As an entrepreneur managing multiple ventures, finding reliable investment management was crucial. The data-driven approach and transparent reporting gave me complete confidence. The strategies delivered consistent and measurable results. Highly recommended for serious investors seeking professional guidance.",
    image: "/images/Ketan-Shukla.jpeg",
    rating: 0,
    returnPercentage: "15.16%"
  },
  {
    id: 3,
    name: "Dr. Siddhi Vithalani",
    role: "Dentist",
    company: "",
    text: "As a healthcare professional, I sought investment opportunities that offered both growth and security. The systematic portfolio management and risk assessment approach delivered exceptional results, demonstrating the effectiveness of professional trading strategies.",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/ecc91f6a-89ec-40d3-9e07-042b02bf8a7c",
    rating: 0,
    returnPercentage: "16.34%"
  },
  {
    id: 4,
    name: "Pranav Thakkar",
    role: "Business Owner",
    company: "",
    text: "Running a business requires smart capital allocation. The aggressive yet calculated investment strategy and market insights have given me the confidence to scale my business operations further with informed decision-making.",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/b32fca53-a900-40d1-915f-fcad1d9e4c4d",
    rating: 0,
    returnPercentage: "28.92%"
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleItems);

  const prevSlide = () => {
    setCurrentIndex(current => Math.max(current - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex(current => Math.min(current + 1, maxIndex));
  };

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = currentIndex * (sliderRef.current.offsetWidth / visibleItems);
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, visibleItems]);

  return (
    <div className="py-24 pt-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Client Testimonials
          </h1>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with ShareComplex LLP
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonialsData.map(testimonial => (
                <div key={testimonial.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-center">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Profile Image with Animated Background */}
                    <div className="h-40 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center overflow-hidden">
                      <AnimatedProfileBackground
                        src={testimonial.image}
                        alt={testimonial.name}
                        size={128}
                      />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Name and Role */}
                      <div className="text-center mb-4">
                        <h3 className="font-bold text-lg text-brand-blue">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm font-semibold">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 flex-grow italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Return Percentage Card - Enhanced Professional Design */}
                      {testimonial.returnPercentage && (
                        <div className="mt-auto">
                          <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-lg p-5 text-white shadow-md hover:shadow-lg transition-shadow">
                            <p className="text-xs opacity-90 uppercase tracking-widest font-semibold">Performance Return</p>
                            <p className="font-bold text-3xl mt-2">{testimonial.returnPercentage}</p>
                            <p className="text-xs opacity-80 mt-2">Achieved through strategic market positioning</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons with Enhanced Animation */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-300 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-blue hover:text-white hover:shadow-xl hover:scale-110'
            }`}
          >
            <ChevronLeft size={24} className="text-brand-blue transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-300 ${
              currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-blue hover:text-white hover:shadow-xl hover:scale-110'
            }`}
          >
            <ChevronRight size={24} className="text-brand-blue transition-colors duration-300" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-brand-blue w-8' : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
