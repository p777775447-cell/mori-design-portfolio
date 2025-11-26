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
        {/* Darker overlay (black/60) to make white text pop */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient at the bottom to blend with the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mori-50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 mt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-mori-50 drop-shadow-lg">
          不只是設計，<br />
          更是為您預留生活的餘裕
        </h1>
        
        <p className="text-base md:text-xl text-mori-200 max-w-2xl mx-auto font-light tracking-wide leading-relaxed drop-shadow-md">
          專注於光影與動線的空間魔術師，<br className="hidden md:block" />
          將您的日常，化為最令人眷戀的風景。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-3 border border-mori-50 text-mori-50 hover:bg-mori-50 hover:text-mori-900 transition-all duration-300 uppercase tracking-widest text-sm font-medium"
          >
            查看精選案例
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-3 bg-white text-mori-900 border border-white hover:bg-mori-200 hover:border-mori-200 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg font-medium"
          >
            免費諮詢報價
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-mori-50">
        <i className="fa-solid fa-chevron-down text-xl opacity-70"></i>
      </div>
    </section>
  );
};

export default Hero;