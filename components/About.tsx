
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-mori-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-xl group">
              {/* 
                 Replaced with a professional portrait matching the description:
                 - Subject: Professional male (Alex), smart-casual, trustworthy.
                 - Atmosphere: Warm, creative studio light.
              */}
              <img 
                src="https://i.postimg.cc/zvRGf8nK/d8b9fa13-5821-4a3c-84ea-5e631f329c6d.jpg" 
                alt="Alex - 空間敘事者" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Decorative border - Darker and thinner for an edgy look */}
              <div className="absolute top-4 left-4 w-full h-full border border-mori-600/30 -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">About Designer</span>
            <h2 className="font-serif text-3xl md:text-4xl text-mori-900 leading-snug">
              我是 Alex，<br />
              您的空間敘事者
            </h2>
            
            <div className="w-16 h-0.5 bg-mori-400 my-6"></div>

            <p className="text-mori-600 leading-loose font-light text-justify">
              我相信，家是居住者靈魂的延伸。擁有 8 年老屋翻新與預售屋客變經驗，我不只看重風格，更在乎您住進去 10 年後的實用性。讓我幫您在美感與預算之間，找到最完美的平衡點。
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-mori-200/50 text-mori-600 text-xs tracking-wider rounded-full">
                #國家乙級證照
              </span>
              <span className="px-4 py-2 bg-mori-200/50 text-mori-600 text-xs tracking-wider rounded-full">
                #擅長收納規劃
              </span>
              <span className="px-4 py-2 bg-mori-200/50 text-mori-600 text-xs tracking-wider rounded-full">
                #日式極簡風格
              </span>
            </div>
            
            {/* Signature */}
            <div className="pt-8 font-serif text-4xl text-mori-600 italic tracking-wider opacity-80">
               Alex.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
