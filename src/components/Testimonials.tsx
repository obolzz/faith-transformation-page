
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      testimonial: "Nunca imaginei que uma revelação poderia mudar tanto a minha vida. Encontrei paz, direção e propósito depois de anos de angústia. Agradeço a Deus por ter me guiado até aqui."
    },
    {
      name: "João Oliveira",
      location: "Rio de Janeiro, RJ",
      testimonial: "Estava perdido, sem esperança. Esta revelação chegou como uma luz no fim do túnel. Minha família notou a diferença em apenas 3 dias. Sinto que renasci espiritualmente."
    },
    {
      name: "Ana Beatriz",
      location: "Salvador, BA",
      testimonial: "Estava cheia de dúvidas e medos sobre meu futuro. Após receber a Revelação Divina, tudo ficou mais claro. Hoje tenho certeza do meu propósito e caminho espiritual."
    }
  ];

  return (
    <section className="py-12 px-4 bg-spiritual-light/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
          Transformações Reais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="spiritual-box flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="italic mb-4 flex-grow">"{testimonial.testimonial}"</p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-foreground/70">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
