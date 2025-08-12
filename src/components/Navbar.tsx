import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Apple, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegação por âncora: usamos Link com hash; o scroll é tratado no App.tsx

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xs border-b border-gray-100 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" aria-label="Ir para a página inicial">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-blue to-accent-mint text-white flex items-center justify-center shadow-sm">
                <Apple className="w-5 h-5" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-primary-dark dark:text-gray-100">
                Dr. Pedro Miguel
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <Link 
                to="/#about"
                className="text-secondary hover:text-primary-dark dark:hover:text-gray-100 transition-colors rounded-lg px-2 py-1"
              >
                Sobre
              </Link>
              {/* Dropdown Serviços */}
              <div className="relative group pb-2">
                <Link
                  to="/#services"
                  className="inline-flex items-center gap-1 text-secondary hover:text-primary-dark dark:hover:text-gray-100 transition-colors rounded-lg px-2 py-1"
                >
                  Serviços
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute left-0 top-full w-72 z-50 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all p-2">
                  <Link to="/emagrecimento-hipertrofia" className="block px-3 py-2 rounded-md text-primary-dark dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Emagrecimento / Hipertrofia
                  </Link>
                  <Link to="/nutricao-esportiva" className="block px-3 py-2 rounded-md text-primary-dark dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Nutrição Esportiva
                  </Link>
                  <Link to="/transtornos-alimentares" className="block px-3 py-2 rounded-md text-primary-dark dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Transtornos Alimentares
                  </Link>
                  <Link to="/estilo-de-vida" className="block px-3 py-2 rounded-md text-primary-dark dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Estilo de Vida
                  </Link>
                </div>
              </div>
              <Link 
                to="/#differentials"
                className="text-secondary hover:text-primary-dark dark:hover:text-gray-100 transition-colors rounded-lg px-2 py-1"
              >
                Diferenciais
              </Link>
              <Link 
                to="/#location"
                className="text-secondary hover:text-primary-dark dark:hover:text-gray-100 transition-colors rounded-lg px-2 py-1"
              >
                Localização
              </Link>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Agendar WhatsApp
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue transition-all"
              aria-expanded="false"
              aria-label="Menu principal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg mt-2 border border-gray-100 dark:border-gray-800">
            <Link 
              to="/#about"
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <div className="px-3 py-2 text-base font-medium text-secondary">Serviços</div>
            <Link 
              to="/emagrecimento-hipertrofia"
              className="block px-6 py-2 text-base text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Emagrecimento / Hipertrofia
            </Link>
            <Link 
              to="/nutricao-esportiva"
              className="block px-6 py-2 text-base text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Nutrição Esportiva
            </Link>
            <Link 
              to="/transtornos-alimentares"
              className="block px-6 py-2 text-base text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Transtornos Alimentares
            </Link>
            <Link 
              to="/estilo-de-vida"
              className="block px-6 py-2 text-base text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Estilo de Vida
            </Link>
            <button 
              onClick={() => scrollToSection('differentials')}
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-blue"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary-dark dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-blue"
            >
              Localização
            </button>
            <div className="pt-2">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="flex items-center gap-2 w-full justify-center"
              >
                <MessageCircle size={16} />
                Agendar WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;