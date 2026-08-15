import React from 'react';
import { ArrowRight, Lock, ShieldCheck, HeartPulse } from 'lucide-react';

interface ClosingCtaSectionProps {
  onOpenCheckout: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Top intermediate CTA Button */}
        <div>
          <button
            onClick={onOpenCheckout}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-extrabold text-sm sm:text-base rounded-2xl shadow-xl transition-all cursor-pointer"
          >
            <span>PROBAR LUMEA SIN RIESGO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Closing Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
          TU TRATAMIENTO NO DEBERÍA QUITARTE TU VIDA
        </h2>

        {/* Closing Statements */}
        <div className="space-y-4 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
          <p>
            Merecías bajar de peso sin sentir que tus síntomas deciden si puedes trabajar, salir, entrenar o disfrutar tu día.
          </p>
          <p>
            Merecías una forma de cuidar tu masa muscular, tu alimentación y tu bienestar mientras avanzas.
          </p>
          <p className="text-emerald-400 font-extrabold text-lg sm:text-2xl pt-2">
            Hoy puedes dejar de adivinar qué hacer y activar el Sistema LUMEA 5P.
          </p>
        </div>

        {/* Final CTA Button */}
        <div className="pt-4 max-w-md mx-auto">
          <button
            onClick={onOpenCheckout}
            className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-lg sm:text-xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all duration-300 cursor-pointer overflow-hidden border border-emerald-200/50"
          >
            <span className="relative z-10 flex items-center gap-2.5 tracking-wide uppercase">
              EMPEZAR A CUIDAR MI TRATAMIENTO
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>

          <p className="text-xs text-slate-400 mt-3 font-semibold flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> Pago seguro de $8 USD por Hotmart • Garantía de 7 días
          </p>


        </div>

        {/* Copyright & Disclaimer footer */}
        <div className="pt-12 border-t border-slate-800 text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} LUMEA Sistema 5P. Todos los derechos reservados.</p>
          <p className="max-w-xl mx-auto">
            Este sitio web no está afiliado a Facebook, Meta ni a marcas farmacológicas. LUMEA es una herramienta de seguimiento y educación que no reemplaza el consejo de un profesional de la salud.
          </p>
        </div>

      </div>
    </section>
  );
};
