import React from 'react';
import { OFFER_STACK_ITEMS } from '../data';
import { Check, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

interface OfferStackSectionProps {
  onOpenCheckout: () => void;
}

export const OfferStackSection: React.FC = ({ onOpenCheckout }) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            RESUMEN DE TU ACCESO
          </h2>
          <p className="text-base text-slate-600 mt-2 font-medium">
            Todo lo que incluye tu pase de acceso único al Sistema LUMEA 5P
          </p>
        </div>

        {/* Stack Table Box */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          
          {/* Table Header */}
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200 text-xs font-black uppercase text-slate-500 tracking-wider">
            <span>Componente Incluido</span>
            <span>Valor Original</span>
          </div>

          {/* Stack List Items */}
          <div className="space-y-3.5">
            {OFFER_STACK_ITEMS.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 text-sm sm:text-base">
                <div className="flex items-center gap-2.5 font-bold text-slate-800">
                  <span className="p-1 rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="font-extrabold text-slate-400 line-through">
                  ${item.original} USD
                </span>
              </div>
            ))}
          </div>

          {/* Total Calculation */}
          <div className="mt-6 pt-4 border-t-2 border-slate-200 flex justify-between items-center text-base sm:text-lg">
            <span className="font-bold text-slate-700">Valor Total Real:</span>
            <span className="font-black text-rose-600 line-through text-xl sm:text-2xl">$35 USD</span>
          </div>

          {/* Savings Highlight Banner */}
          <div className="mt-6 bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-1">
              ¡OFERTA ESPECIAL HOY!
            </p>
            <p className="text-xl sm:text-2xl font-black text-slate-900">
              Hoy ahorras <span className="text-emerald-700">$27 USD</span> (77% DE DESCUENTO)
            </p>
          </div>

          {/* Today's Price Big Callout */}
          <div className="mt-6 text-center py-5 bg-slate-900 rounded-2xl border border-slate-800 text-white">
            <p className="text-xs uppercase font-black text-slate-400 tracking-widest mb-1">
              PRECIO DE HOY
            </p>
            <div className="text-4xl sm:text-6xl font-black text-white flex items-center justify-center gap-2">
              <span className="text-emerald-400">$8</span>
              <span className="text-2xl text-slate-300 font-bold">USD</span>
            </div>
            <p className="text-xs font-semibold text-slate-400 mt-2">
              Pago único mediante Hotmart. Sin mensualidad.
            </p>
          </div>

          {/* Delivery Note */}
          <p className="text-xs text-center text-slate-600 mt-4 leading-relaxed font-medium">
            El acceso llega instantáneamente a tu correo electrónico después de confirmar tu compra y también está disponible en <strong className="text-slate-900">lumeaapp.memberapp.pro</strong>.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              onClick={onOpenCheckout}
              className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-2xl shadow-xl shadow-emerald-500/20 transition-all duration-300 cursor-pointer overflow-hidden border border-emerald-300"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide uppercase">
                QUIERO ACTIVAR EL SISTEMA LUMEA 5P
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>

            <div className="flex items-center justify-center gap-4 text-slate-500 text-xs mt-4 font-semibold">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-600" /> Cifrado SSL</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Garantía 7 Días</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-teal-600" /> Acceso Inmediato</span>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
};
