import React, { useState } from 'react';
import { IS_THIS_FOR_ME_ITEMS } from '../data';
import { HelpCircle, Check, ArrowDown, Sparkles, CheckSquare, Square } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true
  });

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const countYes = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            ¿ESTO ES PARA MÍ?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Haz clic en las situaciones con las que te identificas:
          </p>
        </div>

        {/* Interactive List */}
        <div className="space-y-3.5 mb-8">
          {IS_THIS_FOR_ME_ITEMS.map((text, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div 
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                  isChecked 
                    ? 'bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-950/50' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-80'
                }`}
              >
                <button 
                  type="button" 
                  aria-label="Seleccionar opción"
                  className={`mt-0.5 p-1 rounded-lg shrink-0 transition-colors ${
                    isChecked ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {isChecked ? <Check className="w-5 h-5 font-black" /> : <Square className="w-5 h-5" />}
                </button>
                <p className={`text-sm sm:text-base font-medium leading-relaxed ${
                  isChecked ? 'text-white' : 'text-slate-300'
                }`}>
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Conclusion Box - Compact Size */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 rounded-xl p-3.5 sm:p-4 text-center shadow-xl max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Tu Resultado: {countYes} de {IS_THIS_FOR_ME_ITEMS.length} seleccionados
            </span>
          </div>

          <p className="text-sm sm:text-base font-bold text-white mb-1">
            {countYes >= 3 ? (
              <span className="text-emerald-300 font-extrabold flex items-center justify-center gap-1.5 leading-snug">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 inline" />
                Si respondiste que sí a 3 o más, sigue leyendo. ¡LUMEA es la solución diseñada para ti!
              </span>
            ) : (
              <span>Si respondiste que sí a 3 o más, sigue leyendo.</span>
            )}
          </p>

          <div className="flex justify-center mt-1.5">
            <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
