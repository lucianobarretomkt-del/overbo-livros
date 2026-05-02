import React, { useState } from 'react';
import { RefreshCw, Flame, Link2, HandHeart, Shield } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Apostasia',
    icon: Flame,
    color: 'bg-rose-500', // using tailwind color mapping
    textColor: 'text-rose-500',
    description: 'Esquecimento da Palavra e culto a deuses pagãos como Baal e Astarote. A nova geração não conhecia as obras do Senhor.'
  },
  {
    id: 2,
    title: 'Opressão',
    icon: Link2,
    color: 'bg-slate-700',
    textColor: 'text-slate-700',
    description: 'Submissão a nações inimigas (Mesopotâmia, Moabe, Canaã, Midiã, Filístia) como disciplina divina.'
  },
  {
    id: 3,
    title: 'Clamor',
    icon: HandHeart,
    color: 'bg-amber-500',
    textColor: 'text-amber-500',
    description: 'Em meio ao sofrimento, o povo reconhece seu pecado e busca novamente a face do Senhor por socorro.'
  },
  {
    id: 4,
    title: 'Libertação',
    icon: Shield,
    color: 'bg-primary',
    textColor: 'text-primary',
    description: 'Deus, em Sua misericórdia, levanta um Juiz (Libertador) capacitado pelo Espírito Santo para resgatar Israel.'
  }
];

const JudgesCycle = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="ciclo" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <RefreshCw size={56} className="text-primary animate-[spin_10s_linear_infinite]" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">O Ciclo de Juízes</h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Um infográfico interativo detalhando a espiral descendente e repetitiva do povo de Israel. Clique nos estágios para entender a dinâmica espiritual.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Menu Lateral / Stepper */}
          <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-xl border-2 cursor-pointer flex items-center gap-4 transition-all duration-300 ${
                    isActive ? 'border-primary bg-primary-bg shadow-md' : 'border-border-light bg-transparent hover:border-primary/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-colors ${
                    isActive ? 'bg-primary text-white shadow-shadow-glow' : 'bg-bg text-text-muted'
                  }`}>
                    {step.id}
                  </div>
                  <h3 className={`m-0 text-2xl font-serif font-bold transition-colors ${
                    isActive ? 'text-primary' : 'text-text-secondary'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Painel de Detalhes Interativo */}
          <div className="flex-[1.5] min-w-[300px] relative min-h-[300px]">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id}
                  className={`card absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out border-2 border-border-light ${
                    activeStep === index 
                      ? 'opacity-100 visible translate-y-0 z-10' 
                      : 'opacity-0 invisible translate-y-8 z-0'
                  }`}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`${step.color} p-4 rounded-full text-white shadow-lg`}>
                      <Icon size={48} />
                    </div>
                    <h3 className={`text-4xl font-serif font-bold ${step.textColor}`}>{step.title}</h3>
                  </div>
                  <p className="text-xl text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesCycle;
