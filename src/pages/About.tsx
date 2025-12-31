export const About = () => {
  return <div className="py-24 pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              About Us
            </h1>
            <div className="w-20 h-1 bg-brand-green mx-auto mb-6"></div>
          </div>
          <div className="bg-brand-silver p-8 md:p-12 rounded-lg shadow-sm mb-8">
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-semibold text-brand-blue">
                ShareComplex LLP
              </span>
              , established on 6th September 2019, is a specialized investment
              and trading firm operating across NSE, BSE, and MCX.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">
                2019
              </div>
              <p className="text-gray-700">Established</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-green mb-2">3</div>
              <p className="text-gray-700">Major Exchanges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">
                50+
              </div>
              <p className="text-gray-700">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};