import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER, EMAIL_CONTACT, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactForm() {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formatando a mensagem para o WhatsApp
      const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
      
      const serviceMap: Record<string, string> = {
        "social-basic": "Social Media - Pacote Básico",
        "social-intermediate": "Social Media - Pacote Intermediário",
        "social-advanced": "Social Media - Pacote Avançado",
        "web-landing": "Website - Landing Page",
        "web-professional": "Website - Site Profissional",
        "web-ecommerce": "Website - E-commerce",
        "custom": "Plano Personalizado"
      };
      
      const serviceName = formData.service ? serviceMap[formData.service] || formData.service : "Não especificado";
      
      const message = encodeURIComponent(
        `*Olá, acabei de visitar o site da GENESIS*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*Serviço de interesse:* ${serviceName}\n\n` +
        `*Mensagem:*\n${formData.message || "Gostaria de obter mais informações sobre os serviços."}`
      );
      
      // Abre o WhatsApp em uma nova aba
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      
      toast({
        title: "Redirecionando para o WhatsApp",
        description: "Continue a conversa diretamente pelo WhatsApp.",
        variant: "default",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Erro ao processar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error("Error processing form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      content: WHATSAPP_NUMBER,
    },
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      content: EMAIL_CONTACT,
    },
    {
      icon: "fas fa-clock",
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 08:00 às 18:00",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      content: "Centralidade do Sequele, Bloco 8, predio 43, Entrada A, Apartamento 002, Icole & Bengo, Angola",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-instagram", url: SOCIAL_LINKS.instagram, bg: "#E1306C", label: "Instagram" },
    { icon: "fab fa-facebook-f", url: SOCIAL_LINKS.facebook, bg: "#1877F2", label: "Facebook" },
    { icon: "fab fa-tiktok", url: SOCIAL_LINKS.tiktok, bg: "#000000", label: "TikTok" },
  ];

  return (
    <section id="contato" className="py-20 bg-white dark:bg-dark-400 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
              CONTATO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Vamos Impulsionar Seu Negócio Digital
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Preencha o formulário ao lado para solicitar um orçamento personalizado ou esclarecer suas dúvidas. Nossa equipe entrará em contato em até 24 horas.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <i className={`${info.icon} text-primary-700 dark:text-primary-300`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: link.bg }}
                    aria-label={link.label}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Seu e-mail"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="(+244) 000 000 000"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="social-basic">Social Media - Pacote Básico</option>
                  <option value="social-intermediate">Social Media - Pacote Intermediário</option>
                  <option value="social-advanced">Social Media - Pacote Avançado</option>
                  <option value="web-landing">Website - Landing Page</option>
                  <option value="web-professional">Website - Site Profissional</option>
                  <option value="web-ecommerce">Website - E-commerce</option>
                  <option value="custom">Plano Personalizado</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-100 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Compartilhe mais detalhes sobre seu projeto..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-button text-white font-medium py-3 px-6 rounded-lg micro-button disabled:opacity-70"
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? "Processando..." : "Contatar via WhatsApp"}
                {!isSubmitting && <i className="fab fa-whatsapp ml-2"></i>}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
