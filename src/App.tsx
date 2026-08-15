import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ChecklistSection } from './components/ChecklistSection';
import { QuizSection } from './components/QuizSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PillarsSection } from './components/PillarsSection';
import { PreventionSection } from './components/PreventionSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferStackSection } from './components/OfferStackSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'InitiateCheckout');
      } catch (e) {
        console.error(e);
      }
    }
    window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (NO HEADER AT TOP - DIRECTLY TITLE -> SUBTITLE -> COMPARISON SLIDER -> GUARANTEE -> CTA) */}
      <HeroSection onOpenCheckout={handleOpenCheckout} />

      {/* 2. CHECKLIST SECTION */}
      <ChecklistSection onOpenCheckout={handleOpenCheckout} />

      {/* 3. ¿ESTO ES PARA MÍ? */}
      <QuizSection />

      {/* 4. BANNER IMAGEN */}
      <ProblemSection onOpenCheckout={handleOpenCheckout} />

      {/* 5. CÓMO FUNCIONA EL SISTEMA LUMEA 5P */}
      <HowItWorksSection onOpenCheckout={handleOpenCheckout} />

      {/* 6. LOS CINCO PILARES DEL SISTEMA LUMEA 5P */}
      <PillarsSection onOpenCheckout={handleOpenCheckout} />

      {/* 7. LA PREVENCIÓN EMPIEZA ANTES DE QUE EL EFECTO INTERRUMPA TU DÍA */}
      <PreventionSection />

      {/* 8. BONOS EXCLUSIVOS */}
      <BonusesSection />

      {/* 9. LO QUE ESTÁN DICIENDO (TESTIMONIOS) */}
      <TestimonialsSection onOpenCheckout={handleOpenCheckout} />

      {/* 10. RESUMEN DE TU ACCESO (STACK & OFERTA) */}
      <OfferStackSection onOpenCheckout={handleOpenCheckout} />

      {/* 11. GARANTÍA INCONDICIONAL DE 7 DÍAS */}
      <GuaranteeSection />

      {/* 12. PREGUNTAS FRECUENTES */}
      <FaqSection />

      {/* 13. CLOSING CTA SECTION */}
      <ClosingCtaSection onOpenCheckout={handleOpenCheckout} />

      {/* HOTMART CHECKOUT SIMULATION MODAL */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* STICKY MOBILE CTA BAR */}
      <StickyMobileCta onOpenCheckout={handleOpenCheckout} />

    </div>
  );
}
