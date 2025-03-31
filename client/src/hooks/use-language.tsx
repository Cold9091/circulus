import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the Language type
export type Language = "pt" | "en";

// Define the shape of our context
interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with undefined as default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.social": "Social Media",
    "nav.websites": "Websites",
    "nav.portfolio": "Portfólio",
    "nav.contact": "Contato",
    
    // Hero Section
    "hero.subtitle": "CONSULTORIA DE MÍDIA SOCIAL E DESENVOLVIMENTO WEB",
    "hero.title": "Transforme sua Presença Digital com Soluções Personalizadas",
    "hero.description": "Aumente o engajamento, conquiste mais clientes e destaque-se no mundo digital com estratégias eficazes para mídias sociais e websites profissionais.",
    "hero.cta": "Contate-nos",
    "hero.secondary": "Ver Serviços",
    
    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle": "SOLUÇÕES DIGITAIS COMPLETAS",
    "services.description": "Oferecemos uma gama completa de serviços para transformar sua presença digital e impulsionar seu negócio.",
    
    // Service Cards
    "services.social.title": "Gestão de Mídias Sociais",
    "services.social.description": "Estratégias personalizadas para aumentar seu engajamento e visibilidade nas redes sociais.",
    "services.social.features": "Planejamento de conteúdo, Criação de designs, Gerenciamento de comunidade, Relatórios detalhados",
    "services.social.cta": "Ver Pacotes",
    
    "services.web.title": "Desenvolvimento de Websites",
    "services.web.description": "Websites profissionais e responsivos que convertem visitantes em clientes.",
    "services.web.features": "Design personalizado, Otimização para SEO, Mobile-friendly, Integração com mídias sociais",
    "services.web.cta": "Ver Pacotes",
    
    "services.consulting.title": "Consultoria Digital",
    "services.consulting.description": "Análise e planejamento estratégico para maximizar sua presença online.",
    "services.consulting.features": "Análise de mercado, Estudo de concorrência, Plano estratégico, Treinamento",
    "services.consulting.cta": "Saiba Mais",
    
    "services.branding.title": "Branding e Identidade Visual",
    "services.branding.description": "Construção e fortalecimento da sua marca no ambiente digital.",
    "services.branding.features": "Criação de logo, Manual de marca, Padronização visual, Design para redes sociais",
    "services.branding.cta": "Saiba Mais",
    
    // Social Media Packages
    "social.title": "Pacotes de Gestão de Mídias Sociais",
    "social.subtitle": "ESCOLHA O PLANO IDEAL PARA SUA EMPRESA",
    "social.description": "Oferecemos pacotes completos para gestão e crescimento da sua presença nas mídias sociais.",
    
    // Package Basic
    "social.basic.title": "Pacote Básico",
    "social.basic.price": "80.000",
    "social.basic.period": "/mês",
    "social.basic.description": "Ideal para pequenas empresas que estão começando nas mídias sociais.",
    "social.basic.feature1": "8 posts por mês",
    "social.basic.feature2": "Gerenciamento de 2 redes sociais",
    "social.basic.feature3": "Relatório mensal de desempenho",
    "social.basic.feature4": "Criação de conteúdo básico",
    "social.basic.cta": "Selecionar Plano",
    
    // Package Standard
    "social.standard.title": "Pacote Padrão",
    "social.standard.price": "150.000",
    "social.standard.period": "/mês",
    "social.standard.description": "Perfeito para empresas que buscam crescimento e engajamento nas redes.",
    "social.standard.feature1": "16 posts por mês",
    "social.standard.feature2": "Gerenciamento de 3 redes sociais",
    "social.standard.feature3": "Relatórios semanais de desempenho",
    "social.standard.feature4": "Conteúdo personalizado",
    "social.standard.feature5": "1 campanha promocional por mês",
    "social.standard.feature6": "Resposta a comentários e mensagens",
    "social.standard.cta": "Selecionar Plano",
    
    // Package Premium
    "social.premium.title": "Pacote Premium",
    "social.premium.price": "250.000",
    "social.premium.period": "/mês",
    "social.premium.description": "Solução completa para empresas que desejam dominar sua presença digital.",
    "social.premium.feature1": "24 posts por mês",
    "social.premium.feature2": "Gerenciamento de 4 redes sociais",
    "social.premium.feature3": "Relatórios detalhados semanais",
    "social.premium.feature4": "Conteúdo premium personalizado",
    "social.premium.feature5": "2 campanhas promocionais por mês",
    "social.premium.feature6": "Resposta 24/7 a comentários e mensagens",
    "social.premium.feature7": "Análise de concorrência",
    "social.premium.feature8": "Estratégia de crescimento",
    "social.premium.cta": "Selecionar Plano",
    
    // Website Packages
    "website.title": "Pacotes de Desenvolvimento Web",
    "website.subtitle": "WEBSITES PROFISSIONAIS PARA SUA EMPRESA",
    "website.description": "Criamos websites modernos, responsivos e otimizados para conversão.",
    
    // Package Landing Page
    "website.landing.title": "Landing Page",
    "website.landing.price": "75.000",
    "website.landing.period": "",
    "website.landing.description": "Página única e eficiente para promover seu produto ou serviço.",
    "website.landing.feature1": "Design personalizado",
    "website.landing.feature2": "Otimização para SEO",
    "website.landing.feature3": "Responsivo para dispositivos móveis",
    "website.landing.feature4": "Formulário de contato",
    "website.landing.feature5": "Entrega em até 15 dias",
    "website.landing.cta": "Selecionar Plano",
    
    // Package Institucional
    "website.business.title": "Site Institucional",
    "website.business.price": "195.000",
    "website.business.period": "",
    "website.business.description": "Site completo para apresentar sua empresa e serviços de forma profissional.",
    "website.business.feature1": "Até 5 páginas",
    "website.business.feature2": "Design personalizado premium",
    "website.business.feature3": "Otimização completa para SEO",
    "website.business.feature4": "Responsivo para todos dispositivos",
    "website.business.feature5": "Integração com mídias sociais",
    "website.business.feature6": "Formulário de contato avançado",
    "website.business.feature7": "Entrega em até 30 dias",
    "website.business.cta": "Selecionar Plano",
    
    // Package E-commerce
    "website.ecommerce.title": "E-commerce",
    "website.ecommerce.price": "350.000",
    "website.ecommerce.period": "",
    "website.ecommerce.description": "Loja online completa para vender seus produtos ou serviços.",
    "website.ecommerce.feature1": "Loja virtual completa",
    "website.ecommerce.feature2": "Catálogo de produtos ilimitado",
    "website.ecommerce.feature3": "Gestão de estoque",
    "website.ecommerce.feature4": "Integração com gateway de pagamento",
    "website.ecommerce.feature5": "Painel administrativo completo",
    "website.ecommerce.feature6": "Otimização para SEO",
    "website.ecommerce.feature7": "Responsivo para todos dispositivos",
    "website.ecommerce.feature8": "Entrega em até 45 dias",
    "website.ecommerce.cta": "Selecionar Plano",
    
    // Portfolio Section
    "portfolio.title": "Nosso Portfólio",
    "portfolio.subtitle": "CASOS DE SUCESSO",
    "portfolio.description": "Conheça alguns dos projetos que desenvolvemos para nossos clientes.",
    "portfolio.all": "Todos",
    "portfolio.web": "Websites",
    "portfolio.social": "Mídias Sociais",
    "portfolio.viewProject": "Ver Projeto",
    
    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle": "VAMOS TRABALHAR JUNTOS",
    "contact.description": "Preencha o formulário abaixo para iniciar uma conversa sobre seu projeto.",
    "contact.form.name": "Nome Completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.service": "Serviço de Interesse",
    "contact.form.service.placeholder": "Selecione um serviço",
    "contact.form.service.social": "Gestão de Mídias Sociais",
    "contact.form.service.web": "Desenvolvimento de Website",
    "contact.form.service.consulting": "Consultoria Digital",
    "contact.form.service.branding": "Branding e Identidade Visual",
    "contact.form.message": "Sua Mensagem",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.whatsapp": "Conversar no WhatsApp",
    "contact.info.title": "Informações de Contato",
    "contact.info.address": "Luanda, Angola",
    "contact.info.email": "ravicarlos.ao@gmail.com",
    "contact.info.phone": "+244 931 475 544",
    "contact.info.hours": "Segunda - Sexta: 8h às 18h",
    "contact.info.social": "Nossas Redes Sociais",
    
    // Testimonials
    "testimonials.title": "O Que Nossos Clientes Dizem",
    "testimonials.subtitle": "DEPOIMENTOS",
    
    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.company": "CIRCULUS DIGITAL & PROJEFIS",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.social": "Social Media",
    "nav.websites": "Websites",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "SOCIAL MEDIA CONSULTING AND WEB DEVELOPMENT",
    "hero.title": "Transform Your Digital Presence with Custom Solutions",
    "hero.description": "Increase engagement, attract more customers, and stand out in the digital world with effective strategies for social media and professional websites.",
    "hero.cta": "Contact Us",
    "hero.secondary": "View Services",
    
    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "COMPLETE DIGITAL SOLUTIONS",
    "services.description": "We offer a complete range of services to transform your digital presence and boost your business.",
    
    // Service Cards
    "services.social.title": "Social Media Management",
    "services.social.description": "Customized strategies to increase your engagement and visibility on social networks.",
    "services.social.features": "Content planning, Design creation, Community management, Detailed reports",
    "services.social.cta": "View Packages",
    
    "services.web.title": "Website Development",
    "services.web.description": "Professional and responsive websites that convert visitors into customers.",
    "services.web.features": "Custom design, SEO optimization, Mobile-friendly, Social media integration",
    "services.web.cta": "View Packages",
    
    "services.consulting.title": "Digital Consulting",
    "services.consulting.description": "Analysis and strategic planning to maximize your online presence.",
    "services.consulting.features": "Market analysis, Competition study, Strategic plan, Training",
    "services.consulting.cta": "Learn More",
    
    "services.branding.title": "Branding and Visual Identity",
    "services.branding.description": "Building and strengthening your brand in the digital environment.",
    "services.branding.features": "Logo creation, Brand manual, Visual standardization, Social media design",
    "services.branding.cta": "Learn More",
    
    // Social Media Packages
    "social.title": "Social Media Management Packages",
    "social.subtitle": "CHOOSE THE IDEAL PLAN FOR YOUR COMPANY",
    "social.description": "We offer complete packages for managing and growing your social media presence.",
    
    // Package Basic
    "social.basic.title": "Basic Package",
    "social.basic.price": "80,000",
    "social.basic.period": "/month",
    "social.basic.description": "Ideal for small businesses starting on social media.",
    "social.basic.feature1": "8 posts per month",
    "social.basic.feature2": "Management of 2 social networks",
    "social.basic.feature3": "Monthly performance report",
    "social.basic.feature4": "Basic content creation",
    "social.basic.cta": "Select Plan",
    
    // Package Standard
    "social.standard.title": "Standard Package",
    "social.standard.price": "150,000",
    "social.standard.period": "/month",
    "social.standard.description": "Perfect for businesses seeking growth and engagement on social networks.",
    "social.standard.feature1": "16 posts per month",
    "social.standard.feature2": "Management of 3 social networks",
    "social.standard.feature3": "Weekly performance reports",
    "social.standard.feature4": "Customized content",
    "social.standard.feature5": "1 promotional campaign per month",
    "social.standard.feature6": "Response to comments and messages",
    "social.standard.cta": "Select Plan",
    
    // Package Premium
    "social.premium.title": "Premium Package",
    "social.premium.price": "250,000",
    "social.premium.period": "/month",
    "social.premium.description": "Complete solution for companies that want to dominate their digital presence.",
    "social.premium.feature1": "24 posts per month",
    "social.premium.feature2": "Management of 4 social networks",
    "social.premium.feature3": "Detailed weekly reports",
    "social.premium.feature4": "Premium customized content",
    "social.premium.feature5": "2 promotional campaigns per month",
    "social.premium.feature6": "24/7 response to comments and messages",
    "social.premium.feature7": "Competition analysis",
    "social.premium.feature8": "Growth strategy",
    "social.premium.cta": "Select Plan",
    
    // Website Packages
    "website.title": "Web Development Packages",
    "website.subtitle": "PROFESSIONAL WEBSITES FOR YOUR COMPANY",
    "website.description": "We create modern, responsive websites optimized for conversion.",
    
    // Package Landing Page
    "website.landing.title": "Landing Page",
    "website.landing.price": "75,000",
    "website.landing.period": "",
    "website.landing.description": "Efficient single page to promote your product or service.",
    "website.landing.feature1": "Custom design",
    "website.landing.feature2": "SEO optimization",
    "website.landing.feature3": "Mobile responsive",
    "website.landing.feature4": "Contact form",
    "website.landing.feature5": "Delivery within 15 days",
    "website.landing.cta": "Select Plan",
    
    // Package Institucional
    "website.business.title": "Business Website",
    "website.business.price": "195,000",
    "website.business.period": "",
    "website.business.description": "Complete website to present your company and services professionally.",
    "website.business.feature1": "Up to 5 pages",
    "website.business.feature2": "Premium custom design",
    "website.business.feature3": "Complete SEO optimization",
    "website.business.feature4": "Responsive for all devices",
    "website.business.feature5": "Social media integration",
    "website.business.feature6": "Advanced contact form",
    "website.business.feature7": "Delivery within 30 days",
    "website.business.cta": "Select Plan",
    
    // Package E-commerce
    "website.ecommerce.title": "E-commerce",
    "website.ecommerce.price": "350,000",
    "website.ecommerce.period": "",
    "website.ecommerce.description": "Complete online store to sell your products or services.",
    "website.ecommerce.feature1": "Complete virtual store",
    "website.ecommerce.feature2": "Unlimited product catalog",
    "website.ecommerce.feature3": "Inventory management",
    "website.ecommerce.feature4": "Payment gateway integration",
    "website.ecommerce.feature5": "Complete admin panel",
    "website.ecommerce.feature6": "SEO optimization",
    "website.ecommerce.feature7": "Responsive for all devices",
    "website.ecommerce.feature8": "Delivery within 45 days",
    "website.ecommerce.cta": "Select Plan",
    
    // Portfolio Section
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "SUCCESS CASES",
    "portfolio.description": "Learn about some of the projects we've developed for our clients.",
    "portfolio.all": "All",
    "portfolio.web": "Websites",
    "portfolio.social": "Social Media",
    "portfolio.viewProject": "View Project",
    
    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "LET'S WORK TOGETHER",
    "contact.description": "Fill out the form below to start a conversation about your project.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.service": "Service of Interest",
    "contact.form.service.placeholder": "Select a service",
    "contact.form.service.social": "Social Media Management",
    "contact.form.service.web": "Website Development",
    "contact.form.service.consulting": "Digital Consulting",
    "contact.form.service.branding": "Branding and Visual Identity",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.whatsapp": "Chat on WhatsApp",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Luanda, Angola",
    "contact.info.email": "ravicarlos.ao@gmail.com",
    "contact.info.phone": "+244 931 475 544",
    "contact.info.hours": "Monday - Friday: 8am to 6pm",
    "contact.info.social": "Our Social Networks",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "TESTIMONIALS",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.company": "CIRCULUS DIGITAL & PROJEFIS",
  }
};

// Create the LanguageProvider component
export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  // Initialize the language state, preferring localStorage value, defaulting to 'pt'
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem("language");
      return (savedLanguage === "pt" || savedLanguage === "en") ? (savedLanguage as Language) : "pt";
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      return "pt"; // Default to Portuguese if localStorage is not available
    }
  });

  // Update localStorage when language changes
  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch (e) {
      console.error("Error saving language to localStorage:", e);
    }
  }, [language]);

  // Function to change the language
  const changeLanguage = (lang: Language): void => {
    setLanguage(lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) {
      return key;
    }
    return translations[language][key] || key;
  };

  // Provide the language context to child components
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}