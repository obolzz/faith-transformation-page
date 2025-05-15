
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para receber a Revelação Divina?",
      answer: "Você receberá o acesso aos materiais imediatamente após a confirmação do seu pagamento, através de um e-mail com todas as instruções necessárias."
    },
    {
      question: "Como sei que a revelação é realmente para mim?",
      answer: "A Revelação Divina foi projetada para tocar o coração de todos que buscam uma conexão mais profunda com Deus. Os ensinamentos são universais e podem ser aplicados à sua situação específica, trazendo clareza e paz."
    },
    {
      question: "Preciso ter conhecimento religioso prévio?",
      answer: "Não, o material foi elaborado para ser acessível a todos, independentemente do seu nível de conhecimento religioso. Todos os conceitos são explicados de forma clara e simples."
    },
    {
      question: "Posso pedir reembolso se não gostar?",
      answer: "Sim, oferecemos garantia total de satisfação. Se não estiver satisfeito, basta nos enviar uma mensagem dentro do prazo de garantia e faremos o reembolso integral do seu investimento."
    },
    {
      question: "Os bônus são realmente gratuitos?",
      answer: "Sim, todos os bônus mencionados estão incluídos sem custo adicional quando você adquire o Devocional de Cristo durante esta oferta especial por tempo limitado."
    }
  ];

  return (
    <section className="py-12 px-4 bg-spiritual-light/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
          Perguntas Frequentes
        </h2>
        
        <div className="spiritual-box">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
