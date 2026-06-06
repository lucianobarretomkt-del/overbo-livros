import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BookOpen className="text-primary mx-auto mb-4" size={32} />
        <p className="text-text-muted mb-2">O Verbo é Vivo &copy; {new Date().getFullYear()}</p>
        <p className="text-sm text-text-secondary font-light max-w-md mx-auto">
          "A verdadeira paz duradoura não vem da ausência de inimigos, mas da presença da fidelidade ao Senhor."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
