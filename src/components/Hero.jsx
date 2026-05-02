import React from 'react';
import { BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative bg-bg-dark min-h-[80vh] flex flex-col justify-center overflow-hidden animate-fade-in">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-dark)_0%,var(--bg-dark)_70%)] opacity-30 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <div className="flex justify-center mb-8">
          <div className="p-4 border-2 border-primary rounded-full bg-bg-dark/50">
            <BookOpen size={48} className="text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-text-on-dark mb-6 leading-tight">
          Juízes: <span className="text-primary">O Ciclo da Derrota</span><br/> e da Libertação Divina
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
          A trajetória de Israel desde a conquista de Canaã até a instituição do Reino Unido. Uma análise profunda sobre a fidelidade de Deus em meio à falha humana.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn btn-primary text-lg" onClick={() => document.getElementById('ciclo').scrollIntoView({ behavior: 'smooth'})}>
            Explorar o Ciclo
          </button>
          <button className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg" onClick={() => document.getElementById('libertadores').scrollIntoView({ behavior: 'smooth'})}>
            Galeria de Libertadores
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
