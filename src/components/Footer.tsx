
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-spiritual-dark text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:underline">Termos de uso</a>
            <span>|</span>
            <a href="#" className="hover:underline">Política de privacidade</a>
          </div>
          <p className="text-sm text-white/80">
            © 2025 Revelação Divina. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="text-center text-xs text-white/60 mt-4">
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
          <p className="mt-2">Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. Facebook é uma marca registrada da Facebook, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
