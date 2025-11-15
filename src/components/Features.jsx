import React from 'react';
import { Brain, HeartPulse, Salad, Sparkles, Camera, Mic, BarChart3, Target, Moon, Droplets, Dumbbell, Smile } from 'lucide-react';

const colorMap = {
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-600',
    border: 'border-sky-200',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
  },
};

const FeatureCard = ({ icon: Icon, title, description, items, color = 'emerald' }) => {
  const c = colorMap[color] || colorMap.emerald;
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 hover:shadow-xl transition shadow-sm">
      <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4 border ${c.border}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      {items && (
        <ul className="mt-4 space-y-2 text-gray-700">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-4 py-1 text-sm font-medium">Funcionalidades</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Coaching de saúde + nutrição inteligente</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Tudo o que precisas para criar hábitos saudáveis, acompanhar a tua alimentação e evoluir com apoio da IA.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={HeartPulse}
            title="Coaching de Saúde"
            description="Planos, metas e hábitos diários que se adaptam ao teu estilo de vida."
            items={[
              'Planos e metas personalizadas',
              'Hábitos: água, sono, meditação e exercício',
              'Diário de humor e energia',
              'Coach virtual por IA motivacional',
              'Sessões guiadas de meditação, respiração e alongamentos',
            ]}
            color="emerald"
          />

          <FeatureCard
            icon={Salad}
            title="Acompanhamento Nutricional"
            description="Regista refeições e acompanha calorias e macros com facilidade."
            items={[
              'Contagem de calorias e macronutrientes',
              'Registo de refeições',
              'Reconhecimento por fotografia ou voz',
              'Metas calóricas automáticas',
              'Gráficos e relatórios inteligentes',
            ]}
            color="sky"
          />

          <FeatureCard
            icon={Brain}
            title="IA Avançada"
            description="Recomendações que se ajustam ao teu humor, atividade e progresso."
            items={[
              'O coach adapta dicas conforme a alimentação',
              'Metas ajustam-se automaticamente',
              'Identifica padrões e gera insights personalizados',
            ]}
            color="violet"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Droplets} title="Hidratação" description="Acompanha a ingestão diária de água." />
          <FeatureCard icon={Moon} title="Sono" description="Estabelece rotinas e dorme melhor." />
          <FeatureCard icon={Dumbbell} title="Exercício" description="Planos de treino com progressão." />
          <FeatureCard icon={Smile} title="Humor" description="Regista emoções e níveis de energia." />
          <FeatureCard icon={Camera} title="Fotografia" description="Reconhecimento de alimentos por imagem." />
          <FeatureCard icon={Mic} title="Voz" description="Regista refeições usando comandos de voz." />
          <FeatureCard icon={BarChart3} title="Relatórios" description="Visão clara da tua evolução." />
          <FeatureCard icon={Target} title="Metas" description="Ajustes automáticos e inteligentes." />
          <FeatureCard icon={Sparkles} title="Coach IA" description="Motivação diária e insights práticos." />
        </div>
      </div>
    </section>
  );
};

export default Features;