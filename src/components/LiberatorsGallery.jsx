import React from 'react';
import { Sword, Crosshair, ThumbsUp } from 'lucide-react';

const LiberatorsGallery = () => {
  return (
    <section id="libertadores" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Galeria dos Primeiros Libertadores</h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Deus usou pessoas comuns, estrategistas improváveis e heróis humildes para executar a libertação de Israel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="card animate-fade-in delay-100 border-t-4 border-t-primary">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-serif font-bold text-text-primary">Otoniel</h3>
              <div className="bg-primary-bg p-3 rounded-full shadow-sm">
                <ThumbsUp size={28} className="text-primary" />
              </div>
            </div>
            <h4 className="text-primary font-semibold text-lg mb-4">O Primeiro Juiz</h4>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><strong className="text-text-primary">Opressor:</strong> Mesopotâmia</li>
              <li className="flex gap-2"><strong className="text-text-primary">Paz:</strong> 40 anos</li>
            </ul>
            <p className="text-text-muted leading-relaxed">
              Sobrinho de Calebe, foi o protótipo do juiz ideal. O Espírito do Senhor veio sobre ele, saiu à guerra e libertou Israel das mãos de Cusã-Risataim.
            </p>
          </div>

          <div className="card animate-fade-in delay-200 border-t-4 border-t-primary">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-serif font-bold text-text-primary">Eúde</h3>
              <div className="bg-primary-bg p-3 rounded-full shadow-sm">
                <Crosshair size={28} className="text-primary" />
              </div>
            </div>
            <h4 className="text-primary font-semibold text-lg mb-4">O Estrategista Canhoto</h4>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><strong className="text-text-primary">Opressor:</strong> Moabe (Eglom)</li>
              <li className="flex gap-2"><strong className="text-text-primary">Paz:</strong> 80 anos</li>
            </ul>
            <p className="text-text-muted leading-relaxed">
              Usou sua característica incomum (ser canhoto) para surpreender o obeso rei Eglom, escondendo uma espada dupla na coxa direita, iniciando a maior era de paz.
            </p>
          </div>

          <div className="card animate-fade-in delay-300 border-t-4 border-t-primary">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-serif font-bold text-text-primary">Sangar</h3>
              <div className="bg-primary-bg p-3 rounded-full shadow-sm">
                <Sword size={28} className="text-primary" />
              </div>
            </div>
            <h4 className="text-primary font-semibold text-lg mb-4">O Herói Humilde</h4>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><strong className="text-text-primary">Opressor:</strong> Filisteus</li>
              <li className="flex gap-2"><strong className="text-text-primary">Feito:</strong> 600 homens derrotados</li>
            </ul>
            <p className="text-text-muted leading-relaxed">
              Apesar de não ser de família nobre e não ter armas de guerra, usou uma <strong className="text-text-primary">agilhada de bois</strong> (instrumento agrícola) como arma nas mãos de Deus.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiberatorsGallery;
