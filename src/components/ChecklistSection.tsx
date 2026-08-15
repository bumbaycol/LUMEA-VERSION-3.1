import React from 'react';
import { CHECKLIST_ITEMS } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ChecklistSectionProps {
  onOpenCheckout?: () => void;
}

export const ChecklistSection: React.FC<ChecklistSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Lo que lograrás con la app <span className="text-emerald-600">LUMEA 5P</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {CHECKLIST_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 hover:border-emerald-400 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-200">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Small CTA Button at the end of section */}
        <div className="text-center">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>ACTIVAR ACCESO COMPLETO — $8 USD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
