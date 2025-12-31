
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-full border border-teal-500/30 p-1.5 bg-slate-900 shadow-lg group-hover:border-teal-500 transition-all duration-300 flex items-center justify-center overflow-hidden">
              <img 
                src="logo.png" 
                alt="SH3RiF AI HUB Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/48x48/020617/2dd4bf?text=S";
                }}
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              SH3RiF AI HUB
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-teal-400'
                    : 'text-slate-400 hover:text-teal-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 rounded-full border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-slate-950 transition-all duration-300 font-medium text-sm shadow-inner"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-teal-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-teal-500/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-teal-400 bg-slate-800'
                    : 'text-slate-400 hover:text-teal-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
