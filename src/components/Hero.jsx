import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1 text-sm font-medium">
            Novo • Bem‑estar inteligente
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Wellio — Saúde guiada por IA para mente, corpo e nutrição.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            O Wellio combina coaching motivacional por IA com acompanhamento nutricional inteligente para criar uma rotina equilibrada e personalizada.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
              Começar Período Experimental
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white text-emerald-700 ring-1 ring-emerald-200 px-6 py-3 font-semibold hover:bg-emerald-50 transition">
              Saber mais
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;