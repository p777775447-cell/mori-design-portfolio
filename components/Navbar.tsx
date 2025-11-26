import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: '關於我', id: 'about' },
    { name: '精選作品', id: 'portfolio' },
    { name: '服務流程', id: 'process' },
    { name: '常見問題', id: 'faq' },
  ];

  // Dynamic text color class based on scroll state
  const textColorClass = isScrolled ? 'text-mori-800' : 'text-white';
  const logoColorClass = isScrolled ? 'text-mori-900' : 'text-white';
  const buttonClass = isScrolled 
    ? 'bg-mori-800 text-white hover:bg-mori-600' 
    : 'bg-white text-mori-900 hover:bg-mori-100';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mori-50/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className={`font-serif text-2xl font-bold tracking-widest cursor-pointer transition-colors duration-300 ${logoColorClass}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MORI DESIGN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${textColorClass}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-6 py-2 rounded-sm text-sm tracking-wide transition-all duration-300 shadow-md ${buttonClass}`}
          >
            立即預約諮詢
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none transition-colors duration-300 ${textColorClass}`}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-mori-50 z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="font-serif text-2xl text-mori-800 hover:text-mori-500"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('contact')}
          className="mt-8 bg-mori-800 text-white px-8 py-3 rounded-sm text-lg tracking-wide hover:bg-mori-600"
        >
          立即預約諮詢
        </button>
      </div>
    </nav>
  );
};

export default Navbar;