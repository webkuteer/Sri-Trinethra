import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_784e5e15-b373-4cea-9399-831991c0a26e/artifacts/bym2pwp7_ChatGPT%20Image%20Feb%206%2C%202026%2C%2005_51_19%20PM.png" 
                alt="Sri Trinethra Global Projects" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('real-estate')}
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('trading')}
              className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Trading
            </button>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Become a Member
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('real-estate')}
                className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-left"
              >
                Properties
              </button>
              <button 
                onClick={() => scrollToSection('trading')}
                className="text-slate-200 hover:text-yellow-400 transition-colors duration-200 font-medium text-left"
              >
                Trading
              </button>
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-semibold w-full"
              >
                Become a Member
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
