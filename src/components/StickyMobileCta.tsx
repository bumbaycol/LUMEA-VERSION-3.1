import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenCheckout: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-slate-950/95 border-t border-slate-800 shadow-2xl backdrop-blur-xl animate-fade-in-up">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left price info */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            OFERTA $8 USD
          </div>
          <p className="text-xs font-bold text-white leading-tight">
            Pago único • Garantía 7 días
          </p>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={onOpenCheckout}
          className="px-5 py-3 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200 transition-all uppercase tracking-wide flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <span>ACTIVAR AHORA</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
