import React from 'react';

const cards = [
  {
    title: 'Dashboard',
    desc: 'Resumo diário com progresso, água, sono e calorias.',
    img: 'https://images.unsplash.com/photo-1552508744-1696d4464962?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'Coaching IA',
    desc: 'Sugestões personalizadas e motivação diária.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'Nutrição',
    desc: 'Registo de refeições por texto, fotografia ou voz.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop'
  },
];

const Mockups = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1 text-sm font-medium">Experiência da App</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Visual moderno e fácil de usar</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Demonstrações de ecrãs do Wellio para inspirares-te no que verás na app real.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur shadow-xl">
              <div className="relative">
                <img
                  src={c.img}
                  alt={`Imagem ilustrativa de ${c.title}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative p-6">
                <div className="rounded-2xl bg-white/80 border border-white/60 shadow-inner p-4">
                  <div className="text-gray-900 font-semibold">{c.title}</div>
                  <p className="mt-1 text-gray-600 text-sm">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockups;