import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, CreditCard, Sparkles, Mail, User, Zap } from 'lucide-react';
import { GOLD_SEAL_BASE64 } from '../assets/goldSealBase64';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const guaranteeBadgeImg = GOLD_SEAL_BASE64;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'hotmart'>('card');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try { (window as any).fbq('track', 'InitiateCheckout'); } catch (err) {}
    }
    window.location.href = "https://pay.hotmart.com/Y106929234R?checkoutMode=10";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-extrabold uppercase text-slate-300 tracking-wider">
              HOTMART • CHECKOUT SEGURO
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">
              ¡Acceso Activado Con Éxito!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hemos enviado las credenciales de ingreso para <strong className="text-white">{email}</strong>.
            </p>
            <div className="p-4 bg-slate-950 rounded-2xl border border-emerald-500/30 text-left text-xs space-y-2">
              <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Pasos para iniciar tu tratamiento:
              </p>
              <p className="text-slate-300">1. Revisa tu bandeja de entrada (y carpeta de Spam/Promociones).</p>
              <p className="text-slate-300">2. Haz clic en el enlace o ingresa directo a <strong className="text-white">lumeaapp.memberapp.pro</strong>.</p>
              <p className="text-slate-300">3. Guarda la web app en la pantalla de inicio de tu celular.</p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer uppercase text-sm"
            >
              Entendido, Ir A La App
            </button>
          </div>
        ) : (
          /* CHECKOUT FORM */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Offer Summary Box */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  LUMEA 5P - PASE COMPLETO
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  Sistema LUMEA 5P + 4 Bonos
                </h4>
                <p className="text-xs text-slate-400">Pago único • Sin suscripción mensual</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through">$49 USD</span>
                <p className="text-2xl font-black text-emerald-400">$8 <span className="text-xs text-white">USD</span></p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre y apellido"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Correo Electrónico (Donde recibirás la app)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Payment Methods selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Método de Pago Seguro
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card' 
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Tarjeta
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'paypal' 
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    PayPal
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('hotmart')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'hotmart' 
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Hotmart Pay
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/30 hover:from-emerald-300 hover:to-teal-200 transition-all uppercase tracking-wide text-base cursor-pointer mt-2"
              >
                PAGAR $8 USD Y ACTIVAR ACCESO →
              </button>
            </form>

            {/* Security footer inside modal */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Cifrado 256-bit SSL</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Garantía Hotmart 7 días</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
