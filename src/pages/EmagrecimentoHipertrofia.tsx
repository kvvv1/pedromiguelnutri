import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const EmagrecimentoHipertrofia: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  const beneficios = [
    { title: '📋 Plano Flexível', desc: 'Ajuste contínuo de acordo com sua rotina, preferências e resultados obtidos.' },
    { title: '💪 Evolução Visível', desc: 'Progresso real em força, resistência e composição corporal.' },
    { title: '📊 Acompanhamento Profissional', desc: 'Revisões semanais e métricas de progresso para garantir o melhor caminho.' },
    { title: '🥗 Nutrição Inteligente', desc: 'Cardápios elaborados para performance e recuperação muscular.' },
  ];

  const dicas = [
    'Beba de 2 a 3 litros de água por dia.',
    'Inclua proteínas magras em todas as refeições.',
    'Não treine sempre no máximo — o descanso também constrói músculos.',
    'Ajuste seu plano alimentar conforme seu objetivo evolui.',
  ];

  return (
    <section className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom space-y-12">
        {/* Título e introdução */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-gray-100">
            Emagrecimento / Hipertrofia
          </h1>
          <p className="mt-4 text-secondary dark:text-gray-300 leading-relaxed">
            O emagrecimento e a hipertrofia muscular são objetivos distintos, mas que compartilham um mesmo caminho:
            planejamento inteligente e constância. Enquanto o emagrecimento busca reduzir gordura corporal e melhorar a
            composição física, a hipertrofia visa aumentar a massa muscular, proporcionando mais força, saúde e estética.
            Com a abordagem correta, é possível até combinar os dois objetivos, otimizando tempo e resultados.
          </p>
        </div>

        {/* Como funciona */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-gray-100">Como funciona</h2>
          <p className="mt-3 text-secondary dark:text-gray-300">
            Nosso acompanhamento vai além de dietas restritivas ou treinos genéricos. Criamos um plano personalizado de nutrição
            e treino, adaptado ao seu metabolismo, rotina e preferências alimentares. Você receberá um programa de evolução
            progressiva, com ajustes semanais e monitoramento constante. O foco é garantir resultados sustentáveis, evitando o
            famoso “efeito sanfona” e otimizando cada refeição e treino para o seu objetivo.
          </p>
        </div>

        {/* Benefícios */}
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

        {/* Dicas rápidas */}
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-blue/10 to-accent-mint/10 dark:from-primary-blue/20 dark:to-accent-mint/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-primary-dark dark:text-gray-100">Pronto para começar?</h4>
            <p className="text-secondary dark:text-gray-300">
              Seja para emagrecer, ganhar massa ou ambos, o segredo é iniciar com um plano certo para você.
            </p>
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            Agendar avaliação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmagrecimentoHipertrofia;


