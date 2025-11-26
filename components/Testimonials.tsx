import React from 'react';

const reviews = [
  {
    id: 1,
    name: "林小姐",
    role: "科技業 PM",
    content: "Alex 對於收納的規劃真的非常細心！原本很擔心 20 坪的小宅放不下我的露營裝備，但他巧妙利用畸零空間，現在家裡看起來非常清爽。",
    location: "台北市中山區"
  },
  {
    id: 2,
    name: "張先生夫婦",
    role: "退休教師",
    content: "老屋翻新最怕遇到管線問題，還好 MORI DESIGN 的團隊非常專業，每週都有進度回報，讓我們很放心。完成後的日式風格讓我們每天都像在度假。",
    location: "新北市新店區"
  },
  {
    id: 3,
    name: "陳設計總監",
    role: "平面設計師",
    content: "身為同行，我對細節特別挑剔。但這次的合作非常愉快，不僅動線規劃合理，材質的選用也很有質感，完全符合我對工作室的想像。",
    location: "台中市西區"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-10 right-10 text-9xl text-mori-100 font-serif opacity-50 pointer-events-none">
        ”
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">Testimonials</span>
          <h2 className="font-serif text-4xl text-mori-900 mt-4">聽聽屋主怎麼說</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-mori-50 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-500 mb-4 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-mori-600 italic leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>
              <div className="border-t border-mori-200 pt-4">
                <h4 className="font-serif text-lg text-mori-900">{review.name}</h4>
                <div className="text-xs text-mori-500 flex justify-between mt-1">
                  <span>{review.role}</span>
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;