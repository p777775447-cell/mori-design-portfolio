import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay for better text contrast */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Slightly lighter overlay for immersive feel, darker at bottom */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-widest text-white drop-shadow-xl animate-fade-in-up">
          空間敘事，<br className="md:hidden" />回歸自然
        </h1>
        
        <div className="w-16 h-[1px] bg-white/70 mx-auto my-8 animate-fade-in-up animation-delay-300"></div>

        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light tracking-widest leading-loose animate-fade-in-up animation-delay-500">
          不只是設計，更是為您預留生活的餘裕。<br />
          專注於光影與動線，將您的日常化為最令人眷戀的風景。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 animate-fade-in-up animation-delay-500">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-4 border border-white/80 text-white hover:bg-white hover:text-mori-dark transition-all duration-500 uppercase tracking-[0.2em] text-xs font-medium"
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="block text-[10px] tracking-widest mb-2 uppercase">Scroll</span>
        <i className="fa-solid fa-chevron-down text-sm opacity-70"></i>
      </div>
    </section>
  );
};

export default Hero;