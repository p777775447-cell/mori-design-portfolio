import React from 'react';

interface Project {
  id: number;
  location: string;
  size: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    location: "台北大安區",
    size: "25坪",
    title: "打破格局，引入 200% 自然採光",
    // Image: Bright living room with large windows (High reliability URL)
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    location: "新北板橋區",
    size: "40坪",
    title: "日式禪風，三代同堂的靜謐時光",
    // Image: Japandi style, wood textures, warm tones
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    location: "台中西屯區",
    size: "18坪",
    title: "極致收納，小坪數也有大視野",
    // Image: Clean modern kitchen/living space with smart storage
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    location: "桃園青埔",
    size: "35坪",
    title: "北歐簡約，與貓咪共居的樂園",
    // Image: Cozy nordic living room, soft textures
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">Selected Works</span>
          <h2 className="font-serif text-4xl text-mori-900 mt-4">見證空間的蛻變</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 rounded-sm bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 tracking-widest text-sm uppercase">View Project</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-xs text-mori-500 tracking-wider space-x-2">
                  <span>{project.location}</span>
                  <span>/</span>
                  <span>{project.size}</span>
                </div>
                <h3 className="font-serif text-xl text-mori-800 group-hover:text-mori-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="text-mori-600 border-b border-mori-600 pb-1 hover:text-mori-900 hover:border-mori-900 transition-colors tracking-widest text-sm">
            查看更多作品 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;