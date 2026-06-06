import React from 'react';
import { 
  Sword, 
  Crosshair, 
  ThumbsUp, 
  Users, 
  Flame, 
  Shield, 
  Mountain, 
  Trophy, 
  Heart, 
  MapPin, 
  Star, 
  Zap 
} from 'lucide-react';

const judges = [
  {
    name: "Otoniel",
    title: "O Primeiro Juiz",
    icon: ThumbsUp,
    stats: [
      { label: "Opressor", value: "Mesopotâmia" },
      { label: "Paz", value: "40 anos" }
    ],
    description: "Sobrinho de Calebe, foi o protótipo do juiz ideal. O Espírito do Senhor veio sobre ele, saiu à guerra e libertou Israel das mãos de Cusã-Risataim.",
    delay: "100"
  },
  {
    name: "Eúde",
    title: "O Estrategista Canhoto",
    icon: Crosshair,
    stats: [
      { label: "Opressor", value: "Moabe (Eglom)" },
      { label: "Paz", value: "80 anos" }
    ],
    description: "Usou sua característica incomum (ser canhoto) para surpreender o obeso rei Eglom, escondendo uma espada dupla na coxa direita, iniciando a maior era de paz.",
    delay: "200"
  },
  {
    name: "Sangar",
    title: "O Herói Humilde",
    icon: Sword,
    stats: [
      { label: "Opressor", value: "Filisteus" },
      { label: "Feito", value: "600 homens derrotados" }
    ],
    description: "Apesar de não ser de família nobre e não ter armas de guerra, usou uma agilhada de bois (instrumento agrícola) como arma nas mãos de Deus.",
    delay: "300"
  },
  {
    name: "Débora (e Baraque)",
    title: "A Profetisa e Líder",
    icon: Users,
    stats: [
      { label: "Opressor", value: "Canaã (Rei Jabim)" },
      { label: "Paz", value: "40 anos" }
    ],
    description: "Única mulher juíza, convocou Baraque para a guerra e profetizou a vitória sobre Sísera.",
    delay: "100"
  },
  {
    name: "Gideão",
    title: "O Guerreiro dos Trezentos",
    icon: Flame,
    stats: [
      { label: "Opressor", value: "Midianitas" },
      { label: "Paz", value: "40 anos" }
    ],
    description: "De origem humilde, destruiu o altar de Baal e derrotou o exército midianita com apenas 300 homens escolhidos por Deus.",
    delay: "200"
  },
  {
    name: "Tola",
    title: "O Defensor Silencioso",
    icon: Shield,
    stats: [
      { label: "Paz", value: "23 anos" }
    ],
    description: "Levantou-se para salvar Israel após o tumulto de Abimeleque, julgando o povo com estabilidade a partir de Samir.",
    delay: "300"
  },
  {
    name: "Jair",
    title: "O Administrador de Gileade",
    icon: Mountain,
    stats: [
      { label: "Paz", value: "22 anos" }
    ],
    description: "Possuía trinta filhos que cavalgavam sobre trinta jumentos e tinham trinta cidades, demonstrando um período de prosperidade regional.",
    delay: "100"
  },
  {
    name: "Jefté",
    title: "O Guerreiro Rejeitado",
    icon: Trophy,
    stats: [
      { label: "Opressor", value: "Amonitas" },
      { label: "Paz", value: "6 anos" }
    ],
    description: "Um homem marginalizado que foi chamado pelos anciãos para liderar a libertação contra os filhos de Amom.",
    delay: "200"
  },
  {
    name: "Ibsã",
    title: "O Juiz de Belém",
    icon: Heart,
    stats: [
      { label: "Paz", value: "7 anos" }
    ],
    description: "Conhecido por sua grande família, teve trinta filhos e trinta filhas, fortalecendo alianças através de casamentos.",
    delay: "300"
  },
  {
    name: "Elom",
    title: "O Juiz de Zebulom",
    icon: MapPin,
    stats: [
      { label: "Paz", value: "10 anos" }
    ],
    description: "Julgou a Israel durante uma década e foi sepultado em Aijalom, na terra de Zebulom.",
    delay: "100"
  },
  {
    name: "Abdom",
    title: "O Líder Próspero",
    icon: Star,
    stats: [
      { label: "Paz", value: "8 anos" }
    ],
    description: "Teve quarenta filhos e trinta netos, simbolizando uma liderança de prestígio e influência em Piratom.",
    delay: "200"
  },
  {
    name: "Sansão",
    title: "O Nazireu Fortíssimo",
    icon: Zap,
    stats: [
      { label: "Opressor", value: "Filisteus" },
      { label: "Paz (Juizado)", value: "20 anos" }
    ],
    description: "Consagrado desde o ventre, realizou feitos heroicos individuais contra os filisteus através de sua força sobrenatural.",
    delay: "300"
  }
];

const LiberatorsGallery = () => {
  return (
    <section id="libertadores" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Galeria dos Juízes Libertadores</h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Deus usou pessoas comuns, estrategistas improváveis e heróis humildes para executar a libertação de Israel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <div key={index} className={`card animate-fade-in delay-${judge.delay} border-t-4 border-t-primary`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-serif font-bold text-text-primary">{judge.name}</h3>
                <div className="bg-primary-bg p-3 rounded-full shadow-sm">
                  <judge.icon size={28} className="text-primary" />
                </div>
              </div>
              <h4 className="text-primary font-semibold text-lg mb-4">{judge.title}</h4>
              <ul className="space-y-3 mb-6 text-text-secondary">
                {judge.stats.map((stat, sIndex) => (
                  <li key={sIndex} className="flex gap-2">
                    <strong className="text-text-primary">{stat.label}:</strong> {stat.value}
                  </li>
                ))}
              </ul>
              <p className="text-text-muted leading-relaxed">
                {judge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiberatorsGallery;
