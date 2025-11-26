import React, { useState } from 'react';

const questions = [
  {
    q: "預算有限可以做設計嗎？",
    a: "我們提供彈性的方案，會依照您的預算建議最核心的施作項目。我們會協助您排列優先順序，例如優先處理基礎工程（水電、防水），再透過軟裝搭配來營造風格，讓您在預算內獲得最大的效益。"
  },
  {
    q: "設計加施工通常需要多久？",
    a: "視屋況而定，一般老屋翻新約 3-4 個月（包含拆除、基礎工程更新），新成屋約 1.5-2 個月。設計階段通常需要 2-4 週來回討論與確認圖面。"
  },
  {
    q: "監工包含在費用裡嗎？",
    a: "是的，若由我們統包工程，將會有專職的監工人員負責案場進度與品質控管，費用已包含在工程管理費中，讓您無須天天跑工地也能掌握狀況。"
  },
  {
    q: "有提供保固嗎？",
    a: "我們提供工程一年保固，防水工程則視合約內容提供更長年限的保固。完工後若有任何非人為損壞的問題，我們都會儘速為您處理。"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-mori-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-mori-500 tracking-[0.2em] text-sm uppercase font-semibold">Q & A</span>
          <h2 className="font-serif text-4xl text-mori-900 mt-4">常見問題</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-mori-50/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-serif text-lg text-mori-800 font-medium">
                  <span className="text-mori-400 mr-4">Q{index + 1}.</span>
                  {item.q}
                </span>
                <i className={`fa-solid fa-chevron-down text-mori-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div
                className={`px-6 bg-mori-50 text-mori-600 text-sm leading-loose overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                 {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;