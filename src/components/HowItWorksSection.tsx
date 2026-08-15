import React from 'react';
import { Layers, CheckCircle, Shield, ArrowRight, Notebook, Zap, Stethoscope } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenCheckout?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* SECTION 1: COMO FUNCIONA EL SISTEMA LUMEA 5P */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Cómo Funciona el Sistema LUMEA 5P
          </h2>
          <p className="text-lg sm:text-xl font-bold text-emerald-400 max-w-2xl mx-auto">
            Cinco pilares conectados para prevenir efectos y responder mejor cuando aparecen
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left space-y-4 mt-6 shadow-xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              El Sistema LUMEA 5P une seguimiento, nutrición, información, efectos secundarios y ejercitación en un mismo recorrido. Cada pilar cumple una función: prevenir tropiezos cuando todavía puedes anticiparte y orientarte cuando ya aparece una dificultad.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Tú registras cómo responde tu cuerpo. LUMEA organiza esa información, conecta tus registros con el pilar adecuado y te muestra qué observar, qué revisar y cuándo pedir ayuda profesional.
            </p>
          </div>
        </div>

        {/* SECTION 2: (PASO 01, PASO 02, PASO 03) */}
        <div className="pt-6 border-t border-slate-800">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-8">
            
            {/* Step 1 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30">
                    PASO 01
                  </span>
                  <Notebook className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  REGISTRA TU RESPUESTA
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Anotas aplicaciones, dosis indicadas, síntomas, estado de ánimo, alimentación, metas, proteína, agua, ejercitación y progreso.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                Construye tu historial <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-teal-400 bg-teal-500/10 px-3 py-1 rounded-xl border border-teal-500/30">
                    PASO 02
                  </span>
                  <Zap className="w-7 h-7 text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  ACTIVA LA PREVENCIÓN
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  LUMEA conecta tus registros con nutrición, proteína, ejercitación e información para ayudarte a prevenir tropiezos antes de que interrumpan tu día.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-teal-400 font-semibold flex items-center gap-1">
                Conexión automática <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/30">
                    PASO 03
                  </span>
                  <Stethoscope className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  SABE QUÉ HACER Y CUÁNDO PEDIR AYUDA
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Si aparece un efecto, consultas la sección correspondiente para saber qué observar y qué hacer de forma responsable, registras su evolución y preparas una pregunta para tu profesional.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-cyan-400 font-semibold flex items-center gap-1">
                Preparado para consulta <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Small CTA Button at the end of the 3 steps */}
          <div className="text-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>EMPEZAR AHORA CON EL SISTEMA LUMEA 5P — $8 USD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
