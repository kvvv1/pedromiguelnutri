import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const EstiloDeVida: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5531971218523&text&type=phone_number&app_absent=0";

  const beneficios = [
    { title: '🌱 Prevenção de Doenças', desc: 'Reduz risco de diabetes, hipertensão e obesidade.' },
    { title: '💤 Melhor Sono', desc: 'Alimentação equilibrada contribui para descanso profundo.' },
    { title: '😊 Mais Disposição', desc: 'Energia para trabalhar, estudar e aproveitar o lazer.' },
    { title: '🍎 Consistência', desc: 'Hábitos que se mantêm ao longo da vida.' },
  ];

  const dicas = [
    'Prefira alimentos naturais e evite ultraprocessados.',
    'Mantenha horários regulares para comer.',
    'Inclua frutas, verduras e legumes todos os dias.',
    'Mexa o corpo diariamente, mesmo que por poucos minutos.',
  ];

  return (
    <section className="pt-28 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom space-y-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-gray-100">
            Estilo de Vida
          </h1>
          <p className="mt-4 text-secondary dark:text-gray-300 leading-relaxed">
            Um estilo de vida saudável vai além da alimentação: envolve sono, movimento, equilíbrio emocional e escolhas conscientes.
            A nutrição é pilar central dessa jornada, influenciando energia, humor e longevidade.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-gray-100">Como funciona</h2>
          <p className="mt-3 text-secondary dark:text-gray-300">
            Trabalhamos para integrar hábitos alimentares inteligentes à sua rotina sem radicalismos. O objetivo é transformar
            pequenas ações em resultados duradouros, prevenindo doenças e aumentando a disposição para viver bem todos os dias.
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
            <h4 className="text-lg font-semibold text-primary-dark dark:text-gray-100">Comece hoje</h4>
            <p className="text-secondary dark:text-gray-300">
              Mudar seu estilo de vida é investir na sua melhor versão — comece agora e colha benefícios para sempre.
            </p>
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            Quero melhorar meus hábitos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EstiloDeVida;


