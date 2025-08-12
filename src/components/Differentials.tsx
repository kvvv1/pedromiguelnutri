import React from 'react';
import { MessageCircle, GraduationCap, CheckCircle } from 'lucide-react';
import Card from './ui/Card';

const Differentials = () => {
  const differentials = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Suporte Pós-Consulta",
      description: "Acompanhamento contínuo via WhatsApp para dúvidas, ajustes e retorno de exames. Você nunca fica sozinho no processo."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Currículo Amplo e Integrado",
      description: "Formação que une nutrição clínica e esportiva com fitoterapia e psicologia, oferecendo uma abordagem completa e humanizada."
    }
  ];

  const credentials = [
    "Plano individualizado",
    "Baseado em evidências",
    "Abordagem integrativa",
    "Resultados sustentáveis"
  ];

  return (
    <section id="differentials" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-gray-100 mb-4">
            Por que escolher o{' '}
            <span className="text-primary-blue">Dr. Pedro Miguel</span>?
          </h2>
          <p className="text-lg text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu resultado e experiência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {differentials.map((differential, index) => (
            <Card
              key={index}
              className="lg:p-8"
              hover3D
            >
              <div className="text-primary-blue dark:text-accent-mint mb-6">
                {differential.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-primary-dark dark:text-gray-100 mb-4">
                {differential.title}
              </h3>
              <p className="text-secondary dark:text-gray-300 leading-relaxed text-lg">
                {differential.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Credentials */}
        <div className="flex flex-wrap gap-4 justify-center">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-xs border border-gray-100 dark:border-gray-600"
            >
              <CheckCircle size={16} className="text-success flex-shrink-0" />
              <span className="text-primary-dark dark:text-gray-100 font-medium whitespace-nowrap">
                {credential}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;