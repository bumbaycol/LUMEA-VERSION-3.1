import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ShieldCheck, ArrowRight, Lock, CheckCircle2, Zap } from 'lucide-react';
import { GOLD_SEAL_BASE64 } from '../assets/goldSealBase64';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const guaranteeBadgeImg = GOLD_SEAL_BASE64;

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* 1. MAIN HERO TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight mb-3 sm:mb-5 max-w-3xl">
          Baja de peso teniendo el <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">control de tu cuerpo</span>
        </h1>

        {/* 2. MAIN SUBTITLE */}
        <p className="text-xs sm:text-sm md:text-base font-extrabold text-emerald-300 max-w-2xl leading-relaxed mb-6 sm:mb-8 uppercase tracking-wide bg-slate-900/80 px-4 py-2.5 rounded-xl border border-emerald-500/30">
          prevenir efectos secundarios - ejercitación para curvas y glúteos - sin miedos ni preguntas sin resolver
        </p>

        {/* 3. HERO IMAGE & COMPARISON SLIDER */}
        <div className="w-full mb-6 sm:mb-8">
          <BeforeAfterSlider />
        </div>

        {/* 4. GUARANTEE + ACCESS BADGES SIDE-BY-SIDE (REQUERIMIENTO #5: una al lado de la otra) */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 items-stretch">
            
            {/* Left Box: 100% SEGURO & GARANTÍA 7 DÍAS */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 bg-slate-900/90 p-3 sm:p-4 rounded-2xl border border-emerald-500/30 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                <img 
                  src={guaranteeBadgeImg} 
                  alt="Garantía 100% Seguro Hotmart" 
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  100% SEGURO
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Garantía de 7 días con Hotmart
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 hidden sm:block">
                  Sin preguntas ni complicaciones.
                </p>
              </div>
            </div>

            {/* Right Box: PAGO ÚNICO, ACCESO DE POR VIDA */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 bg-slate-900/90 p-3 sm:p-4 rounded-2xl border border-teal-500/30 shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/40">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-teal-400 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  SIN MENSUALIDAD
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Pago único. Conservas el acceso
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 hidden sm:block">
                  Sin mensualidades recurrentes.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 5. HERO CTA BUTTON (REQUERIMIENTO #7: ¡PRUÉBALO SIN RIESGO!... dentro del botón) */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <button
            onClick={onOpenCheckout}
            className="w-full group relative flex flex-col items-center justify-center p-4 sm:p-5 text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-2xl shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer overflow-hidden border border-emerald-200/60 active:scale-[0.99]"
          >
            {/* Main Action Line */}
            <span className="relative z-10 flex items-center gap-2 text-lg sm:text-xl font-black uppercase tracking-wider">
              COMPLETA LA COMPRA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>

            {/* Subtext Inside Button (Requerimiento #7) */}
            <span className="relative z-10 mt-1.5 text-[10px] sm:text-xs font-black text-slate-950 bg-slate-950/15 px-3 py-1 rounded-lg border border-slate-950/20 uppercase tracking-wide text-center">
              ¡PRUÉBALO SIN RIESGO! ¡GARANTÍA DE DEVOLUCIÓN DE DINERO DE 7 DÍAS!
            </span>

            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>

      </div>
    </section>
  );
};
