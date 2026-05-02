import React from 'react';
import { Crown, AlertTriangle } from 'lucide-react';

const MonarchyTransition = () => {
  return (
    <section className="py-24 bg-bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">A Transição para a Monarquia</h2>
          <p className="max-w-2xl mx-auto text-text-muted text-lg">
            O fim da era dos Juízes culmina no desejo do povo de ser governado como as outras nações, rejeitando a Teocracia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-10 rounded-2xl animate-fade-in shadow-xl">
            <h3 className="text-3xl font-serif font-bold mb-6 text-primary">Samuel: O Último Juiz</h3>
            <p className="mb-8 text-lg text-slate-300 leading-relaxed">
              Samuel marcou o fim de uma era. Como profeta, sacerdote e juiz, ele manteve a nação unida. No entanto, quando ele envelheceu, a corrupção de seus filhos levou os anciãos de Israel a fazerem um pedido que mudaria a história.
            </p>
            
            <div className="bg-rose-500/10 p-6 rounded-xl border-l-4 border-rose-500">
              <div className="flex items-center gap-3 text-rose-500 mb-3">
                <AlertTriangle size={24} />
                <h4 className="m-0 font-bold text-xl">A Rejeição</h4>
              </div>
              <p className="m-0 italic text-slate-400 text-lg">
                "Constitui-nos, pois, agora um rei sobre nós, para que ele nos julgue, como o têm todas as nações." (1 Sm 8:5)
              </p>
            </div>
          </div>

          <div className="relative py-8">
            {/* Linha do tempo vertical */}
            <div className="absolute top-0 bottom-0 left-[35px] w-1 bg-gradient-to-b from-primary-light to-primary-dark z-0 rounded-full"></div>
            
            <div className="flex flex-col gap-10 relative z-10 pl-2">
              
              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Crown size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="m-0 text-2xl font-serif font-bold text-white mb-1">Saul</h4>
                  <p className="m-0 text-primary-light font-medium">O Início, segundo os homens</p>
                </div>
              </div>

              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-glow">
                  <Crown size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="m-0 text-2xl font-serif font-bold text-white mb-1">Davi</h4>
                  <p className="m-0 text-primary-light font-medium">O Homem segundo o coração de Deus</p>
                </div>
              </div>

              <div className="flex gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Crown size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="m-0 text-2xl font-serif font-bold text-white mb-1">Salomão</h4>
                  <p className="m-0 text-primary-light font-medium">A Glória e o Templo</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MonarchyTransition;
