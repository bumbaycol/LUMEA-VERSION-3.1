import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import problemBannerJpg from '../assets/images/problem_banner.jpg';

const REMOTE_URL = "https://assets.cdn.filesafe.space/OLF5frG5IpRiPXNh6LRn/media/6a7d29562b221e81399c810d.png";

interface ProblemSectionProps {
  onOpenCheckout?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenCheckout }) => {
  const [imgSrc, setImgSrc] = useState<string>(problemBannerJpg);

  const handleClick = () => {
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
    }
  };

  return (
    <section className="py-0 sm:py-10 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Full width image banner - edge to edge on mobile */}
        <div className="w-full mb-6 sm:mb-8">
          <img 
            src={imgSrc} 
            alt="El miedo de bajar de peso y dejar de vivir como antes"
            className="w-full h-auto object-cover rounded-none sm:rounded-3xl shadow-2xl block"
            onError={() => {
              if (imgSrc !== REMOTE_URL) {
                setImgSrc(REMOTE_URL);
              }
            }}
          />
        </div>

        {/* Small CTA Button */}
        <div className="text-center pb-8 sm:pb-0 px-4">
          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>QUIERO MI TRATAMIENTO CON SEGUIMIENTO — $8 USD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

