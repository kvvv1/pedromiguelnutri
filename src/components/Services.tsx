import React from 'react';
import { Heart, Trophy, Brain, Leaf, Activity, Scale, Zap, Target } from 'lucide-react';
import Card from './ui/Card';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Emagrecimento / Hipertrofia",
      description: "Planos personalizados para perda de peso ou ganho de massa muscular, respeitando seu estilo de vida e preferências alimentares.",
      link: "/emagrecimento-hipertrofia"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Nutrição Esportiva",
      description: "Estratégias nutricionais para otimizar performance, recuperação e resultados em atividades físicas e esportes.",
      link: "/nutricao-esportiva"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Transtornos Alimentares",
      description: "Acompanhamento especializado para desenvolver uma relação saudável e equilibrada com a alimentação.",
      link: "/transtornos-alimentares"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Estilo de Vida",
      description: "Orientação nutricional integrada para melhorar qualidade de vida, energia e bem-estar geral.",
      link: "/estilo-de-vida"
    }
  ];

  const procedures = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Acompanhamento Nutricional",
      description: "Consultas regulares e suporte contínuo"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Avaliação Física Completa",
      description: "Análise corporal detalhada e precisa"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bioimpedância",
      description: "Medição de composição corporal"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Calorimetria Indireta",
      description: "Avaliação do gasto energético"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-gray-100 mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            Abordagem integrada e personalizada para suas necessidades nutricionais e objetivos de saúde.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <Link key={index} to={service.link} className="group block">
              <Card
                className="group cursor-pointer h-full"
                hover3D
              >
                <div className="text-primary-blue dark:text-accent-mint mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark dark:text-gray-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-primary-blue dark:text-accent-mint font-medium group-hover:translate-x-1 transition-transform duration-200">
                  Saiba mais →
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Procedures */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark dark:text-gray-100 mb-8 text-center">
            Procedimentos Disponíveis
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((procedure, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <div className="text-primary-blue dark:text-accent-mint flex-shrink-0 mt-1">
                  {procedure.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark dark:text-gray-100 mb-1">
                    {procedure.title}
                  </h4>
                  <p className="text-sm text-secondary dark:text-gray-300">
                    {procedure.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;