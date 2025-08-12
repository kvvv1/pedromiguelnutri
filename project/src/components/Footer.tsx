import React from 'react';
import { MessageCircle, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark, toggleTheme } = useTheme();
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";
  const websiteUrl = "https://drpedromiguel.com.br/";

  const quickLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Localização', href: '#location' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-gray-100 mb-4">
              Dr. Pedro Miguel
            </h3>
            <p className="text-secondary dark:text-gray-300 mb-6 max-w-md leading-relaxed">
              Nutricionista clínico e esportivo especializado em planos personalizados 
              para emagrecimento, hipertrofia e bem-estar.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-blue dark:text-accent-mint hover:text-primary-blue/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-lg p-1"
                aria-label="WhatsApp Dr. Pedro Miguel"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-blue dark:text-accent-mint hover:text-primary-blue/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-lg p-1"
                aria-label="Site Dr. Pedro Miguel"
              >
                <Globe size={20} />
                Website
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-dark dark:text-gray-100 mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-secondary dark:text-gray-300 hover:text-primary-blue dark:hover:text-accent-mint transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue rounded px-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-dark dark:text-gray-100 mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-secondary dark:text-gray-300">
                R. Matias Cardoso, 63<br />
                Santo Agostinho, BH - MG
              </p>
              <p className="text-secondary dark:text-gray-300">
                (31) 97121-8523
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary dark:text-gray-300">
            © {new Date().getFullYear()} Dr. Pedro Miguel. Todos os direitos reservados.
          </p>
          
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-secondary dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue"
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">
              {isDark ? 'Modo claro' : 'Modo escuro'}
            </span>
          </button>
        </div>

        {/* Créditos */}
        <div className="mt-6 text-center text-sm text-secondary dark:text-gray-300">
          Desenvolvido por <span className="font-semibold">CODE</span><span className="font-extrabold text-primary-blue">X</span>Y
        </div>
      </div>
    </footer>
  );
};

export default Footer;