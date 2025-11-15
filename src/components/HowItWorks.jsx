import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Step = ({ index, title, description }) => (
  <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">{index}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: 'Conte seus objetivos',
      description: 'Informe metas de saúde, rotina e preferências alimentares.'
    },
    {
      title: 'Receba um plano inteligente',
      description: 'O Wellio monta hábitos e metas personalizadas para você.'
    },
    {
      title: 'Acompanhe com praticidade',
      description: 'Registre refeições por texto, foto ou voz e acompanhe tudo em gráficos.'
    },
    {
      title: 'Evolua com a IA',
      description: 'O coach identifica padrões e ajusta recomendações conforme seu progresso.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1 text-sm font-medium">Como funciona</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Do primeiro passo ao bem-estar completo</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Um processo simples, guiado por IA, para transformar sua rotina com consistência.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Step key={i} index={i + 1} title={s.title} description={s.description} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
            <CheckCircle2 className="w-5 h-5" />
            Começar Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;