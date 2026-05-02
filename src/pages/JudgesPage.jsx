import React from 'react';
import Hero from '../components/Hero';
import Foundation from '../components/Foundation';
import JudgesCycle from '../components/JudgesCycle';
import LiberatorsGallery from '../components/LiberatorsGallery';
import MonarchyTransition from '../components/MonarchyTransition';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JudgesPage = () => {
  return (
    <div className="bg-bg min-h-screen">
      {/* Sticky Top Bar for Navigation */}
      <nav className="bg-white border-b border-border-light sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium">
              <ArrowLeft size={20} />
              Voltar para Início
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Foundation />
        <JudgesCycle />
        <LiberatorsGallery />
        <MonarchyTransition />
      </main>
    </div>
  );
};

export default JudgesPage;
