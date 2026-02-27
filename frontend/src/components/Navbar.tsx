import React, { useState, useEffect } from 'react';
import { Menu, X, Tv, Radio } from 'lucide-react';

const LIVE_URL = 'https://soportedvbclick.ddns.net/broadcaster/empalmetv/hybrid/player';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Equipo', href: '#team' },
    { name: 'Contenido', href: '#content' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Mobile */}
          <div className="md:hidden">
            <Tv className={`h-8 w-8 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-yellow-400 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* EN VIVO Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <Radio className="h-4 w-4" />
              <span className="text-sm tracking-wider">EN VIVO</span>
            </a>
          </div>

          {/* Mobile: EN VIVO + Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-full transition-all duration-300 shadow-md shadow-red-600/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-xs tracking-wider">EN VIVO</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-gray-200 mt-3 pt-3">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <Radio className="h-4 w-4" />
                <span className="tracking-wider">VER EN VIVO</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;