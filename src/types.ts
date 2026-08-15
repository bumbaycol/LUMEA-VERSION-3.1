export interface PillarItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  bgGradient: string;
}

export interface BonusItem {
  id: number;
  title: string;
  tagline: string;
  originalPrice: number;
  description: string;
  badge: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  quote: string;
  avatarUrl: string;
  rating: number;
  treatment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
