import React from 'react';
import { BookOpen, Compass, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary-bg opacity-40 rounded-[100%] blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-bg text-primary font-semibold text-sm mb-8">
            <Compass size={16} />
            <span>Um Propósito Divino</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary tracking-tight mb-8 leading-tight">
            Uma jornada diária na <br className="hidden md:block"/>
            <span className="text-primary">Palavra de Deus.</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Deus nos deu uma visão clara: resgatar a disciplina e o amor pela leitura bíblica. 
            Este projeto nasceu para transformar a sua rotina devocional e te guiar na profundidade das Escrituras.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://overbo.agenciamarka.com.br" className="btn btn-primary text-lg px-8 py-4">
              Comece Seu Devocional
              <ArrowRight size={20} />
            </a>
            <Link to="/juizes" className="btn btn-outline text-lg px-8 py-4 bg-white">
              Estudar o Livro de Juízes
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">A Visão do Projeto</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Construímos um ecossistema completo para fortalecer sua fé.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center animate-fade-in delay-100">
              <div className="mx-auto w-16 h-16 bg-primary-bg rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Devocional Diário</h3>
              <p className="text-text-secondary">
                Um aplicativo focado no seu crescimento diário, com versículos selecionados e progresso de leitura.
              </p>
            </div>

            <div className="card text-center animate-fade-in delay-200 border-primary border-2">
              <div className="mx-auto w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-glow">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Estudos Profundos</h3>
              <p className="text-text-secondary">
                Painéis dedicados para cada livro bíblico, revelando contextos históricos e lições práticas.
              </p>
            </div>

            <div className="card text-center animate-fade-in delay-300">
              <div className="mx-auto w-16 h-16 bg-primary-bg rounded-2xl flex items-center justify-center mb-6">
                <Compass className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Jornada Guiada</h3>
              <p className="text-text-secondary">
                Não leia de forma aleatória. Siga roteiros e ciclos para extrair o máximo da Palavra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
