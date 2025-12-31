export const AnimatedBackground = () => {
  return <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-light-blue/20 to-white"></div>
      {/* Rising green bars animation - inspired by logo */}
      <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center gap-8 opacity-10">
        <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-1" style={{
        height: '30%'
      }}></div>
        <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-2" style={{
        height: '45%'
      }}></div>
        <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-3" style={{
        height: '60%'
      }}></div>
        <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-4" style={{
        height: '75%'
      }}></div>
        <div className="w-12 bg-brand-green rounded-t-md animate-grow-bar-5" style={{
        height: '90%'
      }}></div>
      </div>
      {/* Upward arrow subtle overlay */}
      <div className="absolute bottom-20 right-20 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M100 180L100 40M100 40L60 80M100 40L140 80" stroke="#004d71" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>;
};