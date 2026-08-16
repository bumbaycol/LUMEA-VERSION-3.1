import React, { useRef, useState } from 'react';
import { Star, CheckCircle2, ArrowRight, Play, Volume2 } from 'lucide-react';
import { POSTER_XIMENNA, POSTER_LUIS, POSTER_RUTH } from '../assets/testimonialsPostersBase64';

interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  videoUrl: string;
  poster: string;
}

const TESTIMONIAL_VIDEOS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Ximenna',
    title: 'Caso de Éxito #1: Ximenna',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6cc977cf81b06f05feadd6.mp4',
    poster: POSTER_XIMENNA,
  },
  {
    id: 2,
    name: 'Luis',
    title: 'Caso de Éxito #2: Luis',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6cc977188345b27ebff03a.mp4',
    poster: POSTER_LUIS,
  },
  {
    id: 3,
    name: 'Ruth',
    title: 'Caso de Éxito #3: Ruth',
    videoUrl: 'https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a6ccf7f951bf50880b24c08.mp4',
    poster: POSTER_RUTH,
  },
];

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const VideoCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 flex flex-col justify-between shadow-2xl relative group hover:border-emerald-500/40 transition-all duration-300">
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

      {/* Video Player Container */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 aspect-[9/16] shadow-inner border border-slate-800/80">
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.poster}
          controls={isPlaying}
          playsInline
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Custom Poster & Play Overlay for Mobile & Desktop when not playing */}
        {!isPlaying && (
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-between p-4 bg-gradient-to-t from-black/85 via-black/20 to-black/40 hover:bg-black/30 transition-all group/overlay"
          >
            {/* Image Poster Fallback / Render */}
            <img 
              src={testimonial.poster} 
              alt={`Testimonio de ${testimonial.name}`}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Top Badge */}
            <div className="w-full flex justify-end">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/90 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                <Volume2 className="w-3 h-3 text-emerald-400" /> Con audio
              </span>
            </div>

            {/* Glowing Big Play Button */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-lg group-hover/overlay:scale-125 transition-transform duration-300"></div>
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.7)] group-hover/overlay:scale-110 active:scale-95 transition-all duration-200">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 text-slate-950 ml-1" />
              </div>
            </div>

            {/* Bottom prompt */}
            <div className="bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-center shadow-lg">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Toca para reproducir video
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Author / Title Footer */}
      <div className="pt-3.5 text-center">
        <h3 className="text-base font-black text-white uppercase tracking-tight">
          {testimonial.name}
        </h3>
        <p className="text-xs font-semibold text-emerald-400 mt-0.5 uppercase tracking-wide">
          Testimonio Real • Sistema LUMEA 5P
        </p>
      </div>
    </div>
  );
};

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
            <VideoCard key={t.id} testimonial={t} />
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
