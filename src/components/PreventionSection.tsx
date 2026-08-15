import React from 'react';

export const PreventionSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-teal-950/60 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug mb-6">
            LA PREVENCIÓN EMPIEZA ANTES DE QUE EL EFECTO INTERRUMPA TU DÍA
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed">
            <p>
              Prevenir no significa adivinar ni prometer que nada ocurrirá. Significa conocer qué observar, registrar cómo responde tu cuerpo y poner en marcha alimentación, proteína y ejercitación adecuadas para esta etapa.
            </p>
            <p>
              LUMEA conecta los cinco pilares para que puedas anticiparte cuando sea posible. Si ya aparece un efecto, encuentras una sección específica para registrar su evolución, entender qué preguntas llevar y saber cuándo necesitas pedir ayuda profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
