import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-mori-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="font-serif text-3xl mb-6">
                準備好開始您的<br/>改造計畫了嗎？
              </h2>
              <p className="text-mori-400 font-light leading-relaxed">
                請填寫右側表單，或透過以下方式聯繫我們。<br/>
                我們將在 24 小時內與您聯繫。
              </p>
            </div>
            
            <div className="space-y-4 text-mori-300">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-mori-800 flex items-center justify-center group-hover:bg-mori-700 transition-colors">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <span>02-2345-6789</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-mori-800 flex items-center justify-center group-hover:bg-mori-700 transition-colors">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
                <span>alex@mori-design.tw</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-mori-800 flex items-center justify-center group-hover:bg-mori-700 transition-colors">
                  <i className="fa-brands fa-line text-lg"></i>
                </div>
                <span>@MORIDESIGN</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-mori-800 p-8 md:p-12 rounded-sm shadow-2xl">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-mori-400 mb-2">姓名</label>
                  <input type="text" className="w-full bg-mori-900 border border-mori-600 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="您的稱呼" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-mori-400 mb-2">電話</label>
                  <input type="tel" className="w-full bg-mori-900 border border-mori-600 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="聯絡電話" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-mori-400 mb-2">房屋所在地</label>
                  <input type="text" className="w-full bg-mori-900 border border-mori-600 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="例如：台北市大安區" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs uppercase tracking-wider text-mori-400 mb-2">預算範圍</label>
                  <select className="w-full bg-mori-900 border border-mori-600 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-sm">
                    <option>50 - 100 萬</option>
                    <option>100 - 200 萬</option>
                    <option>200 - 300 萬</option>
                    <option>300 萬以上</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-mori-400 mb-2">備註需求</label>
                  <textarea rows={4} className="w-full bg-mori-900 border border-mori-600 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors rounded-sm" placeholder="簡單描述您的需求..."></textarea>
                </div>
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button type="button" className="w-full bg-white text-mori-900 py-4 uppercase tracking-widest font-bold hover:bg-mori-200 transition-colors shadow-lg">
                    送出諮詢
                  </button>
                </div>
             </form>
          </div>
        </div>

        <div className="border-t border-mori-800 mt-16 pt-8 text-center text-mori-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MORI DESIGN. All Rights Reserved. Designed with <i className="fa-solid fa-heart text-xs text-red-800 mx-1"></i> by Alex.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;