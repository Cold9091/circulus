import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

type TranslationKeys = 
  | "nav.home" 
  | "nav.services" 
  | "nav.social" 
  | "nav.websites" 
  | "nav.contact"
  | "hero.title.1"
  | "hero.title.2"
  | "hero.description"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.stats.clients"
  | "hero.stats.projects"
  | "hero.stats.engagement"
  | "hero.stats.satisfaction"
  | "hero.since";

type Translations = {
  [K in Language]: {
    [T in TranslationKeys]: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const translations: Translations = {
  pt: {
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.social": "Social Media",
    "nav.websites": "Websites",
    "nav.contact": "Contato",
    "hero.title.1": "Transforme sua presença digital com",
    "hero.title.2": "soluções inovadoras",
    "hero.description": "Somos especialistas em criar experiências digitais únicas que impulsionam o crescimento do seu negócio.",
    "hero.cta.primary": "Comece agora",
    "hero.cta.secondary": "Saiba mais",
    "hero.stats.clients": "Clientes",
    "hero.stats.projects": "Projetos",
    "hero.stats.engagement": "Engajamento",
    "hero.stats.satisfaction": "Satisfação",
    "hero.since": "Desde 2024"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.social": "Social Media",
    "nav.websites": "Websites",
    "nav.contact": "Contact",
    "hero.title.1": "Transform your digital presence with",
    "hero.title.2": "innovative solutions",
    "hero.description": "We are experts in creating unique digital experiences that drive your business growth.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Learn More",
    "hero.stats.clients": "Clients",
    "hero.stats.projects": "Projects",
    "hero.stats.engagement": "Engagement",
    "hero.stats.satisfaction": "Satisfaction",
    "hero.since": "Since 2024"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: TranslationKeys): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}