import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function WebsitePackages() {
  const packages = [
    {
      title: "Landing Page",
      price: "Kz 75.000",
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
      price: "Kz 120.000",
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
      price: "Kz 170.000",
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
  ];

  const additionalServices = [
    {
      icon: "fas fa-server",
      title: "Hospedagem Segura",
      description: "Servidor rápido e confiável para seu site.",
    },
    {
      icon: "fas fa-globe",
      title: "Domínio Personalizado",
      description: "Registro de domínio profissional para sua marca.",
    },
    {
      icon: "fas fa-search",
      title: "Otimização SEO",
      description: "Melhore seu posicionamento nos buscadores.",
    },
    {
      icon: "fas fa-headset",
      title: "Suporte Técnico",
      description: "Assistência técnica especializada.",
    },
  ];

  return (
    <section id="websites" className="py-20 bg-gray-50 dark:bg-dark-300 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
            WEBSITES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Pacotes de Desenvolvimento Web
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Websites profissionais e responsivos que convertem visitantes em clientes 
            e destacam sua marca no mercado digital.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`
                bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
                ${pkg.popular ? 'transform scale-105 border-2 border-primary-400 dark:border-primary-600 relative z-10' : 'border border-gray-100 dark:border-dark-100'}
              `}
              variants={fadeInUp}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 w-full py-2 bg-primary-600 text-white text-center text-sm font-medium">
                  MAIS COMPLETO
                </div>
              )}
              <div className={`p-8 ${pkg.popular ? 'mt-6' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.description}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/projeto</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`block w-full py-3 px-6 text-center ${
                    pkg.popular
                      ? 'gradient-button text-white hover:opacity-90'
                      : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 text-gray-800 dark:text-white'
                  } font-medium rounded-lg transition`}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Outros Serviços Incluídos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <i className={`${service.icon} text-primary-500 mt-1 mr-3 text-xl`}></i>
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <a
                href="#contato"
                className="inline-block gradient-button text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition"
              >
                Solicitar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
