
import React from 'react';
import { Gift } from 'lucide-react';
import BuyButton from './BuyButton';

const Bonuses = () => {
  const bonuses = [
    {
      title: "E-book "Sinais Divinos"",
      description: "Aprenda a reconhecer os sinais que Deus envia para sua vida diariamente."
    },
    {
      title: "Manual "Segredos de Salomão"",
      description: "Sabedoria ancestral para prosperidade e sucesso em todas as áreas da vida."
    },
    {
      title: "Bônus Surpresa",
      description: "Um presente especial que só será revelado após sua compra."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
          Bônus Exclusivos Para Quem Agir Agora
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="spiritual-box border-2 border-gold transition-all hover:shadow-2xl hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{bonus.title}</h3>
              <p className="text-center">{bonus.description}</p>
              <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                GRÁTIS
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
