import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, image }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-4 mb-4">
      <img src={image} alt={`Foto de ${name}`} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
    <div className="flex gap-1 text-amber-500 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">“{quote}”</p>
  </div>
);

const Testimonials = () => {
  const data = [
    {
      quote: 'O coach do Wellio manteve-me motivada e finalmente criei rotina com sono e água.',
      name: 'Marina S.',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=256&auto=format&fit=crop'
    },
    {
      quote: 'Registar refeições por fotografia é super prático — e os insights são certeiros.',
      name: 'Carlos A.',
      role: 'Empreendedor',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'
    },
    {
      quote: 'Os programas guiados de foco e bem‑estar fizeram muita diferença no meu dia.',
      name: 'Beatriz L.',
      role: 'Produtora',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1 text-sm font-medium">Testemunhos</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Resultados reais, histórias inspiradoras</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Experiências de pessoas que transformaram os seus hábitos com o Wellio.</p>
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