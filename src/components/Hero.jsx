import React from 'react';
import { BookOpen } from 'lucide-react';
import mapImage from '../assets/mapa-tribos-israel.webp';

const Hero = () => {
  return (
    <header className="relative bg-bg-dark min-h-[80vh] flex flex-col justify-center overflow-hidden animate-fade-in py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-dark)_0%,var(--bg-dark)_70%)] opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex justify-start mb-6">
              <div className="p-4 border-2 border-primary rounded-full bg-bg-dark/50 inline-flex">
                <BookOpen size={48} className="text-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-text-on-dark mb-6 leading-tight">
              Juízes: <span className="text-primary">O Ciclo da Derrota</span><br/> e da Libertação Divina
            </h1>
            
            <p className="text-xl text-text-muted font-light leading-relaxed mb-10 max-w-2xl">
              A trajetória de Israel desde a conquista de Canaã até a instituição do Reino Unido. Uma análise profunda sobre a fidelidade de Deus em meio à falha humana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary text-lg" onClick={() => document.getElementById('ciclo').scrollIntoView({ behavior: 'smooth'})}>
                Explorar o Ciclo
              </button>
              <button className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg" onClick={() => document.getElementById('libertadores').scrollIntoView({ behavior: 'smooth'})}>
                Galeria de Libertadores
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200 mt-10 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl blur opacity-30"></div>
            <img 
              src={mapImage} 
              alt="Mapa das Tribos de Israel e o Reino de Edom" 
              className="relative w-full rounded-2xl shadow-2xl border border-primary/20 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-bg-dark/80 backdrop-blur-sm border border-primary/20 p-4 rounded-xl shadow-lg max-w-xs text-sm text-text-muted">
              <span className="text-primary font-bold block mb-1">Contexto Geográfico</span>
              As tribos de Israel no deserto e a localização estratégica de Edom.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
