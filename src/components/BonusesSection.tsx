import React from 'react';
import { BONUSES_DATA } from '../data';
import { Gift, Dumbbell, Users, BellRing, Utensils, Sparkles } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-600" />;
      case 'Users': return <Users className="w-6 h-6 text-teal-600" />;
      case 'BellRing': return <BellRing className="w-6 h-6 text-cyan-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-600" />;
      default: return <Gift className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            BONOS EXCLUSIVOS INCLUIDOS HOY
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-xl mx-auto font-medium">
            Recibes acceso inmediato a estos 2 complementos clave al activar LUMEA hoy por solo $8 USD.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BONUSES_DATA.map((bonus) => (
            <div 
              key={bonus.id}
              className="bg-white border border-slate-200 hover:border-emerald-500 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
            >
              {/* Badge top right */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl group-hover:scale-105 transition-transform">
                  {getIcon(bonus.iconName)}
                </div>
                <div className="flex flex-col items-end">
                  <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {bonus.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">
                    Valor separado: <span className="line-through text-slate-400">${bonus.originalPrice} USD</span>
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1 tracking-tight">
                  {bonus.title}
                </h3>
                <p className="text-xs font-black text-emerald-700 uppercase tracking-wide mb-3">
                  {bonus.tagline}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Incluido 100% GRATIS con tu acceso único</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
