import React from 'react';
import { ScrollText, MapPin, AlertCircle } from 'lucide-react';

const Foundation = () => {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">O Legado dos Profetas</h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Antes de compreendermos o período dos juízes, precisamos olhar para os fundamentos deixados pelos líderes que trouxeram o povo até a terra prometida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="card animate-fade-in delay-100 border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-bg p-4 rounded-full">
                <ScrollText size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-text-primary">Moisés</h3>
            </div>
            <h4 className="text-primary font-semibold text-lg mb-3">A Lei e a Fronteira</h4>
            <p className="text-text-secondary leading-relaxed">
              Moisés tirou o povo do Egito e entregou as tábuas da Lei, estabelecendo a base teocrática de Israel. No entanto, sua liderança foi marcada por trazer o povo apenas até as fronteiras de Canaã.
            </p>
          </div>

          <div className="card animate-fade-in delay-200 border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-bg p-4 rounded-full">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-text-primary">Josué</h3>
            </div>
            <h4 className="text-primary font-semibold text-lg mb-3">A Conquista e a Posse</h4>
            <p className="text-text-secondary leading-relaxed">
              O sucessor militar que liderou a invasão de Canaã, derrotando dezenas de reis. Sua morte marcou o início de um vácuo de liderança, onde "cada um fazia o que achava reto aos seus próprios olhos".
            </p>
          </div>
        </div>

        {/* Bloco Propósito Pedagógico */}
        <div className="bg-bg-dark rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center animate-fade-in delay-300 shadow-xl border border-primary/20">
          <div className="flex-shrink-0">
            <AlertCircle size={56} className="text-primary" />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2 text-white">Nota: Propósito Pedagógico Divino</h4>
            <p className="text-text-muted text-lg">
              Por que Deus permitiu que nações inimigas permanecessem na terra prometida? Segundo o texto bíblico, essas nações foram deixadas para <strong className="text-white">provar a fidelidade</strong> das novas gerações de Israel, testando se eles guardariam os mandamentos e ensinando-os a batalhar na dependência de Deus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Foundation;
