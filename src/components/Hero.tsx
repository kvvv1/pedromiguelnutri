import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-light to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16 lg:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-highlight-amber/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Chips removidos */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-gray-100 mb-6 leading-tight">
              Nutrição clínica e esportiva, com plano que{' '}
              <span className="text-primary-blue">cabe na sua rotina</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-secondary dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Acompanhamento real, prático e sustentável para emagrecimento, hipertrofia, 
              performance e bem-estar — sem protocolos exagerados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="glass-effect flex items-center gap-3 text-lg px-8 py-4"
              >
                <MessageCircle size={20} />
                Agendar consulta no WhatsApp
              </Button>
              
              <Button
                variant="secondary"
                onClick={scrollToServices}
                size="lg"
                className="flex items-center gap-3 text-lg px-8 py-4"
              >
                Conheça os serviços
                <ChevronDown size={20} />
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-blue to-accent-mint p-1 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2 sm:p-3 md:p-4">
                  <img
                    src="/Pedromiguelnutricionista.png"
                    alt="Pedro Miguel - Nutricionista"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center animate-bounce">
                <span className="text-2xl">🥗</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center animate-bounce animate-delay-500">
                <span className="text-2xl">💪</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue"
          aria-label="Rolar para serviços"
        >
          <ChevronDown size={24} className="text-primary-dark dark:text-gray-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;