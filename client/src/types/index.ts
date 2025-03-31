export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  position: string;
  initials: string;
  rating: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'social';
  tags: string[];
}

export interface ServicePackage {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Array<string | { text: string; available: boolean }>;
  popular: boolean;
}
