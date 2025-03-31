import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Mensagem enviada com sucesso",
        description: "Entraremos em contato em até 24 horas.",
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
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "WhatsApp",
      content: "(+244) 123 456 789",
    },
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      content: "contato@digitalpro.co.ao",
    },
    {
      icon: "fas fa-clock",
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 08:00 às 18:00",
    },
  ];

  const socialLinks = [
    { icon: "fab fa-instagram", url: "https://www.instagram.com", bg: "#E1306C", label: "Instagram" },
    { icon: "fab fa-facebook-f", url: "https://www.facebook.com", bg: "#1877F2", label: "Facebook" },
    { icon: "fab fa-tiktok", url: "https://www.tiktok.com", bg: "#000000", label: "TikTok" },
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
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
                    style={{ backgroundColor: link.bg }}
                    aria-label={link.label}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </a>
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
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-button text-white font-medium py-3 px-6 rounded-lg transition hover:opacity-90 disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
