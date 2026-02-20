export const WHATSAPP_NUMBER = "+244931475544";
export const EMAIL_CONTACT = "ravicarlos.ao@gmail.com";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ravi_gloria_carlos/",
  facebook: "https://www.facebook.com", 
  tiktok: "https://www.tiktok.com/@ravi.carlos"
};

export const PACKAGES = {
  socialMedia: [
    {
      title: "Pacote Básico",
      price: "Kz 35.000",
      period: "mês",
      description: "Ideal para profissionais e pequenos negócios iniciando nas redes sociais.",
      features: [
        { text: "12 posts por mês (imagem e texto)", available: true },
        { text: "4 stories semanais", available: true },
        { text: "Relatório de engajamento mensal", available: true },
        { text: "Sem gestão de anúncios", available: false },
      ],
      popular: false,
    },
    {
      title: "Pacote Intermediário",
      price: "Kz 50.000",
      period: "mês",
      description: "Perfeito para negócios em crescimento que buscam maior engajamento.",
      features: [
        { text: "20 posts por mês", available: true },
        { text: "6 stories semanais", available: true },
        { text: "Reels curtos (2 por mês)", available: true },
        { text: "Relatórios detalhados e estratégias", available: true },
        { text: "Suporte básico para anúncios", available: true },
      ],
      popular: true,
    },
    {
      title: "Pacote Avançado",
      price: "Kz 75.000",
      period: "mês",
      description: "Solução completa para empresas que buscam resultados expressivos.",
      features: [
        { text: "30 posts por mês", available: true },
        { text: "10 stories semanais", available: true },
        { text: "4 reels ou vídeos curtos", available: true },
        { text: "Gestão de anúncios (FB, IG, Google)", available: true },
        { text: "Suporte estratégico personalizado", available: true },
      ],
      popular: false,
    },
  ],
  websites: [
    {
      title: "Landing Page",
      price: "Kz 150.000",
      period: "projeto",
      description: "Página única e eficiente para promover seus produtos ou serviços.",
      features: [
        "Site de uma página",
        "Design responsivo e otimizado para SEO",
        "Formulário de contato",
        "Tempo de entrega: 5 dias úteis",
      ],
      popular: false,
    },
    {
      title: "Site Profissional",
      price: "Kz 210.000",
      period: "projeto",
      description: "Site institucional completo para empresas que querem se destacar.",
      features: [
        "Site institucional completo (4-6 páginas)",
        "Integração com redes sociais",
        "Blog e sistema de gerenciamento",
        "Tempo de entrega: 10-15 dias úteis",
      ],
      popular: true,
    },
    {
      title: "E-commerce",
      price: "Kz 350.000",
      period: "projeto",
      description: "Loja virtual completa para vender produtos ou serviços online.",
      features: [
        "Loja virtual completa",
        "Integração com sistemas de pagamento",
        "Gestão de estoque e pedidos",
        "Otimização para conversão",
        "Tempo de entrega: 15-20 dias úteis",
      ],
      popular: false,
    },
  ],
};
