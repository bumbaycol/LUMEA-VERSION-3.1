import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-xl mx-auto font-medium">
            Respuestas detalladas a las 15 consultas más comunes sobre LUMEA
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar por palabra clave (ej. Hotmart, acceso, precio, médico)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 focus:border-emerald-500 focus:outline-none text-sm font-medium shadow-sm transition-all"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl transition-all duration-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 flex justify-between items-center gap-4 cursor-pointer text-base sm:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-emerald-600 font-black text-sm w-6 text-right shrink-0">
                        {index + 1}.
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50 pl-14 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-500 font-medium">
              No se encontraron preguntas que coincidan con tu búsqueda.
            </div>
          )}
        </div>

        <div className="mt-8 text-center bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-500 font-medium">
          <Sparkles className="w-4 h-4 text-emerald-600 inline mr-1" />
          ¿Tienes alguna pregunta no listada? Puedes escribirnos directamente a nuestro soporte Hotmart tras tu compra.
        </div>

      </div>
    </section>
  );
};
