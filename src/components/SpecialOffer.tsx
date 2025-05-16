
import React from 'react';
import BuyButton from './BuyButton';
import { Shield } from 'lucide-react';

const SpecialOffer = () => {
  return (
    <section id="checkout" className="py-12 px-4 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-red-600">
          Oferta Especial
        </h2>
        
        <div className="spiritual-box text-center relative overflow-hidden border-2 border-red-500 shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rotate-45 z-10"></div>
          <div className="absolute top-2 right-2 text-white z-20 font-bold transform rotate-12">
            <span className="text-sm">OFERTA</span>
            <br />
            <span className="text-lg">LIMITADA</span>
          </div>
          
          <div className="mb-6 relative z-0">
            <p className="text-lg text-gray-600 mb-2">Preço normal</p>
            <p className="text-2xl line-through text-gray-500">R$97,00</p>
          </div>
          
          <div className="mb-8 bg-red-50 py-4 rounded-lg border-2 border-dashed border-red-400 mx-auto max-w-md">
            <p className="text-xl text-gray-700 mb-2">Por apenas</p>
            <p className="text-6xl font-bold text-red-600 mb-1 animate-pulse-gentle">R$19,90</p>
            <p className="text-lg">ou 12x de R$2,08</p>
          </div>
          
          <div className="flex items-center justify-center mb-8 p-4 bg-gray-50 rounded-lg max-w-xl mx-auto">
            <Shield className="w-8 h-8 mr-3 text-red-600" />
            <div className="text-left">
              <p className="font-bold text-gray-800">Sua transformação garantida ou seu dinheiro de volta.</p>
              <p className="text-gray-700">Se não ficar satisfeito, devolvemos seu investimento. Sem perguntas.</p>
              <p className="mt-2 italic text-gray-700">Apenas a paz que você busca. Ele já te chamou... agora é a sua vez de responder com fé.</p>
            </div>
          </div>
          
          <div className="w-full py-4">
            <BuyButton scrollToId={undefined} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
