import React, { useState } from 'react';
import beforeAfterBannerJpg from '../assets/images/before_after_banner.jpg';

const REMOTE_URL = "https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a7c901a858a10309bd8e85e.png";

export const BeforeAfterSlider: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(beforeAfterBannerJpg);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
      <img 
        src={imgSrc} 
        alt="LUMEA 5P - Comparativa y Pilares" 
        className="w-full h-auto block rounded-2xl"
        onError={() => {
          if (imgSrc !== REMOTE_URL) {
            setImgSrc(REMOTE_URL);
          }
        }}
      />
      
      {/* INSIGNIA DE PRECIO: Bajada a la parte inferior (bottom-[2%]), directamente sobre la jabonera/planta */}
      <div className="absolute bottom-[2%] sm:bottom-[2.5%] left-[36%] -translate-x-1/2 z-30 pointer-events-none max-w-[125px] sm:max-w-[155px]">
        <div className="bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 p-[1px] sm:p-[1.5px] rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.95)]">
          <div className="bg-slate-950/95 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 rounded-[7px] border border-amber-400/50 text-center flex flex-col items-center justify-center leading-none">
            <span className="text-[6.5px] sm:text-[8.5px] md:text-[9.5px] font-black text-amber-300 uppercase tracking-wider block whitespace-nowrap">
              PRECIO LANZAMIENTO
            </span>
            <span className="text-[8.5px] sm:text-[11px] md:text-xs font-black text-emerald-400 uppercase tracking-widest block mt-0.5 whitespace-nowrap">
              8 USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

