import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const NutricaoEsportiva: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  const beneficios = [
    { title: '⚡ Mais Energia', desc: 'Mantém alta performance do início ao fim do treino.' },
    { title: '🩹 Recuperação Acelerada', desc: 'Reduz dores e fadiga pós-treino.' },
    { title: '🏅 Melhora de Desempenho', desc: 'Atinge picos de performance com regularidade.' },
    { title: '🥗 Nutrição Equilibrada', desc: 'Evita deficiências nutricionais que comprometem resultados.' },
  ];

  const dicas = [
    'Consuma carboidratos complexos antes do treino.',
    'Inclua proteínas no pós-treino imediato.',
    'Não negligencie gorduras boas para equilíbrio hormonal.',
    'Hidrate-se antes, durante e após a prática.',
  ];

  return (
    <section className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom space-y-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-gray-100">
            Nutrição Esportiva
          </h1>
          <p className="mt-4 text-secondary dark:text-gray-300 leading-relaxed">
            A nutrição esportiva é essencial para quem busca alta performance. Ela fornece o combustível certo no momento certo
            para maximizar energia e recuperação, seja na musculação, corrida, esportes coletivos ou modalidades de resistência.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-gray-100">Como funciona</h2>
          <p className="mt-3 text-secondary dark:text-gray-300">
            Analisamos seu treino, frequência, intensidade e metas para criar uma estratégia nutricional personalizada.
            Definimos o que comer antes do treino para maximizar energia, o que consumir após para acelerar a recuperação,
            e ajustamos macro e micronutrientes para equilíbrio e prevenção de lesões.
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
            <h4 className="text-lg font-semibold text-primary-dark dark:text-gray-100">Eleve sua performance</h4>
            <p className="text-secondary dark:text-gray-300">
              Com a nutrição certa, seu treino rende mais e os resultados são consistentes e duradouros.
            </p>
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            Montar estratégia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NutricaoEsportiva;


