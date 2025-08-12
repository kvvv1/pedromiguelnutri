import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Users, CreditCard } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';

const Location = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";
  const mapsUrl = "https://maps.google.com/maps?q=R.+Matias+Cardoso,+63+-+Santo+Agostinho,+Belo+Horizonte+-+MG,+30170-914";

  const faqs = [
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Como funciona a consulta inicial?",
      answer: "Avaliação completa com anamnese, exames e definição de objetivos personalizados."
    },
    {
      icon: <Users className="w-5 h-5" />,
      question: "Há acompanhamento entre consultas?",
      answer: "Sim! Suporte contínuo via WhatsApp para dúvidas e ajustes no plano."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: "Atende presencial e online?",
      answer: "Ambos! Consultas presenciais em BH e atendimento online para todo o Brasil."
    }
  ];

  return (
    <section id="location" className="py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-gray-100 mb-4">
            Localização & Contato
          </h2>
          <p className="text-lg text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            Encontre-nos no coração de Belo Horizonte ou agende uma consulta online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary-blue dark:text-accent-mint mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark dark:text-gray-100 mb-2">
                    Endereço
                  </h3>
                  <p className="text-secondary dark:text-gray-300">
                    R. Matias Cardoso, 63<br />
                    Santo Agostinho, Belo Horizonte — MG<br />
                    CEP: 30170-914
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-primary-blue dark:text-accent-mint mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark dark:text-gray-100 mb-2">
                    Telefone / WhatsApp
                  </h3>
                  <p className="text-secondary dark:text-gray-300 text-lg">
                    (31) 97121-8523
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="flex items-center gap-2 flex-1 justify-center"
              >
                <MapPin size={16} />
                Traçar rota
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 flex-1 justify-center"
              >
                <MessageCircle size={16} />
                Agendar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0089890089887!2d-43.93528158456654!3d-19.924465487097467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c2b11a9f79%3A0x1b6b6b6b6b6b6b6b!2sR.%20Matias%20Cardoso%2C%2063%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG%2C%2030170-914!5e0!3m2!1sen!2sbr!4v1635789123456!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dr. Pedro Miguel - Santo Agostinho, BH"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark dark:text-gray-100 mb-8 text-center">
            Perguntas Frequentes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 text-center"
                hover3D
              >
                <div className="text-primary-blue dark:text-accent-mint mb-4 flex justify-center">
                  {faq.icon}
                </div>
                <h4 className="font-semibold text-primary-dark dark:text-gray-100 mb-3">
                  {faq.question}
                </h4>
                <p className="text-secondary dark:text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;