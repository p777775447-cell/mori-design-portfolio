import React from 'react';

const steps = [
  {
    num: "01",
    title: "初步諮詢",
    desc: "了解需求與預算",
    icon: "fa-comments"
  },
  {
    num: "02",
    title: "現場丈量",
    desc: "精準掌握空間現況",
    icon: "fa-ruler-combined"
  },
  {
    num: "03",
    title: "平面提案",
    desc: "動線與格局規劃",
    icon: "fa-pencil-ruler"
  },
  {
    num: "04",
    title: "工程施作",
    desc: "嚴格監工回報",
    icon: "fa-hard-hat"
  },
  {
    num: "05",
    title: "完工驗收",
    desc: "安心保固服務",
    icon: "fa-check-circle"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-mori-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">Workflow</span>
          <h2 className="font-serif text-4xl text-mori-900 mt-4">簡單 5 步驟，打造夢想家</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-mori-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-mori-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-mori-400 transition-colors duration-300 relative">
                  <i className={`fa-solid ${step.icon} text-2xl text-mori-600`}></i>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-mori-800 text-white rounded-full flex items-center justify-center text-xs font-serif">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-mori-900 mb-2">{step.title}</h3>
                <p className="text-sm text-mori-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;