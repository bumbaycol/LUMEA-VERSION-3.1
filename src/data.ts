import { PillarItem, BonusItem, Testimonial, FaqItem } from './types';

export const CHECKLIST_ITEMS = [
  "Identifica los efectos secundarios que pueden interrumpir tu día y aprende qué observar antes de que se conviertan en un problema mayor.",
  "Lleva un seguimiento de síntomas, estado de ánimo, metas y aplicaciones porque cada cuerpo responde de manera diferente.",
  "Come como necesita tu cuerpo durante un tratamiento GLP-1 o péptidos para apoyar la masa muscular y tus nutrientes diarios.",
  "Ejercítate con un plan diseñado para apoyar fuerza, piel firme, curvas y glúteos mientras bajas de peso.",
  "Encuentra respuestas claras para no hacer las cosas mal por seguir consejos contradictorios de redes.",
  "Recibe orientación para saber cuándo una señal merece pedir ayuda a tu profesional de salud."
];

export const IS_THIS_FOR_ME_ITEMS = [
  "Usas GLP-1 o péptidos y quieres prevenir efectos que te impidan trabajar, salir, entrenar o llevar una vida normal, sin que el tratamiento dirija cada parte de tu día.",
  "Ya tienes náuseas, vómitos, diarrea, estreñimiento, cansancio, caída del cabello u otro cambio que no sabes cómo manejar.",
  "Te preocupa perder masa muscular, notar la piel flácida, perder glúteos y curvas o verte demacrado mientras bajas de peso.",
  "Has sentido ansiedad, ánimo bajo, cambios en el sueño, la energía o el libido y no sabes cómo relacionarlo con tu proceso.",
  "Quieres prevenir síntomas cuando sea posible y saber qué hacer cuando aparece uno, sin dejar de llevar una vida normal por culpa de sus efectos."
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 1,
    title: "1. Registro y seguimiento",
    shortDesc: "Historial diario personalizado de tu respuesta física y emocional.",
    fullDesc: "El seguimiento es fundamental porque cada persona en tratamiento puede reaccionar de manera diferente. Lo que siente otra persona no necesariamente coincide con lo que ocurre en tu cuerpo. Registra la aplicación y la dosis indicada por tu profesional, configura recordatorios, anota síntomas físicos, estado de ánimo, metas y progreso. Así construyes un historial diario que te ayuda a entender tu respuesta y llegar mejor preparado a una consulta.",
    iconName: "ClipboardCheck",
    tag: "Fundamento Diario",
    bgGradient: "from-emerald-950/60 to-slate-900"
  },
  {
    id: 2,
    title: "2. Alimentación y nutrición especializada",
    shortDesc: "Estrategias de proteína, hidratación y nutrientes clave con poco apetito.",
    fullDesc: "Encuentra orientación alimentaria especializada para personas que usan agonistas GLP-1 o péptidos. El enfoque prioriza proteína, hidratación y nutrientes necesarios cuando tienes poco apetito o náuseas. Una alimentación adecuada puede ayudar a apoyar la masa muscular y reducir el riesgo de quedarte corto en nutrientes importantes. También busca apoyar tu energía, piel y cabello mientras bajas de peso, siempre de acuerdo con tu situación y la orientación de tu profesional.",
    iconName: "Apple",
    tag: "Nutrición GLP-1",
    bgGradient: "from-teal-950/60 to-slate-900"
  },
  {
    id: 3,
    title: "3. Información y preguntas para prevenir errores",
    shortDesc: "Respuestas verificadas mensualmente para evitar mitos de redes sociales.",
    fullDesc: "Este pilar reúne las preguntas y miedos que aparecen antes, durante y después de una aplicación. Te da respuestas para no hacer las cosas mal por seguir consejos ambiguos o contradictorios en redes. Trabaja junto con el seguimiento, la nutrición y la ejercitación para ayudarte a prevenir dificultades. Si ya tienes un efecto, la sección de efectos secundarios te orienta sobre qué observar y qué conversar con tu profesional. El contenido se revisa y actualiza mensualmente.",
    iconName: "BookOpenCheck",
    tag: "Respuestas Claras",
    bgGradient: "from-cyan-950/60 to-slate-900"
  },
  {
    id: 4,
    title: "4. Efectos secundarios físicos y psicológicos",
    shortDesc: "Guía práctica para náuseas, cansancio, cabello, piel, ánimo y libido.",
    fullDesc: "Si ya tienes un efecto, esta es la sección que te orienta sobre qué registrar, qué observar y qué conversar con tu profesional. Incluye temas como náuseas, vómitos, diarrea, estreñimiento, cansancio, caída del cabello, cambios en la piel, pérdida de masa muscular, ansiedad, ánimo bajo, sueño y libido. La información no diagnostica ni indica suspender o continuar un tratamiento. Ante síntomas intensos, persistentes o preocupantes, debes buscar atención médica.",
    iconName: "ShieldAlert",
    tag: "Orientación Rápida",
    bgGradient: "from-amber-950/60 to-slate-900"
  },
  {
    id: 5,
    title: "5. Ejercitación especializada",
    shortDesc: "Rutinas de fuerza, movilidad y glúteos para mantener tono y curvas.",
    fullDesc: "El plan de ejercitación, incluido como bono, está diseñado para apoyar la prevención de la pérdida de masa muscular mientras bajas de peso. Incluye trabajo general de fuerza, movilidad y glúteos para conservar fuerza, apoyar una piel con mejor tono y desarrollar curvas mientras avanzas. No promete una forma corporal específica ni sustituye una evaluación profesional.",
    iconName: "Dumbbell",
    tag: "Fuerza & Tono",
    bgGradient: "from-emerald-950/60 to-slate-900"
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    title: "BONO 1: EJERCITACIÓN CON PROPÓSITO",
    tagline: "Cuida tu fuerza, tu masa muscular y tus curvas",
    originalPrice: 5,
    description: "Recibe un cupón de acceso al plan de ejercitación, valor independiente de $5 USD. Incluye fuerza, movilidad y trabajo general de glúteos para apoyar el tono corporal mientras bajas de peso.",
    badge: "GRATIS HOY",
    iconName: "Dumbbell"
  },
  {
    id: 2,
    title: "BONO 2: COMUNIDAD LUMEA",
    tagline: "No tienes que buscar respuestas completamente solo",
    originalPrice: 10,
    description: "Acceso gratuito a lumeaapp.memberapp.pro, valor independiente de $10 USD. Lee experiencias y comparte dudas con otras personas en tratamiento, sin reemplazar la orientación médica.",
    badge: "GRATIS HOY",
    iconName: "Users"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    age: 38,
    quote: "Me preocupaba que los efectos secundarios me impidieran salir y trabajar. Tener un registro me ayudó a saber qué observar y qué preguntar.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250",
    rating: 5,
    treatment: "Tratamiento Semaglutida - 4 meses"
  },
  {
    id: 2,
    name: "Carolina R.",
    age: 42,
    quote: "No quería perder fuerza ni mis curvas. Empecé a prestar atención a mi proteína y a seguir el plan de ejercitación.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250",
    rating: 5,
    treatment: "Tratamiento Tirzepatida - 6 meses"
  },
  {
    id: 3,
    name: "Sofía M.",
    age: 35,
    quote: "Antes buscaba todo en redes y terminaba más asustada. Ahora reviso la información y llego con preguntas concretas.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250",
    rating: 5,
    treatment: "Tratamiento Péptidos - 3 meses"
  }
];

export const OFFER_STACK_ITEMS = [
  { name: "LUMEA APP, Sistema LUMEA 5P", original: 20 },
  { name: "Ejercitación con Propósito", original: 5 },
  { name: "Comunidad LUMEA", original: 10 }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cómo recibo LUMEA?",
    answer: "Después del pago en Hotmart recibes un enlace en tu correo. También puedes entrar desde lumeaapp.memberapp.pro.",
    category: "Acceso & Cuenta"
  },
  {
    question: "¿Es una app de celular?",
    answer: "Es una aplicación web. Puedes abrirla desde el navegador y fijarla en la pantalla de inicio de tu iPhone o Android.",
    category: "Instalación"
  },
  {
    question: "¿Tengo que pagar cada mes?",
    answer: "No. LUMEA se ofrece con un pago único de $8 USD, a diferencia de muchas apps de seguimiento que funcionan con mensualidad.",
    category: "Pagos & Precio"
  },
  {
    question: "¿Qué registra el sistema?",
    answer: "Registra aplicaciones, dosis indicadas por tu profesional, síntomas, estado de ánimo, metas, progreso y recordatorios.",
    category: "Funciones"
  },
  {
    question: "¿Por qué es importante registrar todos los días?",
    answer: "Porque cada cuerpo responde de manera diferente. El historial te ayuda a observar cambios y conversar con tu profesional con información más precisa.",
    category: "Funciones"
  },
  {
    question: "¿LUMEA me dice qué dosis usar?",
    answer: "No. Solo registra la dosis indicada por tu profesional y te recuerda la aplicación que tú programaste.",
    category: "Salud & Seguridad"
  },
  {
    question: "¿La app previene los efectos secundarios?",
    answer: "Ayuda a prevenir tropiezos mediante seguimiento, nutrición, información y ejercitación, y te orienta sobre qué observar. No puede garantizar que ningún efecto aparezca.",
    category: "Salud & Seguridad"
  },
  {
    question: "¿Qué hago si ya tengo un efecto secundario?",
    answer: "Regístralo, consulta la sección correspondiente y prepara una pregunta para tu profesional. Si es intenso, persistente o preocupante, busca atención médica.",
    category: "Salud & Seguridad"
  },
  {
    question: "¿La alimentación ayuda a cuidar la masa muscular?",
    answer: "La orientación prioriza proteína, hidratación y nutrientes que pueden apoyar tu masa muscular, energía, piel y cabello. Tus necesidades individuales deben revisarse con un profesional.",
    category: "Nutrición"
  },
  {
    question: "¿El plan de ejercitación mantiene mis curvas y glúteos?",
    answer: "Está diseñado para apoyar fuerza, masa muscular y trabajo general de glúteos. Ninguna app puede garantizar una forma corporal específica.",
    category: "Ejercitación"
  },
  {
    question: "¿Me ayuda a seguir llevando una vida normal?",
    answer: "Busca reducir la improvisación y ayudarte a responder antes cuando aparece una dificultad. No garantiza que puedas mantener todas tus actividades ni reemplaza la atención médica.",
    category: "Estilo de Vida"
  },
  {
    question: "¿Incluye efectos psicológicos?",
    answer: "Sí. Incluye temas como ansiedad, ánimo bajo, energía, sueño y libido. Si notas cambios intensos o persistentes, busca evaluación profesional.",
    category: "Salud & Seguridad"
  },
  {
    question: "¿El contenido se actualiza?",
    answer: "Los apartados informativo y de efectos secundarios se revisan y actualizan mensualmente según nuevas preguntas y aportes recibidos.",
    category: "Actualizaciones"
  },
  {
    question: "¿La comunidad incluye médicos?",
    answer: "La comunidad permite compartir experiencias entre usuarios. No incluye diagnóstico, consultas privadas ni asesoría médica.",
    category: "Comunidad"
  },
  {
    question: "¿Funciona en Colombia?",
    answer: "Sí. LUMEA está dirigida al público hispanohablante y utiliza los términos GLP-1 y péptidos presentes en conversaciones de Colombia y Latinoamérica. La seguridad y autorización de cada producto deben verificarse localmente.",
    category: "Ubicación"
  }
];
