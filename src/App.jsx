import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Mockups from './components/Mockups';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FreeTrial from './components/FreeTrial';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">Wellio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#features" className="hover:text-gray-900">Funcionalidades</a>
            <a href="#pricing" className="hover:text-gray-900">Planos</a>
            <a href="#trial" className="hover:text-gray-900">Período experimental</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700 transition">
            Começar Período Experimental
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Mockups />
        <Testimonials />
        <Pricing />
        <FreeTrial />
      </main>

      <footer className="py-10 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Wellio — Bem‑estar inteligente</div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-900">Funcionalidades</a>
            <a href="#pricing" className="hover:text-gray-900">Planos</a>
            <a href="#trial" className="hover:text-gray-900">Período experimental</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;