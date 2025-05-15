
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import SpecialOffer from '@/components/SpecialOffer';
import Bonuses from '@/components/Bonuses';
import UrgencyTimer from '@/components/UrgencyTimer';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "Bem-vindo(a)!",
        description: "Esta oferta é por tempo limitado. Não perca esta oportunidade divina!",
        duration: 6000,
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <UrgencyTimer />
      <Header />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <SpecialOffer />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
