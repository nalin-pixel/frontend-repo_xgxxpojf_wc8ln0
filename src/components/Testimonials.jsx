import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex gap-1 text-amber-500 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">“{quote}”</p>
    <div className="mt-4 font-semibold text-gray-900">{name}</div>
    <div className="text-gray-500 text-sm">{role}</div>
  </div>
);

const Testimonials = () => {
  const data = [
    {
      quote: 'O coach do Wellio me manteve motivado e finalmente criei rotina com sono e água.',
      name: 'Marina S.',
      role: 'Designer'
    },
    {
      quote: 'Registrar refeições por foto é muito prático — e os insights são certeiros.',
      name: 'Carlos A.',
      role: 'Empreendedor'
    },
    {
      quote: 'Os programas guiados de foco e bem-estar fizeram muita diferença no meu dia.',
      name: 'Beatriz L.',
      role: 'Produtora'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1 text-sm font-medium">Depoimentos</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Resultados reais, histórias inspiradoras</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Experiências de pessoas que transformaram seus hábitos com o Wellio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;