import React from 'react';

const Mockups = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-4 py-1 text-sm font-medium">Experiência do App</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Visual moderno e fácil de usar</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Demonstrações de telas do Wellio para inspirar o que você verá no app real.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder mockups using gradients and glassmorphism */}
          {['Dashboard', 'Coaching IA', 'Nutrição'].map((title, idx) => (
            <div key={idx} className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-sky-100/40 to-violet-100/60" />
              <div className="relative p-6">
                <div className="aspect-[9/16] w-full rounded-2xl bg-white/70 border border-white/60 shadow-inner flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">Tela: {title}</span>
                </div>
                <p className="mt-4 text-gray-600">Mockup ilustrativo com estetica wellness-tech.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockups;