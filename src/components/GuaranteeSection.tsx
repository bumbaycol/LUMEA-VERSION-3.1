import React from 'react';
import { ShieldCheck, Award, Lock } from 'lucide-react';
import { GOLD_SEAL_BASE64 } from '../assets/goldSealBase64';

export const GuaranteeSection: React.FC = () => {
  const guaranteeBadgeImg = GOLD_SEAL_BASE64;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Guarantee Seal Image - Isolated Gold Coin */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
            <img 
              src={guaranteeBadgeImg} 
              alt="Garantía de 7 días Hotmart"
              className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(245,158,11,0.35)] relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              GARANTÍA INCONDICIONAL DE 7 DÍAS
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Prueba LUMEA desde tu celular. Si la revisas y sientes que no es para ti, solicita tu devolución dentro de los 7 días según las condiciones de Hotmart. Sin preguntas incómodas.
            </p>
            <div className="pt-2 flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-emerald-400">
              <Lock className="w-3.5 h-3.5" /> Reembolso procesado de forma automática por Hotmart
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
