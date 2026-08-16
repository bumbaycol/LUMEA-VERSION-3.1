import React, { useState } from 'react';
import { PILLARS_DATA } from '../data';
import { ClipboardCheck, Apple, BookOpenCheck, ShieldAlert, Dumbbell, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { 
  PILAR_1_IMG, 
  PILAR_2_IMG, 
  PILAR_3_IMG, 
  PILAR_4_IMG, 
  PILAR_5_IMG 
} from '../assets/pillarsBase64';

const PILLAR_IMAGES: Record<number, string> = {
  1: PILAR_1_IMG,
  2: PILAR_2_IMG,
  3: PILAR_3_IMG,
  4: PILAR_4_IMG,
  5: PILAR_5_IMG,
};

interface PillarsSectionProps {
  onOpenCheckout?: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenCheckout }) => {
  const [activePillarId, setActivePillarId] = useState<number>(1);

  const handleClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6" />;
      case 'Apple': return <Apple className="w-6 h-6" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  const activePillar = PILLARS_DATA.find(p => p.id === activePillarId) || PILLARS_DATA[0];
  const activeImage = PILLAR_IMAGES[activePillar.id] || PILAR_1_IMG;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            LOS CINCO PILARES DEL SISTEMA LUMEA 5P
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl mx-auto">
            Cada pilar está diseñado específicamente para acompañar cada fase de tu tratamiento con GLP-1 o péptidos.
          </p>
        </div>

        {/* Pillars Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-8">
          {PILLARS_DATA.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-700 font-extrabold shadow-lg shadow-emerald-600/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`p-2 rounded-xl ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-emerald-700 border border-slate-200'
                  }`}>
                    {getIcon(pillar.iconName)}
                  </span>
                  <span className={`text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white text-emerald-800' : 'bg-slate-100 text-slate-600 font-bold'
                  }`}>
                    Pilar 0{pillar.id}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm font-extrabold line-clamp-2 ${
                  isActive ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title.replace(/^\d+\.\s*/, '')}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Display Box with Image */}
        <div className="p-4 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1 sm:px-0">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
              {activePillar.tag}
            </span>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              Sistema LUMEA 5P • Pilar #{activePillar.id} de 5
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 px-1 sm:px-0">
            {activePillar.title}
          </h3>

          {/* Pillar Graphic Display */}
          <div className="w-full flex justify-center items-center mb-6">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 flex items-center justify-center">
              <img 
                key={activePillar.id}
                src={activeImage} 
                alt={`${activePillar.title} - Sistema LUMEA 5P`}
                className="w-full h-auto object-contain block"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500 font-semibold px-1 sm:px-0">
            <span>Toca los otros pilares arriba para ver la información gráfica de cada uno</span>
            <ChevronRight className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Small CTA Button at the end of section */}
        <div className="text-center">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>QUIERO ACCEDER A LOS 5 PILARES — $8 USD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
