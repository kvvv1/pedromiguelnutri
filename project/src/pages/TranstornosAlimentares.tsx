import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const TranstornosAlimentares: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  const beneficios = [
    { title: '💬 Apoio Emocional', desc: 'Escuta ativa e compreensão durante todo o processo.' },
    { title: '🩺 Segurança no Tratamento', desc: 'Acompanhamento conjunto com profissionais de saúde.' },
    { title: '🍽 Autonomia Alimentar', desc: 'Reaprendizado de hábitos saudáveis sem restrições extremas.' },
    { title: '💖 Melhora da Autoestima', desc: 'Reconexão positiva com o corpo.' },
  ];

  const dicas = [
    'Procure ajuda profissional ao notar comportamentos alimentares nocivos.',
    'Evite comparações com padrões irreais das redes sociais.',
    'Foque em nutrir o corpo, não apenas alimentá-lo.',
    'Seja paciente: recuperação é um processo gradual.',
  ];

  return (
    <section className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom space-y-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-gray-100">
            Transtornos Alimentares
          </h1>
          <p className="mt-4 text-secondary dark:text-gray-300 leading-relaxed">
            Transtornos alimentares não são apenas sobre “o que se come”, mas também sobre como e por que se come.
            Eles impactam profundamente a saúde física e mental, exigindo acompanhamento especializado e abordagem humanizada.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-gray-100">Como funciona</h2>
          <p className="mt-3 text-secondary dark:text-gray-300">
            Nosso trabalho é focado na reconstrução de uma relação saudável com a comida, evitando julgamentos e imposições radicais.
            O atendimento é realizado com apoio de equipe multidisciplinar (nutricionista, psicólogo, médico), garantindo segurança.
            O objetivo é devolver autonomia alimentar e o prazer de comer sem culpa.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary-dark dark:text-gray-100 mb-5">Benefícios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <Card key={i} hover3D>
                <h4 className="font-semibold text-primary-dark dark:text-gray-100">{b.title}</h4>
                <p className="text-sm text-secondary dark:text-gray-300 mt-2">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary-dark dark:text-gray-100 mb-4">Dicas rápidas</h3>
          <ul className="space-y-3">
            {dicas.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-blue mt-0.5" />
                <span className="text-secondary dark:text-gray-300">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary-blue/10 to-accent-mint/10 dark:from-primary-blue/20 dark:to-accent-mint/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-primary-dark dark:text-gray-100">Cuide-se hoje</h4>
            <p className="text-secondary dark:text-gray-300">
              Se você ou alguém próximo sofre com transtorno alimentar, buscar ajuda agora faz toda a diferença.
            </p>
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TranstornosAlimentares;


