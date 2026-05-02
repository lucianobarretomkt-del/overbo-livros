import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-light py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <BookOpen size={40} className="text-primary opacity-50" />
        </div>
        
        <div className="mb-10">
          <h3 className="text-primary font-bold text-2xl mb-4 font-serif">
            A Fidelidade a Deus como Garantia
          </h3>
          <p className="text-text-secondary italic text-xl max-w-2xl mx-auto font-light leading-relaxed">
            "A verdadeira paz duradoura não vem da ausência de inimigos, mas da presença da fidelidade ao Senhor."
          </p>
        </div>

        <div className="border-t border-border-light pt-8">
          <p className="text-text-muted text-sm uppercase tracking-widest font-semibold">
            O Verbo é Vivo — Estudo do Livro de Juízes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
