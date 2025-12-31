// testimonialsData.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  returnPercentage?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sahil Kanjani",
    role: "Commerce Student",
    text: "Outstanding trading guidance and strategy. The expertise in market analysis and equity trading strategies is truly commendable. I've gained invaluable lessons that will benefit my financial journey for life.",
    image:  "/images/sahil-kanjani.jpeg",
    returnPercentage: "20.48%"
  },
  {
    id: 2,
    name: "Ketan Shukla",
    role: "IT Professional",
    text: "As an entrepreneur managing multiple ventures, finding reliable investment management was crucial. The data-driven approach and transparent reporting gave me complete confidence. The strategies delivered consistent and measurable results. Highly recommended for serious investors seeking professional guidance.",
    image: "/images/Ketan-Shukla.jpeg",
    returnPercentage: "15.16%"
  },
  {
    id: 3,
    name: "Dr. Siddhi Vithalani",
    role: "Dentist",
    text: "As a healthcare professional, I sought investment opportunities that offered both growth and security. The systematic portfolio management and risk assessment approach delivered exceptional results, demonstrating the effectiveness of professional trading strategies.",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/ecc91f6a-89ec-40d3-9e07-042b02bf8a7c",
    returnPercentage: "16.34%"
  },
  {
    id: 4,
    name: "Pranav Thakkar",
    role: "Business Owner",
    text: "Running a business requires smart capital allocation. The aggressive yet calculated investment strategy and market insights have given me the confidence to scale my business operations further with informed decision-making.",
    image: "https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/b32fca53-a900-40d1-915f-fcad1d9e4c4d",
    returnPercentage: "28.92%"
  }
];
