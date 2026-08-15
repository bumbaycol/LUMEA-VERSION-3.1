import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ArrowRight } from 'lucide-react';

const TESTIMONIAL_VIDEOS = [
  {
    id: 1,
    name: 'Ximenna',
    title: 'Caso de Éxito #1: Ximenna',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6cc977cf81b06f05feadd6.mp4',
  },
  {
    id: 2,
    name: 'Luis',
    title: 'Caso de Éxito #2: Luis',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6cc977188345b27ebff03a.mp4',
  },
  {
    id: 3,
    name: 'Ruth',
    title: 'Caso de Éxito #3: Ruth',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6ccf7f951bf50880b24c08.mp4',
  },
];

interface TestimonialsSectionProps {
  onOpenCheckout?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            LO QUE ESTÁN DICIENDO
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-lg mx-auto font-medium">
            Testimonios reales en video de mujeres llevando su tratamiento GLP-1 con el apoyo del Sistema LUMEA 5P.
          </p>
        </div>

        {/* Testimonials Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TESTIMONIAL_VIDEOS.map((t) => (
            <div 
              key={t.id}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 flex flex-col justify-between shadow-2xl relative group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
                </span>
              </div>

              {/* Video Player */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-[9/16] shadow-inner">
                <video
                  src={t.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Author / Title Footer */}
              <div className="pt-3.5 text-center">
                <h3 className="text-base font-black text-white uppercase tracking-tight">
                  {t.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5 uppercase tracking-wide">
                  Testimonio Real • Sistema LUMEA 5P
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small CTA Button at the end of section */}
        <div className="text-center">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>ÚNETE AL SISTEMA LUMEA 5P POR SOLO $8 USD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
