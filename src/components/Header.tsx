
import React from 'react';
import BuyButton from './BuyButton';

const Header = () => {
  return (
    <header className="relative py-8 px-4 md:py-12 bg-gradient-to-b from-spiritual-light/50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
            Deus não erra.
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-foreground/90">
            Se você está aqui, é porque Ele te chamou. O momento da transformação chegou!
          </p>
        </div>

        {/* VSL Section */}
        <div className="spiritual-box mb-8">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe 
              className="w-full h-[300px] md:h-[450px] rounded-lg shadow-md"
              src="https://www.youtube.com/embed/doq-2fKKOZY" 
              title="Revelação Divina" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="text-center mt-6">
            <BuyButton scrollToId="checkout" />
          </div>
        </div>
        
        <div className="spiritual-box text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            Você sente que está perdido, sem rumo, ou enfrentando desafios em sua vida financeira, familiar, ou espiritual? 
            Então você está no lugar certo! Deus trouxe você até aqui para dar o primeiro passo rumo à transformação total.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
