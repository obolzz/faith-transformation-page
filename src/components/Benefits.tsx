
import React from 'react';
import { Book, Star, Gift, Clock, Heart, Shield, Coins, Users } from 'lucide-react';
import BuyButton from './BuyButton';

const Benefits = () => {
  const benefits = [
    {
      icon: <Star className="benefit-icon" />,
      title: "Revelação Personalizada",
      description: "Uma mensagem divina especialmente para você, criada para iluminar sua jornada espiritual e trazer paz ao seu coração."
    },
    {
      icon: <Book className="benefit-icon" />,
      title: "Guia Espiritual Completo",
      description: "Orientações práticas para aplicar a revelação no seu dia a dia e transformar sua vida por completo."
    },
    {
      icon: <Heart className="benefit-icon" />,
      title: "Meditações Guiadas",
      description: "Reflexões poderosas para aprofundar sua conexão com Deus e fortalecer sua espiritualidade."
    },
    {
      icon: <Users className="benefit-icon" />,
      title: "Orações Sagradas",
      description: "Orações para abrir canais de bênçãos e fortalecer sua fé."
    },
    {
      icon: <Clock className="benefit-icon" />,
      title: "Rituais de Purificação",
      description: "Práticas para eliminar energias negativas e fazer espaço para a abundância."
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: "Proteções Espirituais",
      description: "Escudos energéticos para proteger você e sua família contra o mal."
    },
    {
      icon: <Coins className="benefit-icon" />,
      title: "Orientações de Prosperidade",
      description: "Sabedoria divina para desbloquear a abundância financeira e atrair bênçãos materiais."
    },
    {
      icon: <Gift className="benefit-icon" />,
      title: "Conexão com Anjos Guardiões",
      description: "Fortaleça sua ligação com seus guias espirituais e receba proteção celestial."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
          O que você vai encontrar ao adquirir o Devocional de Cristo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="spiritual-box flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 text-spiritual">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
