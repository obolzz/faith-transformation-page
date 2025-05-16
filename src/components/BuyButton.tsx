
import React from 'react';
import { ArrowDown, ExternalLink } from 'lucide-react';

const BuyButton = ({ scrollToId = "checkout" }: { scrollToId?: string }) => {
  const handleClick = () => {
    if (scrollToId) {
      // Scroll to element if scrollToId is provided
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Redirect to Cakto payment page
    window.open("https://pay.cakto.com.br/nmr3rpd_296397", "_blank");
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 animate-pulse-gentle flex items-center justify-center mx-auto"
    >
      <span className="mr-2">Clique para garantir sua transformação agora</span>
      {scrollToId ? (
        <ArrowDown className="w-5 h-5" />
      ) : (
        <ExternalLink className="w-5 h-5" />
      )}
    </button>
  );
};

export default BuyButton;
