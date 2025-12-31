export const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-silver p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-semibold">ShareComplex LLP</span>,
              established on 6th September 2019, is a specialized investment and
              trading firm operating across NSE, BSE, and MCX.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We deliver robust trading and investment solutions by combining
              deep market expertise, advanced technical analysis, and innovative
              digital platforms.
            </p>
            <div className="bg-brand-light-blue p-6 rounded-md border-l-4 border-brand-blue">
              <h3 className="font-bold text-xl mb-2 text-brand-blue">
                Our Mission
              </h3>
              <p className="text-lg">
                Empower investors through research-driven insights, transparent
                advisory, and technology-enabled strategies for long-term wealth
                creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};