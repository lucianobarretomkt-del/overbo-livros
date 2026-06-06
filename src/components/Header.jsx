import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white border-b border-border-light sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="bg-primary-bg p-2 rounded-lg">
              <BookOpen className="text-primary" size={28} />
            </div>
            <span className="font-bold text-2xl text-text-primary tracking-tight">O Verbo é Vivo</span>
          </Link>
          <div>
            <a 
              href="https://overbo.agenciamarka.com.br" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline text-sm px-6 py-2"
            >
              Acessar o App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
