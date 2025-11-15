import React from 'react';
import { Rocket } from 'lucide-react';

const FreeTrial = () => {
  return (
    <section id="trial" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experimenta o Wellio gratuitamente por tempo limitado</h2>
        <p className="mt-3 text-gray-600">O nosso período experimental permite-te conhecer o poder do coaching por IA e do acompanhamento nutricional inteligente.</p>
        <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-8 py-4 font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
          <Rocket className="w-5 h-5" />
          Iniciar Período Experimental
        </a>
      </div>
    </section>
  );
};

export default FreeTrial;