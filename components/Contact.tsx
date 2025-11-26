import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-mori-dark text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <span className="text-mori-500 tracking-[0.3em] text-xs uppercase font-medium block mb-4">Contact Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
                準備好開始您的<br/>改造計畫了嗎？
              </h2>
              <p className="text-gray-400 font-light leading-loose text-sm tracking-wide">
                請填寫右側表單，或透過以下方式聯繫我們。<br/>
                我們將在 24 小時內與您聯繫。
              </p>
            </div>
            
            <div className="space-y-6 text-gray-300 font-light tracking-widest text-sm">
              <div className="flex items-center space-x-6 group cursor-pointer hover:text-white transition-colors">
                <span className="w-12 border-t border-gray-600 group-hover:border-white transition-colors"></span>
                <span>02-2345-6789</span>
              </div>
              <div className="flex items-center space-x-6 group cursor-pointer hover:text-white transition-colors">
                <span className="w-12 border-t border-gray-600 group-hover:border-white transition-colors"></span>
                <span>alex@mori-design.tw</span>
              </div>
              <div className="flex items-center space-x-6 group cursor-pointer hover:text-white transition-colors">
                <span className="w-12 border-t border-gray-600 group-hover:border-white transition-colors"></span>
                <span>@MORIDESIGN</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="col-span-1 border-b border-gray-700 focus-within:border-white transition-colors">
                  <input type="text" className="w-full bg-transparent px-0 py-4 text-white focus:outline-none placeholder-gray-600 font-light tracking-wide" placeholder="您的稱呼 Name" />
                </div>
                <div className="col-span-1 border-b border-gray-700 focus-within:border-white transition-colors">
                  <input type="tel" className="w-full bg-transparent px-0 py-4 text-white focus:outline-none placeholder-gray-600 font-light tracking-wide" placeholder="聯絡電話 Phone" />
                </div>
                <div className="col-span-1 border-b border-gray-700 focus-within:border-white transition-colors">
                  <input type="text" className="w-full bg-transparent px-0 py-4 text-white focus:outline-none placeholder-gray-600 font-light tracking-wide" placeholder="房屋所在地 Location" />
                </div>
                <div className="col-span-1 border-b border-gray-700 focus-within:border-white transition-colors">
                  <select className="w-full bg-transparent px-0 py-4 text-white focus:outline-none font-light tracking-wide">
                    <option className="bg-mori-dark text-gray-400">預算範圍 Budget</option>
                    <option className="bg-mori-dark">50 - 100 萬</option>
                    <option className="bg-mori-dark">100 - 200 萬</option>
                    <option className="bg-mori-dark">200 - 300 萬</option>
                    <option className="bg-mori-dark">300 萬以上</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2 border-b border-gray-700 focus-within:border-white transition-colors">
                  <textarea rows={3} className="w-full bg-transparent px-0 py-4 text-white focus:outline-none placeholder-gray-600 font-light tracking-wide resize-none" placeholder="備註需求 Message..."></textarea>
                </div>
                <div className="col-span-1 md:col-span-2 mt-8">
                  <button type="button" className="bg-white text-mori-dark px-12 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors">
                    送出諮詢 Submit
                  </button>
                </div>
             </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-light tracking-widest">
          <p>&copy; {new Date().getFullYear()} MORI DESIGN.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
             <a href="#" className="hover:text-white transition-colors">FACEBOOK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;