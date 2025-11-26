
import React from 'react';

interface Project {
  id: number;
  location: string;
  size: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    location: "台北文山區",
    size: "20坪",
    title: "日系無印風 ｜ 減法生活的極致療癒",
    description: "透過大面採光與淺色橡木地板，放大空間視覺。米色布沙發與簡約收納櫃體，完美詮釋「少即是多」的生活哲學，讓回家的每一步都踩在溫柔上。",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    location: "新北新店區",
    size: "35坪",
    title: "侘寂美學 ｜ 灰泥與光影的寧靜對話",
    description: "保留手作塗料的質樸肌理，搭配沉穩的灰色系軟裝。在光影的幽微變化中，感受材質最原始的溫度，為疲憊的心靈提供一處靜謐的棲身之所。",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    location: "台北大安區",
    size: "45坪",
    title: "現代輕奢 ｜ 猶如精品飯店的優雅日常",
    description: "以特色吊燈作為視覺焦點，大理石餐桌映照著流動的光澤。開放式的餐敘空間，將精品飯店的優雅融入日常，讓每一次聚餐都成為一場奢華饗宴。",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    location: "台中西屯區",
    size: "28坪",
    title: "自然植感 ｜ 把森林搬進家的咖啡廳時光",
    description: "利用木格柵篩落自然光影，模糊室內外的界線。將陽台綠意延伸至居住視野，營造出如度假般的愜意氛圍，在都市叢林中擁有一座專屬的秘密花園。",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-mori-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 border-b border-mori-200 pb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-mori-500 tracking-[0.3em] text-xs uppercase font-medium">Selected Works</span>
            <h2 className="font-serif text-4xl md:text-5xl text-mori-dark mt-4 font-light">
              多元風格，<br/>演繹您的理想生活
            </h2>
          </div>
          <p className="text-mori-500 max-w-md font-light text-sm leading-loose tracking-wide text-justify">
            從極簡到輕奢，從靜謐到自然。我們傾聽您的故事，為不同個性的靈魂，打造專屬的空間氛圍。
          </p>
        </div>

        {/* Project List (Side-by-Side Layout) */}
        <div className="flex flex-col space-y-24 md:space-y-32">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 group"
            >
              {/* Image Section (Left) - Takes ~60% width */}
              <div className="w-full md:w-7/12 lg:w-3/5">
                <div className="relative overflow-hidden aspect-[4/3] shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              {/* Text Section (Right) - Takes ~40% width */}
              <div className="w-full md:w-5/12 lg:w-2/5 flex flex-col justify-center space-y-6 md:pr-8">
                {/* Meta Data */}
                <div className="flex items-center text-[10px] text-mori-500 tracking-[0.25em] space-x-3 uppercase font-medium border-l-2 border-mori-300 pl-4">
                  <span>{project.location}</span>
                  <span className="text-mori-300">/</span>
                  <span>{project.size}</span>
                </div>
                
                {/* Title */}
                <div>
                   <h3 className="font-serif text-3xl text-mori-900 group-hover:text-mori-600 transition-colors duration-300 leading-snug">
                    {project.title.split('｜')[0]}
                  </h3>
                   <h4 className="font-serif text-lg text-mori-500 mt-2 opacity-80 font-light">
                      {project.title.split('｜')[1]}
                   </h4>
                </div>
                
                {/* Description */}
                <p className="text-mori-600 text-sm leading-relaxed font-light text-justify opacity-80">
                  {project.description}
                </p>

                {/* Button */}
                <div className="pt-4">
                  <button className="flex items-center text-xs tracking-[0.2em] uppercase text-mori-900 font-bold group-hover:text-mori-600 transition-colors">
                    View Project 
                    <span className="ml-4 w-8 h-[1px] bg-mori-900 group-hover:w-12 transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-32">
          <button className="px-10 py-4 border border-mori-300 text-mori-600 hover:bg-mori-900 hover:text-white hover:border-mori-900 transition-all duration-500 tracking-[0.2em] text-xs uppercase font-medium">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
