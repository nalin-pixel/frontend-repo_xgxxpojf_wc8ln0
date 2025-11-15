import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essentials',
    price: '€ 19/mês',
    highlight: false,
    features: [
      'Acompanhamento básico de calorias',
      'Plano simples de hábitos',
      'Acesso limitado ao coach por IA',
      'Ideal para começar',
    ],
    cta: 'Escolher Essentials',
  },
  {
    name: 'Wellio Plus',
    subtitle: 'Mais vendido',
    price: '€ 39/mês',
    highlight: true,
    features: [
      'Tudo do Essentials +',
      'Acesso completo ao coach por IA',
      'Programas guiados premium',
      'Relatórios avançados de progresso',
      'Reconhecimento de alimentos por fotografia',
      'Ajustes automáticos de metas pela IA',
      'Recomendações inteligentes',
    ],
    cta: 'Escolher Wellio Plus',
  },
  {
    name: 'Wellio Premium',
    price: '€ 69/mês',
    highlight: false,
    features: [
      'Tudo do Plus +',
      'Planos 100% personalizados',
      'Treinos premium exclusivos',
      'Insights semanais gerados por IA',
      'Suporte prioritário',
      'Programas e desafios exclusivos',
    ],
    cta: 'Subscrever Premium',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1 text-sm font-medium">Planos e preços</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Escolhe o teu Wellio</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">O plano Plus é o equilíbrio ideal entre funcionalidades e investimento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`${p.highlight ? 'relative ring-2 ring-emerald-500 scale-[1.02] md:-mt-4 md:mb-4' : ''} rounded-2xl border border-gray-200 bg-white p-6 shadow-sm` }>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow">{p.subtitle}</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <div className="text-emerald-700 font-bold">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#trial" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold transition ${p.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;