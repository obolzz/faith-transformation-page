
import React from 'react';
import BuyButton from './BuyButton';
import { Shield } from 'lucide-react';

const SpecialOffer = () => {
  return (
    <section id="checkout" className="py-12 px-4 bg-gradient-to-b from-white to-spiritual-light/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
          Oferta Especial
        </h2>
        
        <div className="spiritual-box text-center">
          <div className="mb-6">
            <p className="text-lg text-foreground/70 mb-2">Preço normal</p>
            <p className="text-2xl line-through text-foreground/50">R$97,00</p>
          </div>
          
          <div className="mb-8">
            <p className="text-xl text-foreground/90 mb-2">Por apenas</p>
            <p className="text-5xl font-bold text-spiritual-dark mb-1">R$19,90</p>
            <p className="text-lg">ou 12x de R$2,08</p>
          </div>
          
          <div className="flex items-center justify-center mb-8 p-4 bg-muted rounded-lg">
            <Shield className="w-6 h-6 mr-3 text-spiritual" />
            <div className="text-left">
              <p className="font-bold">Sua transformação garantida ou seu dinheiro de volta.</p>
              <p>Se não ficar satisfeito, devolvemos seu investimento. Sem perguntas.</p>
              <p className="mt-2 italic">Apenas a paz que você busca. Ele já te chamou... agora é a sua vez de responder com fé.</p>
            </div>
          </div>
          
          <div className="w-full py-4">
            <BuyButton scrollToId="payment-iframe" />
          </div>
        </div>
        
        <div id="payment-iframe" className="mt-12 rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://pay.cakto.com.br/nmr3rpd_296397" 
            className="w-full h-[600px] border-none"
            title="Checkout Seguro"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
