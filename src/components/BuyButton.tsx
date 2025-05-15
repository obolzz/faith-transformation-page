
import React from 'react';
import { ArrowDown } from 'lucide-react';

const BuyButton = ({ scrollToId = "checkout" }: { scrollToId?: string }) => {
  const scrollToElement = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToElement}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 animate-pulse-gentle flex items-center justify-center mx-auto"
    >
      <span className="mr-2">Clique para garantir sua transformação agora</span>
      <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
    </button>
  );
};

export default BuyButton;
