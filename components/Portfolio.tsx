
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
    // Image: Muji style - Wide living room shot with beige sofa, light wood.
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    location: "新北新店區",
    size: "35坪",
    title: "侘寂美學 ｜ 灰泥與光影的寧靜對話",
    description: "保留手作塗料的質樸肌理，搭配沉穩的灰色系軟裝。在光影的幽微變化中，感受材質最原始的溫度，為疲憊的心靈提供一處靜謐的棲身之所。",
    // Image: Wabi-sabi - Grey sofa, textured plaster walls.
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    location: "台北大安區",
    size: "45坪",
    title: "現代輕奢 ｜ 猶如精品飯店的優雅日常",
    description: "以特色吊燈作為視覺焦點，大理石餐桌映照著流動的光澤。開放式的餐敘空間，將精品飯店的優雅融入日常，讓每一次聚餐都成為一場奢華饗宴。",
    // Image: Modern Luxe - Dining area with statement chandelier.
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    location: "台中西屯區",
    size: "28坪",
    title: "自然植感 ｜ 把森林搬進家的咖啡廳時光",
    description: "利用木格柵篩落自然光影，模糊室內外的界線。將陽台綠意延伸至居住視野，營造出如度假般的愜意氛圍，在都市叢林中擁有一座專屬的秘密花園。",
    // Image: Biophilic - Balcony/Terrace with vertical wood slats.
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">Selected Works</span>
          <h2 className="font-serif text-4xl text-mori-900 mt-4">多元風格，演繹您的理想生活</h2>
          <p className="text-mori-400 mt-4 max-w-2xl mx-auto font-light">
            從極簡到輕奢，從靜謐到自然。我們傾聽您的故事，為不同個性的靈魂，打造專屬的空間氛圍。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden mb-6 rounded-sm bg-gray-100 shadow-sm aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 tracking-widest text-sm uppercase backdrop-blur-sm">View Project</span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center text-xs text-mori-500 tracking-wider space-x-2 uppercase mb-3">
                  <span className="bg-mori-100 px-2 py-1 rounded-sm">{project.location}</span>
                  <span className="text-mori-300">|</span>
                  <span>{project.size}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-mori-800 group-hover:text-mori-600 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-mori-500 text-sm leading-relaxed font-light text-justify">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="text-mori-600 border-b border-mori-600 pb-1 hover:text-mori-900 hover:border-mori-900 transition-colors tracking-widest text-sm group">
            查看更多作品 <i className="fa-solid fa-arrow-right ml-2 text-xs transform group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
