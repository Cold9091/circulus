import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, cardHover, buttonTap, buttonHover } from "@/lib/animations";

export default function SocialMediaPackages() {
  const packages = [
    {
      title: "Pacote Básico",
      price: "Kz 35.000",
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
      price: "Kz 80.000",
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
  ];

  return (
    <section id="social-media" className="py-20 bg-white dark:bg-dark-400 section-fade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium">
            SOCIAL MEDIA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Pacotes de Gestão de Redes Sociais
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para aumentar sua presença nas redes sociais, 
            engajar com seu público e convertê-los em clientes fiéis.
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
                bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg micro-card
                ${pkg.popular ? 'transform scale-105 border-2 border-primary-400 dark:border-primary-600 relative z-10' : 'border border-gray-100 dark:border-dark-100'}
              `}
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 w-full py-2 bg-primary-600 text-white text-center text-sm font-medium">
                  MAIS POPULAR
                </div>
              )}
              <div className={`p-8 ${pkg.popular ? 'mt-6' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.description}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/mês</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${!feature.available ? 'opacity-50' : ''}`}>
                      {feature.available ? (
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      ) : (
                        <i className="fas fa-times text-red-500 mt-1 mr-2"></i>
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#contato"
                  className={`block w-full py-3 px-6 text-center ${
                    pkg.popular
                      ? 'gradient-button text-white hover:opacity-90'
                      : 'bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 text-gray-800 dark:text-white'
                  } font-medium rounded-lg micro-button`}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ y: -2 }}
                >
                  Escolher Plano
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Também oferecemos planos personalizados para necessidades específicas.
          </p>
          <motion.a
            href="#contato"
            className="inline-block py-3 px-8 border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 micro-button"
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          >
            Solicitar Plano Personalizado
          </motion.a>
        </div>
      </div>
    </section>
  );
}
